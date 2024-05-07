import React from "react";
import { GoGitBranch } from "react-icons/go";
import { PiFoldersLight } from "react-icons/pi";
import { AiOutlinePieChart } from "react-icons/ai";

export const featuresObj: Array<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = [
  {
    icon: <GoGitBranch className="text-[#3B81F6]" />,
    title: "Repo Quick Stats",
    description:
      "Track repository commits, issues, PRs, releases, etc. at a glance",
  },
  {
    icon: <PiFoldersLight className="text-[#7CD3FC]" />,
    title: "Repo Collections",
    description: "Organize and track multiple repositories in handy lists",
  },
  {
    icon: <AiOutlinePieChart className="text-[#14B8A6]" />,
    title: "Repo Insights",
    description: "Charts of the most important repository metrics",
  },
];

export const Features = () => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-[60px] font-bold text-center tracking-widest">
        Features
      </h1>
      <h2 className="text-[18px] font-bold text-center text-dull-gray">
        What's in the box
      </h2>
      <div className="flex mt-[60px] mb-[100px] gap-[100px]">
        {featuresObj.map(({ icon, title, description }) => {
          return (
            <div
              key={title}
              className="flex flex-col items-center justify-center w-[240px] gap-[20px]"
            >
              <div className="text-[40px]">{icon}</div>
              <div className="flex flex-col gap-[10px] items-center">
                <h1 className="text-[22px] font-bold">{title}</h1>
                <p className="text-center font-bold text-dull-gray">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
