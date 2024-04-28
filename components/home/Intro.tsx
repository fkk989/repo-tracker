import React from "react";
import { FiGitCommit } from "react-icons/fi";
import { PiGitPullRequestBold } from "react-icons/pi";
import { LuUsers2 } from "react-icons/lu";
import { SigninBtn } from "../buttons";

export const Intro = () => {
  return (
    <div className=" flex flex-col items-center  mt-[100px] w-[1200px]">
      {/* intro1 */}
      <div className="flex flex-col items-center w-[800px]">
        <div className="flex items-center gap-[30px] font-bold">
          <FiGitCommit className="text-[40px] text-dull-gray font-bold" />
          <PiGitPullRequestBold className="text-[40px] text-dull-gray font-bold" />
          <LuUsers2 className="text-[40px] text-dull-gray font-bold" />
        </div>
        {/* heading */}
        <div className="flex flex-col  items-center gap-[20px]">
          <h1
            className="text-[56px] font-bold text-center"
            style={{
              lineHeight: "60px",
            }}
          >
            GitHub Repository <span>Tracking</span>
            <span>,</span>
            <span>Stats</span>
            <span>,</span>and <span>Insights</span>
          </h1>
          <h2 className="text-[28px] text-dull-gray">
            All development activity on one page
          </h2>
        </div>
        {/* sign btn */}
        <div className="mt-[50px]">
          <SigninBtn
            text="Start Tracking"
            width="210px"
            height="50px"
            fontSize="20px"
            iconsHeight="30px"
            bgColor="white"
            textColor="black"
          />
        </div>
      </div>
      {/* demo video */}
      <div className="mt-[200px]">
        {/* video */}
        <video
          className="rounded-md w-[100%]"
          src="https://res.cloudinary.com/daixf8djk/video/upload/v1675951756/RepoTracker/demo_2023_02_09_2_fhm0gb.mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
        ></video>
      </div>
      {/* intro 2 */}
      <div className="relative flex flex-col mt-[200px]">
        <span className="absolute top-0 left-[35%] w-[150px] h-[6px] bg-[#3F3F46]"></span>
        <h1
          className="text-[32px] w-[800px] text-center font-bold mt-[25px] mb-[25px]"
          style={{
            lineHeight: "40px",
          }}
        >
          RepoTracker is a <span>Repository Analytics Tool</span> that augments
          GitHub's internal statistics for a better{" "}
          <span>Developer Experience</span>
        </h1>
        <span className="absolute bottom-0 right-[35%] w-[150px] h-[6px] bg-[#3F3F46]"></span>
      </div>
    </div>
  );
};
