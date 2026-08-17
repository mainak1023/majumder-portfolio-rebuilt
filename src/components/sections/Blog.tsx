
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogsData } from '@/data/blogs';

const Blog = () => {
  // Use the first 3 blogs for the homepage preview
  const blogs = blogsData.slice(0, 3);

  return (
    <section id="blog" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Blog</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Thoughts, insights, and stories from my journey
          </p>
        </div>

        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 md:mb-8">
            {blogs.map((blog) => (
              <Card key={blog.id} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                {blog.featured_image && (
                  <img
                    src={blog.featured_image}
                    alt={blog.title}
                    className="rounded-t-lg w-full h-48 object-cover"
                  />
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(blog.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-primary transition-colors text-lg md:text-xl">
                    {blog.title}
                  </CardTitle>
                  {blog.excerpt && (
                    <CardDescription className="line-clamp-3 text-sm md:text-base">
                      {blog.excerpt}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link href={`/blog/${blog.slug}`}>
                    <Button variant="outline" className="w-full group">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground my-12">
            No blog posts available yet. Check back soon!
          </div>
        )}

        {blogs.length > 0 && (
          <div className="text-center">
            <Link href="/blog">
              <Button variant="default" size="lg" className="px-8">
                View All Posts
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
