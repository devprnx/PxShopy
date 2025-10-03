'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  ShoppingBag, 
  Star,
  MapPin,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

export default function AboutPage() {
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

  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: ShoppingBag, label: "Products Sold", value: "50,000+" },
    { icon: Star, label: "5-Star Reviews", value: "8,500+" },
    { icon: Globe, label: "Countries Served", value: "25+" }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/images/team/ceo.jpg",
      description: "Visionary leader with 15+ years in e-commerce"
    },
    {
      name: "Sarah Chen",
      role: "Head of Design",
      image: "/images/team/designer.jpg",
      description: "Creative genius behind our stunning UI/UX"
    },
    {
      name: "Mike Rodriguez",
      role: "Tech Lead",
      image: "/images/team/tech.jpg",
      description: "Full-stack developer ensuring seamless experience"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make puts our customers at the center"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on the quality of our products"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly evolving to bring you the latest trends"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 sm:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-yellow-400">PX Shop</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Your premium destination for quality products, exceptional service, and an unmatched shopping experience.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Story Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 sm:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded in 2020, PX Shop began as a vision to revolutionize online shopping. 
                  We believed that e-commerce should be more than just transactions—it should be 
                  an experience that delights and inspires.
                </p>
                <p>
                  Starting from a small garage with big dreams, we've grown into a trusted 
                  platform serving thousands of customers worldwide. Our commitment to quality, 
                  innovation, and customer satisfaction has remained unwavering throughout our journey.
                </p>
                <p>
                  Today, PX Shop stands as a testament to what's possible when passion meets 
                  purpose. We're not just selling products; we're building relationships and 
                  creating moments of joy in our customers' lives.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  "To make premium shopping accessible to everyone, everywhere. We strive to 
                  deliver not just products, but experiences that exceed expectations and 
                  create lasting value for our customers."
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Vision 2025</p>
                    <p className="text-sm text-blue-100">Leading the future of e-commerce</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Statistics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-16 sm:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              These numbers tell the story of our growing community
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our community
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 sm:py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind PX Shop's success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers and discover what makes PX Shop special
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/products"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Shop Now</span>
              </motion.a>
              <motion.a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}