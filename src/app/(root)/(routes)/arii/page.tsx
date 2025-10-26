"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FC } from "react";
import { useEffect } from "react";

const AreasPage: FC = () => {
  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch("/api/arii");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch areas:", error);
      }
    };

    fetchAreas();
  }, []);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
          <CardContent></CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default AreasPage;
