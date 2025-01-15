import React, { useEffect, useState } from "react";
import reviewData from "../assets/review";
import "./Slider.css";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(2); // Default active slide index

  useEffect(() => {
    const items = document.querySelectorAll(".sliderr .itemms");
    const loadShow = () => {
      let stt = 0;

      // Reset active item styles
      items[active].style.transform = `none`;
      items[active].style.zIndex = 1;
      items[active].style.filter = "none";
      items[active].style.opacity = 1;

      // Apply styles for items after the active one
      for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }

      // Reset counter and apply styles for items before the active one
      stt = 0;
      for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    };

    loadShow(); // Call function whenever the active index changes
  }, [active]); // Dependency on `active`

  // Handlers for next and previous buttons
  const handleNext = () => {
    setActive((prev) => (prev + 1 < reviewData.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <>
      <div className="text-white mb-20">
        <div className="flex items-center gap-5 flex-wrap mb-10 mt-32">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit">
            reviews
            <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
          </h1>
        </div>
        <div className="sliderr">
          {reviewData.map((review, index) => (
            <div className="itemms text-white" key={index}>
              <img
                src={review.image}
                alt="image"
                className=" w-28 h-28 object-cover mb-5 m-auto rounded-full"
              />
              <h1 className="text-lg uppercase font-normal mb-2">
                {review.name}
              </h1>
              <p className="text-base capitalize font-light">
                {review.description}
              </p>
            </div>
          ))}
          <button id="nextt" onClick={handleNext}>
            {">"}
          </button>
          <button id="prevt" onClick={handlePrev}>
            {"<"}
          </button>
        </div>
      </div>

      {/* nine  */}
      <div className="flex flex-col items-center justify-center my-20 text-white">
        <p className="w-fit tspan text-2xl mb-10">
          For any questions or concerns regarding this Privacy Policy, please
          contact us
        </p>

        <div className="btn1 w-40">
          <button onClick={() => navigate("/contact")}>contact</button>
        </div>
      </div>
    </>
  );
};

export default Slider;
