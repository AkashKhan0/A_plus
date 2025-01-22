import React, { useEffect } from "react";
import teamData from "../assets/teammate";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="con_bg"></div>
      <div className="w-full h-full py-10 relative text-white">
        <div className="w-full h-fit text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mb-20">
            about
            <span className="w-full h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
          </h1>
          <p className="my-10 text-justify font-normal text-lg">
            Some information about our company : Welcome to “A plus Advertising
            ” , a proud sub-brand of “A plus Communication”, established in
            2024. We specialize in delivering high-quality services, ensuring
            value for your investment, and always adhering to timely work for
            maximum client satisfaction. Our commitment extends beyond just
            results; we’re here to provide unmatched client support every step
            of the way. Let’s keep it simple, stay focused, and together, be
            unstoppable in achieving your business goals. Get in touch today to
            transform your ideas into reality!
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-5 flex-wrap">
          {teamData.slice(0, 2).map((review, index) => (
            <div className="u_card u_box w-full" key={index}>
              <div className="owner">
                <img src={review.image} alt="" className="" />
                <div className="">
                  <h1 className="text-xl sm:text-2xl capitalize font-medium text-center my-3">
                    {review.name}
                  </h1>
                  <p className="text-base text-center font-light">
                    {review.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* owners */}
        <div className="w-full flex items-center justify-center gap-5 flex-wrap">
          {teamData.slice(2, 5).map((review, index) => (
            <div className="u_card1 u_box w-full" key={index}>
              <div className="owner">
                <img src={review.image} alt="" className="" />
                <div className="">
                  <h1 className="text-xl sm:text-2xl capitalize font-medium text-center my-3">
                    {review.name}
                  </h1>
                  <p className="text-base text-center font-light">
                    {review.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* nine  */}
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="w-fit tspan text-2xl mb-10">
            For any questions or concerns regarding this Privacy Policy, please
            contact us
          </p>

          <div className="btn1 w-40">
            <button onClick={() => navigate("/contact")}>contact</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
