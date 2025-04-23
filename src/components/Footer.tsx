import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { WHATSAPP_NUMBER, EMAIL } from '../utils/constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold">
                <span className="text-white">TOLPA</span>
                <span className="text-blue-400">Fiber</span>
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Soluciones de conectividad en toda la provincia de Corrientes. 
              Especialistas en fibra óptica, Starlink y obras civiles.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/tolpafiber/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900 p-2 rounded-full hover:bg-blue-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Fibra Óptica</a></li>
              <li><a href="#starlink" className="text-gray-400 hover:text-white transition-colors">Starlink</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Obras Civiles</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400" />
                <a 
                  href={`tel:${WHATSAPP_NUMBER.replace(/\s+/g, '')}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-400" />
                <a 
                  href={`mailto:${EMAIL}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-blue-400" />
                <span className="text-gray-400">Corrientes, Argentina</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-900 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TOLPA Fiber. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};