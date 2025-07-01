import { ZoomIn } from "@/components/animation";
import Services from "@/components/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, User2, Users } from "lucide-react";

export default function ServicesPage() {
  const prices = [
    {
      title: "Individual Therapy",
      price: 200,
      icon: User2,
    },
    {
      title: "Couples Therapy",
      price: 240,
      icon: Users,
    },
  ];
  return (
    <main className="flex flex-col md:pt-[120px] sm:pt-[96px] pt-[80px] p-2 sm:p-4 ">
      <section className="flex flex-col sm:items-start items-center text-center sm:text-left justify-center md:pl-10 sm:p-4 p-2 gap-6">
        <h1 className="text-4xl lg:text-5xl font-black max-w-lg">How I Help</h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          Dr. Serena Blake offers therapeutic services tailored to meet the
          unique needs of each client. she provides support for individuals
          facing challenges such as anxiety, depression, relationship issues,
          and more.
        </p>
      </section>
      <section className="flex flex-col sm:items-start items-center text-center sm:text-left justify-center md:pl-10 sm:p-4 p-2 gap-6">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <Services />
      </section>

      <section className="flex flex-col sm:items-start items-center text-center sm:text-left justify-center md:pl-10 sm:p-4 p-2 gap-6">
        <h2 className="text-3xl font-bold">Our Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {prices.map((price, index) => (
            <ZoomIn key={index} delay={index * 0.2}>
              <Card key={index} className="h-full">
                <CardHeader className="flex flex-col items-center text-center w-full">
                  <price.icon className="size-16 text-primary" />
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center gap-2">
                  <CardTitle className="text-lg font-semibold leading-tight">
                    {price.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground flex items-center">
                    <DollarSign className="inline size-4" />
                    {price.price}
                  </CardDescription>
                </CardContent>
              </Card>
            </ZoomIn>
          ))}
        </div>
      </section>
    </main>
  );
}
