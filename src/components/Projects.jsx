import React from "react";
import images from "../assets/project";
import cat from "../assets/cat.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center gap-5 flex-wrap mb-10 mt-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit">
          projects
          <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>
        <div
          className="hover-me relative"
          onClick={() => navigate("/projects")}
        >
          <img src={cat} alt="" className="cat absolute left-0 w-full" />
          <div className="seeall">
            <span>see all</span>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="banner w-full h-[50vh] sm:h-[70vh] md:h-[100vh]">
          <div className="slider" style={{ "--quantity": images.length }}>
            {images.map((image, index) => (
              <div
                key={index}
                className="item"
                style={{ "--position": index + 1 }}
              >
                <img
                  src={image}
                  alt={`Dragon ${index + 1}`}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="content">
            <div className="model w-full h-[25vh] sm:h-[43vh] md:h-[65vh]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
