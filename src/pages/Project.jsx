import React, { useEffect } from "react";
import demodata from "../assets/demodata";
import { useNavigate } from "react-router-dom";
import serbg from "../assets/u_bg.jpg";

const Project = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="" />
      </div>
      <div className="w-full h-full py-10 relative text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mb-20">
          projects demo
          <span className="w-full h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>

        <div className="w-full flex items-center justify-center gap-5 flex-wrap">
          {demodata.map((review, index) => (
            <div className="u_card2 u_box w-full hover_up" key={index}>
              <div className="owner_p">
                <img src={review.image} alt="" className="w-full" />
                <div className="">
                  <h1 className="text-xl sm:text-2xl capitalize font-medium text-center my-3">
                    {review.name}
                  </h1>
                  <div className="project_a flex items-center justify-center">
                    <a
                      href={review.description}
                      target="_blank"
                      className="btn"
                    >
                      preview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      </div>
    </>
  );
};

export default Project;
