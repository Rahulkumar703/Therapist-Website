import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/95 backdrop-blur-[10px] bg-opacity-50">
      <Image
        src={"/assets/images/logo.svg"}
        alt="Dr. Serena Blake, PsyD (Clinical Psychologist)"
        width={64}
        className="rounded-md animate-pulse"
        height={64}
      />
    </div>
  );
}
