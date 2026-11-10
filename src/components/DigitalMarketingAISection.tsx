'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBullhorn, 
  faLaptopCode, 
  faComments, 
  faFilter, 
  faHeadset, 
  faDatabase, 
  faHandshake 
} from "@fortawesome/free-solid-svg-icons";

const DigitalMarketingAISection = () => {
  const flow = [
    { 
      name: "ADVERTISEMENT", 
      icon: faBullhorn, 
      desc: "Paid Ads & SEO",
      color: "text-blue-600"
    },
    { 
      name: "LANDING PAGE", 
      icon: faLaptopCode, 
      desc: "High-CRO Page",
      color: "text-indigo-600"
    },
    { 
      name: "AI CHATBOT / WHATSAPP", 
      icon: faComments, 
      desc: "Instant Engagement",
      color: "text-teal-600"
    },
    { 
      name: "LEAD QUALIFICATION", 
      icon: faFilter, 
      desc: "Budget & Intent",
      color: "text-purple-600"
    },
    { 
      name: "AI VOICEBOT / SALES TEAM", 
      icon: faHeadset, 
      desc: "Human + Voice AI",
      color: "text-cyan-600"
    },
    { 
      name: "CRM", 
      icon: faDatabase, 
      desc: "Data Synchronized",
      color: "text-amber-600"
    },
    { 
      name: "BUSINESS OPPORTUNITY", 
      icon: faHandshake, 
      desc: "Deal Closed",
      color: "text-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#012766] to-[#073D7B] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Marketing Gets the Customer&apos;s Attention. <br />
            <span className="text-[#2cd1a1]">AI Helps You Continue the Conversation.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            A successful digital campaign should not end when a customer clicks an advertisement. VMC Media connects marketing with customer engagement — helping businesses move from an advertisement to a conversation, from a conversation to a qualified lead, and from a lead to a business opportunity.
          </p>
        </div>

        {/* Visual Flow Blueprint */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <h3 className="text-xs font-bold text-center uppercase tracking-wider text-[#2cd1a1] mb-8">
            End-to-End Customer Journey Pipeline
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
            {flow.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-white border border-white/80 shadow-lg flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                  <FontAwesomeIcon icon={item.icon} className={`w-6 h-6 ${item.color} transition-transform duration-300`} />
                </div>
                <span className="font-extrabold text-[11px] text-white tracking-tight mb-0.5 group-hover:text-[#2cd1a1] transition-colors">{item.name}</span>
                <span className="text-[10px] text-white/70 font-medium">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketingAISection;
