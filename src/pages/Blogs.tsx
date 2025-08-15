import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Calendar, User, Tag, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SlimHeader from "@/components/sections/SlimHeader";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBlogs } from "@/hooks/useBlogs";
import { format } from "date-fns";

const Blogs = () => {
  const { blogs, loading, fetchBlogs } = useBlogs();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs(true);
  }, []);

  useEffect(() => {
    const tagParam = searchParams.get("tag");
    if (tagParam) {
      setSelectedTag(decodeURIComponent(tagParam));
    }
  }, [searchParams]);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A";

    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return format(date, "MMM d, yyyy");
    } catch (error) {
      return "N/A";
    }
  };

  // Get all unique tags from all blogs
  const allTags = Array.from(
    new Set(
      blogs
        .filter((blog) => blog.tags && blog.tags.length > 0)
        .flatMap((blog) => blog.tags!)
    )
  );

  // Filter blogs based on search query and selected tag
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      !searchQuery ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag =
      !selectedTag || (blog.tags && blog.tags.includes(selectedTag));

    return matchesSearch && matchesTag;
  });

  const featuredBlog = filteredBlogs[0];
  const otherBlogs = filteredBlogs.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SlimHeader />
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#7960BE]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-[100px] opacity-50" />

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-slide-up">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#F7FFF7] shadow-md">
                <p className="text-sm font-medium text-primary">Blogs</p>
              </div>

              <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Insights & <span className="text-[#0DAB76]/70">Ideas</span>
                :
                <br />
                Your Gateway to Fresh Perspectives
              </h1>

              <p className="text-xl text-[#191919] leading-relaxed">
                Insights, tips, and stories from the world of recruitment and
                hiring
              </p>
            </div>
          </div>
          <div className="max-w-md mx-auto relative mb-8 animate-slide-up animation-delay-300">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 focus:outline-none h-12 rounded-full"
            />
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-4 bg-[#F7FFF7]">
          <div className="text-center max-w-4xl mx-auto">
            {/* Tags Filter */}
            {allTags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 animate-slide-up animation-delay-400">
                <Badge
                  variant={selectedTag === null ? "default" : "secondary"}
                  className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                    selectedTag === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/10 text-muted-foreground hover:bg-white/20"
                  }`}
                  onClick={() => setSelectedTag(null)}
                >
                  All Posts
                </Badge>
                {allTags.slice(0, 8).map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "secondary"}
                    className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                      selectedTag === tag
                        ? "bg-primary text-primary-foreground"
                        : "bg-white/10 text-muted-foreground hover:bg-white/20"
                    }`}
                    onClick={() =>
                      setSelectedTag(selectedTag === tag ? null : tag)
                    }
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 bg-[#F7FFF7]">
          <div className="container-custom">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7960BE]"></div>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="text-center py-12">
                <div className="max-w-lg mx-auto">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7960BE] to-[#0DAB76]/70 mx-auto mb-6 flex items-center justify-center">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#191919] mb-4">
                    {searchQuery || selectedTag
                      ? "No posts found"
                      : "No blog posts yet"}
                  </h3>
                  <p className="text-[#191919]/70 mb-6">
                    {searchQuery || selectedTag
                      ? "Try adjusting your search or filter criteria"
                      : "Check back soon for our latest insights and stories"}
                  </p>
                  {(searchQuery || selectedTag) && (
                    <Button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedTag(null);
                      }}
                      variant="outline"
                      className="bg-[#7960BE] border-[#7960BE] text-white hover:bg-[#7960BE]/90"
                    >
                      Clear Filters
                    </Button>
                  )}
                  {!searchQuery && !selectedTag && (
                    <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-[#7960BE]/10 to-[#0DAB76]/10 border border-[#0DAB76]/20">
                      <p className="text-sm text-[#0DAB76]/70">
                        💡 Our team is working on bringing you{" "}
                        <span className="font-semibold text-[#0DAB76]">
                          amazing content
                        </span>{" "}
                        soon!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-16">
                {/* Featured Blog */}
                {featuredBlog && (
                  <div className="animate-slide-up">
                    <h2 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight animate-slide-up text-[#191919] text-center">
                      Featured <span className="text-[#0DAB76]">Post</span>
                    </h2>

                    <Card className="bg-white/80 backdrop-blur-sm border border-[#7960BE]/20 shadow-xl rounded-xl hover:border-[#7960BE]/40 hover:shadow-2xl transition-all duration-300 overflow-hidden group max-w-4xl mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        {featuredBlog.featuredImage && (
                          <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                            <img
                              src={featuredBlog.featuredImage}
                              alt={featuredBlog.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div
                          className={
                            featuredBlog.featuredImage ? "" : "lg:col-span-2"
                          }
                        >
                          <CardContent className="p-8 h-full flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-4 text-sm text-[#191919]/60 mb-4">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {formatDate(featuredBlog.createdAt)}
                                </div>
                                <div className="flex items-center gap-1">
                                  <User className="h-4 w-4" />
                                  {featuredBlog.author}
                                </div>
                              </div>

                              <h3 className="text-2xl font-bold text-[#191919] mb-4 group-hover:text-[#7960BE] transition-colors">
                                {featuredBlog.title}
                              </h3>

                              <p className="text-[#191919]/70 mb-6 leading-relaxed">
                                {featuredBlog.excerpt}
                              </p>

                              {featuredBlog.tags &&
                                featuredBlog.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-2 mb-6">
                                    {featuredBlog.tags
                                      .slice(0, 4)
                                      .map((tag, index) => (
                                        <Badge
                                          key={index}
                                          variant="secondary"
                                          className="bg-[#0DAB76]/80 text-white cursor-pointer"
                                          onClick={() => setSelectedTag(tag)}
                                        >
                                          <Tag className="h-3 w-3 mr-1" />
                                          {tag}
                                        </Badge>
                                      ))}
                                  </div>
                                )}
                            </div>

                            <Link to={`/blogs/${featuredBlog.slug}`}>
                              <Button className="btn-primary hover-glow group/btn">
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}

                {/* Other Blog Posts */}
                {otherBlogs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-semibold text-[#191919] mb-8 text-center">
                      <span className="text-[#0DAB76]/70">Latest</span> Posts
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {otherBlogs.map((blog, index) => (
                        <Card
                          key={blog.id}
                          className={`bg-white/80 backdrop-blur-sm border border-[#7960BE]/20 shadow-xl rounded-xl hover:border-[#7960BE]/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-slide-up`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {blog.featuredImage && (
                            <div className="aspect-[16/9] overflow-hidden rounded-t-xl">
                              <img
                                src={blog.featuredImage}
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 text-xs text-[#191919]/60 mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {formatDate(blog.createdAt)}
                              </div>
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {blog.author}
                              </div>
                            </div>

                            <h3 className="text-lg font-semibold text-[#191919] mb-3 group-hover:text-[#7960BE] transition-colors line-clamp-2">
                              {blog.title}
                            </h3>

                            <p className="text-sm text-[#191919]/70 mb-4 line-clamp-3">
                              {blog.excerpt}
                            </p>

                            {blog.tags && blog.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-4">
                                {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                                  <Badge
                                    key={tagIndex}
                                    variant="secondary"
                                    className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer"
                                    onClick={() => setSelectedTag(tag)}
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                                {blog.tags.length > 2 && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs bg-white/5 text-muted-foreground"
                                  >
                                    +{blog.tags.length - 2}
                                  </Badge>
                                )}
                              </div>
                            )}

                            <Link to={`/blogs/${blog.slug}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full bg-[#7960BE] border-[#7960BE] text-white hover:bg-[#7960BE]/90 group/btn"
                              >
                                Read More
                                <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
