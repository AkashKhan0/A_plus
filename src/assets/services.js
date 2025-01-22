// marketing data file
import googleAds from "./googleads.webp";
import socialMarketing from "./socialmarketing.webp";

// tech support
import techSupport from "./techsupport.webp";

// website file list
import startup from "./startup.webp";
import subscription from "./subscription.webp";
import blog from "./blog.webp";
import booking from "./booking.webp";
import businessWeb from "./businessweb.webp";
import community from "./community.webp";
import directory from "./directory.webp";
import ecomWeb from "./ecomweb.webp";
import entertainment from "./entertainment.webp";
import event from "./event.webp";
import hobby from "./hobby.webp";
import informational from "./informational.webp";
import interactive from "./interactive.webp";
import kid from "./kid.webp";
import landingPage from "./landingpage.webp";
import membership from "./membership.webp";
import memorial from "./memorial.webp";
import news from "./news.webp";
import nonprofit from "./nonprofit.webp";
import onlineForum from "./onlineforum.webp";
import personal from "./personal.webp";
import petition from "./petition.webp";
import portfolio from "./portfolio.webp";
import school from "./school.webp";
import travel from "./travel.webp";
import wedding from "./wedding.webp";

// animation services
import anim1 from "./anim1.gif";
import anim2 from "./anim2.gif";
import anim3 from "./anim3.gif";
import anim4 from "./anim4.gif";
import anim5 from "./anim5.gif";

