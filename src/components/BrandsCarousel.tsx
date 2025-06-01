import { useEffect, useState } from "react";

const BrandsCarousel = () => {
  const brands = [
    "Integralmedica",
    "Growth", 
    "Flora Nativa do Brasil",
    "Global",
    "Max Titanium",
    "Color Andina",
    "Vitafor",
    "Darkness",
    "Nutrial",
    "Herbavitae",
    "Seiva Real",
    "Bioklein",
    "Bold",
    "Copra"
  ];

  // Duplicar as marcas para criar loop infinito
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-natural-off-white border-y border-natural-gray-medium/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-title font-bold text-2xl sm:text-3xl text-natural-green mb-2">
            Trabalhamos com as Melhores Marcas
          </h2>
          <p className="font-body text-natural-gray-dark">
            Qualidade garantida pelos líderes do mercado
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 sm:space-x-12">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand}-${index}`}
                className="text-center flex-shrink-0 transition-all duration-300 transform hover:scale-105"
              >
                <span className="font-body text-base sm:text-lg text-natural-gray-dark font-medium whitespace-nowrap hover:text-natural-green transition-colors duration-300 border-2 border-white rounded-2xl px-6 py-3 bg-white/60 backdrop-blur-sm shadow-sm">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-natural-off-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-natural-off-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
