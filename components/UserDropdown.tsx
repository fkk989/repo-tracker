import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";

export const UserDropdown = () => {
  const session = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  function handleClose() {
    setOpen((crnt) => !crnt);
  }

  if (!session.data) {
    router.push("/");
    return;
  }
  return (
    <div className="relative flex flex-col justify-center items-center gap-[10px]">
      <AiOutlineUser
        onClick={handleClose}
        className="text-[22px] text-[#A1A1AA] hover:text-[#d2d2d9] cursor-pointer"
      />
      <div
        className={` ${
          !open && "scale0"
        } absolute  top-[22px] w-[190px] bg-common-gray rounded-lg translate-x-[-35%]`}
      >
        <div className="flex w-[100%] justify-between items-center text-[#7b7b7c]  box-border p-[5px] pl-[15px] pr-[15px]">
          <div className="font-bold text-[14px]">ACCOUNT</div>
          <div
            onClick={handleClose}
            className="cursor-pointer hover:text-[#979798] text-[20px]"
          >
            x
          </div>
        </div>
        <div className="flex items-center border-b-[1px] border-t-[1px] border-light-gray box-border p-[5px] pl-[15px] pr-[15px] gap-[10px]">
          <Image
            width={32}
            height={32}
            src={session.data.user.imageUrl!}
            alt="image"
            className="w-[32px] h-[32px] rounded-full"
          />
          <div className="text-[14px]">{session.data?.user.userId}</div>
        </div>
        <div className="  text-[16px] mt-[10px]">
          <ul>
            <li
              onClick={() => {
                signOut();
              }}
              className="flex items-center justify-between hover:bg-[#c3c3c31f]  box-border p-[5px] pl-[15px] pr-[15px] cursor-pointer"
            >
              Log Out
              <span>
                <LuLogOut />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
