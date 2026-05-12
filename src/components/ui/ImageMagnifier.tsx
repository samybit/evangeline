"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageMagnifierProps {
  src: string;
  alt: string;
}

export default function ImageMagnifier({ src, alt }: ImageMagnifierProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Size of the magnifying square
  const MAGNIFIER_SIZE = 250;
  // How much the image is scaled up inside the square
  const ZOOM_LEVEL = 300;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Get the dimensions and position of the image container
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    // Calculate cursor position relative to the container
    const x = e.clientX - left;
    const y = e.clientY - top;
    setCursorPosition({ x, y });

    // Calculate the percentage of the mouse position to adjust the background image correctly
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;
    setPosition({ x: xPercent, y: yPercent });
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden cursor-none"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Base Image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      {/* The Magnifying Square */}
      <AnimatePresence>
        {showMagnifier && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-none absolute z-50 border border-white/40 shadow-2xl bg-stone-100"
            style={{
              width: `${MAGNIFIER_SIZE}px`,
              height: `${MAGNIFIER_SIZE}px`,
              // Center the square exactly on the mouse cursor
              left: `${cursorPosition.x - MAGNIFIER_SIZE / 2}px`,
              top: `${cursorPosition.y - MAGNIFIER_SIZE / 2}px`,
              // Apply the same image as a background, scaled up
              backgroundImage: `url(${src})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundSize: `${ZOOM_LEVEL}%`,
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Optional: Add a subtle inner border or reticle effect */}
            <div className="absolute inset-0 border border-stone-900/10 mix-blend-overlay" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}