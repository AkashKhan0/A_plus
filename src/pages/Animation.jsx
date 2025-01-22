import React, { useEffect } from "react";
import dataList from "../assets/services";
import { useNavigate } from "react-router-dom";
import serbg from "../assets/ser.jpg";

const Animation = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="" />
      </div>
      <div className="w-full h-fit text-center mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mb-10">
          Animation
          <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>
        <p className="mt-10 text-xl font-semibold">
          Make Your Thoughts A Reality Using Our Professional Animation Services
        </p>
        <p className="my-4 text-justify">
          Personalized services in the arena of animation are created to turn
          your ideas into amazing visuals that are especially tailored to your
          needs. Be it comic-style, motion graphic animation, or Explainer video
          creativity, such reflects the ideas.
        </p>
        <p className="my-4 text-justify">
          <b>Comic Animations:</b> Develop a precisely delineated comic-style
          narrating with graphic animations allowing viewers to be undeniably
          impressed. <br /> <b>Motion Graphics:</b> Your brand's key message
          will be enhanced and the content of your publication will attract more
          attention thanks to the use of modern, full-of-life themes. <br />
          <b>Explainer Videos:</b> These animations are clear and fun so that
          you can communicate your ideas efficiently to the recipient. <br />
          <b>Custom Animation Solutions:</b> Animation packages, which are
          personalized for you and that are designed to suit your vision and
          aims, are provided.
        </p>
        <p className="mb-10 text-justify">
          The use of advanced technologies and an indefatigable intention to do
          things right is the formula we follow for having a well-built product
          delivered very fast and with a high level of quality. We allow you to
          think about how to make your audience feel good and then execute our
          plans from start to finish.
        </p>
      </div>

      {/* services card */}
      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5 mb-24">
        {dataList.slice(37, 42).map((item, index) => (
          <div
            key={index}
            className="w-full h-80 ser__card"
            onClick={() => navigate(item.link)}
          >
            <div className="front">
              <img src={item.image} alt="" className="" />

              <h1 className="card-h1 text-3xl font-semibold">{item.title}</h1>
              <p className="card-p py-2 text-center px-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Animation;
