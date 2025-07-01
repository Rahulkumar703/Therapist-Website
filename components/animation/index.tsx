"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const FadeIn = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true, amount: 0.3 }} // animate only once when 30% is visible
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
}: {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true, amount: 0.3 }} // animate once, when 30% in view
    >
      {children}
    </motion.div>
  );
};

export const ZoomIn = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      className="shrink-0"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }} // animate only once when 30% is visible
    >
      {children}
    </motion.div>
  );
};
