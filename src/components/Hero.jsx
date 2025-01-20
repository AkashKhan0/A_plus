import React from "react";
import video from "../assets/bgtext.mp4";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full h-32 sm:h-24 relative -z-10">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover p-2"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="text-box overflow-hidden">
              <h1>a plus advertising</h1>
            </div>
          </div>
          <p className="text-white font-medium text-xl text-center tracking-wider mb-7">
            Excellence in Business & Communication
          </p>

          <p className="text-hero-p">
            "Ideas Meeting Eyes - Get a Wider Reach and Amplify Your Voice!"
          </p>
          <p className="text-hero-p">
            "From Ideas to Impressions - We encompass end to end"
          </p>
          <p className="text-hero-p">
            "Point Your Brand to the World to Broadcast"
          </p>
          <div className="flex flex-wrap w-full mt-10 items-center gap-5 justify-center">
            <div className="btn1 w-40">
              <button onClick={() => navigate("/contact")}>contact</button>
            </div>
            <div className="btn1 w-40">
              <button onClick={() => navigate("/services")}>services</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
