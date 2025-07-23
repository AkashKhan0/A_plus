// website
import photo from "./gallery/web/web1.png";
import photo1 from "./gallery/web/web2.png";
import photo2 from "./gallery/web/web3.png";
import photo3 from "./gallery/web/web4.jpg";
import photo4 from "./gallery/web/web5.jpg";
import photo5 from "./gallery/web/web6.jpg";
import photo6 from "./gallery/web/web7.jpg";
import photo7 from "./gallery/web/web8.jpg";
import casino from "./gallery/web/web9.jpg";
import evolved from "./gallery/web/web10.jpg";
import colaz from "./gallery/web/web11.jpg";
import ravix from "./gallery/web/web12.png";

// photoshoot
import photo8 from "./gallery/cam/cam1.jpeg";
import photo9 from "./gallery/cam/cam2.jpeg";
import photo10 from "./gallery/cam/cam3.jpeg";
import photo11 from "./gallery/cam/cam4.jpeg";
import photo12 from "./gallery/cam/cam5.jpeg";
import photo13 from "./gallery/cam/cam6.jpeg";
import photo14 from "./gallery/cam/cam7.jpeg";
import photo15 from "./gallery/cam/cam8.jpeg";
import photo16 from "./gallery/cam/cam9.jpeg";
import photo17 from "./gallery/cam/cam10.jpeg";
// import photo18 from "./gallery/cam/cam11.jpeg";
import photo19 from "./gallery/cam/cam12.jpeg";
import photo20 from "./gallery/cam/cam13.jpeg";
import photo21 from "./gallery/cam/cam14.jpeg";
import photo22 from "./gallery/cam/cam15.jpeg";

// All images
const images = [
  photo,
  photo1,
  casino,
  evolved,
  colaz,
  photo2,
  photo3,
  ravix,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  // photo18,
  photo19,
  photo20,
  photo21,
  photo22,
];

// Define categories and their image ranges
export const categories = [
  { name: "website", range: [0, 12] },
  { name: "photoshoot", range: [12, 25] },
];

// Only for website (index 0 to 10)
const websiteDetails = [
  {
    link: "https://capable-flan-0a2330.netlify.app",
    description: "Developed the frontend of this website using ReactJS, based on client-provided requirements",
  },
  {
    link: "https://evolvedaestheticsbd.com/",
    description: "Skin care and beauty salon website. Developed using WordPress",
  },
  {
    link: "https://comfortxyz.aplusadvertisinglimited.com/",
    description: "Hospital management system website. Developed using WordPress",
  },
  {
    link: "https://hospitalfront-ten.vercel.app/",
    description: "Hopital Management System, Frontend using ReactJS",
  },
  {
    link: "https://akashkhan0.github.io/daugia/",
    description: "Business website for a car auction company. Developed using HTML and CSS",
  },
  {
    link: "https://evolvedbd.com/",
    description: "Hair transplant clinic website. Developed using WordPress",
  },
  {
    link: "https://dubaibdit.netlify.app/",
    description: "Developed the frontend of this website using ReactJS, based on client-provided requirements",
  },
  {
    link: "https://front-mocha-nu.vercel.app/",
    description: "Landing page website. Developed using ReactJS, based on client-provided requirements",
  },
  {
    link: "https://akashkhan0.github.io/Pranto-Diagnostic-center/",
    description: "Pranto- Diagnostic center. Only froentend developed using HTML and CSS",
  },
  {
    link: "https://3d-fahad.netlify.app/",
    description: "3D Portfolio website. Developed using three.js and ReactJS",
  },
  {
    link: "https://reloop-bd-client.vercel.app/",
    description: "Developed a full-featured eCommerce website using the MERN Stack (MongoDB, Express.js, React, Node.js).",
  },
  {
    link: "https://gemini-chat-ai.netlify.app/",
    description: "Google Gemini AI chat bot. Developed using JavaScript.",
  },
];

// Build final data
const demodata = images.map((image, index) => {
  const isWebsite = index < 12;
  return {
    id: index + 1,
    image,
    ...(isWebsite && websiteDetails[index]),
  };
});

export default demodata;
