import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";
import data from "../../../../../data_ex.json";

const TrainersPage: FC = async () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{/* Title me pls */}</CardTitle>
          <CardContent>
            <Image />
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
      </Card>
    </div>
  );
};

export default TrainersPage;
