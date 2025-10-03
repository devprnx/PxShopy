'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Zap, ShoppingBag } from 'lucide-react';

export default function DemoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem('px-shop-demo-popup-seen');
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('px-shop-demo-popup-seen', 'true');
  };

  const handleContinue = () => {
    setIsVisible(false);
    localStorage.setItem('px-shop-demo-popup-seen', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Popup Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Gradient */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative">
                <div className="absolute top-4 right-4">
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Welcome to PX Shop!</h2>
                    <p className="text-blue-100 text-sm">Demo Version</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start space-x-3 mb-6">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Demo Notice</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      This is a demonstration version of PX Shop. Some features like payment processing 
                      and order fulfillment are simulated for showcase purposes.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-800 text-sm font-medium">
                        💻 For the best experience, we recommend using a PC or larger screen. 
                        However, our site is fully optimized for mobile devices too!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm">✨ Available Features:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Browse products and categories</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Add items to cart</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>User authentication</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Responsive design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span>Simulated checkout process</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleContinue}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Start Shopping</span>
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
                  >
                    Maybe Later
                  </button>
                </div>

                {/* Fine Print */}
                <p className="text-xs text-gray-400 text-center mt-4">
                  This popup won't show again during your session
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}