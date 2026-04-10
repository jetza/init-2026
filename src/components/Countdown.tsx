"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-09-12T09:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // Wait for all Hero elements to finish their stagger animations
    // before starting the countdown spring-in
    const t = setTimeout(() => setEntered(true), 1200);
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => {
      clearTimeout(t);
      clearInterval(timer);
    };
  }, []);

  const blocks = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex items-center gap-8 md:gap-12" suppressHydrationWarning>
      {blocks.map((block, i) => (
        <motion.div
          key={block.label}
          initial={{ opacity: 0, scale: 1.6 }}
          animate={
            entered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.6 }
          }
          transition={{
            delay: i * 0.18,
            duration: 0.7,
            type: "spring",
            stiffness: 180,
            damping: 14,
          }}
          className="flex flex-col items-center"
        >
          <span
            className="text-white font-black text-4xl md:text-[48px] leading-normal"
            suppressHydrationWarning
          >
            {String(block.value).padStart(2, "0")}
          </span>
          <span className="text-white font-medium text-base md:text-2xl mt-1">
            {block.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
