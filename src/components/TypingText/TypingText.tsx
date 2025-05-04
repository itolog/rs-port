"use client";

import React, { ReactElement, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Classes {
  root?: string;
  content?: string;
  cursor?: string;
}

interface TypewriterTextProps {
  text: string;
  typingSpeed?: number;
  delayBeforeRestart?: number;
  cursorColor?: string;
  cursor?: boolean;
  loop?: boolean;
  classes?: Classes;
}

/**
 * A component that animates text as if it's being typed character by character
 * with a blinking cursor at the end.
 *
 * @param {TypewriterTextProps} props - Component properties
 * @returns {JSX.Element} Rendered component
 */
const TypewriterText = ({
  text,
  typingSpeed = 50,
  delayBeforeRestart = 2000,
  loop = false,
  cursor = true,
  classes,
}: TypewriterTextProps): ReactElement => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
    setIsTyping(true);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping && index <= text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index));
        setIndex(index + 1);

        if (index === text.length) {
          setIsComplete(true);
          setIsTyping(false);
        }
      }, typingSpeed);
    } else if (isComplete && !isTyping && loop) {
      timeout = setTimeout(() => {
        setIndex(0);
        setDisplayedText("");
        setIsTyping(true);
        setIsComplete(false);
      }, delayBeforeRestart);
    }

    return () => clearTimeout(timeout);
  }, [index, isTyping, isComplete, text, typingSpeed, delayBeforeRestart, loop]);

  return (
    <div className={cn("flex  text-cyan-400", classes?.root)}>
      <motion.div className={cn("font-bold text-2xl md:text-3xl", classes?.content)}>
        {displayedText}
        {cursor && (
          <motion.span
            className={cn("inline-block text-cyan-500", classes?.cursor)}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}>
            |
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default TypewriterText;
