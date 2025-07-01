"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <motion.div
        className="w-16 h-16 bg-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          priority
          src={"/assets/images/logo.svg"}
          alt="Dr. Serena Blake, PsyD (Clinical Psychologist)"
          width={64}
          className="rounded-md "
          height={64}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAKVJREFUKFN9zzFLw2AYReHnM7XYWhPQxUlwq4uL0MHRP+0uiGOhg4Oggrp0iBhbU8WYV4IOIuKdzz3cmyIi/JP0toqol/TW6fd5KlnL2BgyKkhVGZFv89Ewu/hSbRY8zpmckJr3iKqk2OH8lGgZ5tTPHByRug1d++6K+2uyjMGIl4rdvW+g09YLpmc0DYOc1yX74x9AB91e8nDDVkHbcnj8C/jr7Sd2KUcTX8UvqQAAAABJRU5ErkJggg=="
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
