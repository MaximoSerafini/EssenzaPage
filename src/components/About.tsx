import React from 'react';
import { MapPin, Users, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">¿QUIÉNES SOMOS?</h2>
            
            <p className="text-gray-700 mb-6 text-lg">
              Tolpa Fiber es una empresa de Corrientes que provee soluciones de conectividad en toda la provincia,
              con un enfoque en proporcionar servicios de calidad y atención personalizada.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: <MapPin className="text-blue-500" size={20} />,
                  text: 'Operamos en toda la provincia de Corrientes.'
                },
                {
                  icon: <Users className="text-blue-500" size={20} />,
                  text: 'Equipo de profesionales con amplia experiencia en telecomunicaciones.'
                },
                {
                  icon: <Clock className="text-blue-500" size={20} />,
                  text: 'Servicio y soporte técnico disponible para nuestros clientes.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-3">{item.icon}</div>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Nuestro compromiso</h3>
              <p className="text-gray-700">
                Nos comprometemos a llevar conectividad de calidad a cada rincón de la provincia,
                utilizando las mejores tecnologías y brindando un servicio excepcional a todos nuestros clientes.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
            
            <div className="relative z-10">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg" 
                  alt="Equipo de Tolpa Fiber" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};