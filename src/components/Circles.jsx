'use client'

import React, { useEffect, useRef } from 'react';

const Circles = () => {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });

  const colors = [
    "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
    "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
    "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
    "#680060", "#60005f", "#48005f", "#3d005e"
  ];

  useEffect(() => {
    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
      }
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          circle.style.left = `${x - 12}px`;
          circle.style.top = `${y - 12}px`;

          // Set scale for each circle based on its index
          circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

          const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
          x += (nextCircle.x - x) * 0.4;
          y += (nextCircle.y - y) * 0.4;

          circle.x = x;
          circle.y = y;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
    </>
  );
};

export default Circles;
