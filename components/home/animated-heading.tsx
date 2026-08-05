"use client";

import { motion } from "framer-motion";

const CHAR_DELAY = 0.022;
const INITIAL_DELAY = 0.15;
const CHAR_DURATION = 0.22;

export function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  const lines = text.split("\n");
  const totalChars = text.replace(/\n/g, "").length;
  const cursorDelay = INITIAL_DELAY + totalChars * CHAR_DELAY;

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => {
        const words = line.split(" ");
        let charCounter = 0;
        const precedingChars = lines.slice(0, lineIndex).reduce((sum, l) => sum + l.length, 0);

        return (
          <span key={lineIndex} className="flex flex-wrap items-baseline">
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
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: CHAR_DURATION,
                        delay: INITIAL_DELAY + (precedingChars + wordStart + charIndex) * CHAR_DELAY,
                        ease: "easeOut",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIndex < words.length - 1 ? " " : ""}
                </span>
              );
            })}
            {lineIndex === lines.length - 1 && (
              <motion.span
                aria-hidden
                className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.05em] bg-current align-middle motion-safe:animate-[blink_1s_step-end_infinite]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: cursorDelay, duration: 0.01 }}
              />
            )}
          </span>
        );
      })}
    </h1>
  );
}
