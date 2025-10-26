import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";
import CardHolder from "./CardHolder";

const PartnersPage: FC = async () => {
  const url = process.env.NEXT_PUBLIC_APP_URL + "/api/parteneri";
  const res = await fetch(url);
  const cards = await res.json();

  return (
    <CardHolder>
      <Card>
        <CardHeader>
          <CardTitle>Parteneri</CardTitle>
          <CardContent>
            {/* <Image /> */}
            <b>test</b>
          </CardContent>
        </CardHeader>
      </Card>
    </CardHolder>
  );
};

export default PartnersPage;
