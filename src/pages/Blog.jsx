import React, { useEffect } from "react";
import gif1 from "../assets/zif1.png";
import gif2 from "../assets/zif2.png";
import gif3 from "../assets/zif3.png";
import gif4 from "../assets/zif4.png";
import gif5 from "../assets/zif5.gif";
import gif6 from "../assets/zif6.png";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="con_bg"></div>
      <div className="w-full h-full py-10 relative text-slate-300">
        <div className="w-full h-fit text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mb-20">
            blog
            <span className="w-full h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
          </h1>
          <p className="my-10 text-lg font-light text-justify">
            Explore the captivating globe or realize the ideas of various
            experts converging constantly into a world of practical tips
            sparking curiosity and brewing creativity. Well, this is an ultimate
            destination for staying updated, learning something different, or
            seeing things in a new light-your blog where you get that extra
            special content meaningful and resonant in everyone's terms. Join us
            in this journey of exploration, sharing, and growth!
          </p>
        </div>
      </div>

      {/* blog services here */}
      <div className="relative w-full h-full mb-20 timline">
        {/* first one */}
        <div className="blog_container relative left_part">
          <img src={gif1} alt="" />
          <div className="blog_box relative">
            <h1>Website building strategy!</h1>
            <p className=" text-justify">
              Building a successful website is not only about how it looks but
              also about how you strategize it. Our Website Building Strategy
              isn't just creating a work of art; it's creating just the right
              balance between form, function, and purpose. From designing for us
              to optimized performance and intuitive navigation, each element is
              meticulously planned to captivate your audience and drive results.
              Be it portfolio, business platform, or e-commerce powerhouse, our
              strategy is above and beyond making your website a presence but
              rather an experience. Let's build a site that speaks, sells, and
              succeeds!
            </p>
            <span className="left_arrow"></span>
          </div>
        </div>
        {/* second one */}
        <div className="blog_container relative right_part">
          <img src={gif2} alt="" />
          <div className="blog_box relative">
            <h1>Which websites rank fast!</h1>
            <p className=" text-justify">
              How to get fast rankings for your website! Ranked high and fast,
              good content, Excellent user experience with smart and
              Mobile-friendly designs, as well as superior backlinks-these are
              what high-flyers have in store. Discover how speed, relevance, and
              authority give edge in the highly competitive domain. Find useful
              tips for building websites that will certainly be loved by search
              engines and rank up high in no time!
            </p>
            <span className="right_arrow"></span>
          </div>
        </div>
        {/* thired one */}
        <div className="blog_container relative left_part">
          <img src={gif3} alt="" />
          <div className="blog_box relative">
            <h1>How should I make a website!</h1>
            <p className=" text-justify">
              The best part of it all will be in building a website as it takes
              what is intangible in your heart and mind and manifest that in the
              visible, enabling access to millions. First, define the purpose,
              whether it is to show your portfolio, start a blog, or open an
              online store. Choose a platform that is easy to use: WordPress,
              Wix, or Shopify; otherwise, jump into coding with HTML, CSS, and
              JavaScript for custom-tailored touch. Design with the audience in
              mind- responsive layouts and attention-grabbing images with
              seamless navigation. Optimize for speed and Search Engine
              Optimization to reach an even broader audience, but be sure
              everything works well tested before going live. Your website is
              your digital identity. Make it unique, impactful, and
              unforgettable!
            </p>
            <span className="left_arrow"></span>
          </div>
        </div>
        {/* fourth one */}
        <div className="blog_container relative right_part">
          <img src={gif4} alt="" />
          <div className="blog_box relative">
            <h1>Why SEO is important</h1>
            <p className=" text-justify">
              Today, SEO (Search Engine Optimization) is almost synonymous with
              online success. It may be about ranking higher on search engines,
              but even more so it is about being found by your audience at just
              the right time. An optimized website generates quality traffic but
              also builds trust and offers enhanced user experience for all. SEO
              gets your content what it deserves-the cutting edge over
              competition and a stream of loyal customers. Whether you're a
              business, blogger, or brand, SEO will take you to that beautiful
              place called international audience, credibility, and sustainable
              growth. All this and online visibility being the life wire these
              days, one might ask, 'who needs SEO?' 'who doesn't need it?' in
              fact-it's as important as that.
            </p>
            <span className="right_arrow"></span>
          </div>
        </div>
        {/* fifth one */}
        <div className="blog_container relative left_part">
          <img src={gif5} alt="" />
          <div className="blog_box relative">
            <h1>Photoshoot!</h1>
            <p className=" text-justify">
              Seize-the-day photography events and family programs-the really
              wonderful photographs of priceless moments in life happen only at
              joyful occasions and small family gatherings. We record each happy
              smile, every laughter, and those moments that are very memorable.
              Great creativity meets polished professionalism and attention to
              detail, and perfect photographers turn fleeting moments into
              treasures. Let us help tell your story-with every spectacular
              shot!" Active voice: It is the subject that does the action. The
              sentence requires an active verb so it is more exciting. For
              example in those sentences. There are a few passive constructions
              also observing: It is important to give a perspective from both
              active and passive sentences.
            </p>
            <span className="left_arrow"></span>
          </div>
        </div>
        {/* sixth one */}
        <div className="blog_container relative right_part">
          <img src={gif6} alt="" />
          <div className="blog_box relative">
            <h1>video editing</h1>
            <p className=" text-justify">
              Convert your raw footage to beautiful professional-looking videos
              with our finest video editing service. Be it composing engaging
              stories, smooth transitions, color enhancement or neatening audio
              for an immersive experience-we all bring your vision perfectly and
              creatively. Whether personal or corporate videos: every frame
              tells your story with impact and excellence. Let's make all your
              moments perfect and ideas unique-because every detail matters!
              Transform the raw footage you shoot from your camera to stunning
              professional videos with our latest video editing services.
              Whether it be compelling storytelling, smooth transitions, color
              enhancement, or the audio aspect for a complete experience, we
              bring your vision alive with precision and creativity. Be it
              personal projects or corporate videos: every frame tells your
              story with impact and excellence. Let's make those unforgettable
              moments and extraordinary ideas because every detail matters!
            </p>
            <span className="right_arrow"></span>
          </div>
        </div>
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

export default Blog;
