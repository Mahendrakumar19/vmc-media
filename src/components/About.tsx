'use client';

import { ArrowRight, Bot, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <>
      {/* Section 11: ABOUT US */}
      <section
        className="py-20 bg-background border-t border-border"
        id="about"
      >
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2cd1a1] mb-3 block">
            ABOUT VMC MEDIA
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
            Connecting Businesses With Customers.{" "}
            <br className="hidden sm:inline" />
            Creating Digital Experiences. Growing Opportunities.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            <p>
              <strong className="text-foreground">VMC Media</strong> is a
              digital marketing and AI solutions company focused on helping
              businesses strengthen their online presence, generate meaningful
              leads and improve customer engagement.
            </p>
            <p>
              Our approach combines digital marketing expertise with emerging AI
              technologies to help businesses attract the right audience,
              respond faster and automate repetitive customer interactions.
            </p>
            <p>
              We believe technology should not replace human relationships. It
              should help businesses make those relationships more efficient and
              productive.
            </p>
          </div>

          <div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-[#073D7B] hover:bg-[#012766] text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-md hover:scale-105 transition-all"
            >
              <span>Know More About VMC Media</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 12: OUR APPROACH TO AI */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              AI That Works With Your Business — Not Against It
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              AI is transforming the way businesses market, communicate and
              serve customers. Our objective is to use AI where it creates
              genuine business value — while keeping people at the centre of
              important customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automate the Routine",
                desc: "Let AI handle repetitive questions and conversations.",
                icon: Bot,
                color: "text-[#2cd1a1]",
                bg: "bg-[#2cd1a1]/10",
              },
              {
                title: "Empower Your Team",
                desc: "Give your sales and service teams better-qualified opportunities.",
                icon: Users,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Seamless Handover to Your Team",
                desc: "Escalate important or complex conversations to your team.",
                icon: ShieldCheck,
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;