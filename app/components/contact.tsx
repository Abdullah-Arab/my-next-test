"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <p className="text-center mb-8">
            Looking to bring your idea to life? Let&apos;s collaborate.
          </p>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
