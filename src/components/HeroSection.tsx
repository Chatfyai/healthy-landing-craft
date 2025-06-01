
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5584998561010?text=Ol%C3%A1', '_blank');
  };

  const openMaps = () => {
    window.open('https://maps.app.goo.gl/9QTfxxkAjnFn6Srq6', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-natural-green via-natural-green-light to-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-natural-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-natural-off-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-title font-bold text-4xl sm:text-5xl lg:text-6xl text-natural-off-white mb-6 leading-tight">
            Sua Jornada para uma{" "}
            <span className="text-natural-orange">Vida Mais Saudável</span>{" "}
            Começa Aqui
          </h1>
          
          <p className="font-body text-lg sm:text-xl lg:text-2xl text-natural-off-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra suplementos, vitaminas e produtos a granel selecionados para o seu bem-estar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={openWhatsApp}
              className="group relative bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-dark hover:to-whatsapp text-white font-body font-semibold px-8 py-4 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3 text-lg shadow-xl hover:shadow-2xl hover:shadow-whatsapp/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Fale Conosco no WhatsApp</span>
              <div className="absolute top-0 right-2 w-2 h-2 bg-natural-orange rounded-full animate-pulse"></div>
            </Button>
            
            <Button 
              onClick={openMaps}
              variant="outline"
              className="group border-2 border-natural-off-white/60 bg-natural-off-white/10 backdrop-blur-sm text-natural-off-white hover:bg-natural-off-white hover:text-natural-green font-body font-semibold px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3 text-lg shadow-lg hover:shadow-xl"
            >
              <MapPin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Como Chegar
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-natural-off-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
