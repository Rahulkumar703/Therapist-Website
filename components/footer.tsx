import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary p-6 pt-10 flex">
      <div className="container mx-auto grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col items-center gap-3 px-4">
          <div className="mr-auto">
            <Logo />
          </div>
          <div className="font-semibold flex items-center text-sm gap-1 w-full hover:text-foreground text-muted-foreground">
            <MapPin className="size-4" />
            <Link href={"https://maps.app.goo.gl/TrLnUhuEqa3DvWEX6"}>
              1287 Maplewood Drive, Los Angeles, CA 90026
            </Link>
          </div>
          <div className="font-semibold flex items-center text-sm gap-1 w-full hover:text-foreground text-muted-foreground">
            <Phone className="size-4" />
            <Link href={"tel:+13235550192"}>+1 (323) 555-0192</Link>
          </div>
          <div className="font-semibold flex items-center text-sm gap-1 w-full hover:text-foreground text-muted-foreground">
            <Mail className="size-4" />
            <Link href={"mailto:serena@blakepsychology.com"}>
              serena@blakepsychology.com
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 px-4">
          <h4 className="font-semibold mr-auto mt-6 sm:mt-0 ">Quick Links</h4>
          <ul className="w-full flex flex-col gap-3">
            <li className="text-muted-foreground font-semibold text-sm hover:text-foreground">
              <Link href="/">Home</Link>
            </li>
            <li className="text-muted-foreground font-semibold text-sm hover:text-foreground">
              <Link href="/about">About</Link>
            </li>
            <li className="text-muted-foreground font-semibold text-sm hover:text-foreground">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-muted-foreground font-semibold text-sm hover:text-foreground">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
