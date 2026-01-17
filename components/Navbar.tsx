
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, onSearch }) => {
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

export default Navbar;
