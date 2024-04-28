"use client";
import { signIn, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import React from "react";

interface Props {
  text: string;
  width: string;
  height: string;
  iconsHeight: string;
  fontSize: string;
  bgColor: string;
  textColor: string;
}

export const SigninBtn: React.FC<Props> = ({
  text,
  width,
  height,
  iconsHeight,
  fontSize,
  bgColor,
  textColor,
}) => {
  return (
    <button
      onClick={() => {
        signIn("github");
      }}
      className="flex justify-center items-center font-bold  hover:bg-common-light-gray rounded-md gap-[10px] cursor-pointer"
      style={{
        width,
        height,
        backgroundColor: `${bgColor}`,
        color: textColor,
      }}
    >
      <FaGithub
        style={{
          fontSize: iconsHeight,
        }}
      />
      <span
        style={{
          fontSize,
        }}
      >
        {text}
      </span>
    </button>
  );
};
