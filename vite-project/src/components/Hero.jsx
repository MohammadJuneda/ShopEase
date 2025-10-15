import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to E-Shop</h1>
        <p className="mt-4 text-lg">Find the best products at amazing prices</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
