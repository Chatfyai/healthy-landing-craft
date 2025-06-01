
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-natural-green via-natural-green-light to-accent overflow-hidden">
      {/* Enhanced Organic Particles Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Main floating organic shapes */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-natural-orange/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-natural-off-white/15 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-natural-orange/25 rounded-full blur-2xl animate-float-medium delay-500"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-natural-off-white/20 rounded-full blur-xl animate-float-fast delay-700"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-natural-orange/30 rounded-full blur-xl animate-float-medium delay-300"></div>
        
        {/* Smaller floating particles - pollen/seeds effect */}
        <div className="absolute top-32 left-1/3 w-4 h-4 bg-natural-orange/60 rounded-full animate-float-particle delay-200"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-natural-off-white/70 rounded-full animate-float-particle delay-500"></div>
        <div className="absolute top-1/3 right-1/5 w-5 h-5 bg-natural-orange/50 rounded-full animate-float-particle delay-1000"></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-natural-off-white/80 rounded-full animate-float-particle delay-1500"></div>
        <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-natural-orange/40 rounded-full animate-float-particle delay-800"></div>
        
        {/* Glow particles */}
        <div className="absolute top-40 right-1/3 w-6 h-6 bg-natural-orange/40 rounded-full blur-sm animate-glow-pulse delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-natural-off-white/30 rounded-full blur-sm animate-glow-pulse delay-600"></div>
        
        {/* Moving gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-natural-orange/3 to-transparent animate-slide-horizontal"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-natural-off-white/2 to-transparent animate-slide-vertical"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Title with Progressive Reveal */}
          <h1 className={`font-title font-bold text-4xl sm:text-5xl lg:text-6xl text-natural-off-white mb-6 leading-tight transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className={`inline-block transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Sua Jornada para uma{" "}
            </span>
            <span className={`text-natural-orange inline-block transition-all duration-700 delay-500 ${
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
          
          {/* Animated Subtitle */}
          <p className={`font-body text-lg sm:text-xl lg:text-2xl text-natural-off-white/90 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-800 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Descubra suplementos, vitaminas e produtos a granel selecionados para o seu bem-estar.
          </p>
          
          {/* Strategic CTA Buttons Entrance */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1500 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <Button 
              onClick={openWhatsApp} 
              className="group relative bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-dark hover:to-whatsapp text-white font-body font-semibold px-8 py-4 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg shadow-xl hover:shadow-2xl hover:shadow-whatsapp/50 overflow-hidden animate-initial-pulse"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Entre em contato no WhatsApp</span>
              <div className="absolute top-1 right-3 w-2 h-2 bg-natural-orange rounded-full animate-ping"></div>
            </Button>
            
            <Button 
              onClick={openMaps} 
              variant="outline" 
              className="group border-2 border-natural-off-white/60 bg-natural-off-white/10 backdrop-blur-sm text-natural-off-white hover:bg-natural-off-white hover:text-natural-green font-body font-semibold px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg shadow-lg hover:shadow-xl hover:shadow-natural-off-white/20 animate-initial-pulse-delay"
            >
              <MapPin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Como Chegar
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="w-1 h-8 bg-natural-off-white/50 rounded-full animate-bounce"></div>
        <div className="w-1 h-2 bg-natural-orange/60 rounded-full mt-1 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
