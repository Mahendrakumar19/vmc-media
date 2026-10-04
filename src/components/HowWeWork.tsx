'use client';

const HowWeWork = () => {
  const steps = [
    { num: "01", title: "Understand", desc: "We understand your business, customers and growth objectives." },
    { num: "02", title: "Strategise", desc: "We develop a digital and AI strategy aligned with your goals." },
    { num: "03", title: "Launch", desc: "We launch campaigns, digital assets and automation solutions." },
    { num: "04", title: "Optimise", desc: "We analyse results and continuously improve performance." },
    { num: "05", title: "Grow", desc: "We scale the activities that generate meaningful business opportunities." }
  ];

  return (
    <section className="py-20 bg-muted/30 border-t border-border relative">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            From Strategy to Growth
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A proven 5-step methodology that turns digital reach into measurable revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative group hover:border-[#2cd1a1]/50"
            >
              <div className="text-3xl font-extrabold text-[#2cd1a1] mb-2 font-mono">{step.num}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
