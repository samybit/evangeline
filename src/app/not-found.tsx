"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function NotFound() {
  const [isHovered, setIsHovered] = useState(false);

  // Generate arrays for our multi-layered flower
  const outerPetals = Array.from({ length: 12 });
  const innerPetals = Array.from({ length: 8 });

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-stone-50 flex flex-col items-center justify-center p-4 overflow-hidden">

      {/* Serene Flower Container */}
        <motion.div
          className="relative w-64 h-64 mb-8 flex items-center justify-center cursor-crosshair"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
        {/* Slowly rotating wrapper */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {/* Outer Petals */}
            {outerPetals.map((_, index) => {
              const baseRotation = (360 / outerPetals.length) * index;
              return (
                <motion.div
                  key={`outer-${index}`}
                  className="absolute w-6 origin-bottom mix-blend-multiply rounded-t-full rounded-b-full"
                  style={{
                    originY: 1,
                    backgroundColor: "#d1fae5", // emerald-100
                    opacity: 0.8,
                    height: "96px",
                    bottom: "50%",
                  }}
                  animate={{
                    rotate: baseRotation + (isHovered ? 12 : 0),
                    scaleY: isHovered ? 1.1 : 1,
                    backgroundColor: isHovered ? "#a7f3d0" : "#d1fae5", // emerald-200
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: index * 0.03,
                  }}
                />
              );
            })}

            {/* Inner Petals */}
            {innerPetals.map((_, index) => {
              const baseRotation = (360 / innerPetals.length) * index + 22.5;
              return (
                <motion.div
                  key={`inner-${index}`}
                  className="absolute w-5 origin-bottom mix-blend-multiply rounded-t-full rounded-b-full"
                  style={{
                    originY: 1,
                    backgroundColor: "#fef3c7", // amber-100
                    opacity: 0.8,
                    height: "64px",
                    bottom: "50%",
                  }}
                  animate={{
                    rotate: baseRotation - (isHovered ? 12 : 0),
                    scaleY: isHovered ? 1.15 : 1,
                    backgroundColor: isHovered ? "#fde68a" : "#fef3c7", // amber-200
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: index * 0.03,
                  }}
                />
              );
            })}

            {/* The Soft Core */}
            <motion.div
              className="absolute w-10 h-10 bg-amber-200 rounded-full mix-blend-multiply flex items-center justify-center z-10"
              animate={{
                scale: isHovered ? 1.1 : 1,
                backgroundColor: isHovered ? "#fcd34d" : "#fde68a",
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* Core pulse */}
              <motion.div
                className="w-6 h-6 bg-amber-300 rounded-full"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

      {/* Typography and Return Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-center z-20 relative max-w-2xl px-4"
      >
        <h1 className="font-serif text-6xl md:text-7xl text-stone-900 mb-6">404</h1>
        <p className="text-lg md:text-xl text-stone-600 mb-10 font-light italic leading-relaxed">
          This path is overgrown. The specimen you seek has not yet bloomed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center text-sm tracking-widest uppercase font-medium text-emerald-800 hover:text-emerald-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
          Return to Showcase
        </Link>
      </motion.div>
    </div>
  );
}