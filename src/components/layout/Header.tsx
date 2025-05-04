import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className="flex-1 md:flex-initial text-center md:text-left">
            <Link to="/" className="inline-block">
              <Logo />
            </Link>
          </div>
          
          <nav className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            md:flex absolute md:relative top-full left-0 w-full md:w-auto 
            flex-col md:flex-row bg-white md:bg-transparent 
            shadow-lg md:shadow-none p-4 md:p-0 z-50
          `}>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/productos">Tienda</NavLink>
          </nav>
          
          <Link to="/carrito" className="p-2 text-black relative" aria-label="Carrito">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <Link 
      to={to} 
      className={`
        block py-2 md:py-0 md:mx-4 relative font-medium text-sm
        transition-colors duration-300
        ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}
      `}
    >
      {children}
    </Link>
  );
};

export default Header;