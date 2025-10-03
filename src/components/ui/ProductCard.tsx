'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/types';
import { formatPrice } from '@/utils/helpers';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
      
      // Simulate loading for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
    } finally {
      setIsLoading(false);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-3 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="block relative">
        <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-all duration-700 group-hover:scale-110 ${
              isHovered ? 'brightness-110' : 'brightness-100'
            }`}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          
          {/* Quick View Button */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Link
              href={`/products/${product.id}`}
              className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 transform scale-90 hover:scale-100 transition-all duration-300 text-sm px-4 py-2"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="hidden sm:inline">Quick View</span>
              <span className="sm:hidden">View</span>
            </Link>
          </div>

          {/* Badge */}
          {product.stock < 5 && product.stock > 0 && (
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse-gentle">
                Only {product.stock} left!
              </span>
            </div>
          )}

          {/* Wishlist Button */}
          <button 
            onClick={handleWishlistToggle}
            className={`absolute top-4 right-4 w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
              inWishlist 
                ? 'bg-red-500 text-white' 
                : 'bg-white/20 text-white hover:bg-white hover:text-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        {/* Category */}
        <div className="mb-2">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-500 text-sm ml-2">(24 reviews)</span>
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold gradient-text">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.price * 1.2)}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isLoading || product.stock === 0}
            className={`btn btn-primary flex items-center space-x-2 transform transition-all duration-300 ${
              isLoading ? 'scale-95' : 'hover:scale-105'
            } disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="hidden sm:inline">Adding...</span>
                <span className="sm:hidden">...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 8l1.6 8H19" />
                </svg>
                <span className="hidden sm:inline">Add to Cart</span>
                <span className="sm:hidden">Add</span>
              </>
            )}
          </button>
        </div>

        {/* Stock Status */}
        {product.stock === 0 && (
          <div className="mt-4">
            <span className="text-red-500 text-sm font-medium bg-red-50 px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
        isHovered ? 'shadow-2xl shadow-blue-500/20' : 'shadow-transparent'
      }`} />
    </div>
  );
}