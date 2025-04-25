"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, Calendar, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Define service categories
const categories = [
  { id: 'all', name: 'All Services' },
];

// Define services
const services = [
  {
    id: 1,
    title: 'Gangtok City Tour',
    description: 'Explore Gangtok’s top attractions including Tashi View Point, Ganesh Tok, and Banjhakri Falls.',
    image: 'https://imgs.search.brave.com/w8ftjAvldCl0s9jliziSdV0uHPiG2l9krf_BlXSBgSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/TWFydXRpL1N3aWZ0/LUR6aXJlLVRvdXIv/ODg2My8xNzE3Mzk3/OTE3MzgyL2Zyb250/LWxlZnQtc2lkZS00/Ny5qcGc_dHI9dy02/NjQ',
    price: 'From ₹1,500',
    category: 'city',
    features: [
      '8 hours duration',
      'Visit 10 attractions: Tashi View Point, Gunjan Monastery, Bakthang Falls, etc.',
      'Vehicles: Swift Dzire (4 pax), Innova Crysta (7 pax), Mahindra Bolero (9-10 pax)',
      'Professional driver'
    ]
  },
  {
    id: 2,
    title: 'Nathula Pass Trip',
    description: 'Visit the famous Indo-China border and experience the breathtaking Himalayan landscapes.',
    image: 'https://imgs.search.brave.com/dtmm6YmFdyOx2eX28z5VsZhG5GWKAfFy8hn9IlhVMUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/ci1pbWFnZXMvOTMw/eDYyMC9Ub3lvdGEv/SW5ub3ZhLUNyeXN0/YS85NjEyLzE3MjEw/MzE2OTY5ODcvMjIy/X3NpbHZlcl9lNWU1/ZTUuanBnP2ltd2lk/dGg9ODkwJmltcG9s/aWN5PXJlc2l6ZQ',
    price: 'From ₹3,500',
    category: 'outstation',
    features: [
      'Full day tour',
      'Permit assistance',
      'Vehicles: Innova Crysta (7 pax), Mahindra Bolero (9-10 pax)',
      'Experienced driver'
    ]
  },
  {
    id: 3,
    title: 'Bagdogra to Gangtok Transfer',
    description: 'Hassle-free pickup and drop service from Bagdogra Airport to your hotel in Gangtok.',
    image: 'https://imgs.search.brave.com/NA4-iI8P9H3cVw11Yhr8_POXzTbdo4iaYu8FI-w9koY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXV0b3Zpc3RhLmlu/L2Fzc2V0cy9wcm9k/dWN0X2ltYWdlcy9n/YWxsZXJ5L25ldy1t/YXJ1dGktZHppcmUt/ZnJvbnQuanBn',
    price: 'From ₹2,800',
    category: 'airport',
    features: [
      'Direct transfer',
      'Meet & greet',
      'Vehicles: Swift Dzire (4 pax), Innova Crysta (7 pax), Mahindra Xylo (7 pax)',
      'Luggage assistance'
    ]
  },
  {
    id: 4,
    title: '5 Days Sikkim Explorer',
    description: 'Comprehensive package covering major attractions in East and North Sikkim with accommodation.',
    image: 'https://imgs.search.brave.com/2UI2-3E-afOIYBQQIiN7Ri5TQ4I20cRQC1GKzJUI7AU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzkzMHg2MjAv/VG95b3RhL0lubm92/YS1DcnlzdGEvOTYx/Mi8xNjgwNTk5OTYy/ODA1L2Zyb250LXZp/ZXctMTE4LmpwZz9p/bXdpZHRoPTg5MCZp/bXBvbGljeT1yZXNp/emU',
    price: 'From ₹15,000',
    category: 'package',
    features: [
      '4 nights accommodation',
      'All transfers',
      'Vehicles: Innova Crysta (7 pax), Mahindra Xylo (7 pax)',
      'Experienced guide'
    ]
  },
  {
    id: 5,
    title: 'Pelling & West Sikkim Tour',
    description: 'Explore the hidden gems of West Sikkim including Pelling, Yuksom, and Khecheopalri Lake.',
    image: 'https://imgs.search.brave.com/apYVJQaxygfIMk9zSaZc0L9QD8hUOKlB12UWd4XZLcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS56aWdjZG4uY29t/L21lZGlhL21vZGVs/LzIwMjQvTm92L3Jl/YXItMy00LWxlZnQt/MTE5ODI5MDgxN185/MzB4NjIwLmpwZw',
    price: 'From ₹2,800',
    category: 'outstation',
    features: [
      '2-3 day tour',
      'Beautiful landscapes',
      'Vehicles: Swift Dzire (4 pax), Mahindra Bolero (9-10 pax)',
      'Comfortable vehicle'
    ]
  },
  {
    id: 6,
    title: 'Namchi Day Tour',
    description: 'Visit South Sikkim’s religious sites including Char Dham, Ravangla Buddha Park, and Temi Tea Garden.',
    image: 'https://imgs.search.brave.com/ti1wNU22UvzvNUenEcyIOBM5AMxEODkI5xq1tcApTp8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMxL1N1enVraV9T/d2lmdF9TcG9ydF8o/RlpfTlopXyVFMiU4/MCU5M19Gcm9udGFu/c2ljaHQsXzE0Ll9B/cHJpbF8yMDEzLF9E/JUMzJUJDc3NlbGRv/cmYuanBn',
    price: 'From ₹2,200',
    category: 'city',
    features: [
      'Full day tour',
      'Visit Char Dham, Buddha Park, Temi Tea Garden',
      'Vehicles: Swift Dzire (4 pax), Innova Crysta (7 pax)',
      'Professional driver'
    ]
  },
  {
    id: 7,
    title: 'NJP to Gangtok Transfer',
    description: 'Convenient transfer from NJP Railway Station to your hotel in Gangtok.',
    image: 'https://imgs.search.brave.com/OTmhnkOavJXfd68M_BaFOy3KoHcRnUbzObUj4KehMvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS56aWdjZG4uY29t/L21lZGlhL21vZGVs/LzIwMjMvRmViL2Zy/b250LTEtNC1sZWZ0/LTE1ODU3NjM5ODlf/OTMweDYyMC5qcGc',
    price: 'From ₹2,800',
    category: 'airport',
    features: [
      'Direct transfer',
      'Meet & greet',
      'Vehicles: WagonR (4 pax), Mahindra Xylo (7 pax), Mahindra Bolero (9-10 pax)',
      'Luggage assistance'
    ]
  },
  {
    id: 8,
    title: 'Changu Lake & Nathula Day Trip',
    description: 'A thrilling day trip from Gangtok to Changu Lake, Babamandir, and Nathula Pass.',
    image: 'https://imgs.search.brave.com/IBfpsDSqEyN2eJX3WdyYofx2hUD7iP_Vl6MVC1QlMWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmNhcmxlbG8u/Y29tL3VwbG9hZHMv/bW9kZWwvbWFoaW5k/cmEtYm9sZXJvLTEu/d2VicA',
    price: 'From ₹4,000',
    category: 'outstation',
    features: [
      'Full day tour',
      'Visit Changu Lake, Babamandir, Nathula Pass',
      'Vehicles: Innova Crysta (7 pax), Mahindra Bolero (9-10 pax)',
      'Permit assistance'
    ]
  },
  {
    id: 9,
    title: 'Lachen-Lachung Tour',
    description: 'A 2-night, 3-day adventure exploring the scenic beauty of Lachen and Lachung in North Sikkim.',
    image: 'https://imgs.search.brave.com/2Q_tBBUYXuOOydZdreV_0RSn4mruZ5jsyKNDurBEbYM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyYW5kYmlrZS5j/b20vX25leHQvaW1h/Z2U_dXJsPWh0dHBz/Oi8vaW1hZ2VzLmNh/cmFuZGJpa2UuY29t/L2Nhci1pbWFnZXMv/Y29sb3JzL21haGlu/ZHJhL3h5bG8vbWFo/aW5kcmEteHlsby1k/aWFtb25kLXdoaXRl/LnBuZz92PTEmdz03/NTAmcT03NQ',
    price: 'From ₹12,000',
    category: 'package',
    features: [
      '2 nights accommodation',
      'All transfers',
      'Vehicles: Innova Crysta (7 pax), Mahindra Xylo (7 pax)',
      'Experienced guide'
    ]
  },
  {
    id: 10,
    title: 'Siliguri to Darjeeling Transfer',
    description: 'Comfortable cab service from Siliguri to Darjeeling with scenic views.',
    image: 'https://imgs.search.brave.com/23RUp3_aC8Ffjylm25Dt1CFT35-fSezr35ERspaRA6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWx0aW1hdGVzcGVj/cy5jb20vY2FyZ2Fs/bGVyeS8xMTMvMzUz/NC9NYWhpbmRyYS1C/b2xlcm8tMi5qcGc',
    price: 'From ₹3,000',
    category: 'airport',
    features: [
      'Direct transfer',
      'Luggage assistance',
      'Vehicles: Swift Dzire (4 pax), Innova Crysta (7 pax), Mahindra Bolero (9-10 pax)',
      'Professional driver'
    ]
  },
  {
    id: 11,
    title: 'Darjeeling to Siliguri Transfer',
    description: 'Hassle-free transfer from Darjeeling to Siliguri with comfortable vehicles.',
    image: 'https://suritours.in/nimg/taxi-service-in-delhi.jpg',
    price: 'From ₹3,000',
    category: 'airport',
    features: [
      'Direct transfer',
      'Luggage assistance',
      'Vehicles: Swift Dzire (4 pax), Innova Crysta (7 pax), Mahindra Bolero (9-10 pax)',
      'Professional driver'
    ]
  },
  {
    id: 12,
    title: 'Siliguri to Gangtok Transfer',
    description: 'Scenic transfer from Siliguri to Gangtok with reliable cab service.',
    image: 'https://imgs.search.brave.com/1AhgCR1-I7cYZPOoemKupbTuegyhvUVf5n9p3QGFZzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/djNjYXJzLmNvbS9t/ZWRpYS9tb2RlbC1p/bWdzLzE2NDU2MDIw/NTktMjAyMi1NYXJ1/dGktTmV4YS1CYWxl/bm8uanBn',
    price: 'From ₹2,800',
    category: 'airport',
    features: [
      'Direct transfer',
      'Luggage assistance',
      'Vehicles: Baleno (4 pax), Mahindra Xylo (7 pax), Mahindra Bolero (9-10 pax)',
      'Professional driver'
    ]
  }
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
      
          <h2 className="text-3xl md:text-4xl text-gray-600 font-bold mb-4">Explore Our Premium Cab Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From city tours to multi-day adventures, we offer a wide range of comfortable and reliable transportation services across Sikkim and Darjeeling.
          </p>
        </div>

        {/* Category Tabs */}
      

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredServices.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200 rounded-xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {service.price}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg transition-colors duration-200">
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;