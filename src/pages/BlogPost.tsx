import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SlimHeader from "@/components/sections/SlimHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useBlogs, Blog } from "@/hooks/useBlogs";
import { format } from "date-fns";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { fetchBlogBySlug } = useBlogs();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      loadBlog(slug as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const loadBlog = async (slug: string) => {
    try {
      setLoading(true);
      const blogData = await fetchBlogBySlug(slug);
      if (blogData && blogData.published) {
        setBlog(blogData);
      } else {
        navigate("/blogs");
        toast.error("Blog post not found");
      }
    } catch (error) {
      navigate("/blogs");
      toast.error("Failed to load blog post");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A";
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return format(date, "MMMM d, yyyy");
    } catch {
      return "N/A";
    }
  };

  const handleShare = async () => {
    if (navigator.share && blog) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  // Loader
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F7FFF7]">
        <SlimHeader />
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  // Not found
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F7FFF7]">
        <SlimHeader />
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Blog post not found
            </h1>
            <Link to="/blogs">
              <Button className="btn-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ✅ Actual Blog Post UI
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FFF7]">
      {/* SEO Head Tags */}
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>
        <meta
          name="description"
          content={blog.metaDescription || blog.excerpt}
        />
        {blog.metaKeywords && (
          <meta
            name="keywords"
            content={
              Array.isArray(blog.metaKeywords)
                ? blog.metaKeywords.join(", ")
                : blog.metaKeywords
            }
          />
        )}
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <SlimHeader />
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-[#7960BE]">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Link to="/blogs">
                  <Button
                    variant="ghost"
                    className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
                <Button
                  onClick={handleShare}
                  variant="ghost"
                  className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="text-center animate-slide-up">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  {blog.title}
                </h1>

                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-center gap-6 text-white/70 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{formatDate(blog.createdAt)}</span>
                  </div>
                  {blog.author && (
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span>{blog.author}</span>
                    </div>
                  )}
                </div>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {blog.tags.map((tag, index) => (
                      <Link
                        key={index}
                        to={`/blogs?tag=${encodeURIComponent(tag)}`}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-[#0DAB76]/80 text-white cursor-pointer"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {blog.featuredImage && (
          <section className="py-0">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Content */}
        <section>
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <article className="max-w-none text-[#191919]">
                <div
                  className="
                    text-[1.125rem] leading-[1.9rem]
                    [&_p]:my-5 [&_p]:text-[1.125rem]
                    [&_h1]:mt-8 [&_h1]:mb-6 [&_h1]:text-3xl
                    [&_h2]:mt-10 [&_h2]:mb-6 [&_h2]:text-2xl
                    [&_h3]:mt-8 [&_h3]:mb-4
                    [&_ul]:list-disc [&_ul]:pl-7 [&_ul]:marker:text-[#191919] [&_ul]:marker:text-[0.95rem]
                    [&_ol]:list-decimal [&_ol]:pl-7
                    [&_li]:my-2 [&_li]:leading-[1.6]
                  "
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </article>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-primary">
                        Written by {blog.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Published on {formatDate(blog.createdAt)}
                        {blog.updatedAt &&
                          blog.updatedAt !== blog.createdAt && (
                            <> • Updated on {formatDate(blog.updatedAt)}</>
                          )}
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <Link to="/blogs">
                    <Button
                      variant="outline"
                      className="bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      All Blog Posts
                    </Button>
                  </Link>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Enjoyed this article?
                    </p>
                    <Link to="/contact">
                      <Button className="btn-primary hover-glow">
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
