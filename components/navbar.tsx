"use client";
import {
  AlignRightIcon,
  BriefcaseMedical,
  Home,
  Info,
  Phone,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Logo from "./logo";
import { Dispatch, SetStateAction, useState } from "react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className="md:mx-auto">
      {/* Mobile Navigation Toggle Button */}
      <Button
        onClick={() => setExpanded(true)}
        size={"icon"}
        variant={"ghost"}
        className="group sm:hidden cursor-pointer rounded [&_svg:not([class*='size-'])]:size-6 "
      >
        <AlignRightIcon className="w-8 h-8 text-primary group-hover:text-primary" />
      </Button>

      {/* Mobile Navigation */}
      {expanded ? (
        <motion.div className="fixed z-20 top-0 left-0 bg-background/95 backdrop-blur-3xl w-full h-screen flex flex-col sm:hidden">
          <div className="flex items-center justify-between p-2">
            <Logo />
            <Button
              onClick={() => setExpanded(false)}
              size={"icon"}
              variant={"ghost"}
              className="group sm:hidden cursor-pointer rounded [&_svg:not([class*='size-'])]:size-6"
            >
              <X className="w-8 h-8 text-primary group-hover:text-primary" />
            </Button>
          </div>
          <ul className="gap-4 sm:hidden flex flex-col items-center justify-center flex-1">
            <NavList setExpanded={setExpanded} />
          </ul>
        </motion.div>
      ) : null}

      {/* Desktop Navigation */}
      <ul className="items-center gap-4 sm:flex hidden">
        <NavList setExpanded={setExpanded} />
      </ul>
    </nav>
  );
};

const NavList = ({
  setExpanded,
}: {
  setExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const navLinks = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/services",
      label: "Services",
      icon: BriefcaseMedical,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: Phone,
    },
    {
      href: "/about",
      label: "About",
      icon: Info,
    },
  ];
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return navLinks.map((link, index) => {
    return (
      <motion.li
        key={index}
        variants={itemVariants}
        initial="hidden"
        animate="show"
        transition={{ delay: index * 0.1 }}
        onClick={() => setExpanded(false)}
      >
        <Link
          className={`flex items-center gap-2 px-4 py-2 transition-colors text-sm hover:text-primary hover:border-primary ${
            pathname === link.href
              ? "font-semibold border-b-2 text-primary border-primary"
              : "text-foreground"
          }`}
          href={link.href}
        >
          <link.icon
            className={`w-4 h-4 ${
              pathname === link.href ? "stroke-3" : "stroke-2"
            }`}
          />
          {link.label}
        </Link>
      </motion.li>
    );
  });
};

export default Navbar;
