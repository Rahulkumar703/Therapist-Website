"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SlideIn } from "./animation";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom",
    },
    {
      question: "What is your cancellation policy?",
      answer: "We have a 24-hour cancellation policy.",
    },
  ];
  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const iconVariants = {
    initial: { rotate: 0 },
    open: { rotate: 45 },
  };

  return (
    <section className="flex flex-col sm:items-start items-center text-center sm:text-left justify-center md:pl-10 sm:p-4 p-2 gap-6">
      <h2 className="text-3xl font-bold self-start">
        Freaquently asked Questions
      </h2>
      <p className="text-muted-foreground max-w-lg">
        Here are some common questions and answers about our services. If you
        have any other questions, feel free to reach out.
      </p>
      <ul className="flex flex-col gap-4 w-full max-w-2xl ml-auto">
        {faqs.map((faq, index) => (
          <SlideIn key={index} delay={index * 0.2} direction="up">
            <li
              className="border-b py-4 px-2 cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{faq.question}</h3>
                <motion.div
                  variants={iconVariants}
                  animate={activeIndex === index ? "open" : "initial"}
                  transition={{ duration: 0.1 }}
                >
                  <Plus className="size-4" />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.p
                    key="answer"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={answerVariants}
                    transition={{ duration: 0.2 }}
                    className="text-muted-foreground mt-2 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </li>
          </SlideIn>
        ))}
      </ul>
    </section>
  );
}
