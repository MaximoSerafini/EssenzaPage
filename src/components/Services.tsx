import React from 'react';
import { Wifi, Satellite, Construction } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { ServiceProps } from '../types';
import { WHATSAPP_LINK } from '../utils/constants';

const services: ServiceProps[] = [
  {
    id: 'fibra',
    title: 'FIBRA ÓPTICA',
    description: 'Construcción de redes de fibra óptica para hogares y empresas con la mejor tecnología.',
    icon: <Wifi size={40} className="text-blue-500" />,
    imageUrl: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg'
  },
  {
    id: 'starlink',
    title: 'SERVICIOS STARLINK',
    description: 'Venta e instalación de productos Starlink para internet satelital de alta velocidad.',
    icon: <Satellite size={40} className="text-blue-400" />,
    imageUrl: 'https://images.pexels.com/photos/41005/satellite-soyuz-spaceship-space-station-41005.jpeg',
    featured: true
  },
  {
    id: 'obras',
    title: 'OBRAS CIVILES',
    description: 'Proyectos de obras civiles diversos para infraestructura de telecomunicaciones.',
    icon: <Construction size={40} className="text-blue-500" />,
    imageUrl: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Tolpa Fiber ofrecemos soluciones de conectividad completas para toda la provincia de Corrientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<ServiceProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  imageUrl, 
  featured = false 
}) => {
  return (
    <Card 
      featured={featured}
      className={`h-full flex flex-col ${featured ? 'transform hover:scale-105' : 'hover:transform hover:scale-102'}`}
    >
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">{icon}</div>
        <h3 className={`text-xl font-bold mb-2 ${featured ? 'text-white' : 'text-blue-900'}`}>{title}</h3>
        <p className={`mb-6 flex-grow ${featured ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
        
        <Button 
          href={id === 'starlink' ? '#starlink' : WHATSAPP_LINK}
          target={id !== 'starlink' ? '_blank' : undefined}
          variant={featured ? 'primary' : 'outline'}
          className="mt-auto"
        >
          {id === 'starlink' ? 'Ver más' : 'Consultar'}
        </Button>
      </div>
    </Card>
  );
};