import React from 'react';

// Reusable Card Component
const Card = ({ title, feature, description, imageUrl, className = '' }) => {
  return (
    <div className={`relative rounded-xl overflow-hidden shadow-lg transition duration-300 ${className}`}>

      {/* Image element */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
        style={{ minHeight: '180px' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Top Left Text (Title) */}
      <div className="absolute top-5 left-5 flex items-center text-white">
        <span className="text-sm font-medium opacity-90">{title}</span>
      </div>

      {/* Bottom Left Text (Feature & Description) */}
      <div className="absolute bottom-5 left-5 text-white">
        <p className="text-3xl font-extrabold leading-tight">{feature}</p>
        <p className="text-xs font-light mt-1 opacity-90">{description}</p>
      </div>
    </div>
  );
};

// Main 2 Component
const ProductArea2 = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header Area */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            AI Agent Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge AI agents designed to enhance productivity, automate tasks, and provide intelligent insights for businesses and individuals alike. Experience the future of AI-driven solutions today.
          </p>
          <button className="mt-10 px-12 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 font-medium tracking-wide text-base">
            Explore Products
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">

          <Card
            title="Smart Assistant"
            feature="AI-Powered"
            description="Automates daily tasks seamlessly"
            imageUrl="https://images.unsplash.com/photo-1581091215365-52f3ff4d7a2b?auto=format&fit=crop&w=800&q=80"
            className="col-span-2 row-span-2 min-h-[400px]"
          />

          <Card
            title="Data Analyzer"
            feature="Real-Time"
            description="Generates actionable insights"
            imageUrl="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80"
            className="col-span-2"
          />

          <Card
            title="Chat AI"
            feature="Conversational"
            description="Engages with users naturally"
            imageUrl="https://images.unsplash.com/photo-1676856432722-bf7c3f6d1698?auto=format&fit=crop&w=800&q=80"
            className="col-span-1"
          />

          <Card
            title="AI Scheduler"
            feature="Automated"
            description="Organizes meetings and reminders"
            imageUrl="https://images.unsplash.com/photo-1605902711622-cfb43c4436b5?auto=format&fit=crop&w=800&q=80"
            className="col-span-1"
          />

          <Card
            title="Visual AI"
            feature="Image Recognition"
            description="Identifies objects with precision"
            imageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            className="col-span-1"
          />

          <Card
            title="Voice AI"
            feature="Speech Recognition"
            description="Transcribes audio accurately"
            imageUrl="https://images.unsplash.com/photo-1581091012184-5ee18a7f3b2a?auto=format&fit=crop&w=800&q=80"
            className="col-span-1"
          />

          <Card
            title="Predictive AI"
            feature="Forecasting"
            description="Predicts trends with high accuracy"
            imageUrl="https://images.unsplash.com/photo-1581091012184-5ee18a7f3b2a?auto=format&fit=crop&w=800&q=80"
            className="col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductArea2;
