import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductGrid from '../components/product/ProductGrid';
import { getNewArrivals } from '../data/products';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5698867/pexels-photo-5698867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="FEMA Colección FW'25"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Colección FW'25
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-xl">
          Descubre nuestra última colección
        </p>
        <Button 
          variant="primary" 
          size="lg" 
          className="bg-white text-black hover:bg-gray-100"
        >
          <Link to="/productos" className="flex items-center">
            Ver Colección <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

const NewArrivals = () => {
  const newProducts = getNewArrivals();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Novedades</h2>
          <Link to="/productos" className="text-sm font-medium flex items-center group">
            Ver Todo 
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <ProductGrid products={newProducts} />
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  const images = [
    "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5699517/pexels-photo-5699517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5698867/pexels-photo-5698867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5698839/pexels-photo-5698839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Síguenos @fema</h2>
          <p className="text-gray-600">Comparte tu estilo con #FEMAstyle</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <a 
              key={index}
              href="https://instagram.com/fema" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative aspect-square overflow-hidden group"
            >
              <img 
                src={image} 
                alt={`Instagram post ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <InstagramFeed />
    </div>
  );
};

export default HomePage;