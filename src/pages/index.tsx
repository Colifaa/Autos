import Footer from '@/components/Footer';
import { ReserveCar } from '@/components/ReserveCar';
import { useEffect, useState } from 'react';

type Car = {
  id: string;
  name: string;
  model: string;
  is_available: boolean;
  image_url?: string;
  created_at: string;
};

export default function Home() {
  const [car, setCar] = useState<Car | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await fetch('/api/getFirstCar');
        const data = await response.json();

        if (response.ok) {
          setCar(data);
        } else {
          throw new Error(data.error);
        }
      } catch (err) {
        setError((err as Error).message);
      }
    }

    fetchCar();
  }, []);

  return (
<> 

{car && <ReserveCar carId={car.id} />}

    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Primer Auto Disponible</h1>
      {error && <p className="text-red-500">{error}</p>}
      {car ? (
        <div className="border p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">{car.name}</h2>
          <p>Modelo: {car.model}</p>
          <p>
            Estado: {car.is_available ? 'Disponible' : 'No disponible'}
          </p>
          {car.image_url && (
            <img
              src={car.image_url}
              alt={car.name}
              className="mt-4 w-64 h-auto rounded"
            />
          )}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
    <Footer/>
    </>
  );
}
