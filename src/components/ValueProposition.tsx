
import { Shield, Users, MapPin, Heart } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Qualidade Premium",
      description: "Trabalhamos com as melhores marcas do mercado"
    },
    {
      icon: Heart,
      title: "Variedade Completa",
      description: "Suplementos, vitaminas, esportivos e granel"
    },
    {
      icon: MapPin,
      title: "Conveniência para Você",
      description: "Estacionamento fácil e entrega gratuita"
    },
    {
      icon: Users,
      title: "Atendimento Especializado",
      description: "Nossa equipe está pronta para te ajudar"
    }
  ];

  return (
    <section className="py-16 bg-natural-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-title font-bold text-3xl sm:text-4xl text-natural-green mb-4">
            Por que escolher a VitaNaturalis?
          </h2>
          <p className="font-body text-lg text-natural-gray-dark max-w-2xl mx-auto">
            Nossa missão é oferecer produtos de qualidade com o melhor atendimento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-natural-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-natural-orange/10 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-natural-green group-hover:text-natural-orange transition-colors duration-300" />
              </div>
              <h3 className="font-title font-semibold text-xl text-natural-green mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-natural-gray-dark">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
