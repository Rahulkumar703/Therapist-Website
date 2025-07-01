import React from "react";
import { SlideIn, ZoomIn } from "./animation";
import Image from "next/image";

export default function About({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="flex flex-col md:items-start items-center text-center md:text-left justify-center gap-6">
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
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>
        </SlideIn>
      </div>
      <div className="flex-1 flex items-center justify-center shrink-0">
        <ZoomIn delay={0}>
          <Image
            src={"/assets/images/serena-blake-min.webp"}
            alt="Dr. Serena Blake, PsyD (Clinical Psychologist)"
            width={600}
            height={600}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAPlJREFUKFNjZICC0NBQZid1nryfv/46vXj/vqlj9ubTIClGmIL5XXmqgqysuwS4uWUuP3gwVfz29+Kw1av/whVsndtg8uvjxy1cjEyix2/cXq7l7JAaFlb0Ha7g0tEd/q9vHprNxfBH5B0D/w1uOf10Bxefw2AFL1684P798/P0X28fRbP+/8v0T0T137cff3JXLVeZAVZw+fQRVy5u7tkc/CJyf//+Z/z188efvwyMmWoqKnMZ////z3zxxMG8n28f97AwMzBxCUoyMAlIf/3263eaoZ7ecpACxmuXLrn/fv9g2s+PbxS+//rHwCyhvuvbt++p7u7ujwEwlnEJ9UahywAAAABJRU5ErkJggg=="
            priority
            className="shrink-0 object-cover relative z-10 lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg shadow-primary"
          />
        </ZoomIn>
      </div>
    </section>
  );
}
