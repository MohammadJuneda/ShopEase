import React from "react";

const sportsProducts = [
  { id: 1, name: "Football", price: "₹999", image: "https://picsum.photos/seed/sport1/400/300" },
  { id: 2, name: "Cricket Bat", price: "₹1,499", image: "https://picsum.photos/seed/sport2/400/300" },
  { id: 3, name: "Tennis Racket", price: "₹1,299", image: "https://picsum.photos/seed/sport3/400/300" },
  { id: 4, name: "Basketball", price: "₹799", image: "https://picsum.photos/seed/sport4/400/300" },
  { id: 5, name: "Badminton Set", price: "₹1,199", image: "https://picsum.photos/seed/sport5/400/300" },
  { id: 6, name: "Gym Dumbbells", price: "₹1,999", image: "https://picsum.photos/seed/sport6/400/300" },
  { id: 7, name: "Yoga Mat", price: "₹499", image: "https://picsum.photos/seed/sport7/400/300" },
  { id: 8, name: "Cycling Helmet", price: "₹899", image: "https://picsum.photos/seed/sport8/400/300" },
  { id: 9, name: "Running Shoes", price: "₹2,499", image: "https://picsum.photos/seed/sport9/400/300" },
  { id: 10, name: "Skipping Rope", price: "₹199", image: "https://picsum.photos/seed/sport10/400/300" },
  { id: 11, name: "Swimming Goggles", price: "₹499", image: "https://picsum.photos/seed/sport11/400/300" },
  { id: 12, name: "Boxing Gloves", price: "₹1,299", image: "https://picsum.photos/seed/sport12/400/300" },
  { id: 13, name: "Golf Ball Set", price: "₹999", image: "https://picsum.photos/seed/sport13/400/300" },
  { id: 14, name: "Hiking Backpack", price: "₹2,499", image: "https://picsum.photos/seed/sport14/400/300" },
  { id: 15, name: "Knee Pads", price: "₹699", image: "https://picsum.photos/seed/sport15/400/300" },
  { id: 16, name: "Table Tennis Bat", price: "₹599", image: "https://picsum.photos/seed/sport16/400/300" },
  { id: 17, name: "Skateboard", price: "₹1,899", image: "https://picsum.photos/seed/sport17/400/300" },
  { id: 18, name: "Sports Bottle", price: "₹399", image: "https://picsum.photos/seed/sport18/400/300" },
  { id: 19, name: "Sports Shorts", price: "₹599", image: "https://picsum.photos/seed/sport19/400/300" },
  { id: 20, name: "Sweatband Set", price: "₹299", image: "https://picsum.photos/seed/sport20/400/300" },
];

const fallbackImage = "https://via.placeholder.com/400x300?text=Image+Unavailable";

const Sports = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Sports Products</h2>
      <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {sportsProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
            />
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

export default Sports;
