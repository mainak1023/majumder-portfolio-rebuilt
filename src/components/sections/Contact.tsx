
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import useWeb3Forms from '@web3forms/react';
import { Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { submit } = useWeb3Forms({
    access_key: "c2b1d25b-4384-4969-bbbc-44ba3eed6449",
    settings: {
      from_name: "Portfolio Contact Form",
      subject: "New Contact Form Submission",
    },
    onSuccess: (msg, data) => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    },
    onError: (msg, data) => {
      setIsSubmitting(false);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submit(e);
  };
  
  return (
    <div className="bg-card rounded-lg p-6 border shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Send className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Get In Touch</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              disabled={isSubmitting}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
              disabled={isSubmitting}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-foreground">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="Subject of your message"
            required
            disabled={isSubmitting}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            required
            disabled={isSubmitting}
            className="min-h-[120px] w-full resize-none"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          <Send className="h-4 w-4 mr-2" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default Contact;
