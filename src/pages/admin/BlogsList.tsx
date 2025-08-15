import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Eye, Edit, Trash2, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '@/components/ui/alert-dialog';
import DashboardLayout from '@/components/admin/DashboardLayout';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useBlogs } from '@/hooks/useBlogs';
import { format } from 'date-fns';
import { toast } from 'sonner';

const BlogsList = () => {
  const { blogs, loading, deleteBlog } = useBlogs();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return format(date, 'MMM d, yyyy');
    } catch (error) {
      return 'N/A';
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBlog(id);
      toast.success('Blog deleted successfully');
      setDeleteId(null);
    } catch (error) {
      toast.error('Failed to delete blog');
    }
  };

  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.tags && blog.tags.some(tag => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ))
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(blog =>
        statusFilter === 'published' ? blog.published : !blog.published
      );
    }

    return filtered;
  }, [blogs, searchQuery, statusFilter]);

  const stats = useMemo(() => {
    const total = blogs.length;
    const published = blogs.filter(blog => blog.published).length;
    const drafts = total - published;
    
    return { total, published, drafts };
  }, [blogs]);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Blog Posts</h2>
              <p className="text-muted-foreground">
                Manage all your blog content
              </p>
            </div>
            <Link to="/admin/blogs/new">
              <Button className="btn-primary hover-glow">
                <Plus className="h-4 w-4 mr-2" />
                New Blog Post
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{stats.total}</div>
                  <div className="text-sm text-muted-foreground">Total Posts</div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{stats.published}</div>
                  <div className="text-sm text-muted-foreground">Published</div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{stats.drafts}</div>
                  <div className="text-sm text-muted-foreground">Drafts</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search blogs by title, author, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-secondary/20 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-[180px] bg-secondary/20 border-white/10 text-foreground">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Posts</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Drafts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Blog List */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-foreground">
                All Blog Posts ({filteredBlogs.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : filteredBlogs.length > 0 ? (
                <div className="space-y-4">
                  {filteredBlogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-200 hover:bg-white/5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-medium text-foreground truncate">
                              {blog.title}
                            </h3>
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
                          
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                            {blog.excerpt || 'No excerpt available'}
                          </p>
                          
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>By {blog.author}</span>
                            <span>Created {formatDate(blog.createdAt)}</span>
                            {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                              <span>Updated {formatDate(blog.updatedAt)}</span>
                            )}
                          </div>
                          
                          {blog.tags && blog.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {blog.tags.slice(0, 3).map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs bg-primary/10 border-primary/30 text-primary"
                                >
                                  {tag}
                                </Badge>
                              ))}
                              {blog.tags.length > 3 && (
                                <Badge
                                  variant="outline"
                                  className="text-xs bg-secondary/20 border-white/20 text-muted-foreground"
                                >
                                  +{blog.tags.length - 3} more
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {blog.published && (
                            <Link to={`/blogs/${blog.slug}`} target="_blank">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-muted-foreground hover:text-green-400"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </Link>
                          )}
                          
                          <Link to={`/admin/blogs/${blog.id}/edit`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground hover:text-blue-400"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-muted-foreground hover:text-red-400"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-secondary/20 backdrop-blur-lg border-white/10">
                              <AlertDialogHeader>
                                <AlertDialogTitle className="text-foreground">
                                  Delete Blog Post
                                </AlertDialogTitle>
                                <AlertDialogDescription className="text-muted-foreground">
                                  Are you sure you want to delete "{blog.title}"? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel className="bg-secondary/20 border-white/10 text-foreground hover:bg-white/10">
                                  Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(blog.id!)}
                                  className="bg-red-500 hover:bg-red-600 text-white"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-muted-foreground mb-4">
                    {searchQuery || statusFilter !== 'all' 
                      ? 'No blogs match your current filters' 
                      : 'No blog posts found'
                    }
                  </div>
                  {!searchQuery && statusFilter === 'all' && (
                    <Link to="/admin/blogs/new">
                      <Button className="btn-primary">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Your First Blog
                      </Button>
                    </Link>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default BlogsList;
