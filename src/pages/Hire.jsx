import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import serbg from "../assets/re_bg.jpg";
import {
  FaSearch,
  FaPaintBrush,
  FaCamera,
  FaLaptopCode,
  FaCog,
} from "react-icons/fa";

const Hire = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Hire an SEO Expert",
      icon: <FaSearch className="text-3xl text-teal-500" />,
      description:
        "Boost your website's visibility and drive organic traffic with our SEO expertise. We provide tailored solutions to improve rankings and grow your online presence.",
      buttonText: "Contact Now",
    },
    {
      title: "Hire a Web Designer",
      icon: <FaPaintBrush className="text-3xl text-green-500" />,
      description:
        "Design stunning, user-friendly websites that captivate your audience and represent your brand effectively. Let us bring your vision to life.",
      buttonText: "Contact Now",
    },
    {
      title: "Hire a Photographer",
      icon: <FaCamera className="text-3xl text-yellow-500" />,
      description:
        "Capture every moment with professional photography services. From product shoots to events, we ensure every detail is picture-perfect.",
      buttonText: "Contact Now",
    },
    {
      title: "Hire a Graphics Designer",
      icon: <FaLaptopCode className="text-3xl text-blue-500" />,
      description:
        "Elevate your brand with visually striking graphics. Our designers specialize in creating logos, branding, and marketing materials that stand out.",
      buttonText: "Contact Now",
    },
    {
      title: "Hire a Tech Expert",
      icon: <FaCog className="text-3xl text-purple-500" />,
      description:
        "Streamline your operations with technical expertise. We provide solutions to complex problems, ensuring your technology works seamlessly.",
      buttonText: "Contact Now",
    },
  ];

  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="Background" />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto my-10">
        You can hire
        <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover_up"
          >
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold">{service.title}</h2>
            </div>
            <p className="mb-4 text-gray-300">{service.description}</p>

            <div className="flex items-center justify-center w-full mt-5 px-5">
              <button
                className="btn_pack w-fit"
                onClick={() => navigate("/contact")}
              >
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-16 text-white">
        <p className="text-2xl mb-4">Need a service? Contact us today!</p>
        <p>
          Email us at:{" "}
          <a
            href="mailto:aplusadvertisinglimited@gmail.com?subject=Service Inquiry"
            className="text-blue-400"
          >
            aplusadvertisinglimited@gmail.com
          </a>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mb-20 text-white">
        <p className="w-fit tspan text-2xl mb-10">
          Have questions? We are here to assist you.
        </p>
        <div className="btn1 w-40">
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </div>
    </>
  );
};

export default Hire;
