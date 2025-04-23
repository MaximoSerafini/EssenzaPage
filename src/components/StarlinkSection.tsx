import React from 'react';
import { Satellite, Zap, Globe, Wifi } from 'lucide-react';
import { Button } from './ui/Button';
import { WHATSAPP_LINK } from '../utils/constants';

export const StarlinkSection: React.FC = () => {
  return (
    <section id="starlink" className="py-20 bg-blue-950 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full border-4 border-blue-300"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full border-2 border-blue-400"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-blue-400 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-900 rounded-full mb-4">
            <Satellite size={32} className="text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Servicios Starlink</h2>
          <p className="text-blue-300 max-w-2xl mx-auto text-lg">
            Conectividad satelital de alta velocidad para hogares, empresas y zonas rurales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/23764/pexels-photo.jpg" 
                alt="Starlink Antenna" 
                className="w-full" 
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">¿Por qué elegir Starlink?</h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Zap className="text-blue-400" size={24} />,
                  title: 'Alta velocidad',
                  description: 'Conexión de internet de alta velocidad con baja latencia en cualquier ubicación.'
                },
                {
                  icon: <Globe className="text-blue-400" size={24} />,
                  title: 'Cobertura global',
                  description: 'Ideal para zonas rurales o lugares sin infraestructura de fibra óptica.'
                },
                {
                  icon: <Wifi className="text-blue-400" size={24} />,
                  title: 'Fácil instalación',
                  description: 'Nuestro equipo se encarga de la instalación y configuración completa.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 bg-blue-900 p-2 rounded-lg">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-200">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button 
                href={WHATSAPP_LINK} 
                target="_blank" 
                size="lg"
                className="w-full sm:w-auto"
              >
                Solicitar información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};