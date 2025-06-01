
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os produtos da VitaNaturalis', '_blank');
  };

  const openMaps = () => {
    window.open('https://maps.google.com/?q=Rua+das+Vitaminas,+123+-+São+Paulo+-+SP', '_blank');
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
              className="bg-whatsapp hover:bg-whatsapp-dark text-white font-body font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg shadow-2xl hover:shadow-whatsapp/25 animate-pulse-whatsapp relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-whatsapp-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Fale Conosco no WhatsApp</span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-natural-orange rounded-full animate-ping"></div>
            </Button>
            
            <Button 
              onClick={openMaps}
              variant="outline"
              className="border-2 border-natural-off-white text-natural-off-white hover:bg-natural-off-white hover:text-natural-green font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg"
            >
              <MapPin className="w-6 h-6" />
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
