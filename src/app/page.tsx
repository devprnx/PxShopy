'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Truck, Zap, ShoppingBag, Users, Globe, Award, TrendingUp, Heart, Search, Filter, Sparkles, Clock, Gift } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MotionWrapper from "@/components/ui/MotionWrapper";
import ProductCard from "@/components/ui/ProductCard";
import DemoPopup from '@/components/ui/DemoPopup';

const featuredProducts = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format',
    description: 'Studio-quality sound with noise cancellation technology',
    category: 'Audio',
    rating: 4.8,
    reviews: 234,
    badge: 'Best Seller',
    stock: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format',
    description: 'Track your health and fitness with advanced sensors',
    category: 'Electronics',
    rating: 4.6,
    reviews: 189,
    badge: 'Trending',
    stock: 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    price: 459.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format',
    description: 'Premium comfort for long work sessions',
    category: 'Furniture',
    rating: 4.9,
    reviews: 156,
    badge: 'Premium',
    stock: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: 'Organic Coffee Beans',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format',
    description: 'Single-origin beans roasted to perfection',
    category: 'Food',
    rating: 4.7,
    reviews: 89,
    badge: 'New',
    stock: 50,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const statsData = [
  { number: 25000, label: "Happy Customers", suffix: "+", icon: Users },
  { number: 850, label: "Products", suffix: "+", icon: ShoppingBag },
  { number: 95, label: "Countries", suffix: "+", icon: Globe },
  { number: 99, label: "Satisfaction Rate", suffix: "%", icon: Award },
];

const newFeatures = [
  {
    icon: Search,
    title: 'Advanced Search',
    description: 'Find exactly what you need with our powerful search and filter system',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Wishlist & Favorites',
    description: 'Save items for later and create personalized collections',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: TrendingUp,
    title: 'Real-time Analytics',
    description: 'See trending products and popular items in real-time',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Secure Checkout',
    description: 'Bank-level security with multiple payment options',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Express shipping available with real-time tracking',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Gift,
    title: 'Gift Cards',
    description: 'Perfect gifts for friends and family',
    color: 'from-red-500 to-pink-500'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Verified Customer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b000?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Amazing quality products and lightning-fast delivery. The customer service is exceptional!'
  },
  {
    name: 'Michael Chen',
    role: 'Tech Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Best online shopping experience I\'ve had. The product recommendations are spot-on.'
  },
  {
    name: 'Emily Davis',
    role: 'Frequent Shopper',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Love the user interface and the mobile app. Shopping has never been this easy!'
  }
];

export default function Home() {
  const [visibleStats, setVisibleStats] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible && !visibleStats) {
          setVisibleStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleStats]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <DemoPopup />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full animate-float blur-sm"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-white/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <MotionWrapper delay={0.2}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
              <h1 className="heading-1 text-white text-shadow-lg">
                Welcome to <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">PX Shop</span>
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-400 ml-3 animate-pulse" />
            </div>
          </MotionWrapper>
          
          <MotionWrapper delay={0.4}>
            <p className="text-large text-white/90 mb-8 max-w-3xl mx-auto text-shadow">
              Experience the future of shopping with our premium collection, AI-powered recommendations, and seamless mobile experience
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.5}>
            <div className="flex items-center justify-center space-x-8 mb-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper delay={0.6} variant="scale">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/products" 
                className="btn btn-primary text-lg px-8 py-4 glass-effect hover:scale-110 flex items-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/about" 
                className="btn btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-gray-900 flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Learn More</span>
              </Link>
            </div>
          </MotionWrapper>

          {/* Quick Stats Preview */}
          <MotionWrapper delay={0.8}>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">25k+</div>
                <div className="text-sm text-white/70">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">850+</div>
                <div className="text-sm text-white/70">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">99%</div>
                <div className="text-sm text-white/70">Satisfaction</div>
              </div>
            </div>
          </MotionWrapper>

          {/* Scroll Indicator */}
          <MotionWrapper delay={1}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
              <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m0 0V3" />
              </svg>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section id="stats-section" className="section-padding bg-white">
        <div className="container-custom">
          <MotionWrapper>
            <h2 className="heading-2 text-center mb-4 gradient-text">
              Trusted Worldwide
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for quality products and exceptional service
            </p>
          </MotionWrapper>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <MotionWrapper key={index} delay={index * 0.1} variant="scale">
                  <div className="text-center group hover-glow rounded-xl p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                      {visibleStats ? (
                        <CountUpAnimation end={stat.number} suffix={stat.suffix} />
                      ) : (
                        "0" + stat.suffix
                      )}
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* New Features Showcase */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <MotionWrapper>
            <div className="text-center mb-16">
              <h2 className="heading-2 gradient-text mb-4">
                Powerful Features
              </h2>
              <p className="text-large text-gray-600 max-w-2xl mx-auto">
                Experience shopping like never before with our cutting-edge features designed for your convenience
              </p>
            </div>
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <MotionWrapper key={index} delay={index * 0.1} variant="scale">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <MotionWrapper>
            <div className="text-center mb-16">
              <h2 className="heading-2 gradient-text mb-4">
                Featured Products
              </h2>
              <p className="text-large text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of premium products designed for style, comfort, and quality
              </p>
            </div>
          </MotionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <MotionWrapper key={product.id} variant="scale" delay={index * 0.1}>
                <ProductCard product={product} />
              </MotionWrapper>
            ))}
          </div>
          
          <MotionWrapper delay={0.8}>
            <div className="text-center mt-16">
              <Link 
                href="/products" 
                className="btn btn-primary text-lg px-8 py-4 hover-lift flex items-center space-x-2 mx-auto w-fit"
              >
                <span>View All Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-custom">
          <MotionWrapper>
            <div className="text-center mb-16">
              <h2 className="heading-2 gradient-text mb-4">
                What Our Customers Say
              </h2>
              <p className="text-large text-gray-600 max-w-2xl mx-auto">
                Real feedback from our valued customers around the world
              </p>
            </div>
          </MotionWrapper>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <MotionWrapper>
            <h2 className="heading-2 text-white mb-6 text-shadow-lg">
              Ready to Start Shopping?
            </h2>
            <p className="text-large text-white/90 mb-8 max-w-2xl mx-auto text-shadow">
              Join thousands of satisfied customers and discover amazing products with unbeatable prices and quality
            </p>
          </MotionWrapper>
          
          <MotionWrapper delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/products"
                className="btn btn-secondary text-lg px-8 py-4 hover-lift flex items-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Browse Products</span>
              </Link>
              <Link
                href="/profile"
                className="btn btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-gray-900 flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Create Account</span>
              </Link>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.5}>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-white/80">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/80">
                <Shield className="w-5 h-5" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/80">
                <Truck className="w-5 h-5" />
                <span>Free Shipping</span>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}

// Animated Counter Component
function CountUpAnimation({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return <span>{count}{suffix}</span>;
}
