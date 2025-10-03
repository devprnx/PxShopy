'use client';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  className?: string;
  type?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
}

export default function Spinner({ 
  size = 'md', 
  color = 'primary', 
  className = '',
  type = 'spinner'
}: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-blue-600',
    secondary: 'border-gray-600',
    white: 'border-white',
    gray: 'border-gray-400'
  };

  if (type === 'dots') {
    return (
      <div className={`flex space-x-1 ${className}`}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-pulse`}
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.4s'
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse-scale" />
      </div>
    );
  }

  if (type === 'skeleton') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-gray-200 rounded-lg h-4 w-32 mb-2"></div>
        <div className="bg-gray-200 rounded-lg h-4 w-24"></div>
      </div>
    );
  }

  // Default spinner
  return (
    <div className={`${className} flex items-center justify-center`}>
      <div
        className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}
      />
    </div>
  );
}

// Product Card Skeleton Component
export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-64 sm:h-72 lg:h-80 bg-gray-200 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
      </div>
      
      {/* Content Skeleton */}
      <div className="p-6">
        {/* Category */}
        <div className="w-20 h-6 bg-gray-200 rounded-full mb-3" />
        
        {/* Title */}
        <div className="w-3/4 h-6 bg-gray-200 rounded mb-2" />
        
        {/* Description */}
        <div className="space-y-2 mb-4">
          <div className="w-full h-4 bg-gray-200 rounded" />
          <div className="w-2/3 h-4 bg-gray-200 rounded" />
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
            ))}
          </div>
          <div className="w-20 h-4 bg-gray-200 rounded ml-2" />
        </div>
        
        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <div className="w-20 h-8 bg-gray-200 rounded mb-1" />
            <div className="w-16 h-4 bg-gray-200 rounded" />
          </div>
          <div className="w-24 h-10 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

// Page Loading Skeleton
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-32 h-8 bg-gray-200 rounded" />
          <div className="flex space-x-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-16 h-6 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Loading Screen Component
export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto animate-bounce-gentle">
            <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
              E
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Loading...</h2>
        
        {/* Animated Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-loading-bar" />
        </div>
        
        {/* Floating Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full animate-float"
              style={{
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}