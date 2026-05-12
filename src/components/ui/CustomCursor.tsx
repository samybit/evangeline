"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Flower2 } from "lucide-react";

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  size: number;
  color: string;
}

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [trails, setTrails] = useState<TrailParticle[]>([]);
  // const [cursorPos, setCursorPos] = useState({ x: -100, y: -100, visible: false });

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

      // setCursorPos({ x: clientX, y: clientY, visible: true });

      const dx = clientX - lastPosition.current.x;
      const dy = clientY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Drop soil particles every 12 pixels to simulate "plowing" through soil
      if (distance > 12) {
        lastPosition.current = { x: clientX, y: clientY };
        const angle = Math.atan2(dy, dx);

        // Push dirt to the sides
        const numParticles = Math.random() > 0.5 ? 2 : 3;
        const newParticles: TrailParticle[] = [];

        for (let i = 0; i < numParticles; i++) {
          const side = Math.random() > 0.5 ? 1 : -1;
          const spread = Math.random() * 20 + 5;
          const pushAngle = angle + side * (Math.PI / 2) + (Math.random() - 0.5) * 1.5;
          
          newParticles.push({
            id: idCounter.current++,
            x: clientX,
            y: clientY,
            offsetX: Math.cos(pushAngle) * spread,
            offsetY: Math.sin(pushAngle) * spread,
            size: Math.random() * 4 + 2, // 2px to 6px
            color: ["bg-stone-600", "bg-stone-700", "bg-stone-800", "bg-amber-900/80"][Math.floor(Math.random() * 4)],
          });
        }

        setTrails((prev) => [...prev, ...newParticles]);

        // Cleanup after animation
        setTimeout(() => {
          const idsToRemove = new Set(newParticles.map(p => p.id));
          setTrails((prev) => prev.filter((t) => !idsToRemove.has(t.id)));
        }, 600);
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
      
      {/* {cursorPos.visible && (
        <motion.div
          className="absolute text-emerald-700/80"
          style={{
            left: cursorPos.x + 16,
            top: cursorPos.y + 16,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <Flower2 className="w-5 h-5" />
        </motion.div>
      )} */}

      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ 
              opacity: 1, 
              x: trail.x - trail.size / 2, 
              y: trail.y - trail.size / 2, 
              scale: 0.5 
            }}
            animate={{ 
              opacity: 0, 
              x: trail.x + trail.offsetX - trail.size / 2, 
              y: trail.y + trail.offsetY - trail.size / 2, 
              scale: 1.5 
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`absolute rounded-full ${trail.color}`}
            style={{
              width: trail.size,
              height: trail.size,
              left: 0,
              top: 0,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}