import React, { useEffect, useState } from "react";
import demodata, { categories } from "../assets/demodata";
import { useNavigate } from "react-router-dom";
import serbg from "../assets/u_bg.jpg";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("website");

  // Find the selected category range
  const selectedCategory = categories.find(
    (cat) => cat.name === activeCategory
  );
  const filteredData = selectedCategory
    ? demodata.slice(selectedCategory.range[0], selectedCategory.range[1])
    : [];

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="" />
      </div>
      <div className="w-full h-full py-10 relative text-black">
        <div className="flex flex-wrap gap-5 items-center justify-center my-10">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`gall cursor-pointer px-4 py-2 mx-2 ${
                activeCategory === category.name
                  ? "bg-red-500 text-black"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredData.map((review, index) => (
            <div
              className="u_card2 h-[250px] u_box w-full hover_up_img overflow-hidden"
              key={index}
            >
              <img
                src={review.image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-[245px] rounded-md object-contain"
              />
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
