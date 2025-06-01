
import { Clock, MapPin, Phone } from "lucide-react";

const LocationMap = () => {
  return (
    <section className="py-16 bg-natural-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-title font-bold text-3xl sm:text-4xl text-natural-green mb-4">
            Venha nos visitar!
          </h2>
          <p className="font-body text-lg text-natural-gray-dark">
            Estamos localizados no coração da cidade
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-natural-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-natural-green" />
              </div>
              <div>
                <h3 className="font-title font-semibold text-xl text-natural-green mb-2">
                  Endereço
                </h3>
                <p className="font-body text-natural-gray-dark">
                  Rua das Vitaminas, 123<br />
                  Bairro Saúde - São Paulo - SP<br />
                  CEP: 01234-567
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-natural-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-natural-orange" />
              </div>
              <div>
                <h3 className="font-title font-semibold text-xl text-natural-green mb-2">
                  Horário de Funcionamento
                </h3>
                <div className="font-body text-natural-gray-dark space-y-1">
                  <p>Segunda a Sexta: 8h às 19h</p>
                  <p>Sábado: 8h às 17h</p>
                  <p>Domingo: 9h às 13h</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-natural-green-light/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-natural-green-light" />
              </div>
              <div>
                <h3 className="font-title font-semibold text-xl text-natural-green mb-2">
                  Contato
                </h3>
                <div className="font-body text-natural-gray-dark space-y-1">
                  <p>📞 (11) 9999-9999</p>
                  <p>📧 contato@vitanaturalis.com.br</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzAwLjAiUyA0NsKwMzYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
