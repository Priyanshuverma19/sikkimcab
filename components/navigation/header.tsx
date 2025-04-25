"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Framer Motion variants for mobile menu
  const menuVariants = {
    open: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    closed: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 ">
            <img
              src="/logo.png" // Replace with actual logo path
              alt="Sikkim Cab Service Logo"
              className={cn(
                'h-20 w-32 transition-all duration-300',
                isScrolled ? 'filter brightness-0' : 'filter brightness-100'
              )}
             
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'font-medium hover:text-yellow-500 transition-colors duration-300',
                  isScrolled ? 'text-gray-700' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="hidden lg:flex items-center gap-4 ml-4">
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+917584072603"
                  className={cn(
                    'flex items-center gap-1 hover:text-yellow-500 transition-colors duration-300 text-sm',
                    isScrolled ? 'text-gray-700' : 'text-white'
                  )}
                >
                  <PhoneCall size={16} />
                  <span>+91 7584072603</span>
                </a>
                <a
                  href="tel:+917478995590"
                  className={cn(
                    'flex items-center gap-1 hover:text-yellow-500 transition-colors duration-300 text-sm',
                    isScrolled ? 'text-gray-700' : 'text-white'
                  )}
                >
                  <PhoneCall size={16} />
                  <span>+91 7478995590</span>
                </a>
                <a
                  href="mailto:Info@sikkimcabservice.in"
                  className={cn(
                    'flex items-center gap-1 hover:text-yellow-500 transition-colors duration-300 text-sm',
                    isScrolled ? 'text-gray-700' : 'text-white'
                  )}
                >
                  <Mail size={16} />
                  <span>Info@sikkimcabservice.in</span>
                </a>
              </div>
              <Button
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-6 py-2"
              >
                Book Now
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-black/95 pt-24"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            role="dialog"
            aria-label="Mobile navigation menu"
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
                <a
                  href="tel:+917584072603"
                  className="flex items-center gap-2 text-white hover:text-yellow-500"
                >
                  <PhoneCall size={18} />
                  <span>+91 7584072603</span>
                </a>
                <a
                  href="tel:+917478995590"
                  className="flex items-center gap-2 text-white hover:text-yellow-500"
                >
                  <PhoneCall size={18} />
                  <span>+91 7478995590</span>
                </a>
                <a
                  href="mailto:Info@sikkimcabservice.in"
                  className="flex items-center gap-2 text-white hover:text-yellow-500"
                >
                  <Mail size={18} />
                  <span>Info@sikkimcabservice.in</span>
                </a>
                <Button
                  variant="default"
                  className="mt-4 w-full max-w-xs bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-2"
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;