"use client";

import { useRef, useState, useCallback, useEffect, useLayoutEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ScrollAreaProps {
  children: ReactNode;
  className?: string;
  thumbColor?: string;
}

export default function ScrollArea({ children, className = "", thumbColor = "bg-ink/50" }: ScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState({ height: 0, top: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateThumb = useCallback(() => {
    const el = scrollRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const trackHeight = track.clientHeight;

    if (scrollHeight <= clientHeight) {
      setThumb({ height: 0, top: 0 });
      return;
    }

    const thumbHeight = Math.max((clientHeight / scrollHeight) * trackHeight, 32);
    const maxTop = trackHeight - thumbHeight;
    const thumbTop = (scrollTop / (scrollHeight - clientHeight)) * maxTop;
    setThumb({ height: thumbHeight, top: thumbTop });
  }, []);

  useLayoutEffect(() => {
    updateThumb();
    window.addEventListener("resize", updateThumb);
    return () => window.removeEventListener("resize", updateThumb);
  }, [updateThumb]);

  const handleScroll = useCallback(() => {
    updateThumb();
    setIsScrolling(true);
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    fadeTimer.current = setTimeout(() => setIsScrolling(false), 1200);
  }, [updateThumb]);

  useEffect(() => {
    return () => {
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, []);

  return (
    <div className={`flex ${className}`}>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 min-w-0 min-h-0 overflow-y-auto overflow-x-hidden scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div ref={trackRef} className="relative w-1 shrink-0 self-stretch">
        <AnimatePresence>
          {thumb.height > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isScrolling ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`absolute inset-x-0 pointer-events-none ${thumbColor}`}
              style={{ height: thumb.height, transform: `translateY(${thumb.top}px)` }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
