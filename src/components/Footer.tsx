
import { MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <footer className="bg-natural-green text-natural-off-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-title font-bold text-2xl text-natural-orange mb-4">
              VitaNaturalis
            </h3>
            <p className="font-body text-natural-off-white/80 mb-4">
              Sua jornada para uma vida mais saudável começa aqui. Produtos naturais de qualidade premium.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={openWhatsApp}
                className="w-10 h-10 bg-natural-orange hover:bg-natural-orange-warm rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5 text-natural-gray-dark" />
              </button>
              <button className="w-10 h-10 bg-natural-off-white/10 hover:bg-natural-off-white/20 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-natural-off-white/10 hover:bg-natural-off-white/20 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-title font-semibold text-lg mb-4">Produtos</h4>
            <ul className="font-body space-y-2 text-natural-off-white/80">
              <li>Suplementos Alimentares</li>
              <li>Vitaminas e Minerais</li>
              <li>Nutrição Esportiva</li>
              <li>Produtos a Granel</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-title font-semibold text-lg mb-4">Contato</h4>
            <div className="font-body space-y-2 text-natural-off-white/80">
              <p>📍 Rua das Vitaminas, 123</p>
              <p>São Paulo - SP</p>
              <p>📞 (11) 9999-9999</p>
              <p>📧 contato@vitanaturalis.com.br</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-natural-off-white/20 pt-8 text-center">
          <p className="font-body text-natural-off-white/60">
            © 2024 VitaNaturalis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
