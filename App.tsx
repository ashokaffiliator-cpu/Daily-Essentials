
import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS } from './constants';
import { Product } from './types';

// --- Sub-Component: Navbar ---
const Navbar: React.FC<{
  onNavigate: (page: string) => void;
  currentPage: string;
  onSearch: (query: string) => void;
}> = ({ onNavigate, currentPage, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent relative z-[110]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex-shrink-0 cursor-pointer group" 
            onClick={() => {
              onNavigate('home');
              onSearch('');
            }}
          >
            <span className="brand-font text-3xl font-black text-stone-900 tracking-tighter">
              Daily<span className="italic text-orange-600">Essentials</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            <button
              onClick={() => onNavigate('home')}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${currentPage === 'home' ? 'text-orange-600 border-b-2 border-orange-600 pb-1' : 'text-stone-400 hover:text-stone-900'}`}
            >
              Collection
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${currentPage === 'about' ? 'text-orange-600 border-b-2 border-orange-600 pb-1' : 'text-stone-400 hover:text-stone-900'}`}
            >
              Ethos
            </button>
            <button
              onClick={() => onNavigate('trust')}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${currentPage === 'trust' ? 'text-orange-600 border-b-2 border-orange-600 pb-1' : 'text-stone-400 hover:text-stone-900'}`}
            >
              Trust
            </button>
            <div className="h-4 w-[1px] bg-stone-200"></div>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-stone-900 text-white px-7 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg active:scale-95"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden flex items-center">
             <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-900 p-2"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl fixed inset-0 z-[600] animate-in fade-in slide-in-from-right-full duration-300">
          <div className="flex justify-between items-center p-8">
            <span className="brand-font text-2xl font-black">Daily<span className="text-orange-600 italic">Essentials</span></span>
            <button onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-times text-3xl text-orange-600"></i></button>
          </div>
          <div className="px-10 py-12 space-y-10 flex flex-col items-start italic">
            <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-5xl font-black hover:text-orange-600 transition-colors">Collection</button>
            <button onClick={() => { onNavigate('about'); setIsMenuOpen(false); }} className="text-5xl font-black hover:text-orange-600 transition-colors">Ethos</button>
            <button onClick={() => { onNavigate('trust'); setIsMenuOpen(false); }} className="text-5xl font-black hover:text-orange-600 transition-colors">Trust</button>
            <button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className="py-5 px-14 bg-stone-900 text-white rounded-full font-black uppercase text-xs tracking-widest not-italic">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Sub-Component: ProductCard ---
const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => {
  const valueLabels = ["Verified Value", "Choice Pick", "Essential Fix", "Daily Favorite", "Quality Build"];
  const randomLabel = valueLabels[Math.floor(Math.random() * product.id.length) % valueLabels.length];
  const isBestSeller = product.tags.some(tag => tag.toLowerCase().includes('best seller'));
  const isMustHave = product.tags.some(tag => tag.toLowerCase().includes('must have'));

  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-3xl p-8 flex flex-col h-full cursor-pointer transition-all duration-500 ease-out border border-stone-200 hover:border-orange-200 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05),0_10px_30px_rgba(251,146,60,0.08)] hover:scale-[1.02] relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-6">
         <div className="flex flex-col gap-2">
            <div className="text-[9px] font-black text-stone-400 uppercase tracking-widest px-2.5 py-1 bg-stone-50 rounded-md w-fit border border-stone-100">
              {product.category}
            </div>
            {isBestSeller && (
              <div className="text-[8px] font-black text-white uppercase tracking-tighter px-2.5 py-0.5 bg-stone-900 rounded-full w-fit flex items-center gap-1.5 shadow-sm">
                <i className="fa-solid fa-fire text-[7px] text-orange-500"></i> Best Seller
              </div>
            )}
            {isMustHave && (
              <div className="text-[8px] font-black text-white uppercase tracking-tighter px-2.5 py-0.5 bg-orange-600 rounded-full w-fit flex items-center gap-1.5 shadow-sm">
                <i className="fa-solid fa-star text-[7px]"></i> Must Have
              </div>
            )}
         </div>
         <div className="flex items-center gap-1.5 text-orange-500 text-[10px] font-black uppercase tracking-widest bg-orange-50/50 px-2 py-1 rounded-md">
            <i className="fa-solid fa-circle-check text-[10px]"></i>
            Verified
         </div>
      </div>
      <h3 className="text-2xl font-black text-stone-900 leading-snug group-hover:text-orange-600 transition-colors mb-6 italic">{product.title}</h3>
      <p className="text-sm text-stone-500 line-clamp-3 mb-8 italic leading-relaxed">"{product.description}"</p>
      <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
        <span className="text-stone-900 font-black uppercase text-[9px] tracking-[0.2em] flex items-center gap-2 transition-all">
          View Detail <i className="fa-solid fa-arrow-right text-orange-500 group-hover:translate-x-1 transition-transform"></i>
        </span>
        <div className="text-stone-400 font-bold uppercase text-[9px] tracking-widest italic opacity-60">{randomLabel}</div>
      </div>
    </div>
  );
};

// --- Sub-Component: Footer ---
const Footer: React.FC = () => (
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
            <li><button className="hover:text-orange-500 transition-colors">Latest Findings</button></li>
            <li><button className="hover:text-orange-500 transition-colors">Archive</button></li>
            <li><button className="hover:text-orange-500 transition-colors">Submissions</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-stone-900 font-black uppercase text-[10px] tracking-[0.4em] mb-8">System</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
            <li><button className="hover:text-orange-500 transition-colors">The Ethos</button></li>
            <li><button className="hover:text-orange-500 transition-colors">Disclosures</button></li>
            <li><button className="hover:text-orange-500 transition-colors">Legal</button></li>
          </ul>
        </div>
      </div>
      <div className="text-[10px] font-bold text-stone-400 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="uppercase tracking-[0.3em]">Official Daily Essentials Publication</p>
          <div className="flex gap-8">
            <button className="hover:text-stone-900 transition-colors"><i className="fa-brands fa-instagram text-xl"></i></button>
            <button className="hover:text-stone-900 transition-colors"><i className="fa-brands fa-x-twitter text-xl"></i></button>
          </div>
        </div>
        <p className="max-w-3xl leading-relaxed italic border-l-2 border-stone-100 pl-6">
          Transparency Notice: Daily Essentials participates in the Amazon Services LLC Associates Program. We strictly list verified solutions based on utility and material integrity.
        </p>
        <p className="text-center md:text-left pt-6 border-t border-stone-50">&copy; {new Date().getFullYear()} Daily Essentials Global. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProduct]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('details');
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const filteredProducts = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const suggestions = searchQuery.length >= 1 
    ? PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  const renderProductDetails = () => {
    if (!selectedProduct) return null;

    // Use direct affiliate URL if provided, otherwise fallback to a search with your tag
    const amazonUrl = (selectedProduct.affiliateUrl && selectedProduct.affiliateUrl !== 'https://amazon.com')
      ? selectedProduct.affiliateUrl
      : `https://www.amazon.com/s?k=${encodeURIComponent(selectedProduct.solution || selectedProduct.title)}&tag=dailyessentials-20`;

    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => { setCurrentPage('home'); setSelectedProduct(null); }}
          className="group mb-8 md:mb-12 inline-flex items-center gap-2 text-stone-400 font-bold hover:text-orange-600 transition-all text-xs uppercase tracking-widest"
        >
          <i className="fa-solid fa-chevron-left group-hover:-translate-x-1 transition-transform"></i>
          Back to collection
        </button>

        <div className="space-y-12 md:space-y-20">
          <section className="bg-orange-50 border-2 border-dashed border-orange-200 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-orange-500 text-white p-2 rounded-lg shrink-0">
              <i className="fa-solid fa-circle-info text-sm"></i>
            </div>
            <div>
              <p className="text-orange-900 font-bold text-sm italic">
                Disclaimer: This post contains affiliate links. We may earn a commission at no extra cost to you.
              </p>
              <p className="text-orange-700/70 text-[10px] uppercase font-black tracking-widest mt-1">
                Verified Integrity Disclosure
              </p>
            </div>
          </section>

          <header className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-orange-600 text-white text-[9px] md:text-[10px] font-black px-2 md:px-3 py-1 rounded uppercase tracking-widest">
                {selectedProduct.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-stone-900 leading-[1.2] md:leading-[1.1] tracking-tight italic">
              {selectedProduct.title}
            </h1>
          </header>

          <section className="bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-14 border border-stone-200 shadow-sm relative overflow-hidden">
            <h3 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-4 md:mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              The Daily Essentials Verdict
            </h3>
            <p className="text-xl md:text-3xl text-stone-800 font-medium leading-relaxed italic relative z-10">
              {selectedProduct.description}
            </p>
          </section>

          <section className="space-y-10 md:space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 space-y-8">
                <h2 className="text-3xl font-black text-stone-900 italic">Why we chose this specific item</h2>
                <div className="prose prose-stone italic text-stone-600 text-lg leading-relaxed space-y-6">
                  <p>
                    Finding a real <span className="text-orange-600 font-bold">{selectedProduct.solution || 'solution'}</span> in a market flooded with empty promises is exhausting. We spent weeks looking at ingredients, material quality, and real-world results.
                  </p>
                  <p>
                    This isn't just a basic purchase; it's a vetted upgrade to your standard routine. It solved exactly the problem we were having.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-stone-200 shadow-sm h-fit">
                <h4 className="text-stone-900 font-black text-xs uppercase tracking-widest mb-6">Real-World Stats</h4>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-stone-100 pb-2">
                    <span className="text-[11px] font-bold text-stone-400 uppercase">Utility</span>
                    <span className="text-orange-600 font-black">Solid 10/10</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-stone-100 pb-2">
                    <span className="text-[11px] font-bold text-stone-400 uppercase">Durability</span>
                    <span className="text-orange-600 font-black">Tested High</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-stone-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center space-y-8 md:space-y-10 shadow-3xl relative overflow-hidden">
            <div className="space-y-3 md:space-y-4 relative z-10">
              <h3 className="text-orange-500 text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">Verified Purchase Link</h3>
              <p className="text-3xl md:text-5xl text-white font-black italic tracking-tight">Get the {selectedProduct.solution}</p>
            </div>
            <div className="relative z-10 space-y-6">
                <a 
                  href={amazonUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 md:gap-6 bg-white text-stone-900 px-8 md:px-16 py-5 md:py-8 rounded-2xl md:rounded-[2rem] text-lg md:text-xl font-black hover:scale-105 active:scale-95 transition-all shadow-2xl group w-full md:w-auto justify-center"
                >
                  Check Best Price <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform text-orange-600"></i>
                </a>
                <p className="text-[10px] md:text-[11px] text-orange-400 max-w-sm mx-auto leading-relaxed italic font-bold px-4">
                  Every recommendation on Daily Essentials is human-vetted and verified for quality.
                </p>
            </div>
          </section>
        </div>
      </div>
    );
  };

  const renderHome = () => (
    <div className="pb-12 md:pb-24">
      <section className="pt-24 md:pt-40 pb-8 md:pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <h1 className="text-5xl md:text-9xl text-stone-900 font-black leading-none tracking-tighter italic">
            Daily <span className="text-orange-600">Essentials.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-500 max-w-xl mx-auto font-medium italic">
            Curated tools that actually fix your daily frustrations. Tested for durability, verified for efficiency.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12 border-b-2 border-orange-600 pb-4 gap-2">
          <h2 className="text-2xl md:text-3xl font-black text-stone-900 uppercase tracking-tighter italic">The Tested Collection</h2>
          <span className="text-[9px] md:text-[10px] font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full self-start">
            {filteredProducts.length} Verified Solutions
          </span>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 md:py-20 bg-stone-100 rounded-[2rem] md:rounded-[3rem] px-4">
            <i className="fa-solid fa-face-frown text-4xl text-stone-300 mb-4"></i>
            <p className="text-lg md:text-xl font-bold text-stone-500 italic">No matches in our registry yet.</p>
          </div>
        )}
      </section>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900 bg-[#fcfbf9]">
      <header className="fixed top-0 left-0 right-0 z-[500] bg-white border-b border-stone-100 shadow-sm h-16 md:h-20 flex items-center overflow-visible">
        <div className="max-w-6xl mx-auto px-4 md:px-6 w-full flex items-center gap-4">
          <div className="relative flex-grow" ref={searchRef}>
            <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
              <i className="fa-solid fa-magnifying-glass text-orange-600 text-sm md:text-base"></i>
              <div className="h-4 w-px bg-stone-200 hidden md:block"></div>
            </div>
            <input 
              type="text"
              placeholder="Search by problem or item name..."
              value={searchQuery}
              onFocus={() => setShowSuggestions(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              className="w-full bg-stone-50 border border-stone-200 rounded-full py-2.5 md:py-3 px-10 md:px-16 text-sm md:text-base focus:outline-none focus:border-orange-500 transition-all font-medium placeholder:text-stone-400 shadow-inner"
            />
            
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200 max-h-[80vh] overflow-y-auto">
                <div className="px-4 py-3 bg-stone-50 border-b border-stone-100 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Quick Match</span>
                  <span className="text-[10px] font-bold text-orange-600 italic">{suggestions.length} Found</span>
                </div>
                {suggestions.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleProductClick(p)}
                    className="w-full text-left px-5 py-4 hover:bg-orange-50 transition-colors flex items-center justify-between group/item border-b border-stone-50 last:border-0"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold text-stone-900 group-hover/item:text-orange-600 transition-colors">{p.title}</span>
                      <span className="text-[10px] text-stone-400 uppercase tracking-tighter">{p.category}</span>
                    </div>
                    <i className="fa-solid fa-arrow-right-long text-stone-200 group-hover/item:text-orange-500 group-hover/item:translate-x-1 transition-all"></i>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="mt-16 md:mt-20 flex-grow">
        <Navbar 
          onNavigate={(page) => { setCurrentPage(page); setSelectedProduct(null); setSearchQuery(''); }} 
          currentPage={currentPage}
          onSearch={(query) => { setSearchQuery(query); if (query) setCurrentPage('home'); }}
        />
        <main>
          {currentPage === 'home' && renderHome()}
          {currentPage === 'details' && renderProductDetails()}
          {currentPage === 'contact' && (
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 text-center">
              <h2 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter mb-8 italic">Say <span className="text-orange-600">Hello</span></h2>
              <div className="bg-white border-2 border-orange-100 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl text-left space-y-8">
                <p className="text-lg md:text-xl text-stone-500 italic">Got a product that's actually good? Let us know.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="p-6 md:p-8 bg-orange-50/50 rounded-2xl border border-orange-100">
                    <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 text-orange-600">Email</h4>
                    <p className="font-bold text-stone-900 text-sm md:text-base break-words">hello@dailyessentials.net</p>
                  </div>
                  <div className="p-6 md:p-8 bg-stone-50 rounded-2xl border border-stone-200">
                    <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 text-stone-400">Response Time</h4>
                    <p className="font-bold text-stone-900 italic">Usually 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentPage === 'trust' && (
             <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 text-center">
               <h2 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter mb-12 italic">The <span className="text-orange-600">Trust</span> System</h2>
               <div className="grid gap-6 md:gap-8 text-left">
                  <div className="bg-white p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border-l-8 border-orange-600 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-black mb-4 italic">No Paid Placements</h3>
                    <p className="text-stone-500 italic text-sm md:text-base">Companies can't pay to be on Daily Essentials. If it's here, it's because it solved a real problem.</p>
                  </div>
                  <div className="bg-white p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border-l-8 border-stone-900 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-black mb-4 italic">Transparent Revenue</h3>
                    <p className="text-stone-500 italic text-sm md:text-base">We use affiliate links. If you buy something through this site, we might get a small commission from Amazon. It keeps the site alive.</p>
                  </div>
               </div>
             </div>
          )}
          {currentPage === 'about' && (
            <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-12 md:space-y-16 animate-in fade-in duration-700">
              <h2 className="text-6xl md:text-9xl font-black text-stone-900 tracking-tighter italic text-center leading-tight">Human <span className="text-orange-600">Led.</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-stone-600 text-base md:text-lg leading-relaxed italic">
                 <p>I started Daily Essentials because I was tired of generic lists. Everything on this site has been vetted by people who care about quality.</p>
                 <div className="bg-orange-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-orange-100">
                   <h3 className="text-orange-600 font-black not-italic uppercase text-xs md:text-sm tracking-widest mb-4">Our Promise</h3>
                   <p className="text-sm md:text-base opacity-80 leading-relaxed font-bold italic">No AI reviews. No fake ratings. Just honest thoughts on stuff that works.</p>
                 </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
