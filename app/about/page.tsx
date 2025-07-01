import { SlideIn, ZoomIn } from "@/components/animation";
import GlassContainer from "@/components/glass-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-10">
      <GlassContainer className="flex md:flex-row flex-col-reverse flex-1 w-full gap-2 md:pt-[120px] sm:pt-[96px] pt-[80px] p-2 sm:p-4">
        <section className="flex flex-col md:items-start items-center text-center md:text-left justify-center md:pl-10 sm:p-4 p-2 gap-6">
          <SlideIn direction="left" delay={0}>
            <h1 className="text-4xl lg:text-5xl font-black max-w-lg">
              Dr. Serena Blake
            </h1>
            <h2 className="text-muted-foreground font-semibold text-xl">
              PsyD (Clinical Psychologist)
            </h2>
          </SlideIn>
          <SlideIn direction="left" delay={0.2}>
            <p className="sm:text-base lg:text-lg text-muted-foreground max-w-lg">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma. Whether you meet in her
              Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
              committed to creating a safe, supportive space for you to thrive.
            </p>
          </SlideIn>
        </section>
        <section className="flex-1 flex items-center justify-center shrink-0">
          <ZoomIn delay={0}>
            <Image
              src={"/assets/images/serena-blake-min.webp"}
              alt="Dr. Serena Blake, PsyD (Clinical Psychologist)"
              width={600}
              height={600}
              className="shrink-0 object-cover relative z-10 lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[300px] sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg shadow-primary"
            />
          </ZoomIn>
        </section>
      </GlassContainer>
      <section className="flex flex-col gap-6 sm:pl-10 sm:p-4 p-2">
        <h2 className="text-3xl font-bold">Professional Experience</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <ZoomIn delay={0}>
            <Card>
              <CardContent className="flex flex-col items-center text-center gap-2">
                <CardTitle className="text-primary text-4xl font-black">
                  8+
                </CardTitle>
                <CardDescription>Years of experience</CardDescription>
              </CardContent>
            </Card>
          </ZoomIn>
          <ZoomIn delay={0.2}>
            <Card>
              <CardContent className="flex flex-col items-center text-center gap-2">
                <CardTitle className="text-primary text-4xl font-black">
                  500+
                </CardTitle>
                <CardDescription>Sessions</CardDescription>
              </CardContent>
            </Card>
          </ZoomIn>
        </div>
      </section>
    </main>
  );
}
