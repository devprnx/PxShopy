'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Smartphone, 
  Zap, 
  Shield, 
  Heart, 
  Star,
  Gift,
  Truck,
  X
} from 'lucide-react';

export default function FloatingFeaturesButton() {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Fully responsive design optimized for all devices"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with smooth animations"
    },
    {
      icon: Shield,
      title: "Secure Checkout",
      description: "SSL encrypted and secure payment processing"
    },
    {
      icon: Heart,
      title: "Wishlist",
      description: "Save your favorite items for later"
    },
    {
      icon: Star,
      title: "Reviews",
      description: "Customer reviews and ratings system"
    },
    {
      icon: Gift,
      title: "Special Offers",
      description: "Exclusive deals and promotional codes"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping options"
    }
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <HelpCircle className="w-6 h-6" />
      </motion.button>

      {/* Features Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 text-white relative">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  <div className="pr-12">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">PX Shop Features</h2>
                    <p className="text-blue-100 text-sm sm:text-base">Discover what makes our platform special</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-3 sm:p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{feature.title}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Demo Note */}
                  <div className="mt-6 p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="w-3 h-3 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-900 text-sm mb-1">Demo Version</h4>
                        <p className="text-amber-700 text-xs sm:text-sm">
                          This is a demonstration showcasing modern e-commerce features and design patterns.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Got it!
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}