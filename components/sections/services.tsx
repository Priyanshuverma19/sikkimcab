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
  { id: 'city', name: 'City Tours' },
  { id: 'outstation', name: 'Outstation' },
  { id: 'airport', name: 'Airport Transfer' },
  { id: 'package', name: 'Tour Packages' }
];

// Define services
const services = [
  {
    id: 1,
    title: 'Gangtok City Tour',
    description: 'Explore the beautiful capital city of Sikkim with our comfortable cabs and knowledgeable drivers.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmBe4ViH3rVr3l9qFqe3-cmcK-PanK4Er149up1O0QsGtIkdamdkg4I-t3FDANjzuyzM&usqp=CAU',
    price: 'From ₹1,500',
    category: 'city',
    features: ['8 hours duration', 'Professional driver', 'All major attractions', 'Comfortable vehicle']
  },
  {
    id: 2,
    title: 'Nathula Pass Trip',
    description: 'Visit the famous Indo-China border and experience the breathtaking Himalayan landscapes.',
    image: 'https://imgs.search.brave.com/YdK0K25X3S2fuHClEXec0f8jYEnNVpPVBwr580fxqbw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RvY2tjYWtl/LmNvbS9wdWJsaWMv/Zi9jLzUvZmM1NzAy/ZGEtYTExNS00Nzg1/LTljMGQtYTQ5Mjdl/NWI1ZWEwX2xhcmdl/L3ZpbnRhZ2UtdGF4/aS1zY2VuZS1zdG9j/a2Nha2UuanBn',
    price: 'From ₹3,500',
    category: 'outstation',
    features: ['Full day tour', 'Permit assistance', 'High altitude experience', 'Experienced driver']
  },
  {
    id: 3,
    title: 'Airport to Gangtok Transfer',
    description: 'Hassle-free pickup and drop service from Bagdogra Airport to your hotel in Gangtok.',
    image: 'https://suritours.in/nimg/taxi-service-in-delhi.jpg',
    price: 'From ₹2,800',
    category: 'airport',
    features: ['Direct transfer', 'Meet & greet', 'Luggage assistance', 'Comfortable journey']
  },
  {
    id: 4,
    title: '5 Days Sikkim Explorer',
    description: 'Comprehensive package covering major attractions in East and North Sikkim with accommodation.',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2023/4/299170381/JI/OO/QJ/70879542/product-jpeg-500x500.jpg',
    price: 'From ₹15,000',
    category: 'package',
    features: ['4 nights accommodation', 'All transfers', 'Sightseeing included', 'Experienced guide']
  },
  {
    id: 5,
    title: 'Pelling & West Sikkim Tour',
    description: 'Explore the hidden gems of West Sikkim including Pelling, Yuksom and Khecheopalri Lake.',
    image: 'https://cabserviceshyderabad.com/wp-content/uploads/2020/12/local-cab-services-hyderabad.png',
    price: 'From ₹2,800',
    category: 'outstation',
    features: ['2-3 day tour', 'Beautiful landscapes', 'Monastery visits', 'Comfortable vehicle']
  },
  {
    id: 6,
    title: 'Namchi Day Tour',
    description: 'Visit South Sikkim\'s religious and cultural sites including the famous Char Dham complex.',
    image: 'https://png.pngtree.com/png-vector/20240613/ourlarge/pngtree-retro-vintage-taxi-cab-png-image_12731790.png',
    price: 'From ₹2,200',
    category: 'city',
    features: ['Full day tour', 'Religious sites', 'Scenic views', 'Professional driver']
  },
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
          <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Premium Cab Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From city tours to multi-day adventures, we offer a wide range of comfortable and reliable transportation services across Sikkim.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={cn(
                "rounded-full",
                activeCategory === category.id 
                  ? "bg-yellow-500 hover:bg-yellow-600 text-white" 
                  : "border-gray-300 text-gray-700"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

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
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
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