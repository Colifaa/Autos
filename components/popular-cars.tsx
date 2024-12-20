"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const popularCars = [
  {
    name: "Toyota Corolla",
    category: "Sedán",
    price: "45",
    image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&q=80",
  },
  {
    name: "Honda CR-V",
    category: "SUV",
    price: "65",
    image: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&q=80",
  },
  {
    name: "BMW Serie 3",
    category: "Lujo",
    price: "85",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
  },
  {
    name: "BMW Serie 3",
    category: "Lujo",
    price: "85",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
  },
  {
    name: "BMW Serie 3",
    category: "Lujo",
    price: "85",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
  },
  {
    name: "BMW Serie 3",
    category: "Lujo",
    price: "85",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
  },
];

export function PopularCars() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Vehículos más populares
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularCars.map((car) => (
            <Card key={car.name} className="overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{car.name}</CardTitle>
                <p className="text-sm text-gray-500">{car.category}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold">${car.price}</p>
                    <p className="text-sm text-gray-500">por día</p>
                  </div>
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                    Reservar
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}