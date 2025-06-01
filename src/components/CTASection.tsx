
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";

const CTASection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os produtos da VitaNaturalis', '_blank');
  };

  const openMaps = () => {
    window.open('https://maps.google.com/?q=Rua+das+Vitaminas,+123+-+São+Paulo+-+SP', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-natural-green to-natural-green-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-title font-bold text-3xl sm:text-4xl text-natural-off-white mb-6">
            Quer saber mais ou tirar dúvidas?
          </h2>
          <p className="font-body text-xl text-natural-off-white/90 mb-8">
            Nossa equipe está à disposição para te ajudar a encontrar os melhores produtos para sua saúde!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={openWhatsApp}
              className="bg-whatsapp hover:bg-whatsapp-dark text-white font-body font-semibold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg shadow-2xl hover:shadow-whatsapp/25 animate-pulse-whatsapp relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-whatsapp-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Fale Conosco no WhatsApp</span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-natural-orange-light rounded-full animate-ping"></div>
            </Button>
            
            <Button 
              onClick={openMaps}
              variant="outline"
              className="border-2 border-natural-off-white text-natural-off-white hover:bg-natural-off-white hover:text-natural-green font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg"
            >
              <MapPin className="w-6 h-6" />
              Veja Nossa Localização
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
