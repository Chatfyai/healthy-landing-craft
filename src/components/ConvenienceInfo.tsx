
import { Truck, CreditCard, Car } from "lucide-react";

const ConvenienceInfo = () => {
  const conveniences = [
    {
      icon: Truck,
      title: "Entrega",
      description: "Receba em casa! Entrega grátis a partir de R$30 em currais Novos. Para outras localidades, frete grátis acima de R$100."
    },
    {
      icon: CreditCard,
      title: "Pagamento",
      description: "Pagamento facilitado: Aceitamos Pix, dinheiro, cartões de crédito e débito. Parcelamos suas compras (consulte condições)."
    },
    {
      icon: Car,
      title: "Estacionamento",
      description: "Visite-nos sem preocupações! Estacionamento gratuito em frente à loja."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-title font-bold text-3xl sm:text-4xl text-natural-green mb-4">
            Como facilitamos sua vida?
          </h2>
          <p className="font-body text-lg text-natural-gray-dark max-w-2xl mx-auto">
            Pensamos em cada detalhe para tornar sua experiência ainda melhor
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {conveniences.map((item, index) => (
            <div 
              key={index}
              className="bg-natural-off-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-20 h-20 bg-natural-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-10 h-10 text-natural-orange" />
              </div>
              <h3 className="font-title font-bold text-2xl text-natural-green mb-4">
                {item.title}
              </h3>
              <p className="font-body text-natural-gray-dark leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConvenienceInfo;
