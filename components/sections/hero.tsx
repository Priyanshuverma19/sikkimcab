"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://assurecabs.com/wp-content/uploads/2023/11/best-taxi-service-in-ahmedabad-assure-cabs.webp",
      title: "Explore Sikkim's Beauty",
      subtitle: "With Premium Cab Services"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJGIgZDZSFry-zYJ2Cjr9yFKj2QhpaWW1oMOQ9cA23erzAoHjMCdIfVVWRVjSG9I3lbg&usqp=CAU",
      title: "Comfortable & Reliable",
      subtitle: "Travel With Confidence"
    },
    {
      image: "https://suritours.in/nimg/taxi-service-in-delhi.jpg",
      title: "Discover Hidden Gems",
      subtitle: "Expert Local Drivers"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Framer Motion variants for text animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence>
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              role="img"
              aria-label={`Slide ${index + 1}: ${slide.title}`}
            >
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <div className="max-w-xl text-white">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            className="space-x-4 space-y-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 text-lg rounded-lg">
              Book Your Cab Now
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/20 hover:text-white py-3"
            >
              Explore Services <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-yellow-500 w-12"
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;