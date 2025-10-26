import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";

const TrainersPage: FC = async () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <Card className="w-80 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Trainer Profile</CardTitle>
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
