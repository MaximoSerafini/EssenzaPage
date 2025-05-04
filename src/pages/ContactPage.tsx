import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Reach out using any of the methods below.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-gray-50 p-6 h-full">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={20} className="mr-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Store Location</h3>
                    <p className="text-gray-600">La Rioja 995</p>
                    <p className="text-gray-600">Corrientes, Argentina 3400</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="mr-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+541123456789" className="hover:text-black">+54 11 2345-6789</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="mr-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@fema.arg" className="hover:text-black">info@fema.arg</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="mr-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 10am - 8pm</p>
                    <p className="text-gray-600">Saturday: 10am - 6pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/fema"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com/fema"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/fema"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none"
                  placeholder="How can we help?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <Button variant="primary" size="lg" className="flex items-center">
                <Send size={18} className="mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="mt-16">
        <div className="h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.4861220711424!2d-58.8338371!3d-27.4692702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456ca6d31f319d%3A0xc0acd83b5aa2480!2sLa%20Rioja%20995%2C%20W3400AMP%20Corrientes!5e0!3m2!1sen!2sar!4v1635784532934!5m2!1sen!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="FEMA Store Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;