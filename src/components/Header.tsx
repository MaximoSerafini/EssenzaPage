import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { WHATSAPP_LINK } from '../utils/constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900 bg-opacity-95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-white">TOLPA</span>
              <span className="text-blue-400">Fiber</span>
            </span>
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Inicio', 'Servicios', 'Starlink', 'Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <Button 
              href={WHATSAPP_LINK} 
              target="_blank"
              variant="primary"
            >
              Contactar ahora
            </Button>
          </div>
          
          <button 
            className="md:hidden text-white p-2" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-900 animate-fadeIn">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {['Inicio', 'Servicios', 'Starlink', 'Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-200 hover:text-white py-2 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button 
                  href={WHATSAPP_LINK} 
                  target="_blank"
                  variant="primary"
                  className="w-full"
                >
                  Contactar ahora
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};