import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingCart } from "lucide-react";

const OrderButton = () => {
  const openWhatsAppOrder = () => {
    const message = "Olá! Gostaria de fazer um pedido na Naturalys. Podem me ajudar?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5584998561010?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-8 bg-gradient-to-r from-natural-green via-natural-green-light to-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Button 
            onClick={openWhatsAppOrder}
            className="group relative bg-gradient-to-r from-natural-orange to-natural-orange-warm hover:from-natural-orange-warm hover:to-natural-orange text-white font-body font-bold px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 flex items-center gap-2 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-3xl overflow-hidden w-full sm:w-auto max-w-sm sm:max-w-md"
          >
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            
            {/* Ícones */}
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Fazer Pedido na Naturalys</span>
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Indicador pulsante */}
            <div className="absolute top-1 sm:top-2 right-2 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-whatsapp rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-1.5 sm:top-2.5 right-2.5 sm:right-4.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-whatsapp rounded-full"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrderButton; 