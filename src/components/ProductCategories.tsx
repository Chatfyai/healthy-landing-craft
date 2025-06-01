
const ProductCategories = () => {
  const categories = [
    {
      title: "Suplementos Alimentares",
      description: "Proteínas, aminoácidos e mais",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-natural-green"
    },
    {
      title: "Vitaminas e Minerais",
      description: "Essenciais para sua saúde",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-natural-green-light"
    },
    {
      title: "Nutrição Esportiva", 
      description: "Performance e recuperação",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-accent"
    },
    {
      title: "Produtos a Granel",
      description: "Cereais, farinhas e sementes",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-natural-orange"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-title font-bold text-3xl sm:text-4xl text-natural-green mb-4">
            O que oferecemos?
          </h2>
          <p className="font-body text-lg text-natural-gray-dark max-w-2xl mx-auto">
            Produtos cuidadosamente selecionados para atender todas as suas necessidades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${category.bgColor} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-title font-bold text-xl text-natural-off-white mb-2">
                    {category.title}
                  </h3>
                  <p className="font-body text-natural-off-white/90 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
