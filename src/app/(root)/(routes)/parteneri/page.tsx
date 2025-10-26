import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";
import CardHolder from "./CardHolder";

const PartnersPage: FC = async () => {
  const url = process.env.NEXT_PUBLIC_APP_URL + "/api/parteneri";
  const res = await fetch(url);
  const cards = await res.json();

  return (
    <CardHolder>
      { cards.map((card: any) => (
        <Card className="flex flex-col justify-center items-center">
          <CardHeader className="flex justify-center items-center">
            <Image src={card.imageUrl} width="100" height="100"></Image>
            <CardTitle><a href={card.url}>{card.name}</a></CardTitle>
          </CardHeader>

          <CardContent>
            {card.tier}
          </CardContent>
        </Card>
      )) }
    </CardHolder>
  );
};

export default PartnersPage;
