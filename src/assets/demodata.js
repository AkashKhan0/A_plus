// Import all 30 photos from the "gallery" folder
import photo from "./gallery/photo.jpg";
import photo1 from "./gallery/photo1.jpg";
import photo2 from "./gallery/photo2.jpg";
import photo3 from "./gallery/photo3.jpg";
import photo4 from "./gallery/photo4.jpg";
import photo5 from "./gallery/photo19.jpg";
import photo6 from "./gallery/photo20.jpg";
import photo7 from "./gallery/photo21.jpg";
import photo8 from "./gallery/photo8.jpeg";
import photo9 from "./gallery/photo9.jpeg";
import photo10 from "./gallery/photo10.jpeg";
import photo11 from "./gallery/photo11.jpeg";
import photo12 from "./gallery/photo12.jpeg";
import photo13 from "./gallery/photo13.jpeg";
import photo14 from "./gallery/photo14.jpeg";
import photo15 from "./gallery/photo15.jpeg";
import photo16 from "./gallery/photo16.jpeg";
import photo17 from "./gallery/photo17.jpeg";
import photo18 from "./gallery/photo18.jpeg";
import photo19 from "./gallery/photo5.jpeg";
import photo20 from "./gallery/photo6.jpeg";
import photo21 from "./gallery/photo7.jpeg";

// Store all images in an array
const images = [
  photo,
  photo1,
  photo2,
  photo3,
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
  photo18,
  photo19,
  photo20,
  photo21,
];

// Define categories and their image ranges
export const categories = [
  { name: "website", range: [0, 8] },
  { name: "photoshoot", range: [9, 22] },
  { name: "seo", range: [30, 31] },
  { name: "marketing", range: [31, 32] },
  { name: "animation", range: [33, 34] },
];

// Generate demodata array dynamically
const demodata = images.map((image, index) => ({
  id: index + 1,
  image,
}));

export default demodata;
