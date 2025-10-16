import React from 'react';

const products = [
  {
    id: 1,
    name: 'Classic Sneakers',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Leather Jacket',
    price: '$129.99',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: '$199.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1657223144998-e5aa4fa2db7c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 5,
    name: 'Denim Jeans',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Backpack',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    name: 'Sunglasses',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    name: 'Formal Shirt',
    price: '$34.99',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 9,
    name: 'Running Shoes',
    price: '$74.99',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 10,
    name: 'Bluetooth Speaker',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 11,
    name: 'Casual T-Shirt',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 12,
    name: 'Leather Belt',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 13,
    name: 'Digital Camera',
    price: '$299.99',
    image: 'https://images.unsplash.com/photo-1698502453332-03fa2ddceb71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbCUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 14,
    name: 'Winter Coat',
    price: '$149.99',
    image: 'https://images.unsplash.com/photo-1542068829-1115f7259450?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 15,
    name: 'Sports Watch',
    price: '$179.99',
    image: 'https://images.unsplash.com/photo-1587400519568-1fe0329bfb2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 16,
    name: 'Wireless Mouse',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 17,
    name: 'Gaming Keyboard',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 18,
    name: 'Office Chair',
    price: '$129.99',
    image: 'https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 19,
    name: 'Coffee Maker',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 20,
    name: 'Smartphone',
    price: '$699.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
  },
];

const ProductList = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
                <p className="text-blue-600 font-bold mt-1">{product.price}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
