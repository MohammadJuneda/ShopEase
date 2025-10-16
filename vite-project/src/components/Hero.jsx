import React, { useState, useEffect } from 'react';

const discountedProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$89.99',
    discount: '25%',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$199.99',
    discount: '15%',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 3,
    name: 'Leather Jacket',
    price: '$129.99',
    discount: '20%',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=80',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional: Auto change product every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % discountedProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const product = discountedProducts[currentIndex];

  return (
    <section className="relative w-full h-[80vh]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
      />

      {/* Product Info */}
      <div className="absolute bottom-10 left-10 bg-white bg-opacity-90 p-6 rounded-md max-w-sm">
        <span className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">
          {product.discount} OFF
        </span>
        <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
        <p className="text-xl mt-1">{product.price}</p>
      </div>
    </section>
  );
};

export default Hero;
