
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
              className="group relative bg-gradient-to-r from-whatsapp to-whatsapp-dark hover:from-whatsapp-dark hover:to-whatsapp text-white font-body font-semibold px-10 py-4 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3 text-lg shadow-xl hover:shadow-2xl hover:shadow-whatsapp/40 overflow-hidden"
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
