"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";
import { useEffect, useState } from "react";

// Definim un tip pentru datele pe care le primim
type Area = {
  id: string;
  name: string;
  imageUrl: string;
};

const AreasPage: FC = () => {
  // Folosim useState pentru a stoca lista de arii
  const [areas, setAreas] = useState<Area[]>([]);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch("/api/arii");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Area[] = await response.json();
        
        // Afiseaza in consola, asa cum ai cerut
        console.log(data); 
        
        // Salveaza datele in starea componentei
        setAreas(data);
      } catch (error) {
        console.error("Failed to fetch areas:", error);
      }
    };

    fetchAreas();
  }, []); // [] asigura ca useEffect ruleaza o singura data, la montarea componentei

  return (
    // Un container principal cu padding
    <div className="p-4">
      {/* Folosim CSS Grid pentru layout:
        - 'grid': activeaza layout-ul grid
        - 'grid-cols-1': 1 coloana pe ecrane mici (default, mobile-first)
        - 'md:grid-cols-3': 3 coloane pe ecrane medii si mai mari
        - 'gap-4': spatiu intre carduri
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Iteram peste datele din 'areas' si randam un card pentru fiecare */}
        {areas.map((area) => (
          <Card key={area.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{area.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Container pentru imagine. 'relative' este necesar pentru 'fill' de la next/image.
                'aspect-video' forteaza un raport de 16:9 pentru imagine. 
                Poti schimba in 'aspect-square' daca preferi.
              */}
              <div className="relative aspect-video">
                <Image
                  src={area.imageUrl}
                  alt={area.name}
                  fill // 'fill' face imaginea sa umple containerul parinte
                  className="object-cover rounded-md" // 'object-cover' previne distorsionarea
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AreasPage;