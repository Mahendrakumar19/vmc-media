'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const blogPosts = [
  {
    title: "AI-Powered SEO: How Machine Learning is Revolutionizing Search Rankings",
    excerpt: "Discover how artificial intelligence is transforming SEO strategies and helping marketers achieve better search rankings through predictive analytics and automation.",
    image: "/Blog_1.webp",
    category: "AI & SEO",
    date: "Jan 7, 2025",
    author: "VMC Media Team",
    slug: "ai-powered-seo",
  },
  {
    title: "Digital Marketing in 2025: The Role of AI and Machine Learning",
    excerpt: "Explore how AI is reshaping digital marketing strategies, from content creation to customer personalization. Learn the tools and techniques driving marketing success.",
    image: "/Blog_2.webp",
    category: "Digital Marketing",
    date: "Jan 5, 2025",
    author: "VMC Media Team",
    slug: "ai-digital-marketing-2025",
  },
  {
    title: "Using AI for Content Optimization and SEO Strategy",
    excerpt: "Master AI-driven content optimization techniques to improve your SEO performance, increase organic traffic, and rank higher for competitive keywords.",
    image: "/Blog_3.webp",
    category: "AI & Content",
    date: "Jan 3, 2025",
    author: "VMC Media Team",
    slug: "ai-content-optimization-seo",
  },
];

const Blog = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Blog
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Stay updated with the latest trends, tips, and insights in digital marketing and SEO.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Latest Articles & Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden h-56 bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground z-10">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;