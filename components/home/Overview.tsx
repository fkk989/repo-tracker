import Image from "next/image";
import React from "react";

export const Overview = () => {
  return (
    <div className="flex justify-center items-center gap-[100px] mt-[200px] w-[1200px]">
      <Image
        className=" border-common-light-gray border-[1px] rounded-lg"
        src={
          "https://res.cloudinary.com/daixf8djk/image/upload/v1675380125/RepoTracker/dashboard-dark_xtxsda.png"
        }
        alt=""
        width={570}
        height={420}
      />
      <div className="flex flex-col gap-[30px]">
        <h1 className="text-[32px] font-bold">
          Repository <span> Overview</span>
        </h1>
        <p className="text-dull-gray text-[18px]">
          Key metrics for all repositories at a glance. See what's new and if
          there are any updates. Everything is hyperlinked to the repository on
          GitHub for quick access.
        </p>
      </div>
    </div>
  );
};
