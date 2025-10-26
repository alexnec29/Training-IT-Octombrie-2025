// src/app/traineri/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { FC } from "react";

// Mock data pentru traineri (va fi înlocuită cu fetch din task 1)
const mockTrainers = [
  {
    id: "clsh9s6lf002o47231r587uf8",
    name: "Alexandru-Constantin",
    email: "alexandru.cretu@asii.ro",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKbXnRNPkV6pl8okKuDYrlTK8XFZ7miG0Kqr4NT0-Mjiw",
  },
  {
    id: "mock2",
    name: "Maria Popescu",
    email: "maria.popescu@asii.ro",
    image: "https://lh3.googleusercontent.com/a/placeholder",
  },
];

const TrainersPage: FC = async () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Traineri FII Practic 2024</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockTrainers.map((trainer) => (
            <Card key={trainer.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex justify-center">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={trainer.image} alt={trainer.name} />
                  <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-xl font-semibold">{trainer.name}</CardTitle>
                <p className="text-muted-foreground mt-2">{trainer.email}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersPage;