
import { useParams, Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";

// Temporary static blog data
const blogs = [
    {
        id: 1,
        title: "Supabase.co Domain Ban in India: What Happened?",
        date: "2026-03-04",
        author: "Mainak Majumder",
        content: `# Supabase.co Domain Ban in India\n\nOn March 2026, developers across India discovered that the supabase.co domain was suddenly inaccessible. This unexpected ban disrupted countless projects, SaaS products, and learning resources relying on Supabase's backend-as-a-service.\n\n## What is Supabase?\nSupabase is an open-source alternative to Firebase, providing authentication, database, storage, and more. It has become a go-to for indie hackers and startups.\n\n## The Ban\nThe ban appears to be a result of government directives, possibly due to regulatory or compliance issues. As of now, there is no official statement from Supabase or Indian authorities.\n\n## Impact\n- Developers lost access to their databases and APIs.\n- Production apps faced downtime.\n- Learning resources and tutorials became unusable.\n\n## Workarounds\n- Use VPNs to access supabase.co.\n- Consider self-hosting Supabase.\n- Monitor for updates from Supabase and the community.\n\n## Conclusion\nThe ban highlights the risks of relying on third-party services for critical infrastructure. Always have a backup plan!\n\n*This blog will be updated as more information becomes available.*`,
    },
];

const SingleBlog: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) {
        return (
            <section className="py-10 md:py-16 min-h-[60vh] flex items-center justify-center">
                <Card className="max-w-xl w-full mx-auto p-6 text-center">
                    <CardHeader>
                        <CardTitle className="text-2xl">Blog Not Found</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link to="/blog">
                            <Button variant="outline" className="mt-4">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </section>
        );
    }

    // Simple markdown to HTML (headings, lists, paragraphs)
    const html = blog.content
        .replace(/\n## (.*?)\n/g, '<h2 class="mt-6 mb-2 text-xl font-semibold">$1</h2>')
        .replace(/\n# (.*?)\n/g, '<h1 class="mt-8 mb-4 text-2xl font-bold">$1</h1>')
        .replace(/\n- (.*?)\n/g, '<li>$1</li>')
        .replace(/\n/g, '<br/>');

    return (
        <section className="py-10 md:py-16 min-h-[80vh]">
            <div className="max-w-2xl mx-auto px-2 sm:px-4">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl mb-2">{blog.title}</CardTitle>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4" />
                            {blog.date}
                            <span className="mx-2">•</span>
                            <span>{blog.author}</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
                        <Link to="/blog">
                            <Button variant="outline" className="mt-8">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default SingleBlog;
