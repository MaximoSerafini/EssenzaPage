import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const handleWhatsAppCheckout = () => {
    const message = cartItems.map(item => 
      `• ${item.name} - Talle: ${item.size} - Color: ${item.color} - Cantidad: ${item.quantity}`
    ).join('\n');
    
    const whatsappMessage = `¡Hola! Me gustaría comprar:\n\n${message}\n\nTotal: $${subtotal.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/541123456789?text=${encodedMessage}`, '_blank');
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 max-w-4xl text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Tu Carrito está Vacío</h1>
        <p className="text-gray-600 mb-8">No has agregado ningún producto a tu carrito.</p>
        <Link to="/productos">
          <Button variant="primary" size="lg">
            Continuar Comprando
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Tu Carrito</h1>
        
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="flex border-b border-gray-200 py-6">
              <div className="w-24 h-24 mr-4 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Talle: {item.size} | Color: {item.color}
                    </p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex border border-gray-300">
                    <button 
                      onClick={() => updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center border-r border-gray-300"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-10 h-8 flex items-center justify-center text-sm">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border-l border-gray-300"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id, item.size, item.color)}
                    className="text-gray-400 hover:text-black transition-colors"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="mt-6 space-y-3">
              <Button 
                variant="primary" 
                fullWidth 
                size="lg"
                onClick={handleWhatsAppCheckout}
              >
                Comprar por WhatsApp
              </Button>
              
              <Link 
                to="/productos" 
                className="inline-flex items-center justify-center w-full text-sm text-gray-600 hover:text-black"
              >
                Continuar Comprando <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;