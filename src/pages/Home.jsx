import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Faq from "../components/Faq";
import Slider from "../components/Slider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Faq />
      <Slider />
    </>
  );
};

export default Home;
