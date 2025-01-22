import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import serbg from "../assets/ser.jpg";

const Anim = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="" />
      </div>
      <div className="w-full h-fit text-center my-10 text-white">
        <div className="relative w-full h-24 flex items-center justify-center">
          <h1 className="anim text-3xl sm:text-5xl md:text-8xl">animation</h1>
          <h1 className="anim text-3xl sm:text-5xl md:text-8xl">animation</h1>
        </div>
        <h1 className="anim_h1 text-lg sm:text-2xl md:text-3xl my-5">
          Bring Your Ideas to Life with Stunning Animations and Cartoons
        </h1>
        <p className="text-justify text-lg font-medium mb-2">
          "Captivate your audience with custom animations and cartoons that tell
          your story like never before. Whether you’re looking to engage
          customers, enhance your brand, or add a creative touch to your
          project, we’ve got you covered!"
        </p>
        <p className="text-justify text-lg font-medium">
          <b>Animations That Speak:</b> From explainer videos to eye-catching
          promotional content, we create animations that leave a lasting
          impression. Custom Cartoons for Every Need: Whether it’s for
          storytelling, advertising, or entertainment, our team brings your
          ideas to life with unique and creative cartoons. Boost Engagement:
          Animated content is proven to grab attention and drive results. Let us
          help you stand out!
        </p>
        <p className="text-justify text-lg font-medium my-2">
          "Ready to Add Motion to Your Ideas? Let’s Create Something Amazing!"
        </p>
        <div className="btn1 w-40 m-auto my-10">
          <button onClick={() => navigate("/contact")}>contact</button>
        </div>
      </div>
    </>
  );
};

export default Anim;
