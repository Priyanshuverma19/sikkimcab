import Link from 'next/link';
import { PhoneCall, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Sikkim Cab Service</h3>
            <p className="text-gray-300 mb-6">
              Providing premium cab services in Sikkim for tourists and locals alike. Explore the beauty of Sikkim with comfort and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Link href="#services">Airport Transfers</Link>
              </li>
              <li className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Link href="#services">Local Sightseeing</Link>
              </li>
              <li className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Link href="#services">Outstation Tours</Link>
              </li>
              <li className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Link href="#services">Custom Tour Packages</Link>
              </li>
              <li className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Link href="#services">Corporate Travel</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <PhoneCall size={20} className="text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 75840 72603</p>
                  <p className="text-gray-300">+91 74789 95590</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Info@sikkimcabservice.in</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Maniram phalidara Maniram near Maniram school Namchi south Sikkim, Sikkim-737126
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sikkim Cab Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;