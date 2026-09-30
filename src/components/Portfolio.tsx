"use client"


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const projects = [
  {
    title: "Real Estate",
    category: "SEO & Local Marketing",
    image: "/real-estate.webp",
    result: "High-Intent Property Inquiries & Site Visits",
    color: "bg-accent",
    slug: "real-estate",
  },
  {
    title: "College/Admission Consultancy",
    category: "Lead Generation & PPC",
    image: "/college.webp",
    result: "Qualified Student Applications & Enquiries",
    color: "bg-secondary",
    slug: "college-consultancy",
  },
  {
    title: "Hospital",
    category: "Digital Marketing & Branding",
    image: "/hospital.webp",
    result: "Consistent Inbound Patient Appointments",
    color: "bg-primary",
    slug: "hospital",
  },
  {
    title: "Ecommerce",
    category: "Performance Marketing & CRO",
    image: "/Ecommerce.webp",
    result: "Optimized Return on Ad Spend & Lower CAC",
    color: "bg-accent",
    slug: "ecommerce",
  },
];

const Portfolio = () => {
  const router = useRouter();
  
  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <span className="inline-block bg-primary/10 px-6 py-2 rounded-full text-primary font-semibold text-lg tracking-wider uppercase">Proven Results</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Measurable Impact Across Industries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered growth engines deliver lower customer acquisition costs and higher conversion rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => router.push(`/portfolio/${project.slug}`)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  priority
                  className="w-full h-64 max-h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-medium">View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-muted text-muted-foreground border-border" variant="outline">{project.category}</Badge>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="text-lg font-bold text-foreground">
                    {project.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;