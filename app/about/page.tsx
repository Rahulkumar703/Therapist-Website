import About from "@/components/about";
import { ZoomIn } from "@/components/animation";
import GlassContainer from "@/components/glass-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: {
    default: "About",
  },
  description:
    "Learn more about Dr. Serena Blake, her approach to therapy, and her professional background.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-10">
      <GlassContainer>
        <About className="flex lg:flex-row flex-col-reverse flex-1 w-full gap-4 md:pt-[120px] sm:pt-[96px] pt-[80px] p-2 sm:p-4 md:pl-10" />
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
