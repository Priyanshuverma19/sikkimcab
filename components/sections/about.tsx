"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Car, Award, Users, Map } from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Us' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'team', label: 'Our Team' }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with Animation */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } }
            }}
          >
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1644794/pexels-photo-1644794.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Sikkim Landscape with vehicle" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            
            {/* Stats Cards */}
            <div className="absolute bottom-8 left-4 right-4 grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-lg"
                variants={fadeIn}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Car className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">15+</p>
                    <p className="text-xs text-gray-500">Premium Vehicles</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-lg"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">4K+</p>
                    <p className="text-xs text-gray-500">Happy Customers</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-lg"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">6+</p>
                    <p className="text-xs text-gray-500">Years Experience</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-lg"
                variants={fadeIn}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Map className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">100+</p>
                    <p className="text-xs text-gray-500">Destinations</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Travel Partner in Sikkim
            </h2>
            
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-2 px-4 font-medium text-sm mr-4 ${
                    activeTab === tab.id
                      ? 'border-b-2 border-yellow-500 text-yellow-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'about' && (
                <div>
                  <p className="text-gray-600 mb-4">
                    Sikkim Cab Service is a premier transportation service provider in Sikkim, dedicated to offering comfortable, reliable, and affordable cab services to tourists and locals alike. With our fleet of well-maintained vehicles and experienced drivers, we ensure a smooth and memorable journey through the beautiful landscapes of Sikkim.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Since our establishment, we have been committed to delivering exceptional service, prioritizing safety, comfort, and customer satisfaction. Our deep knowledge of Sikkim's terrain and tourist destinations allows us to provide valuable insights and create unforgettable travel experiences.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Professional Drivers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">24/7 Customer Support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Well-maintained Vehicles</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Competitive Pricing</span>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'mission' && (
                <div>
                  <p className="text-gray-600 mb-4">
                    Our mission at Sikkim Cab Service is to provide exceptional transportation experiences that showcase the beauty of Sikkim while ensuring the highest standards of safety, comfort, and customer satisfaction.
                  </p>
                  <p className="text-gray-600 mb-6">
                    We aim to be the most trusted cab service in Sikkim, known for our reliability, professionalism, and genuine care for our customers' needs. We are committed to sustainable tourism practices that respect and preserve the natural beauty of the region for future generations.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Customer-First Approach</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Eco-Friendly Practices</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Local Community Support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Continuous Improvement</span>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'team' && (
                <div>
                  <p className="text-gray-600 mb-4">
                    Behind Sikkim Cab Service is a dedicated team of professionals who are passionate about providing exceptional travel experiences. Our team includes experienced drivers with extensive knowledge of Sikkim's roads and attractions, friendly customer service representatives, and skilled maintenance staff.
                  </p>
                  <p className="text-gray-600 mb-6">
                    All our drivers are locally hired, professionally trained, and fluent in multiple languages to ensure smooth communication. They undergo regular training to update their skills and knowledge about the region, ensuring that our customers receive the best possible service.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Professionally Trained</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Local Expertise</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Multilingual Staff</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Customer-Oriented</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;