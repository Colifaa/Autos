"use client";

import { Car, Calendar, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/date-picker";
import { PopularCars } from "@/components/popular-cars";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80"
            alt="Luxury car"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              Encuentra el auto perfecto para cada momento
            </h1>
            <p className="text-xl mb-8">
              Amplia selección de vehículos para todas tus necesidades
            </p>
          </div>

          {/* Search Card */}
          <Card className="p-6 mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Ubicación</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input className="pl-9" placeholder="¿Dónde quieres recoger?" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Fecha de recogida</label>
              <DatePicker />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Fecha de devolución</label>
              <DatePicker />
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Search className="mr-2 h-4 w-4" /> Buscar autos
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Popular Cars Section */}
      <PopularCars />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </main>
  );
}