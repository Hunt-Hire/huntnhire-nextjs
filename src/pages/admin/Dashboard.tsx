import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Eye, Edit, Plus, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import DashboardLayout from '@/components/admin/DashboardLayout';
import { useBlogs, Blog } from '@/hooks/useBlogs';
import ProtectedRoute from '@/components/ProtectedRoute';
import { format } from 'date-fns';

const Dashboard = () => {
  const { blogs, loading, fetchBlogs } = useBlogs();
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      const published = blogs.filter(blog => blog.published).length;
      const drafts = blogs.filter(blog => !blog.published).length;
      
      setStats({
        totalBlogs: blogs.length,
        publishedBlogs: published,
        draftBlogs: drafts,
      });
    }
  }, [blogs]);

  const recentBlogs = blogs.slice(0, 5);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return format(date, 'MMM d, yyyy');
    } catch (error) {
      return 'N/A';
    }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
              <p className="text-muted-foreground">
                Manage your blog content and track performance
              </p>
            </div>
            <Link to="/admin/blogs/new">
              <Button className="btn-primary hover-glow">
                <Plus className="h-4 w-4 mr-2" />
                New Blog Post
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Blogs
                </CardTitle>
                <FileText className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {loading ? '...' : stats.totalBlogs}
                </div>
                <p className="text-xs text-muted-foreground">
                  All blog posts created
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Published
                </CardTitle>
                <Eye className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {loading ? '...' : stats.publishedBlogs}
                </div>
                <p className="text-xs text-muted-foreground">
                  Live on the website
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Drafts
                </CardTitle>
                <Edit className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {loading ? '...' : stats.draftBlogs}
                </div>
                <p className="text-xs text-muted-foreground">
                  Unpublished posts
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Blogs */}
          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-foreground">Recent Blog Posts</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Latest blog posts and their status
                </p>
              </div>
              <Link to="/admin/blogs">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : recentBlogs.length > 0 ? (
                <div className="space-y-4">
                  {recentBlogs.map((blog, index) => (
                    <div key={blog.id}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-sm font-medium text-foreground truncate">
                              {blog.title}
                            </h4>
                            <Badge
                              variant={blog.published ? "default" : "secondary"}
                              className={`text-xs ${
                                blog.published
                                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                                  : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                              }`}
                            >
                              {blog.published ? 'Published' : 'Draft'}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {blog.excerpt || 'No excerpt available'}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Created {formatDate(blog.createdAt)} • By {blog.author}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link to={`/admin/blogs/${blog.id}/edit`}>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          {blog.published && (
                            <Link to={`/blogs/${blog.slug}`}>
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                      {index < recentBlogs.length - 1 && (
                        <Separator className="mt-4 bg-white/10" />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    No blog posts yet
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Start by creating your first blog post
                  </p>
                  <Link to="/admin/blogs/new">
                    <Button className="btn-primary">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Blog
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-foreground">Quick Actions</CardTitle>
              <p className="text-sm text-muted-foreground">
                Common tasks and shortcuts
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/admin/blogs/new">
                  <div className="p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-200 hover:bg-white/5 group cursor-pointer">
                    <Plus className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-medium text-foreground">New Blog Post</h4>
                    <p className="text-sm text-muted-foreground">Create a new blog article</p>
                  </div>
                </Link>
                
                <Link to="/admin/blogs">
                  <div className="p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-200 hover:bg-white/5 group cursor-pointer">
                    <FileText className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-medium text-foreground">Manage Blogs</h4>
                    <p className="text-sm text-muted-foreground">Edit and organize your content</p>
                  </div>
                </Link>
                
                <Link to="/blogs">
                  <div className="p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-200 hover:bg-white/5 group cursor-pointer">
                    <TrendingUp className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-medium text-foreground">View Public Blog</h4>
                    <p className="text-sm text-muted-foreground">See how visitors see your blog</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default Dashboard;
