import React from 'react';
import { Satellite } from 'lucide-react';
import { Button } from './ui/Button';
import { WHATSAPP_LINK } from '../utils/constants';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900 opacity-90"></div>
        <img 
          src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg"
          alt="Satellite background" 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Conectividad sin límites con Starlink
            </h1>
            
            <div className="flex items-center mb-6">
              <Satellite className="text-blue-400 mr-2" size={24} />
              <p className="text-xl text-blue-300 font-semibold">Internet satelital de alta velocidad</p>
            </div>
            
            <p className="text-gray-300 text-lg mb-8">
              En Tolpa Fiber somos distribuidores oficiales de Starlink. Ofrecemos venta e instalación de productos Starlink 
              para hogares y empresas en toda la provincia de Corrientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href={WHATSAPP_LINK} 
                target="_blank" 
                size="lg"
                className="animate-pulse"
              >
                Consultar ahora
              </Button>
              <Button 
                href="#servicios" 
                variant="outline" 
                size="lg"
              >
                Ver todos los servicios
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#servicios" className="text-white opacity-75 hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};