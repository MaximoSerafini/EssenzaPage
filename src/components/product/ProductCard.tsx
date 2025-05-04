import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    isNew?: boolean;
    collection?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/productos/${product.id}`} className="block relative">
        <div className="overflow-hidden relative pb-[125%]">
          <div 
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{ opacity: isHovered ? 0 : 1 }}
          >
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="object-cover h-full w-full"
            />
          </div>
          {product.images[1] && (
            <div 
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              <img 
                src={product.images[1]} 
                alt={`${product.name} - vista alternativa`} 
                className="object-cover h-full w-full"
              />
            </div>
          )}
          
          {product.isNew && (
            <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 z-10">
              NUEVO
            </div>
          )}
          
          {product.collection === 'fw25' && (
            <div className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 z-10">
              FW'25
            </div>
          )}
        </div>
        
        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium text-black group-hover:underline">
            {product.name}
          </h3>
          <p className="text-sm text-gray-700">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;