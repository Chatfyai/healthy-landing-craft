import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";

const CTASection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5584998561010?text=Ol%C3%A1', '_blank');
  };

  const openMaps = () => {
    window.open('https://maps.app.goo.gl/9QTfxxkAjnFn6Srq6', '_blank');
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
              variant="outline"
              className="group relative border-2 border-whatsapp/80 bg-whatsapp/10 backdrop-blur-sm text-whatsapp hover:bg-whatsapp hover:text-white hover:border-whatsapp font-body font-semibold px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3 text-lg shadow-lg hover:shadow-xl hover:shadow-whatsapp/30 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-whatsapp/20 animate-pulse opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-whatsapp/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300 drop-shadow-sm" />
              <span className="relative z-10">Fale Conosco no WhatsApp</span>
              <div className="absolute top-1 right-3 w-3 h-3 bg-whatsapp rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-1.5 right-3.5 w-2 h-2 bg-whatsapp rounded-full"></div>
            </Button>
            
            <Button 
              onClick={openMaps}
              variant="outline"
              className="group border-2 border-natural-off-white/60 bg-natural-off-white/10 backdrop-blur-sm text-natural-off-white hover:bg-natural-off-white hover:text-natural-green font-body font-semibold px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3 text-lg shadow-lg hover:shadow-xl"
            >
              <MapPin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Veja Nossa Localização
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
