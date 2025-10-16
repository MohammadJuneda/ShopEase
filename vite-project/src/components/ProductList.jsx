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
    image: 'https://images.unsplash.com/photo-1512499617640-c2f999c6e9f5?auto=format&fit=crop&w=400&q=80',
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
    image: 'https://images.unsplash.com/photo-1528701800489-20c0fda3b228?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 10,
    name: 'Bluetooth Speaker',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f999c6e9f5?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 11,
    name: 'Casual T-Shirt',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 12,
    name: 'Leather Belt',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1503342452485-86b7aa4c58b0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 13,
    name: 'Digital Camera',
    price: '$299.99',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 14,
    name: 'Winter Coat',
    price: '$149.99',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 15,
    name: 'Sports Watch',
    price: '$179.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
  },
];

const ProductList = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
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
