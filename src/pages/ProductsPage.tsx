import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import { getProductsByCategory, products } from '../data/products';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('categoria');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    if (categoryParam && categoryParam !== 'todos') {
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setFilteredProducts(products);
    }
  }, [categoryParam]);
  
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Tienda</h1>
        
        <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 space-x-4">
          <CategoryButton 
            category="todos" 
            active={!categoryParam || categoryParam === 'todos'}
          >
            Todos
          </CategoryButton>
          <CategoryButton 
            category="tops" 
            active={categoryParam === 'tops'}
          >
            Remeras
          </CategoryButton>
          <CategoryButton 
            category="bottoms" 
            active={categoryParam === 'bottoms'}
          >
            Pantalones
          </CategoryButton>
          <CategoryButton 
            category="outerwear" 
            active={categoryParam === 'outerwear'}
          >
            Abrigos
          </CategoryButton>
          <CategoryButton 
            category="accessories" 
            active={categoryParam === 'accessories'}
          >
            Accesorios
          </CategoryButton>
        </div>
        
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

const CategoryButton = ({ category, active, children }) => {
  return (
    <a
      href={`/productos?categoria=${category}`}
      className={`
        whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
        ${active 
          ? 'bg-black text-white' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }
      `}
    >
      {children}
    </a>
  );
};

export default ProductsPage;