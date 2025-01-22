import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Seo from "./Seo";
import Uiux from "./Uiux";
import Smm from "./Smm";
import Tech from "./Tech";
import Animation from "./Animation";
import serbg from "../assets/ser.jpg";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "sub-active" : "";
  };

  const renderComponent = () => {
    switch (location.pathname) {
      case "/services":
        return <Seo />;
      case "/services/uiux":
        return <Uiux />;
      case "/services/smm":
        return <Smm />;
      case "/services/photoshoot":
        return <Tech />;
      case "/services/animation":
        return <Animation />;
      default:
        return <div>No matching component found.</div>;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="" />
      </div>
      <div className="w-full h-full text-white">
        <div className="w-full flex flex-wrap items-center justify-center gap-5 mt-20 sm:mt-5 mb-5">
          <div className={`sub-menu relative `}>
            <Link to="/services">
              <div className={`sub-shap ${isActive("/services")}`}></div>
              <button
                className={`bbutton ${isActive("/services") ? "clr" : "wt"}`}
              >
                seo
              </button>
            </Link>
          </div>
          <div className={`sub-menu relative`}>
            <Link to="/services/uiux">
              <div className={`sub-shap ${isActive("/services/uiux")}`}></div>
              <button
                className={`bbutton ${
                  isActive("/services/uiux") ? "clr" : "wt"
                }`}
              >
                UI/ux
              </button>
            </Link>
          </div>
          <div className={`sub-menu relative`}>
            <Link to="/services/smm">
              <div className={`sub-shap ${isActive("/services/smm")}`}></div>
              <button
                className={`bbutton ${
                  isActive("/services/smm") ? "clr" : "wt"
                }`}
              >
                social marketing
              </button>
            </Link>
          </div>
          <div className={`sub-menu relative`}>
            <Link to="/services/photoshoot">
              <div
                className={`sub-shap ${isActive("/services/photoshoot")}`}
              ></div>
              <button
                className={`bbutton ${
                  isActive("/services/photoshoot") ? "clr" : "wt"
                }`}
              >
                Photoshoot
              </button>
            </Link>
          </div>
          <div className={`sub-menu relative`}>
            <Link to="/services/animation">
              <div
                className={`sub-shap ${isActive("/services/animation")}`}
              ></div>
              <button
                className={`bbutton ${
                  isActive("/services/animation") ? "clr" : "wt"
                }`}
              >
                Animation
              </button>
            </Link>
          </div>
        </div>

        {/* pages */}
        <div className="w-full">{renderComponent()}</div>
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

export default Services;
