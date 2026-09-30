import { TrendingUp, Users, Award, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "Proven",
    label: "Enterprise Delivery",
    color: "text-accent",
  },
  {
    icon: Award,
    value: "Established",
    label: "Industry Expertise",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: "Long-Term",
    label: "Client Partnerships",
    color: "text-accent",
  },
];

const Stats = () => {
  return (
    <section className="py-12 lg:py-16 bg-muted/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-foreground">Our Track Record</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-card border border-border shadow-md rounded-2xl mb-3 lg:mb-4 group-hover:border-primary/50 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <stat.icon className={`w-7 h-7 lg:w-8 lg:h-8 ${stat.color}`} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-foreground">{stat.value}</h3>
              <p className="text-base lg:text-lg text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;