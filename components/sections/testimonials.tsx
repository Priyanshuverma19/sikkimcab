"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Delhi, India',
    rating: 5,
    text: 'Our trip to Sikkim was made exceptional by Sikkim Cab Service. The driver was knowledgeable about all the local attractions and went out of his way to ensure we had a comfortable journey. The vehicle was clean and well-maintained. Highly recommend!',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Mumbai, India',
    rating: 5,
    text: 'I visited Sikkim with my family last month and booked Sikkim Cab Service for our entire trip. The service was prompt, professional, and the driver was very friendly. He suggested some offbeat places which were the highlights of our trip!',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 3,
    name: 'David Wilson',
    location: 'London, UK',
    rating: 5,
    text: 'As international tourists, we were a bit apprehensive about transportation in Sikkim, but Sikkim Cab Service put all our concerns to rest. Their excellent service, reliable drivers, and clean vehicles made exploring this beautiful state a pleasure.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 4,
    name: 'Anjali Gupta',
    location: 'Bangalore, India',
    rating: 4,
    text: 'We had a wonderful experience with Sikkim Cab Service during our 7-day trip. Our driver was punctual, courteous, and had extensive knowledge about local culture and attractions. The cab was comfortable and perfect for the mountainous terrain.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 5,
    name: 'Takashi Yamamoto',
    location: 'Tokyo, Japan',
    rating: 5,
    text: 'Excellent service from booking to completion of our tour. The driver was very professional and spoke good English, which was important for us. The vehicle was comfortable for long journeys and we felt safe throughout our Sikkim adventure.',
    image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    // Reset autoplay timer when manually changing testimonials
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      if (autoplay) {
        autoplayRef.current = setInterval(nextTestimonial, 5000);
      }
    }
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextTestimonial, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 500 : -500,
        opacity: 0
      };
    }
  };

  const direction = useRef(1);

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-500/10 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about their experiences with Sikkim Cab Service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] md:h-[320px]">
            <AnimatePresence initial={false} custom={direction.current} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction.current}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className="relative bg-gray-800 rounded-xl p-6 md:p-8 h-full">
                  <div className="absolute -top-6 left-8 bg-yellow-500 rounded-full p-3">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex-grow">
                      <p className="text-gray-300 italic">"{testimonials[currentIndex].text}"</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <img 
                            src={testimonials[currentIndex].image} 
                            alt={testimonials[currentIndex].name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{testimonials[currentIndex].name}</p>
                          <p className="text-gray-400 text-sm">{testimonials[currentIndex].location}</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star 
                            key={idx} 
                            className={cn(
                              "h-4 w-4",
                              idx < testimonials[currentIndex].rating 
                                ? "text-yellow-500 fill-yellow-500" 
                                : "text-gray-400"
                            )} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => {
                direction.current = -1;
                prevTestimonial();
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    idx === currentIndex ? "bg-yellow-500 w-8" : "bg-gray-600 hover:bg-gray-500"
                  )}
                  onClick={() => {
                    direction.current = idx > currentIndex ? 1 : -1;
                    goToTestimonial(idx);
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => {
                direction.current = 1;
                nextTestimonial();
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;