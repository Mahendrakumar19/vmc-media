import React from 'react';
import Link from 'next/link';
import { CITIES_DATA } from '@/lib/cityData';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function LocalSEOStrip() {
  const cityList = Object.values(CITIES_DATA);

  return (
    <section className="bg-slate-900 text-white py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-[#2cd1a1] text-xs font-semibold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              Regional Presence
            </div>
            <h3 className="text-2xl font-bold text-white">
              Best Digital Marketing Agency Across India
            </h3>
          </div>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cityList.map((city) => (
            <Link
              key={city.slug}
              href={`/best-digital-marketing-agency-in-${city.slug}`}
              className="group p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-[#2cd1a1]/50 transition-all duration-300 flex items-center justify-between"
            >
              <div>
                <span className="text-xs text-[#2cd1a1] font-semibold block mb-0.5">Top Digital Agency</span>
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                  Agency in <span className="font-bold text-white">{city.cityName}</span>
                </span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-700/50 group-hover:bg-[#2cd1a1] group-hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

