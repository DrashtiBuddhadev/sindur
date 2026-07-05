"use client";

import { motion } from "framer-motion";

const CHAR_DELAY = 0.03;
const INITIAL_DELAY = 0.2;
const CHAR_DURATION = 0.5;

export function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  const lines = text.split("\n");

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => {
        const words = line.split(" ");
        let charCounter = 0;

        return (
          <span key={lineIndex} className="flex flex-wrap">
            {words.map((word, wordIndex) => {
              const chars = Array.from(word);
              const wordStart = charCounter;
              charCounter += chars.length + 1;

              return (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {chars.map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: CHAR_DURATION,
                        delay:
                          INITIAL_DELAY +
                          lineIndex * line.length * CHAR_DELAY +
                          (wordStart + charIndex) * CHAR_DELAY,
                        ease: "easeOut",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIndex < words.length - 1 ? " " : ""}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
