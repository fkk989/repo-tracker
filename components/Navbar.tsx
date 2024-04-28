"use client";
import { SigninBtn } from "./buttons";
import { useSession } from "next-auth/react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TbRefresh } from "react-icons/tb";
import { UserDropdown } from "./UserDropdown";

export const Navbar = () => {
  const session = useSession();

  return (
    <div className="w-screen h-[60px] flex justify-between items-center  border-b-[1px] border-[#ffffff0f] box-border pl-[30px] pr-[30px] pc:pl-[200px] pc:pr-[250px]">
      <div className="flex justify-center items-center gap-[15px]">
        <FaLocationCrosshairs className="text-[30px] text-dull-gray" />
        <div className="pink-gradient bg-clip-text text-[25px] font-bold">
          Repo Tracker
        </div>
      </div>
      {session.data ? (
        <div className="flex justify-center items-center gap-[20px]">
          <TbRefresh className="text-[22px] text-[#A1A1AA] hover:text-[#d2d2d9] cursor-pointer" />
          <UserDropdown />
        </div>
      ) : (
        <SigninBtn
          text="Sign In"
          width="100px"
          height="40px"
          fontSize="14px"
          iconsHeight="22px"
          bgColor="#2C2C30"
          textColor="white"
        />
      )}
    </div>
  );
};
