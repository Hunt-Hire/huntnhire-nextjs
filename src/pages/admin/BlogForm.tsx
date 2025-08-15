import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Save, Eye, ArrowLeft, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import DashboardLayout from '@/components/admin/DashboardLayout';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useBlogs, Blog } from '@/hooks/useBlogs';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

const blogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  published: z.boolean(),
  featuredImage: z.string().url().optional().or(z.literal('')),
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
  const [currentTag, setCurrentTag] = useState('');
  const [publishedState, setPublishedState] = useState(false);

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
      title: '',
      excerpt: '',
      content: '',
      published: false,
      featuredImage: '',
    },
  });

  const watchedTitle = watch('title');
  const watchedPublished = watch('published');

  useEffect(() => {
    if (isEdit && id) {
      const loadBlog = async () => {
        try {
          const blog = await fetchBlogById(id);
          if (blog) {
            reset({
              title: blog.title,
              excerpt: blog.excerpt,
              content: blog.content,
              published: blog.published,
              featuredImage: blog.featuredImage || '',
            });
            setTags(blog.tags || []);
            setPublishedState(blog.published);
          } else {
            toast.error('Blog not found');
            navigate('/admin/blogs');
          }
        } catch (error) {
          toast.error('Failed to load blog');
          navigate('/admin/blogs');
        } finally {
          setInitialLoading(false);
        }
      };
      
      loadBlog();
    } else {
      setInitialLoading(false);
    }
  }, [id, isEdit, fetchBlogById, reset, navigate]);

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    if (!user?.email) {
      toast.error('User not authenticated');
      return;
    }

    setLoading(true);
    try {
      const blogData: Omit<Blog, 'id' | 'createdAt' | 'updatedAt'> = {
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        published: publishedState, // Use publishedState instead of form data
        author: user.email,
        slug: generateSlug(data.title),
        tags,
        featuredImage: data.featuredImage || undefined,
      };

      if (isEdit && id) {
        await updateBlog(id, blogData);
        toast.success('Blog updated successfully!');
      } else {
        await createBlog(blogData);
        toast.success('Blog created successfully!');
      }
      
      navigate('/admin/blogs');
    } catch (error: any) {
      toast.error(error.message || 'Failed to save blog');
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = () => {
    if (publishedState && watchedTitle) {
      const slug = generateSlug(watchedTitle);
      window.open(`/blogs/${slug}`, '_blank');
    } else {
      toast.error('Please save and publish the blog first to preview it');
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
                onClick={() => navigate('/admin/blogs')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h2>
                <p className="text-muted-foreground">
                  {isEdit ? 'Update your blog content' : 'Share your thoughts with the world'}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-foreground">
                        Title *
                      </Label>
                      <Input
                        id="title"
                        placeholder="Enter blog title..."
                        {...register('title')}
                        className="bg-secondary/20 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                      />
                      {errors.title && (
                        <p className="text-sm text-red-400">{errors.title.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="excerpt" className="text-foreground">
                        Excerpt *
                      </Label>
                      <Textarea
                        id="excerpt"
                        placeholder="Brief description of your blog post..."
                        rows={3}
                        {...register('excerpt')}
                        className="bg-secondary/20 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                      />
                      {errors.excerpt && (
                        <p className="text-sm text-red-400">{errors.excerpt.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content" className="text-foreground">
                        Content *
                      </Label>
                      <Textarea
                        id="content"
                        placeholder="Write your blog content here..."
                        rows={15}
                        {...register('content')}
                        className="bg-secondary/20 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                      />
                      {errors.content && (
                        <p className="text-sm text-red-400">{errors.content.message}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Publish Settings */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Publish</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="published" className="text-foreground">
                        Published
                      </Label>
                      <Switch
                        id="published"
                        checked={publishedState}
                        onCheckedChange={setPublishedState}
                      />
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="space-y-3">
                      <Button
                        type="submit"
                        className="w-full btn-primary hover-glow"
                        disabled={loading}
                      >
                        {loading ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            {isEdit ? 'Updating...' : 'Creating...'}
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Save className="h-4 w-4" />
                            {isEdit ? 'Update Blog' : 'Create Blog'}
                          </div>
                        )}
                      </Button>

                      {publishedState && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handlePreview}
                          className="w-full bg-secondary/20 border-white/10 text-foreground hover:bg-white/10"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Featured Image */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Featured Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="featuredImage" className="text-foreground">
                        Image URL (Optional)
                      </Label>
                      <Input
                        id="featuredImage"
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        {...register('featuredImage')}
                        className="bg-secondary/20 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                      />
                      {errors.featuredImage && (
                        <p className="text-sm text-red-400">{errors.featuredImage.message}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Tags</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Add a tag..."
                        className="flex-1 bg-secondary/20 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                      />
                      <Button
                        type="button"
                        onClick={addTag}
                        size="sm"
                        variant="outline"
                        className="bg-secondary/20 border-white/10 text-foreground hover:bg-white/10"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30"
                          >
                            {tag}
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="ml-2 hover:text-red-400"
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
