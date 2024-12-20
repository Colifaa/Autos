import { Shield, Clock, ThumbsUp, Car } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Seguridad garantizada",
    description: "Todos nuestros vehículos están asegurados y mantenidos regularmente",
  },
  {
    icon: Clock,
    title: "Servicio 24/7",
    description: "Atención al cliente disponible las 24 horas, los 7 días de la semana",
  },
  {
    icon: ThumbsUp,
    title: "Mejor precio garantizado",
    description: "Ofrecemos los mejores precios del mercado con descuentos especiales",
  },
  {
    icon: Car,
    title: "Amplia flota",
    description: "Gran variedad de vehículos para satisfacer todas tus necesidades",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}