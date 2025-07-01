import About from "@/components/about";
import { ZoomIn } from "@/components/animation";
import Faqs from "@/components/faqs";
import LandingPage from "@/components/landing-page";
import Services from "@/components/services";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Video } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Home",
  },
  description:
    "Welcome to Dr. Serena Blake's therapy practice, where we provide compassionate and professional mental health support.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col gap-10">
      {/* Hero Section */}
      <LandingPage />

      <div className="container mx-auto flex flex-col gap-10 mb-10">
        {/* Services */}
        <div className="sm:pl-10 sm:p-4 p-2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <Services />
          <Link href="/services" className="ml-auto cursor-pointer">
            <Button variant="link" className="cursor-pointer">
              Learn More...
            </Button>
          </Link>
        </div>

        {/* About */}
        <div className="sm:pl-10 sm:p-4 p-2 flex flex-col gap-6 overflow-hidden">
          <About className="flex lg:flex-row flex-col-reverse flex-1 w-full gap-4" />
        </div>

        {/* Why Choose Us */}
        <div className="sm:pl-10 sm:p-4 p-2 flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <ZoomIn delay={0}>
              <Card className="h-full max-w-sm md:mx-0 mx-auto">
                <CardContent className="flex flex-col items-center text-center gap-2">
                  <CardTitle className="text-primary text-4xl font-black">
                    8+
                  </CardTitle>
                  <CardDescription>Years of experience</CardDescription>
                </CardContent>
              </Card>
            </ZoomIn>
            <ZoomIn delay={0.2}>
              <Card className="h-full max-w-sm md:mx-0 mx-auto">
                <CardContent className="flex flex-col items-center text-center gap-2">
                  <CardTitle className="text-primary text-4xl font-black">
                    500+
                  </CardTitle>
                  <CardDescription>Sessions</CardDescription>
                </CardContent>
              </Card>
            </ZoomIn>
          </div>
        </div>

        {/* Office Hours */}
        <div className="sm:pl-10 sm:p-4 p-2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Office Hours</h2>

          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 w-full`}>
            <ZoomIn delay={0}>
              <Card className="h-full">
                <CardHeader className="flex flex-col items-center text-center w-full">
                  <User className="size-16 text-primary" />
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center gap-2">
                  <CardTitle className="text-lg font-semibold leading-tight">
                    In Person
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Tuesday & Thursday: 10 AM - 6 PM
                  </CardDescription>
                </CardContent>
              </Card>
            </ZoomIn>
            <ZoomIn delay={0.2}>
              <Card className="">
                <CardHeader className="flex flex-col items-center text-center w-full">
                  <Video className="size-16 text-primary" />
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center gap-2">
                  <CardTitle className="text-lg font-semibold leading-tight">
                    Virtual via Zoom
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Monday, Wednesday & Friday: 1 PM - 5 PM
                  </CardDescription>
                </CardContent>
              </Card>
            </ZoomIn>
          </div>
        </div>

        {/* FAQ */}
        <Faqs />
      </div>
    </main>
  );
}
