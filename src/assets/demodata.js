// Import all 30 photos from the "gallery" folder
import photo from "./gallery/photo.jpg";
import photo1 from "./gallery/photo1.jpg";
import photo2 from "./gallery/photo2.jpg";
import photo3 from "./gallery/photo3.jpg";
import photo4 from "./gallery/photo4.jpg";
import photo5 from "./gallery/photo5.jpg";
import photo6 from "./gallery/photo6.jpg";
import photo7 from "./gallery/photo7.jpg";
import photo8 from "./gallery/photo8.jpg";
import photo9 from "./gallery/photo9.jpg";
import photo10 from "./gallery/photo10.jpg";
import photo11 from "./gallery/photo11.jpg";
import photo12 from "./gallery/photo12.jpg";
import photo13 from "./gallery/photo13.jpg";
import photo14 from "./gallery/photo14.jpg";
import photo15 from "./gallery/photo15.jpg";
import photo16 from "./gallery/photo16.jpg";
import photo17 from "./gallery/photo17.jpg";
import photo18 from "./gallery/photo18.jpg";
import photo19 from "./gallery/photo19.jpg";
import photo20 from "./gallery/photo20.jpg";
import photo21 from "./gallery/photo21.jpg";
import photo22 from "./gallery/photo22.jpg";
import photo23 from "./gallery/photo23.jpg";
import photo24 from "./gallery/photo24.jpg";
import photo25 from "./gallery/photo25.jpg";
import photo26 from "./gallery/photo26.jpg";
import photo27 from "./gallery/photo27.jpg";
import photo28 from "./gallery/photo28.jpg";
import photo29 from "./gallery/photo29.jpg";
import photo30 from "./gallery/photo30.jpg";
import photo31 from "./gallery/photo31.jpg";
import photo32 from "./gallery/photo32.jpg";
import photo33 from "./gallery/photo33.jpg";
import photo34 from "./gallery/photo34.jpg";

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
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
  photo31,
  photo32,
  photo33,
  photo34,
];

// Define categories and their image ranges
export const categories = [
  { name: "website", range: [0, 5] },
  { name: "seo", range: [35, 36] },
  { name: "marketing", range: [36, 37] },
  { name: "photoshoot", range: [5, 34] },
  { name: "animation", range: [37, 38] },
];

// Generate demodata array dynamically
const demodata = images.map((image, index) => ({
  id: index + 1,
  image,
}));

export default demodata;
