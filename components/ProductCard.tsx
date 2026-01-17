
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const valueLabels = [
    "Verified Value",
    "Choice Pick",
    "Essential Fix",
    "Daily Favorite",
    "Quality Build"
  ];
  const randomLabel = valueLabels[Math.floor(Math.random() * product.id.length) % valueLabels.length];

  // Check for specific tags for badges
  const isBestSeller = product.tags.some(tag => tag.toLowerCase().includes('best seller'));
  const isMustHave = product.tags.some(tag => tag.toLowerCase().includes('must have'));

  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-3xl p-8 flex flex-col h-full cursor-pointer transition-all duration-500 ease-out border border-stone-200 hover:border-orange-200 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05),0_10px_30px_rgba(251,146,60,0.08)] hover:scale-[1.02] relative overflow-hidden"
    >
      {/* Badge Section */}
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
      
      <h3 className="text-2xl font-black text-stone-900 leading-snug group-hover:text-orange-600 transition-colors mb-6 italic">
        {product.title}
      </h3>
      
      <p className="text-sm text-stone-500 line-clamp-3 mb-8 italic leading-relaxed">
        "{product.description}"
      </p>
      
      <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
        <span className="text-stone-900 font-black uppercase text-[9px] tracking-[0.2em] flex items-center gap-2 transition-all">
          View Detail <i className="fa-solid fa-arrow-right text-orange-500 group-hover:translate-x-1 transition-transform"></i>
        </span>
        <div className="text-stone-400 font-bold uppercase text-[9px] tracking-widest italic opacity-60">
          {randomLabel}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
