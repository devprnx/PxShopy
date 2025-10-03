'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Home, 
  Search, 
  ShoppingBag, 
  ArrowLeft, 
  Phone,
  Mail,
  RefreshCw
} from 'lucide-react';

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingElements = [
    { size: 'w-16 h-16 sm:w-20 sm:h-20', position: 'top-10 left-10', delay: 0 },
    { size: 'w-12 h-12 sm:w-16 sm:h-16', position: 'top-20 right-20', delay: 1 },
    { size: 'w-20 h-20 sm:w-24 sm:h-24', position: 'bottom-20 left-20', delay: 2 },
    { size: 'w-14 h-14 sm:w-18 sm:h-18', position: 'bottom-10 right-10', delay: 0.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.position} rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Number */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 mb-6 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, even the best explorers sometimes take a wrong turn!
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
              <Search className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
            </div>
            <p className="text-blue-200 text-sm sm:text-base">
              Page Not Found in Our Galaxy
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>

            <Link
              href="/products"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Browse Products</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Helpful Suggestions */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 mb-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              What you can do:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="font-semibold text-white mb-2">Visit Homepage</h4>
                <p className="text-blue-200 text-sm">Start fresh from our main page</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6 text-purple-300" />
                </div>
                <h4 className="font-semibold text-white mb-2">Search Products</h4>
                <p className="text-blue-200 text-sm">Find what you're looking for</p>
              </div>
              
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-indigo-300" />
                </div>
                <h4 className="font-semibold text-white mb-2">Contact Support</h4>
                <p className="text-blue-200 text-sm">We're here to help you</p>
              </div>
            </div>
          </motion.div>

          {/* Popular Pages */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/products' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Cart', href: '/cart' }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-blue-200 hover:text-white px-3 py-1 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Support Contact */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-blue-200 text-sm sm:text-base mb-4">
              Still can't find what you're looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="text-blue-300 hover:text-white flex items-center space-x-2 justify-center transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Email Support</span>
              </Link>
              <span className="text-blue-300 hidden sm:inline">•</span>
              <a
                href="tel:+15551234567"
                className="text-blue-300 hover:text-white flex items-center space-x-2 justify-center transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Support</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </div>
  );
}