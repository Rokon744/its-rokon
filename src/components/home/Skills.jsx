"use client";

import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const animateProgressBar = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const progress = bar.getAttribute("data-progress");
          bar.style.width = progress;
          bar.style.transition = "width 2s ease-in-out"; // Smooth transition
        }
      });
    };

    const observer = new IntersectionObserver(animateProgressBar, {
      threshold: 0.3, // Trigger when 30% of the element is visible
    });

    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => observer.observe(bar));

    return () => {
      progressBars.forEach((bar) => observer.unobserve(bar)); // Cleanup observer
    };
  }, []);

  return (
    <div className="font-nunito">
      <div className="flex justify-center">
        <div className="max-w-7xl w-full px-4">
          <p className="text-2xl header-text text-center mb-8">
            I&apos;m using to create a clean website:
          </p>
          <div className="flex flex-wrap justify-between">
            <ProgressItem title="HTML5" progress="90%" className="i1" />
            <ProgressItem title="CSS3" progress="85%" className="i2" />
            <ProgressItem title="JAVASCRIPT (ES6+)" progress="70%" className="i3" />
            <ProgressItem title="REACT JS" progress="80%" className="i4" />
            <ProgressItem title="NEXT JS" progress="75%" className="i5" />
            <ProgressItem title="TAILWIND CSS" progress="90%" className="i6" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressItem = ({ title, progress, className }) => (
  <div className="w-full md:w-[48%] mb-4 flex flex-col">
    <div className="flex justify-between items-center mt-7 text-xl">
      <p className="mb-2">{title}</p>
      <p className="mb-2">{progress}</p>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div
        className={`bg-[#19f5d7] h-3 rounded-full progress-bar ${className}`}
        data-progress={progress}
        style={{ width: 0 }}
      ></div>
    </div>
  </div>
);

export default Skills;
