import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, ArrowLeft, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from "@/components/admin/DashboardLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useBlogs, Blog } from "@/hooks/useBlogs";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().optional(),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  published: z.boolean(),
  featuredImage: z.string().url().optional().or(z.literal("")),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  metaKeywords: z.string().optional(), // stored as CSV, split into array
});

type BlogFormData = z.infer<typeof blogSchema>;

const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createBlog, updateBlog, fetchBlogById, generateSlug } = useBlogs();

  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(!!id);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");

  const isEdit = !!id;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      published: false,
      featuredImage: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
    },
  });

  // Use RHF watch for published (single source of truth)
  const published = watch("published");
  const watchedTitle = watch("title");

  // Load blog if editing
  useEffect(() => {
    let mounted = true;
    if (isEdit && id) {
      const loadBlog = async () => {
        try {
          const blog = await fetchBlogById(id);
          if (!mounted) return;
          if (blog) {
            reset({
              title: blog.title,
              slug: blog.slug,
              excerpt: blog.excerpt,
              content: blog.content,
              published: !!blog.published,
              featuredImage: blog.featuredImage || "",
              metaTitle: blog.metaTitle || "",
              metaDescription: blog.metaDescription || "",
              metaKeywords: (blog.metaKeywords || []).join(", "),
            });
            setTags(blog.tags || []);
          } else {
            toast.error("Blog not found");
            navigate("/admin/blogs");
          }
        } catch {
          toast.error("Failed to load blog");
          navigate("/admin/blogs");
        } finally {
          if (mounted) setInitialLoading(false);
        }
      };
      loadBlog();
    } else {
      setInitialLoading(false);
    }
    return () => {
      mounted = false;
    };
  }, [id, isEdit, fetchBlogById, reset, navigate]);

  // Tag helpers (functional updates)
  const addTag = () => {
    const t = currentTag.trim();
    if (!t) return;
    setTags((prev) => {
      if (prev.includes(t)) return prev;
      return [...prev, t];
    });
    setCurrentTag("");
  };

  const removeTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((t) => t !== tagToRemove));
  };

  // handle Enter key in tag input -> add tag and prevent form submission
  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  // Submit
  const onSubmit = async (data: BlogFormData) => {
    if (!user?.email) {
      toast.error("User not authenticated");
      return;
    }

    setLoading(true);
    try {
      const blogData: Omit<Blog, "id" | "createdAt" | "updatedAt"> = {
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        published: !!data.published, // from RHF
        author: user.email,
        // use provided slug if user entered one, otherwise generate from title
        slug:
          data.slug && data.slug.trim() !== ""
            ? generateSlug(data.slug)
            : generateSlug(data.title),
        tags,
        featuredImage: data.featuredImage || undefined,
        metaTitle: data.metaTitle?.trim() || data.title,
        metaDescription: data.metaDescription?.trim() || data.excerpt,
        metaKeywords: data.metaKeywords
          ? data.metaKeywords
              .split(",")
              .map((k) => k.trim())
              .filter(Boolean)
          : [],
      };

      if (isEdit && id) {
        await updateBlog(id, blogData);
        toast.success("Blog updated successfully!");
      } else {
        await createBlog(blogData);
        toast.success("Blog created successfully!");
      }

      navigate("/admin/blogs");
    } catch (error: any) {
      toast.error(error.message || "Failed to save blog");
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = () => {
    // preview uses either user-provided slug OR slug generated from title
    const slugValue =
      watch("slug") && watch("slug").trim() !== ""
        ? generateSlug(watch("slug"))
        : generateSlug(watchedTitle || "");
    if (published && slugValue) {
      window.open(`/blogs/${slugValue}`, "_blank");
    } else {
      toast.error("Please save and publish the blog first to preview it");
    }
  };

  if (initialLoading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/admin/blogs")}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {isEdit ? "Edit Blog Post" : "Create New Blog Post"}
                </h2>
                <p className="text-muted-foreground">
                  {isEdit
                    ? "Update your blog content"
                    : "Share your thoughts with the world"}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        placeholder="Enter blog title..."
                        {...register("title")}
                      />
                      {errors.title && (
                        <p className="text-sm text-red-400">
                          {errors.title.message}
                        </p>
                      )}
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Excerpt *</Label>
                      <Textarea
                        id="excerpt"
                        rows={3}
                        {...register("excerpt")}
                      />
                      {errors.excerpt && (
                        <p className="text-sm text-red-400">
                          {errors.excerpt.message}
                        </p>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <Label htmlFor="content">Content *</Label>
                      <Textarea
                        id="content"
                        rows={15}
                        {...register("content")}
                      />
                      {errors.content && (
                        <p className="text-sm text-red-400">
                          {errors.content.message}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Publish */}
                <Card>
                  <CardHeader>
                    <CardTitle>Publish</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="published">Published</Label>
                      {/* use RHF as single source: setValue toggles the form value */}
                      <Switch
                        id="published"
                        checked={!!published}
                        onCheckedChange={(v: boolean) =>
                          setValue("published", v, {
                            shouldDirty: true,
                            shouldTouch: true,
                          })
                        }
                      />
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={loading}
                      >
                        {loading
                          ? isEdit
                            ? "Updating..."
                            : "Creating..."
                          : isEdit
                          ? "Update Blog"
                          : "Create Blog"}
                      </Button>

                      {published && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handlePreview}
                          className="w-full"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Featured Image */}
                <Card>
                  <CardHeader>
                    <CardTitle>Featured Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      {...register("featuredImage")}
                    />
                  </CardContent>
                </Card>

                {/* SEO Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <label
                        htmlFor="metaTitle"
                        className="text-sm font-medium text-foreground"
                      >
                        Meta Title
                      </label>
                      <Input
                        id="metaTitle"
                        placeholder="Meta Title"
                        {...register("metaTitle")}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="slug"
                        className="text-sm font-medium text-foreground"
                      >
                        Slug
                      </label>
                      <Input
                        id="slug"
                        placeholder="Slug (leave empty to auto-generate)"
                        {...register("slug")}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="metaDescription"
                        className="text-sm font-medium text-foreground"
                      >
                        Meta Description
                      </label>
                      <Textarea
                        id="metaDescription"
                        rows={2}
                        placeholder="Meta Description"
                        {...register("metaDescription")}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="metaKeywords"
                        className="text-sm font-medium text-foreground"
                      >
                        Meta Keywords
                      </label>
                      <Input
                        id="metaKeywords"
                        placeholder="Meta Keywords (comma separated)"
                        {...register("metaKeywords")}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tags</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyDown={handleTagKeyDown}
                        placeholder="Add a tag..."
                        aria-label="Add tag"
                      />
                      <Button type="button" onClick={addTag} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Badge key={tag} className="flex items-center gap-2">
                            <span>{tag}</span>
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="ml-2"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default BlogForm;
