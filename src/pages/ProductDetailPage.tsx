import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = getProductById(id || '');
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0] || '');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <p className="mb-6">El producto que buscas no existe.</p>
        <Link to="/productos">
          <Button variant="primary">Volver a la tienda</Button>
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona un talle');
      return;
    }
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: 1
    });
  };

  const translateColor = (color: string) => {
    const colorMap = {
      'Black': 'Negro',
      'White': 'Blanco',
      'Gray': 'Gris',
      'Navy': 'Azul Marino',
      'Beige': 'Beige',
      'Olive': 'Verde Oliva',
      'Blue': 'Azul'
    };
    return colorMap[color] || color;
  };
  
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8">
        <Link to="/productos" className="inline-flex items-center text-sm hover:underline mb-8">
          <ArrowLeft size={16} className="mr-1" /> Volver a la tienda
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square border-2 overflow-hidden ${
                      currentImageIndex === index ? 'border-black' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - vista ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
              <p className="text-xl font-medium mt-2">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-2">
                6 cuotas sin interés de ${(product.price / 6).toFixed(2)}
              </p>
            </div>
            
            {/* Color selection */}
            <div>
              <h3 className="text-sm font-medium mb-2">Color: {translateColor(selectedColor)}</h3>
              <div className="flex space-x-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                      selectedColor === color ? 'border-black' : 'border-gray-300'
                    }`}
                    aria-label={`Seleccionar color ${translateColor(color)}`}
                    title={translateColor(color)}
                  >
                    <span 
                      className="w-6 h-6 rounded-full" 
                      style={{ 
                        backgroundColor: 
                          color.toLowerCase() === 'black' ? '#000' : 
                          color.toLowerCase() === 'white' ? '#fff' : 
                          color.toLowerCase() === 'gray' ? '#888' : 
                          color.toLowerCase() === 'navy' ? '#001f3f' : 
                          color.toLowerCase() === 'beige' ? '#f5f5dc' : 
                          color.toLowerCase() === 'olive' ? '#556b2f' : 
                          color.toLowerCase() === 'blue' ? '#0000ff' : '#ddd'
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size selection */}
            <div>
              <h3 className="text-sm font-medium mb-2">Talle</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 border text-sm font-medium transition-colors
                      ${selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-gray-400'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Add to cart */}
            <Button 
              variant="primary" 
              fullWidth 
              onClick={handleAddToCart}
              className="py-3"
            >
              <ShoppingBag size={18} className="mr-2" /> Agregar al Carrito
            </Button>
            
            {/* Product description */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium mb-2">Descripción</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Additional info */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium mb-2">Información adicional</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Envío gratis en compras superiores a $100</li>
                <li>• Devolución gratuita dentro de los 30 días</li>
                <li>• Pago seguro con todas las tarjetas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;