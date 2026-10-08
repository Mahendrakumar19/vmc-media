import Image from "next/image";
import { Building2, GraduationCap, Stethoscope, Landmark, ShoppingCart, Factory, Car, Briefcase } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      title: "Real Estate",
      desc: "High-intent buyer leads, premium property enquiries, qualification and automated site-visit follow-ups.",
      icon: Building2,
      image: "/real-estate.webp"
    },
    {
      title: "Education",
      desc: "Student enquiries, counselling leads, course admissions, and automated parent communication.",
      icon: GraduationCap,
      image: "/college.webp"
    },
    {
      title: "Healthcare",
      desc: "Patient appointment bookings, OPD enquiries, instant reminder sequences, and care support.",
      icon: Stethoscope,
      image: "/hospital.webp"
    },
    {
      title: "BFSI",
      desc: "High-net-worth lead qualification, loan enquiries, investment advisories, and instant compliance follow-ups.",
      icon: Landmark,
      image: "/industry-bfsi.jpg"
    },
    {
      title: "Retail & E-commerce",
      desc: "DTC customer acquisition, product catalog enquiries, abandoned cart recovery, and festive campaigns.",
      icon: ShoppingCart,
      image: "/Ecommerce.webp"
    },
    {
      title: "Manufacturing",
      desc: "B2B industrial procurement leads, bulk RFQ enquiry pipelines, dealer networks, and sales engagement.",
      icon: Factory,
      image: "/industry-manufacturing.jpg"
    },
    {
      title: "Automotive",
      desc: "Showroom visit bookings, EV & luxury test-drive leads, and automated post-visit sales nurturing.",
      icon: Car,
      image: "/industry-automotive.jpg"
    },
    {
      title: "Professional Services",
      desc: "High-ticket consulting consultations, legal & corporate advisory enquiries, and meeting scheduling.",
      icon: Briefcase,
      image: "/industry-services.jpg"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-background border-t border-border relative overflow-hidden" id="industries">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#073D7B]/5 dark:bg-[#2cd1a1]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2cd1a1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#073D7B]/10 dark:bg-[#2cd1a1]/10 text-[#073D7B] dark:text-[#2cd1a1] text-xs font-bold tracking-wider uppercase mb-3">
            Industry Tailored Growth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Solutions Across Growing Industries
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every industry has unique customer personas, buying journeys, and conversion pipelines. We engineer bespoke digital marketing funnels and AI workflows tailored directly to your sector.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#2cd1a1]/50 group flex flex-col"
            >
              {/* Visual Thumbnail */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Floating Icon Badge on top of image */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-background/90 dark:bg-card/90 backdrop-blur-md text-[#073D7B] dark:text-[#2cd1a1] flex items-center justify-center shadow-md">
                    <ind.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide drop-shadow-sm">
                    {ind.title}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-[#073D7B] dark:group-hover:text-[#2cd1a1] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
