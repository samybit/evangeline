"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2 } from "lucide-react";

interface TrailParticle {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [trails, setTrails] = useState<TrailParticle[]>([]);

  const lastPosition = useRef({ x: 0, y: 0 });
  const idCounter = useRef(0);

  // 1. Fix the Hydration Error by waiting for client mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Handle the mouse movement
  useEffect(() => {
    if (!isMounted) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // Ignore touchscreens

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const dx = clientX - lastPosition.current.x;
      const dy = clientY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Drop a flower every 25 pixels
      if (distance > 25) {
        lastPosition.current = { x: clientX, y: clientY };
        const newId = idCounter.current++;

        setTrails((prev) => [...prev, { id: newId, x: clientX, y: clientY }]);

        // Cleanup flower after animation
        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== newId));
        }, 800);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMounted]);

  // Return null on the server to prevent HTML mismatch
  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0.7, scale: 0.3, rotate: 0 }}
            animate={{ opacity: 0, scale: 1.2, rotate: 90 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute text-emerald-600/60"
            style={{
              left: trail.x,
              top: trail.y,
              x: "-50%",
              y: "-50%",
            }}
          >
            <Flower2 className="w-4 h-4" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}