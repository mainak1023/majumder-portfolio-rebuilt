
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Temporary static blog data for homepage preview
const blogs = [
  {
    id: 1,
    title: "Supabase.co Domain Ban in India: What Happened?",
    summary: "A look at the recent ban of supabase.co in India, its impact, and what developers can do.",
    date: "2026-03-04",
    featured_image: null,
    slug: "1",
  },
];


const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Blog</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Thoughts, insights, and stories from my journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 md:mb-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {blog.date}
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors text-lg md:text-xl">
                  {blog.title}
                </CardTitle>
                {blog.summary && (
                  <CardDescription className="line-clamp-3 text-sm md:text-base">
                    {blog.summary}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href={`/blog/${blog.id}`}>
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button variant="default" size="lg" className="px-8">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
