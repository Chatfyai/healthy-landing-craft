
import { useEffect, useState } from "react";

const BrandsCarousel = () => {
  const brands = [
    { name: "Integralmedica", logo: "🏋️" },
    { name: "Growth", logo: "🌱" },
    { name: "Optimum Nutrition", logo: "💪" },
    { name: "Universal", logo: "🔥" },
    { name: "Max Titanium", logo: "⚡" },
    { name: "Probiótica", logo: "🧬" },
    { name: "Vitafor", logo: "🍃" },
    { name: "Darkness", logo: "🌙" },
    { name: "Midway", logo: "🎯" },
    { name: "Essential", logo: "💊" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [brands.length]);

  const getVisibleBrands = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(brands[(currentIndex + i) % brands.length]);
    }
    return visible;
  };

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
          <div className="flex justify-center items-center space-x-8 sm:space-x-12">
            {getVisibleBrands().map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-w-[120px]"
              >
                <div className="text-4xl mb-2 filter grayscale hover:grayscale-0 transition-all duration-300">
                  {brand.logo}
                </div>
                <span className="font-body text-sm text-natural-gray-dark text-center font-medium">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-natural-off-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-natural-off-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
