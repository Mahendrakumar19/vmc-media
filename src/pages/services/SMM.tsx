'use client'

import Image from "next/image";
import { Share2, CheckCircle2, Users, Heart, MessageCircle, TrendingUp, ArrowRight, Instagram, Facebook, Linkedin, Twitter, Youtube, Star } from "lucide-react";
import { useRouter } from "next/navigation";

const SMMService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <Share2 className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Social Media Marketing</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Social Media{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build a powerful social media presence that drives engagement, grows your following, and converts fans into customers across all major platforms.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Boost Your Social Presence
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <Image
                src="/Social_media.webp"
                alt="Social Media Marketing"
                width={480}
                height={320}
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Social Media Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to dominate social media and engage your audience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Social Strategy & Planning",
                description: "Comprehensive social media strategy aligned with your business goals and target audience insights."
              },
              {
                icon: MessageCircle,
                title: "Content Creation",
                description: "Engaging posts, graphics, videos, and stories that capture attention and drive interaction."
              },
              {
                icon: Heart,
                title: "Community Management",
                description: "Active engagement with your audience through comments, messages, and community building."
              },
              {
                icon: TrendingUp,
                title: "Paid Social Advertising",
                description: "Targeted ad campaigns on Facebook, Instagram, LinkedIn, and more for maximum ROI."
              },
              {
                icon: Star,
                title: "Influencer Marketing",
                description: "Partner with relevant influencers to expand your reach and build brand credibility."
              },
              {
                icon: CheckCircle2,
                title: "Analytics & Reporting",
                description: "Detailed performance tracking and insights to optimize your social media presence."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-secondary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Platforms We Master
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert management across all major social networks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Facebook, name: "Facebook Marketing", color: "bg-blue-600", desc: "Build communities and drive conversions" },
              { icon: Instagram, name: "Instagram Growth", color: "bg-pink-600", desc: "Visual storytelling and engagement" },
              { icon: Linkedin, name: "LinkedIn Strategy", color: "bg-blue-700", desc: "B2B networking and thought leadership" },
              { icon: Twitter, name: "Twitter/X Engagement", color: "bg-black", desc: "Real-time conversations and trends" },
              { icon: Youtube, name: "YouTube Marketing", color: "bg-red-600", desc: "Video content and channel growth" },
              { icon: TrendingUp, name: "TikTok & Emerging", color: "bg-purple-600", desc: "Viral content and new platforms" }
            ].map((platform, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our SMM Services?
              </h2>
              <div className="space-y-4">
                {[
                  "Proven social media growth strategies",
                  "Engaging, on-brand content creation",
                  "Active community management",
                  "Data-driven campaign optimization",
                  "Multi-platform expertise",
                  "Transparent reporting and insights",
                  "Consistent posting schedules",
                  "ROI-focused paid advertising"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Audit & Strategy", desc: "Analyze current presence and develop custom strategy" },
                  { step: "02", title: "Content Planning", desc: "Create content calendar and creative assets" },
                  { step: "03", title: "Execution & Engagement", desc: "Post consistently and engage with your community" },
                  { step: "04", title: "Optimize & Scale", desc: "Analyze performance and scale what works" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl font-bold text-secondary/30">{item.step}</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Social Media Service Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                features: [
                  "2 Social Platforms",
                  "12 Posts per Month",
                  "Basic Graphics",
                  "Monthly Reporting",
                  "Community Management",
                  "Hashtag Strategy"
                ]
              },
              {
                name: "Growth",
                popular: true,
                features: [
                  "4 Social Platforms",
                  "20 Posts per Month",
                  "Custom Graphics & Videos",
                  "Weekly Reporting",
                  "Advanced Engagement",
                  "Paid Ad Management ($500 budget)",
                  "Influencer Outreach",
                  "Stories & Reels"
                ]
              },
              {
                name: "Enterprise",
                features: [
                  "All Major Platforms",
                  "Daily Posting",
                  "Premium Content",
                  "Real-time Monitoring",
                  "Dedicated Manager",
                  "Paid Ad Campaigns",
                  "Influencer Partnerships",
                  "Priority Support"
                ]
              }
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 border-2 ${
                  pkg.popular ? 'border-secondary shadow-2xl scale-105' : 'border-border'
                } hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                </div>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Grow Your Social Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a custom social media strategy that drives real results for your business
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Free Social Media Audit
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SMMService;