const dataList = [
  // seo data list 0-8
  {
    title: "E-commerce SEO",
    description: ["Etsy", "Ebay", "Shopify", "Wix", "Wordpress"],
  },
  {
    title: "Etsy",
    description: [
      "Etsy Shop Audit",
      "Keyword Research",
      "Competitor Research",
      "Optimized Title",
      "Optimized Product Description",
      "13 Tags Per Product",
    ],
    delivery: "10 days",
    price: "$ negotiable",
  },
  {
    title: "Ebay",
    description: [
      "Shop Audit",
      "Keyword Research",
      "Competitor Research",
      "SEO Optimized Title",
      "Product Description",
      "Meta Keywords",
      "Google Meta Description",
      "Image Alt Tags",
      "Setup Template",
      "Product Variation",
      "Ebay HTML Template Design",
      "Mobile Responsive",
    ],
    delivery: "10 days",
    price: "$ negotiable",
  },
  {
    title: "Shopify/ wix/ wordpress",
    description: [
      "Keyword Research",
      "Competitor Research",
      "SEO Optimized Title",
      "Product Description",
      "Meta Keywords",
      "Google Meta Description",
      "Image Alt Tags",
    ],
    delivery: "10 days",
    price: "$ negotiable",
  },
  {
    title: "Off-Page SEO",
    description: [
      "Backlink Building",
      "Guest Blogging",
      "Social Media Marketing",
      "Influencer Marketing",
      "Forum Engagement",
      "Brand Mentions",
      "Content Marketing",
      "Directory Listings",
      "Press Releases",
      "Local SEO",
    ],
    delivery: "10 days",
    price: "$ 100 ",
  },
  {
    title: "On-Page SEO",
    description: [
      "Keyword Research",
      "Title Tag Optimization",
      "Meta Descriptions",
      "URL Structure",
      "Header Tags",
      "Image Optimization",
      "Internal Linking",
      "Content Optimization",
    ],
    delivery: "10 days",
    price: "$ 100 ",
  },
  {
    title: "Tech SEO",
    description: [
      "Site Speed Optimization",
      "Mobile-Friendliness",
      "SSL Installation",
      "XML Sitemap",
      "Robots.txt Optimization",
      "Fixing Crawl Errors",
      "Structured Data Markup",
      "Canonical Tags",
      "404 Error Fixes",
    ],
    delivery: "10 days",
    price: "$ 100 ",
  },
  {
    title: "custom SEO",
    description: ["SEO prices are based on a monthly subscription."],
    delivery: "Talk to set price",
    price: "contact us ",
  },

  // marketing data list 8-9

  {
    image: googleAds,
    title: "Google Ads",
    description:
      "Run impactful Google Ads campaigns to maximize reach, traffic, and conversions for your business or services.",
    link: "/services/googleads",
  },
  {
    image: socialMarketing,
    title: "Social Media Marketing",
    description:
      "Promote your business with strategic social media campaigns to engage audiences and build your online presence.",
    link: "/services/socialmarketing",
  },

  // main sub start  6-6
  {
    image: techSupport,
    title: "Photoshoot",
    description:
      "Develop tech support platforms to assist users with troubleshooting, FAQs, and issue resolution effectively.",
    link: "https://example.com/tech-support",
  },

  // website data list 7-33
  {
    image: startup,
    title: "Startup",
    description:
      "Design powerful startup websites to showcase innovations and attract investors or early adopters.",
    link: "https://example.com/startup",
  },
  {
    image: subscription,
    title: "Subscription",
    description:
      "Create subscription-based platforms to manage recurring payments and provide exclusive content or services.",
    link: "https://example.com/subscription",
  },

  {
    image: blog,
    title: "Blog",
    description:
      "Build a blog website to share ideas, stories, and expertise while engaging your audience with valuable and consistent content.",
    link: "https://example.com/blog",
  },
  {
    image: booking,
    title: "Booking",
    description:
      "Create an efficient booking system website for appointments, reservations, or services to streamline user experiences and boost efficiency.",
    link: "https://example.com/booking",
  },
  {
    image: businessWeb,
    title: "Business Web",
    description:
      "Develop professional business websites to establish online credibility and showcase services, products, and brand identity effectively.",
    link: "https://example.com/business-web",
  },
  {
    image: community,
    title: "Community",
    description:
      "Build online community websites to foster engagement, communication, and shared interests among users in a collaborative environment.",
    link: "https://example.com/community",
  },
  {
    image: directory,
    title: "Directory",
    description:
      "Design directory websites for seamless searching and categorization of businesses, services, or locations in an organized manner.",
    link: "https://example.com/directory",
  },
  {
    image: ecomWeb,
    title: "E-commerce Web",
    description:
      "Build modern e-commerce websites to enhance user experiences and drive sales with responsive design and smooth navigation.",
    link: "https://example.com/ecom-web",
  },
  {
    image: entertainment,
    title: "Entertainment",
    description:
      "Design engaging entertainment websites to captivate audiences with music, movies, or games in an interactive format.",
    link: "https://example.com/entertainment",
  },
  {
    image: event,
    title: "Event",
    description:
      "Develop event websites to manage schedules, registrations, and event details seamlessly while enhancing user engagement.",
    link: "https://example.com/event",
  },
  {
    image: hobby,
    title: "Hobby",
    description:
      "Build websites dedicated to hobbies, sharing passions, tutorials, and communities for like-minded enthusiasts to connect and learn.",
    link: "https://example.com/hobby",
  },
  {
    image: informational,
    title: "Informational",
    description:
      "Develop informational websites to share knowledge, resources, and data effectively for educational or professional purposes.",
    link: "https://example.com/informational",
  },
  {
    image: interactive,
    title: "Interactive",
    description:
      "Create interactive websites to boost engagement, learning, and participation through dynamic and immersive experiences.",
    link: "https://example.com/interactive",
  },
  {
    image: kid,
    title: "Kid",
    description:
      "Design websites tailored for children with safe, engaging, and educational content to inspire learning and creativity.",
    link: "https://example.com/kid",
  },
  {
    image: landingPage,
    title: "Landing Page",
    description:
      "Develop conversion-focused landing pages to drive campaigns, lead generation, or specific actions with optimized design.",
    link: "https://example.com/landing-page",
  },
  {
    image: membership,
    title: "Membership",
    description:
      "Build membership websites to manage user subscriptions, content access, and exclusive community features seamlessly.",
    link: "https://example.com/membership",
  },
  {
    image: memorial,
    title: "Memorial",
    description:
      "Create meaningful memorial websites to honor loved ones and share their legacy through memories, photos, and messages.",
    link: "https://example.com/memorial",
  },
  {
    image: news,
    title: "News",
    description:
      "Design dynamic news websites to deliver real-time updates, articles, and breaking stories with responsive and engaging layouts.",
    link: "https://example.com/news",
  },
  {
    image: nonprofit,
    title: "Nonprofit",
    description:
      "Develop nonprofit websites to promote causes, engage donors, and increase awareness through storytelling and donation options.",
    link: "https://example.com/nonprofit",
  },
  {
    image: onlineForum,
    title: "Online Forum",
    description:
      "Build interactive online forums to facilitate discussions, knowledge sharing, and user interaction within communities.",
    link: "https://example.com/online-forum",
  },
  {
    image: personal,
    title: "Personal",
    description:
      "Create personalized websites to showcase your journey, projects, and portfolio in a creative and professional manner.",
    link: "https://example.com/personal",
  },
  {
    image: petition,
    title: "Petition",
    description:
      "Develop petition websites to gather signatures, spread awareness, and drive actionable campaigns effectively.",
    link: "https://example.com/petition",
  },
  {
    image: portfolio,
    title: "Portfolio",
    description:
      "Showcase your skills, work, and achievements with creative and impactful portfolio websites for career growth.",
    link: "https://example.com/portfolio",
  },
  {
    image: school,
    title: "School",
    description:
      "Build school websites to enhance communication, showcase curriculum, and manage events for students and parents.",
    link: "https://example.com/school",
  },
  {
    image: travel,
    title: "Travel",
    description:
      "Build stunning travel websites to inspire wanderlust and simplify trip planning with engaging content.",
    link: "https://example.com/travel",
  },
  {
    image: wedding,
    title: "Wedding",
    description:
      "Design wedding websites to celebrate love, manage guest lists, and share memorable moments online.",
    link: "https://example.com/wedding",
  },

  // animation services 34-
  {
    image: anim1,
    title: "Comic Animations",
    description:
      "Captivating visuals, vibrant stories, and endless imagination come alive!",
    link: "/services/animation/anim",
  },
  {
    image: anim2,
    title: "Motion Graphics",
    description:
      "Dynamic visuals that captivate, engage, and elevate your brand's story",
    link: "/services/animation/anim",
  },
  {
    image: anim3,
    title: "Explainer Videos",
    description:
      "Engage, educate, and captivate with dynamic, custom-crafted explainer videos!",
    link: "/services/animation/anim",
  },
  {
    image: anim4,
    title: "Custom Animation",
    description:
      "Transform ideas into captivating visuals with tailored, high-impact animations!",
    link: "/services/animation/anim",
  },
  {
    image: anim5,
    title: "Animated Website",
    description:
      "Captivate users with dynamic, visually stunning, and interactive animated websites!",
    link: "/services/animation/anim",
  },
];

export default dataList;
