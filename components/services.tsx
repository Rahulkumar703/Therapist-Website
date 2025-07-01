import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Handshake, HeartCrack } from "lucide-react";
import { ZoomIn } from "./animation";

export default function Services({ className }: { className?: string }) {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Therapeutic techniques to help manage anxiety and stress effectively.",
      icon: Brain,
    },
    {
      title: "Relationship Counseling",
      description:
        "Guidance for couples and families to improve communication and resolve conflicts.",
      icon: Handshake,
    },
    {
      title: "Trauma Recovery",
      description:
        "Supportive therapy for individuals dealing with trauma and its effects.",
      icon: HeartCrack,
    },
  ];
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-3 gap-4 w-full ${className}`}
    >
      {services.map((service, index) => (
        <ZoomIn key={index} delay={index * 0.2}>
          <Card className="h-full">
            <CardHeader className="flex flex-col items-center text-center w-full">
              <service.icon className="size-16 text-primary" />
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center gap-2">
              <CardTitle className="text-lg font-semibold leading-tight">
                {service.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        </ZoomIn>
      ))}
    </div>
  );
}
