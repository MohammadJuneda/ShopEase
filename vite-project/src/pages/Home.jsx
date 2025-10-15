import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Sample fetch; later point this to your backend API
    const sampleProducts = [
      {
        _id: "1",
        name: "Product 1",
        price: 99.99,
        image: "https://via.placeholder.com/300",
      },
      {
        _id: "2",
        name: "Product 2",
        price: 149.99,
        image: "https://via.placeholder.com/300",
      },
      // add more sample data
    ];
    setProducts(sampleProducts);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
