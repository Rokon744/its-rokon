'use client'

import Home from "@/pages/Home";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomepageNew from "@/pages/HomepageNew";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 200, // Offset for animations
      easing: "ease-in-out", // Animation easing
      once: true, // Choose if the animation should happen only once
    });
  }, []);
  return (
    <div>
      {/* <Home /> */}
      <HomepageNew />
    </div>
  );
};

export default HomePage;
