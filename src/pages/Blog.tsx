
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Temporary static blog data
const blogs = [
    {
        id: 1,
        title: "Supabase.co Domain Ban in India: What Happened?",
        summary: "A look at the recent ban of supabase.co in India, its impact, and what developers can do.",
        date: "2026-03-04",
        author: "Mainak Majumder",
        featured_image: null,
    },
];

const Blog: React.FC = () => {
    return (
        <section className="py-10 md:py-16 bg-background min-h-[80vh]">
            <div className="max-w-4xl mx-auto px-2 sm:px-4">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">Blog</h1>
                    <p className="text-base md:text-lg text-muted-foreground">
                        Insights, stories, and updates from my journey as a developer.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {blogs.map((blog) => (
                        <Card key={blog.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                            {blog.featured_image && (
                                <img
                                    src={blog.featured_image}
                                    alt={blog.title}
                                    className="rounded-t-lg w-full h-48 object-cover"
                                />
                            )}
                            <CardHeader>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                    <Calendar className="h-4 w-4" />
                                    {blog.date}
                                    <span className="mx-2">•</span>
                                    <span>{blog.author}</span>
                                </div>
                                <CardTitle className="line-clamp-2 hover:text-primary transition-colors text-lg md:text-xl">
                                    {blog.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-3 text-sm md:text-base mt-1">
                                    {blog.summary}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto">
                                <Link to={`/blog/${blog.id}`}>
                                    <Button variant="outline" className="w-full group">
                                        Read More
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
