"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";
import data from "../../../../../data_ex.json";

const TrainersPage: FC = async () => {

    const responose = await fetch('http://localhost:3000/api/traineri');
    const user = await responose.json();

    console.log(user);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <Card className="w-80 shadow-lg">
        <CardHeader>
          <CardTitle>{/* Title me pls */}</CardTitle>
          <CardContent>
            {/* <Image /> */}
            {/* no hentai pls */}
            <div>
              {data.trainer1.map(trainer =>(
                <div key={trainer.id}>
                {trainer.name}
                {trainer.email}
                {trainer.image}
            </div>))
          }
          </div>
          </CardContent>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <Image
            src="/images/ash.png"
            alt="Ash Ketchum"
            width={150}
            height={150}
            className="rounded-full object-cover mb-4"
          />
          <p className="text-center text-gray-700">Ash Ketchum from Pallet Town</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainersPage;
