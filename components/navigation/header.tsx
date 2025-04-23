"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, PhoneCall, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className={cn(
              "text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Sikkim Cab Service
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium hover:text-yellow-500 transition-colors duration-300",
                  isScrolled ? "text-gray-700" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="hidden lg:flex items-center gap-4 ml-4">
              <a 
                href="tel:+917584072603" 
                className={cn(
                  "flex items-center gap-1 hover:text-yellow-500 transition-colors duration-300",
                  isScrolled ? "text-gray-700" : "text-white"
                )}
              >
                <PhoneCall size={16} />
                <span className="text-sm">+91 7584072603</span>
              </a>
              <Button variant="default" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Book Now
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? "text-gray-700" : "text-white"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-gray-700" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/95 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-24`}
      >
        <nav className="flex flex-col items-center gap-6 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-lg font-medium hover:text-yellow-500 transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-4 mt-6">
            <a href="tel:+917584072603" className="flex items-center gap-2 text-white hover:text-yellow-500">
              <PhoneCall size={18} />
              <span>+91 7584072603</span>
            </a>
            <a href="tel:+917478995590" className="flex items-center gap-2 text-white hover:text-yellow-500">
              <PhoneCall size={18} />
              <span>+91 7478995590</span>
            </a>
            <a href="mailto:Info@sikkimcabservice.in" className="flex items-center gap-2 text-white hover:text-yellow-500">
              <Mail size={18} />
              <span>Info@sikkimcabservice.in</span>
            </a>
            <Button variant="default" className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white">
              Book Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;