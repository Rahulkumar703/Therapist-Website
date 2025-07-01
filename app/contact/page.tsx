import { SlideIn } from "@/components/animation";
import ContactForm from "@/components/contact-form";
import GlassContainer from "@/components/glass-container";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Contact",
  },
  description:
    "Get in touch with Dr. Serena Blake for compassionate and professional mental health support.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <GlassContainer className="min-h-screen flex lg:flex-row flex-col flex-1 w-full gap-2 md:pt-[120px] sm:pt-[96px] pt-[80px] p-2 sm:p-4">
        <section className="flex flex-col sm:items-start items-center text-center sm:text-left md:pl-10 sm:p-4 p-2 gap-6">
          <h1 className="text-4xl lg:text-5xl font-black max-w-lg">
            Get in touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Simply fill out the brief fields below and Dr. Serena Blake will be
            in touch with you soon, usually within one business day. This form
            is safe, private, and completely free.
          </p>
          <div className="w-full flex flex-col gap-6 flex-1">
            <span className="text-muted-foreground w-full text-center my-auto">
              or
            </span>
            <h2 className="text-3xl font-bold">Reach Out Directly</h2>

            <div className="grid grid-cols-1 w-full gap-4">
              <SlideIn direction="left" delay={0.1}>
                <Link href="tel:+13235550192">
                  <Card>
                    <CardHeader className="flex flex-col gap-4 items-center">
                      <Phone className="size-6 text-primary" />
                      <CardTitle>+1 (323) 555-0192</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              </SlideIn>
              <SlideIn direction="left" delay={0.2}>
                <Link href="mailto:serena@blakepsychology.com">
                  <Card>
                    <CardHeader className="flex flex-col gap-4 items-center">
                      <Mail className="size-6 text-primary" />
                      <CardTitle> serena@blakepsychology.com</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              </SlideIn>
            </div>
          </div>
        </section>
        <section className="flex-1 flex items-center justify-center p-2 sm:p-4  md:pl-10">
          <SlideIn direction="right" delay={0.3}>
            <ContactForm className="sm:min-w-md" />
          </SlideIn>
        </section>
      </GlassContainer>
    </main>
  );
}
