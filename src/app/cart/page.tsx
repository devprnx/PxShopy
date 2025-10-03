'use client';

import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { formatPrice } from '@/utils/helpers';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowRight, 
  ArrowLeft,
  Lock,
  Heart,
  Tag
} from 'lucide-react';

export default function CartPage() {
  const { items, totalAmount, totalItems, updateQuantity, removeItem } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const handleCheckout = () => {
    if (!user) {
      router.push('/auth/login?redirect=/checkout');
    } else {
      router.push('/checkout');
    }
  };

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 }
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm sm:max-w-md w-full"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <ShoppingCart className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Discover amazing products and add them to your cart to continue shopping.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <Link
                href="/products"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/"
                className="w-full bg-gray-100 text-gray-700 py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300 block text-center text-sm sm:text-base"
              >
                Go Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link
                href="/products"
                className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Continue Shopping</span>
              </Link>
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Shopping Cart</h1>
                <span className="text-xs sm:text-sm text-gray-500">({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-gray-500 hidden sm:block">
              Secure shopping at PX Shop
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    layout
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3">
                          <span className="text-2xl font-bold text-blue-600">{formatPrice(item.price)}</span>
                          <span className="text-sm text-gray-500">each</span>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start space-x-4">
                          <div className="flex items-center space-x-1">
                            <Tag className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-green-600 font-medium">In Stock</span>
                          </div>
                          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>Save for later</span>
                          </button>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center bg-gray-100 rounded-xl p-1">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-300"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-semibold text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-300"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center space-x-1 text-sm text-red-500 hover:text-red-700 transition-colors mt-1"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                  <span className="text-gray-900 font-medium">{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900 font-medium">{formatPrice(totalAmount * 0.08)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">
                      {formatPrice(totalAmount * 1.08)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Lock className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </button>
                
                {!user && (
                  <p className="text-xs text-gray-500 text-center">
                    You'll be redirected to login before checkout
                  </p>
                )}

                <div className="text-center">
                  <Link
                    href="/products"
                    className="text-blue-600 hover:text-purple-600 font-medium text-sm transition-colors duration-300"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Lock className="w-4 h-4" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Your payment information is encrypted and secure
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}