import React, { useEffect, useState } from "react";
import reviewData from "../assets/review";
import "./slider.css";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Slider = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(2);

  const [projectCount, setProjectCount] = useState(0);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev + 1 < reviewData.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    if (inView && !startCounting) {
      setStartCounting(true);

      const projectInterval = setInterval(() => {
        setProjectCount((prev) => {
          if (prev < 83) return prev + 1;
          clearInterval(projectInterval);
          return 83;
        });
      }, 2000 / 83);

      const satisfactionInterval = setInterval(() => {
        setCustomerSatisfaction((prev) => {
          if (prev < 87) return prev + 1;
          clearInterval(satisfactionInterval);
          return 87;
        });
      }, 2000 / 87);
    }
  }, [inView, startCounting]);

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
              <h1 className="text-lg uppercase font-semibold mb-2">
                {review.name}
              </h1>
              <p className="text-base font-light">{review.description}</p>
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

      {/* counting review  */}
      <div
        ref={ref}
        className="flex flex-col items-center justify-center text-white"
      >
        <h1 className="text-2xl sm:text-3xl text-center font-thin mb-10">
          Our Achievements
        </h1>
        <div className="flex flex-wrap w-full items-start justify-evenly gap-5">
          <div className="flex items-center flex-col gap-3 p-5">
            <h2 className="text-2xl titel_count font-light">
              Complete Project
              <span
                style={{
                  display: "inline-block",
                  width: `${projectCount}%`,
                  height: "2px",
                  background: "red",
                  transition: "width 0.3s",
                }}
              ></span>
            </h2>
            <h2 className="text-4xl counting font-semibold">{projectCount}+</h2>
          </div>
          <div className="flex items-center flex-col gap-3 p-5">
            <h2 className="text-2xl titel_count font-light">
              Satisfied Customer
              <span
                style={{
                  display: "inline-block",
                  width: `${customerSatisfaction}%`,
                  height: "2px",
                  background: "red",
                  transition: "width 0.3s",
                }}
              ></span>
            </h2>
            <h2 className="text-4xl counting font-semibold">
              {customerSatisfaction}%
            </h2>
          </div>
          <div className="flex items-center flex-col gap-3 p-5">
            <h2 className="text-2xl titel_count font-light">
              Review Rate
              <span
                style={{
                  display: "inline-block",
                  width: `${customerSatisfaction}%`,
                  height: "2px",
                  background: "red",
                  transition: "width 0.3s",
                }}
              ></span>
            </h2>
            <h2 className="text-4xl counting1 font-semibold">
              <div className="stars flex items-center">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="star"
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "0 2px",
                      background: `linear-gradient(90deg, red ${
                        index < Math.floor(customerSatisfaction / 20)
                          ? "100%"
                          : index === Math.floor(customerSatisfaction / 20)
                          ? `${(customerSatisfaction % 20) * 5}%`
                          : "0%"
                      }, #ccc 0%)`,
                      clipPath:
                        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                  ></div>
                ))}
              </div>
            </h2>
          </div>
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
