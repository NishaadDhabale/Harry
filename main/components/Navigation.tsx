"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [showInitially, setShowInitially] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitially(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const isVisible = showInitially || hovered;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-40"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 8,
      }}
      transition={{
        duration: 0.4,
        delay:0.3,
        ease: "easeOut",
      }}
    >
      <nav className="flex justify-end items-center px-6 py-8 md:px-12 mix-blend-difference">


        <div className="hidden md:flex gap-12 text-[14px] tracking-[0.3em] uppercase font-bold text-neutral-500">
          <span
            onClick={() => router.push("/stats")}
            className="hover:text-white  transition-colors cursor-pointer"
          >
            Contact
          </span>
        </div>

        <button className="md:hidden text-white">
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </nav>
    </motion.div>
  );
}
