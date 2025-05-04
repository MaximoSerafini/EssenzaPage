import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Logo variant="white" />
            <a 
              href="https://instagram.com/fema" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <a href="tel:+541123456789" className="flex items-center hover:text-gray-300">
              <Phone size={16} className="mr-2" />
              +54 11 2345-6789
            </a>
            <a href="mailto:info@fema.arg" className="flex items-center hover:text-gray-300">
              <Mail size={16} className="mr-2" />
              info@fema.arg
            </a>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              La Rioja 995, Corrientes
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;