import { ImStatsBars } from "react-icons/im";
import { IoFolderOutline, IoGitCommitOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { GoGitBranch, GoRepoForked } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { PiUsersLight, PiGitPullRequestLight } from "react-icons/pi";
import { BiInfoCircle } from "react-icons/bi";
import Link from "next/link";

const repoMinimalDetailObj: Array<{ icon: React.ReactNode; text: string }> = [
  { icon: <CiStar />, text: "506" },
  { icon: <GoRepoForked />, text: "506" },
  { icon: <PiUsersLight />, text: "578" },
  { icon: <BiInfoCircle className="rotate-180" />, text: "51" },
  { icon: <PiGitPullRequestLight />, text: "39" },
];

export const RepoCard = () => {
  return (
    <div className="w-[570px]  flex flex-col gap-[20px] box-border p-[10px] pl-[15px] pr-[15px] bg-[#27272A] rounded-lg border-[1px] border-dull-gray">
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="bg-[#41D39E] w-[20px] h-[20px] rounded-full "></span>
            <div className="text-common-light-gray text-[14px]">19m ago</div>
          </div>
          <div className="flex items-center gap-[7px]">
            <Link href={"/detail/code100x/daily-code"}>
              <button className="flex justify-center items-center gap-[5px] text-[12px] text-gray-400 hover:bg-common-light-gray hover:text-white bg-dull-gray p-[3px] pl-[7px] pr-[7px] rounded-md ">
                <ImStatsBars className="text-[13px]" /> <span>Details</span>
              </button>
            </Link>
            <button className="flex justify-center items-center gap-[5px] text-[12px] text-gray-400 hover:bg-common-light-gray hover:text-white bg-dull-gray p-[3px] pl-[7px] pr-[7px] rounded-md ">
              <IoFolderOutline className="text-[13px]" /> <span>1</span>
            </button>
            <button className="flex justify-center items-center gap-[5px] text-[12px] text-gray-400 hover:bg-common-light-gray hover:text-white bg-dull-gray p-[4px] rounded-md ">
              <MdOutlineCancel className="text-[16px]" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-[10px] items-center">
            <div className="w-[45px] h-[45px] bg-gray-500 rounded-lg"></div>
            <div className="flex flex-col">
              <h2 className=" border-b-[1px] border-dotted border-gray-400 text-gray-400 text-[15px]">
                code100x
              </h2>

              <h2 className=" border-b-[1px] border-dotted border-gray-400 font-bold text-[18px]">
                daily-code
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center text-[12px]  text-gray-400 gap-[10px] border-dull-gray border-[1px] box-border p-[3px] pl-[7px] pr-[7px] rounded-md">
            <GoGitBranch className="text-[13px]" /> <span>main</span>
          </div>
        </div>
        <div className="flex items-center text-[12px] text-gray-400 gap-[15px]">
          {repoMinimalDetailObj.map(({ icon, text }) => {
            return (
              <div key={text} className="flex items-center gap-[5px]">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* graph */}
      <div></div>
      {/* stats */}
      <div></div>
    </div>
  );
};
