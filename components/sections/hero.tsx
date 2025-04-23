"use client";

import { useState, useEffect } from 'react';
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

  return (
    <section id="home" className="relative h-screen">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-[fadeInUp_1s_0.3s_forwards]">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-0 animate-[fadeInUp_1s_0.5s_forwards]">
            {slides[currentSlide].subtitle}
          </p>
          <div className="space-x-4 opacity-0 animate-[fadeInUp_1s_0.7s_forwards]">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-6 text-lg">
              Book Your Cab Now
            </Button>
            <Button variant="outline" className="text-black border-white hover:bg-white/10">
              Explore Services <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
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
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;