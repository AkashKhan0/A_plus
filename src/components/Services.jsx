import React, { useState } from "react";
import itemData from "../assets/service";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import cat from "../assets/cat.png";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const [currentItems, setCurrentItems] = useState(itemData);

  const handleNext = () => {
    setCurrentItems((prevItems) => {
      const updatedItems = [...prevItems];
      const firstItem = updatedItems.shift();
      updatedItems.push(firstItem);
      return updatedItems;
    });
  };

  const handlePrev = () => {
    setCurrentItems((prevItems) => {
      const updatedItems = [...prevItems];
      const lastItem = updatedItems.pop();
      updatedItems.unshift(lastItem);
      return updatedItems;
    });
  };

  return (
    <>
      <div className="flex items-center gap-10 flex-wrap mt-20 mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit">
          services
          <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>
        <div
          className="hover-me relative"
          onClick={() => navigate("/services")}
        >
          <img src={cat} alt="" className="cat absolute left-0 w-full" />
          <div className="seeall">
            <span>see all</span>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="slider-container">
          <div className="slider-slide">
            {currentItems.map((item, index) => (
              <div
                key={item.id}
                className="slider-item"
                style={{
                  backgroundImage: `url(${item.image})`,
                  display: index < 6 ? "block" : "none",
                }}
              >
                <div className="slider-content mt-2 sm:mt-10 md:mt-20">
                  <h1 className="slider-name">{item.name}</h1>
                  <p className="slider-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-buttons">
            <button className="prev" onClick={handlePrev}>
              <IoIosArrowBack />
            </button>
            <button className="next" onClick={handleNext}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
