import React, { useEffect } from "react";
import {
  FaCode,
  FaPaintBrush,
  FaVideo,
  FaCamera,
  FaFilm,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const jobs = [
    {
      title: "Developer",
      icon: <FaCode className="text-3xl text-blue-500" />,
      description:
        "Build and maintain robust, user-friendly websites and applications.",
      skills: [
        "Proficiency in programming languages (JavaScript, Python, PHP, etc.)",
        "Experience with front-end and back-end frameworks",
        "Problem-solving and debugging skills",
      ],
    },
    {
      title: "Designer",
      icon: <FaPaintBrush className="text-3xl text-green-500" />,
      description:
        "Create visually stunning designs that resonate with our audience.",
      skills: [
        "Proficiency in tools like Adobe Creative Suite, Figma, etc.",
        "Creativity and attention to detail",
        "Ability to create wireframes and mockups",
      ],
    },
    {
      title: "Videographer",
      icon: <FaVideo className="text-3xl text-red-500" />,
      description: "Capture and produce high-quality video content.",
      skills: [
        "Experience with video production and editing tools (Adobe Premiere, Final Cut Pro, etc.)",
        "Knowledge of lighting, sound, and camera equipment",
        "Creativity in storytelling",
      ],
    },
    {
      title: "Photographer",
      icon: <FaCamera className="text-3xl text-yellow-500" />,
      description:
        "Produce compelling and professional imagery for our campaigns.",
      skills: [
        "Expertise in DSLR cameras and editing tools (Photoshop, Lightroom, etc.)",
        "Strong portfolio showcasing various photography styles",
        "Attention to detail and creativity",
      ],
    },
    {
      title: "Animation Maker",
      icon: <FaFilm className="text-3xl text-purple-500" />,
      description:
        "Bring ideas to life with engaging animations and motion graphics.",
      skills: [
        "Proficiency in animation software (After Effects, Blender, etc.)",
        "Creativity in storytelling and design",
        "Attention to timing and detail",
      ],
    },
    {
      title: "SEO Expert",
      icon: <FaSearch className="text-3xl text-teal-500" />,
      description:
        "Optimize our online presence to drive traffic and improve rankings.",
      skills: [
        "Expertise in SEO tools (Ahrefs, SEMrush, Google Analytics, etc.)",
        "Knowledge of search engine algorithms",
        "Strong analytical skills",
      ],
    },
    {
      title: "Digital Marketer",
      icon: <FaBullhorn className="text-3xl text-pink-500" />,
      description: "Drive growth and engagement through digital campaigns.",
      skills: [
        "Proficiency in social media platforms and tools",
        "Knowledge of Google Ads and email marketing",
        "Strong communication and analytical skills",
      ],
    },
  ];
  return (
    <>
      <div className="re_bg"></div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto my-10">
        we are hiring
        <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              {job.icon}
              <h2 className="text-2xl font-semibold">{job.title}</h2>
            </div>
            <p className="mb-4 text-gray-300">{job.description}</p>
            <ul className="list-disc pl-5 text-gray-400">
              {job.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center my-16 text-white">
        <p className="text-2xl mb-4">Ready to Apply?</p>
        <p>
          Send your CV and portfolio to :{" "}
          <span className="text-blue-400">
            aplusadvertisinglimited@gmail.com{" "}
          </span>
        </p>
      </div>
      {/* nine  */}
      <div className="flex flex-col items-center justify-center mb-20 text-white">
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

export default Career;
