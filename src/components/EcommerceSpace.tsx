import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AI Development Kit',
    price: 199.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    name: 'Web Dev Pro Bundle',
    price: 149.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80',
  },
  {
    id: 3,
    name: 'Cybersecurity Toolkit',
    price: 249.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
];

const EcommerceSpace: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-custom-dark-gray rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                <div className="flex items-center">
                  <Star size={16} className="text-custom-white mr-1" />
                  <span>{product.rating.toFixed(1)}</span>
                </div>
              </div>
              <button className="w-full bg-custom-light-gray text-custom-black py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover-bg-custom-white transition-colors duration-300">
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommerceSpace;