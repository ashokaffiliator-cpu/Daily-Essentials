
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-200 text-stone-500 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 pb-20 border-b border-stone-100">
          <div className="col-span-1 md:col-span-2">
            <h3 className="brand-font text-stone-900 text-4xl font-black mb-6">Daily<span className="text-orange-500">Essentials.</span></h3>
            <p className="text-lg leading-relaxed max-w-sm italic">
              A verified registry of the tools that actually work. Curated for durability, designed for life.
            </p>
          </div>
          <div>
            <h4 className="text-stone-900 font-black uppercase text-[10px] tracking-[0.4em] mb-8">Registry</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Latest Findings</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Archive</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Submissions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-900 font-black uppercase text-[10px] tracking-[0.4em] mb-8">System</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-orange-500 transition-colors">The Ethos</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Disclosures</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        <div className="text-[10px] font-bold text-stone-400 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="uppercase tracking-[0.3em]">Official Daily Essentials Publication</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-stone-900 transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
              <a href="#" className="hover:text-stone-900 transition-colors"><i className="fa-brands fa-x-twitter text-xl"></i></a>
            </div>
          </div>
          <p className="max-w-3xl leading-relaxed italic border-l-2 border-stone-100 pl-6">
            Transparency Notice: Daily Essentials participates in the Amazon Services LLC Associates Program. This partnership allows us to sustain an independent, ad-free registry. We strictly list verified solutions based on utility and material integrity.
          </p>
          <p className="text-center md:text-left pt-6 border-t border-stone-50">&copy; {new Date().getFullYear()} Daily Essentials Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
