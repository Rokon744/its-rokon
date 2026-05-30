// 'use client'

// import React, { useEffect, useRef } from 'react';

// const Circles = () => {
//   const circlesRef = useRef([]);
//   const coords = useRef({ x: 0, y: 0 });

//   const colors = [
//     "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
//     "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
//     "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
//     "#680060", "#60005f", "#48005f", "#3d005e"
//   ];

//   useEffect(() => {
//     circlesRef.current.forEach((circle, index) => {
//       if (circle) {
//         circle.x = 0;
//         circle.y = 0;
//         circle.style.backgroundColor = colors[index % colors.length];
//       }
//     });

//     const handleMouseMove = (e) => {
//       coords.current.x = e.clientX;
//       coords.current.y = e.clientY;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     const animateCircles = () => {
//       let x = coords.current.x;
//       let y = coords.current.y;

//       circlesRef.current.forEach((circle, index) => {
//         if (circle) {
//           circle.style.left = `${x - 12}px`;
//           circle.style.top = `${y - 12}px`;

//           // Set scale for each circle based on its index
//           circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

//           const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
//           x += (nextCircle.x - x) * 0.4;
//           y += (nextCircle.y - y) * 0.4;

//           circle.x = x;
//           circle.y = y;
//         }
//       });

//       requestAnimationFrame(animateCircles);
//     };

//     animateCircles();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       {Array.from({ length: 20 }).map((_, index) => (
//         <div
//           key={index}
//           className="circle"
//           ref={(el) => (circlesRef.current[index] = el)}
//         ></div>
//       ))}
//     </>
//   );
// };

// export default Circles;

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Circles() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // মাউসের পজিশন আপডেট করার ফাংশন
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // হোভার স্টেট ডিটেক্ট করার ফাংশন
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || typeof target.getAttribute !== "function") return;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  // মোবাইল এবং ট্যাবলেট স্ক্রিনের জন্য কার্সার হাইড করা (Next.js SSR সেফ)
  if (typeof window !== "undefined" && window.innerWidth < 1024) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden lg:block"
      animate={{
        x: position.x - (isHovering ? 20 : 4),
        y: position.y - (isHovering ? 20 : 4),
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
    >
      <div
        className={`rounded-full transition-all duration-300 ${
          isHovering
            ? "w-10 h-10 bg-white/10 border border-white/30"
            : "w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        }`}
      />
    </motion.div>
  );
}