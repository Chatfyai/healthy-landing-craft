import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/5584998561010?text=Ol%C3%A1', '_blank');
  };

  const openMaps = () => {
    window.open('https://maps.app.goo.gl/9QTfxxkAjnFn6Srq6', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Logo no topo */}
      <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1200 delay-300 ${
        isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
      }`}>
        <img 
          src="/Logo-borda-branca.png" 
          alt="Naturalys Logo"
          className="h-10 w-auto sm:h-12 lg:h-16 drop-shadow-2xl filter hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="v.png"
          alt="Casal correndo ao pôr do sol"
          className="w-full h-full object-cover"
        />
        {/* Overlay removido para mostrar imagem normal */}
      </div>

      {/* Reduced Organic Particles Background - menos visível */}
      <div className="absolute inset-0 opacity-5">
        {/* Main floating organic shapes */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-natural-orange/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-natural-off-white/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-natural-orange/20 rounded-full blur-2xl animate-float-medium delay-500"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-natural-off-white/15 rounded-full blur-xl animate-float-fast delay-700"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-natural-orange/20 rounded-full blur-xl animate-float-medium delay-300"></div>
        
        {/* Smaller floating particles - pollen/seeds effect */}
        <div className="absolute top-32 left-1/3 w-4 h-4 bg-natural-orange/40 rounded-full animate-float-particle delay-200"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-natural-off-white/50 rounded-full animate-float-particle delay-500"></div>
        <div className="absolute top-1/3 right-1/5 w-5 h-5 bg-natural-orange/30 rounded-full animate-float-particle delay-1000"></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-natural-off-white/60 rounded-full animate-float-particle delay-1500"></div>
        <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-natural-orange/25 rounded-full animate-float-particle delay-800"></div>
        
        {/* Glow particles */}
        <div className="absolute top-40 right-1/3 w-6 h-6 bg-natural-orange/30 rounded-full blur-sm animate-glow-pulse delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-natural-off-white/20 rounded-full blur-sm animate-glow-pulse delay-600"></div>
      </div>
      
      {/* Container movido para baixo */}
      <div className="absolute bottom-0 left-0 right-0 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Title with Progressive Reveal - com sombras para melhor legibilidade */}
            <h1 className={`font-title font-bold text-lg sm:text-xl lg:text-2xl text-natural-off-white mb-12 leading-tight transition-all duration-1000 drop-shadow-lg uppercase ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className={`inline-block transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Sua Jornada para uma{" "}
              </span>
              <span className={`text-natural-orange inline-block transition-all duration-700 delay-500 drop-shadow-lg ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Vida Mais Saudável
              </span>{" "}
              <span className={`inline-block transition-all duration-700 delay-800 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Começa Aqui
              </span>
            </h1>
            
            {/* Strategic CTA Buttons Entrance */}
            <div className={`flex flex-col sm:flex-row gap-1 justify-center items-center transition-all duration-1000 delay-1500 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <button 
                type="button"
                onClick={openWhatsApp}
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
              >
                <svg aria-hidden="true" className="w-5 h-5 me-2 -ms-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" fill="#25D366"/>
                </svg>
                Fale no WhatsApp
              </button>
              
              <button 
                type="button"
                onClick={openMaps}
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
              >
                <svg aria-hidden="true" className="w-5 h-5 me-2 -ms-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#DC2626"/>
                </svg>
                Como Chegar
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Arrow Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <svg 
          className="w-6 h-6 text-natural-off-white/70 animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
