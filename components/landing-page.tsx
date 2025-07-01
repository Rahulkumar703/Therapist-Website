import GlassContainer from "@/components/glass-container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ZoomIn } from "./animation";
import { CalendarClock } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <GlassContainer className="flex overflow-hidden gap-2 min-h-[90vh] md:pt-[120px] sm:pt-[96px] pt-[80px]">
      <section className="relative flex-1 flex flex-col sm:items-start items-center text-center sm:text-left justify-center sm:pl-10 p-4 sm:pb-4 pb-6 overflow-hidden gap-6">
        <h1 className="text-4xl lg:text-5xl font-black max-w-lg">
          Find the best solution together.
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          We not only provide consultation, but also heal emotional wounds. by
          providing a safe space for you to explore your feelings and thoughts.
        </p>
        <ZoomIn delay={0.2}>
          <Link href={"/contact"}>
            <Button className="mt-10 max-w-fit font-bold cursor-pointer shadow-primary shadow flex items-center gap-2">
              <CalendarClock className="inline size-4" />
              Book a Free Consult
            </Button>
          </Link>
        </ZoomIn>
      </section>
      <section className="shrink-0 flex-col justify-end sm:p-4 sm:pb-0 p-2 pr-0 pb-0 md:flex hidden">
        <Image
          src={"/assets/images/hero.svg"}
          alt="Dr. Serena Blake, PsyD (Clinical Psychologist)"
          width={600}
          height={600}
          className="shrink-0 xl:w-[600px] h-auto object-cover relative z-10 lg:w-[500px] w-[400px]"
        />
      </section>
    </GlassContainer>
  );
}
