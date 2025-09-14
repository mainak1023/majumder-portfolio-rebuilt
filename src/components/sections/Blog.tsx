import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Blog as BlogType } from '@/types/database';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  if (isLoading) {
    return (
      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Blog</h2>
            <p className="text-lg text-muted-foreground">Loading posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Blog</h2>
            <p className="text-lg text-muted-foreground">Coming soon...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <p className="text-lg text-muted-foreground">
            Thoughts, insights, and stories from my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedBlogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-lg transition-shadow">
              {blog.featured_image && (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={blog.featured_image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(blog.created_at).toLocaleDateString()}
                  <Clock className="h-4 w-4 ml-2" />
                  {Math.ceil(blog.content.length / 1000)} min read
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  {blog.title}
                </CardTitle>
                {blog.excerpt && (
                  <CardDescription className="line-clamp-3">
                    {blog.excerpt}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <Link to={`/blog/${blog.slug}`}>
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {blogs.length > 3 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="px-8"
            >
              {showAll ? 'Show Less' : 'View All Posts'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;