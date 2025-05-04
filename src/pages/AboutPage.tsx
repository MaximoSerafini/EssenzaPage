import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="relative h-96 md:h-[500px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5698867/pexels-photo-5698867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="FEMA Brand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About FEMA</h1>
          <p className="text-xl text-white max-w-xl">
            Contemporary fashion with a distinctive style. Born in Argentina, inspired by global trends.
          </p>
        </div>
      </section>
      
      {/* Our story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg mx-auto">
              <p>
                Founded in 2019 in La Rioja, Argentina, FEMA began as a small project between friends with a shared passion for contemporary fashion and distinctive style. What started as a small collection of t-shirts has evolved into a comprehensive lifestyle brand.
              </p>
              <p>
                Our name, FEMA, represents our core values: Fashion, Evolution, Minimalism, and Artistry. These principles guide every piece we create, ensuring our collections are timeless yet modern, simple yet distinctive.
              </p>
              <p>
                We draw inspiration from urban landscapes, architectural forms, and the diverse cultural heritage of Argentina, creating clothing that bridges the gap between casual streetwear and contemporary fashion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We source the finest materials and work with skilled artisans to create products that are built to last.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable Practices</h3>
              <p className="text-gray-600">
                We're committed to reducing our environmental impact through responsible production methods and materials.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Local Craftsmanship</h3>
              <p className="text-gray-600">
                We proudly support local communities by producing our items in Argentina with local talent.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/5698820/pexels-photo-5698820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Alejandro Martínez</h3>
              <p className="text-gray-600">Founder & Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/5698835/pexels-photo-5698835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sofia Rodríguez</h3>
              <p className="text-gray-600">Head of Design</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/5698827/pexels-photo-5698827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Mateo González</h3>
              <p className="text-gray-600">Production Manager</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the FEMA Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive offers, and events.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 text-black focus:outline-none"
            />
            <Button variant="primary" className="px-6 py-3 bg-white text-black hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      
      {/* Shop link */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Our Collections</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the latest styles from our FW'25 collection and more.
          </p>
          
          <Link to="/products">
            <Button variant="primary" size="lg" className="inline-flex items-center">
              Shop Now <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;