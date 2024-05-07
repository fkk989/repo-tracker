import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h3 className="text-[14px] text-gray-400">
        Add repositories to this collection
      </h3>
      <div className="w-[570px] h-[70px] flex justify-center items-center bg-common-gray rounded-lg gap-[10px]">
        <div className="relative flex items-center">
          <FaGithub className="absolute  left-[15px]" />
          <input
            type="text"
            className="w-[420px] h-[40px] bg-[#18181b] outline-none rounded-lg box-border pl-[40px] border-[2px] border-gray-600 focus:border-purple-500"
            placeholder="Search Github..."
          />
        </div>
        <div className="w-[100px] h-[40px] flex justify-center items-center bg-[#39393b] rounded-md gap-[6px] cursor-pointer">
          <CiSearch />
          <button className="font-bold">Search</button>
        </div>
      </div>
    </div>
  );
};
