"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";

const TrainersPage: FC = async () => {

    const responose = await fetch('http://localhost:3000/api/traineri');
    const user = await responose.json();

    console.log(user);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{/* Title me pls */}</CardTitle>
          <CardContent>
            {/* <Image /> */}
            {/* no hentai pls */}
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TrainersPage;
