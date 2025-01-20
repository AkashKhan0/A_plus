import React, { useEffect } from "react";
import { BiSolidHandRight } from "react-icons/bi";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbHexagonNumber3,
  TbHexagonNumber4,
  TbHexagonNumber5,
} from "react-icons/tb";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Refund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="re_bg"></div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-semibold relative w-fit m-auto mt-10">
        Refund Policy
        <span className="w-1/2 h-1 bg-red-600 absolute left-0 -bottom-3 rounded-full"></span>
      </h1>
      <div className="w-full h-full py-10 relative text-white">
        <h1 className="re_title">
          <BiSolidHandRight /> Refund Policy
        </h1>
        <p className="re_p">
          At A Plus Advertising, we are committed to delivering high-quality
          services to meet your expectations. However, we understand that there
          may be circumstances where a refund is necessary. Below, we outline
          our refund policy for all services :
        </p>
        {/* 1111111 */}
        <h1 className="re_title">
          <TbCircleNumber1 />
          General Terms
        </h1>
        <p className="re_p">
          Refunds are only applicable if the request is made within 7 days of
          service delivery or project commencement, depending on the service.
          Refunds will be processed after evaluating the nature of the request
          and compliance with the terms listed below. Refunds will not be
          provided for completed services, approved work, or if the project has
          progressed beyond a certain milestone (see individual service terms
          below).
        </p>
        {/* 22222222 */}
        <h1 className="re_title">
          <TbCircleNumber2 />
          Service-Specific Refund Policies
        </h1>
        <h1 className="text-lg font-semibold flex items-center gap-2 my-2">
          <VscDebugBreakpointLogUnverified /> SEO Services
        </h1>
        <p className="re_p">
          Refunds are not applicable for monthly SEO packages once the service
          has been initiated. For one-time SEO audits or reports, refunds can be
          requested within 3 days of delivery if you are dissatisfied with the
          report quality. No refund will be provided for poor results due to
          changes in search engine algorithms or lack of implementation on your
          end.
        </p>
        <h1 className="text-lg font-semibold flex items-center gap-2 my-2">
          <VscDebugBreakpointLogUnverified /> Digital Marketing
        </h1>
        <p className="re_p">
          Refunds are not applicable for campaigns already launched or ad
          budgets spent. For strategy or campaign planning, refunds can be
          requested within 48 hours of initial delivery if work has not
          commenced. Partial refunds may be considered if only part of the
          service was completed.
        </p>
        <h1 className="text-lg font-semibold flex items-center gap-2 my-2">
          <VscDebugBreakpointLogUnverified /> Website UI/UX Design
        </h1>
        <p className="re_p">
          Refunds are available for design drafts if requested within 7 days of
          initial delivery. Once you approve a design or development phase,
          refunds are not applicable for the completed work. Refunds are not
          provided for delays caused by incomplete feedback or requested
          revisions from your side.
        </p>
        <h1 className="text-lg font-semibold flex items-center gap-2 my-2">
          <VscDebugBreakpointLogUnverified /> Photography Services
        </h1>
        <p className="re_p">
          Booking fees or deposits are non-refundable once the date is reserved.
          Full refunds are only applicable for cancellations made at least 7
          days before the scheduled shoot. For dissatisfaction with final edits,
          revisions will be provided free of charge, but no refunds will be
          issued.
        </p>
        <h1 className="text-lg font-semibold flex items-center gap-2 my-2">
          <VscDebugBreakpointLogUnverified /> Tech Support
        </h1>
        <p className="re_p">
          Refunds are available if the issue remains unresolved after three
          attempts of troubleshooting. No refunds will be provided if the issue
          is caused by third-party software, hardware, or negligence on the
          client’s side.
        </p>
        <h1 className="text-lg font-semibold flex items-center gap-2 my-2">
          <VscDebugBreakpointLogUnverified /> Animation Services
        </h1>
        <p className="re_p">
          For animation projects, a 50% deposit is non-refundable once the
          storyboard is approved. Refunds may be requested before the animation
          process starts but will not be provided for work already completed.
          Minor revisions are included in the service, but additional revisions
          will be charged separately.
        </p>

        {/* 333333 */}
        <h1 className="re_title">
          <TbHexagonNumber3 />
          Exceptions
        </h1>
        <p className="re_p">
          Refunds are not applicable for discounted or promotional packages. No
          refunds will be issued for delays caused by incomplete information,
          non-cooperation, or late approvals from the client. Refunds for custom
          service packages will be evaluated on a case-by-case basis.
        </p>
        {/* 4444444 */}
        <h1 className="re_title">
          <TbHexagonNumber4 />
          Refund Process
        </h1>
        <p className="re_p">
          To request a refund, please contact our support team at [your email
          address] with the following details: Service purchased Reason for
          refund request Relevant supporting evidence (if any) Refunds will be
          processed within 7-14 business days after approval.
        </p>
        {/* 555555 */}
        <h1 className="re_title">
          <TbHexagonNumber5 />
          Contact Us
        </h1>
        <p className="re_p mb-3">
          If you have any questions about our refund policy, feel free to reach
          out to us :
        </p>
        <p className="flex items-center gap-1">
          <IoCall />
          <span>Phone :</span> +8801850219432
        </p>
        <p className="flex items-center gap-1">
          <MdOutlineMail />
          <span>Email :</span> aplusadvertisinglimited@gmail.com
        </p>
      </div>
    </>
  );
};

export default Refund;
