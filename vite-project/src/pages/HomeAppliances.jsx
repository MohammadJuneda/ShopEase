import React from "react";

const homeAppliances = [
  { id: 1, name: "Refrigerator", price: "$899.99", image: "https://picsum.photos/seed/fridge/400/300" },
  { id: 2, name: "Washing Machine", price: "$749.99", image: "https://picsum.photos/seed/washing/400/300" },
  { id: 3, name: "Microwave Oven", price: "$299.99", image: "https://picsum.photos/seed/microwave/400/300" },
  { id: 4, name: "Vacuum Cleaner", price: "$199.99", image: "https://picsum.photos/seed/vacuum/400/300" },
  { id: 5, name: "Air Conditioner", price: "$999.99", image: "https://picsum.photos/seed/ac/400/300" },
  { id: 6, name: "Water Purifier", price: "$249.99", image: "https://picsum.photos/seed/water/400/300" },
  { id: 7, name: "Electric Kettle", price: "$79.99", image: "https://picsum.photos/seed/kettle/400/300" },
  { id: 8, name: "Ceiling Fan", price: "$149.99", image: "https://picsum.photos/seed/fan/400/300" },
  { id: 9, name: "Air Fryer", price: "$129.99", image: "https://picsum.photos/seed/fryer/400/300" },
  { id: 10, name: "Iron Box", price: "$59.99", image: "https://picsum.photos/seed/iron/400/300" },
];

const HomeAppliances = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
          Home Appliances
        </h2>
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {homeAppliances.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {item.name}
                </h3>
                <p className="text-blue-600 font-bold mt-1">{item.price}</p>
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

export default HomeAppliances;
