import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Array<{
    id: string;
    name: string;
    price: number;
    images: string[];
    isNew?: boolean;
    collection?: string;
  }>;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;