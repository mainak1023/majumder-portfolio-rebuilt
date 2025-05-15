
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would handle form submission here
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-portfolio-secondary">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-portfolio-secondary">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-portfolio-secondary">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary/20"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-portfolio-secondary">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Subject of your message"
                required
                className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary/20"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-portfolio-secondary">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                required
                className="min-h-[150px] border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary/20"
              />
            </div>
            
            <Button type="submit" className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
