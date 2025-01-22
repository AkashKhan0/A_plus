import React, { useEffect } from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import serbg from "../assets/pvc.jpg";

const Privecy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="con_bg">
        <img src={serbg} alt="" />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mt-10">
        privecy policy
        <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
      </h1>
      <div className="w-full h-full py-10 relative text-white">
        <div className="py-10 mb-10">
          <p className="policy-p mb-10">
            Welcome to A plus Advertising Agency! Your privacy is important to
            us, and we are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your
            data when you interact with our website and services.
          </p>

          {/* first  */}
          <p className="privecy-t">1. Information We Collect</p>
          <p className="policy-p">
            We may collect the following types of information:
          </p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            Personal Information : Name, email address, phone number, and other
            contact details when you contact us or subscribe to our services.
          </p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            Usage Data : IP addresses, browser type, device type, pages visited,
            and the duration of visits through cookies or analytics tools.
          </p>

          {/* second  */}
          <p className="privecy-t mt-5">2. How We Use Your Information</p>
          <p className="policy-p">Your information is used to:</p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            Provide and improve our services.
          </p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            Communicate with you regarding inquiries, promotions, or updates.
          </p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            Analyze website performance and user behavior.
          </p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            Comply with legal requirements.
          </p>

          {/* third  */}
          <p className="privecy-t mt-5">3. Data Sharing and Disclosure</p>
          <p className="policy-p">
            We do not sell or share your personal information with third parties
            except:
          </p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            To trusted partners assisting in service delivery, under
            confidentiality agreements.
          </p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            When required by law or to protect our legal rights.
          </p>

          {/* forth  */}
          <p className="privecy-t mt-5">4. Cookies and Tracking Technologies</p>
          <p className="policy-p">
            We use cookies to enhance your browsing experience. You can manage
            your cookie preferences through your browser settings. Disabling
            cookies may limit some features of our website.
          </p>

          {/* five  */}
          <p className="privecy-t mt-5">5. Data Security</p>
          <p className="policy-p">
            We implement robust security measures to safeguard your data.
            However, no system is completely secure, and we cannot guarantee
            absolute data security.
          </p>

          {/* six  */}
          <p className="privecy-t mt-5">6. Third-Party Links</p>
          <p className="policy-p">
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices or content of these external
            websites.
          </p>

          {/* seven  */}
          <p className="privecy-t mt-5">7. Your Rights</p>
          <p className="policy-p">
            Depending on your location, you may have the right to:
          </p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            Access, correct, or delete your personal data.
          </p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            Opt-out of marketing communications.
          </p>
          <p className="policy-p">
            <TbArrowBadgeRightFilled className="pr_arr" />
            File a complaint with a data protection authority.
          </p>

          {/* eight  */}
          <p className="privecy-t mt-5">8. Changes to This Policy</p>
          <p className="policy-p">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the updated effective date.
          </p>

          {/* nine  */}
          <div className="flex flex-col items-center justify-center mt-20">
            <p className="w-fit tspan text-2xl mb-10">
              For any questions or concerns regarding this Privacy Policy,
              please contact us
            </p>

            <div className="btn1 w-40">
              <button onClick={() => navigate("/contact")}>contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privecy;
