"use client";
import React, { useState } from "react";
import { PiInfoLight } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import { IoFolderOutline } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { CollectionAdder } from "./CollectionAdder";
import { CollectionInfo } from "./CollectionInfo";

const collectionObj: Array<{ id: string; name: string; repoCount: number }> = [
  {
    id: "1",
    name: "main",
    repoCount: 2,
  },
  {
    id: "2",
    name: "main2",
    repoCount: 2,
  },
];

const listStyle = `flex justify-between items-center text-gray-400 hover:text-white  cursor-pointer hover:bg-dull-gray p-[5px] pl-[15px] pr-[15px] rounded-md`;

export const Collection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const collectionId = searchParams.get("cl") || "1";
  //   handler for collection adder
  const [open, setOpen] = useState(false);
  const [infoOpner, setInfoOpner] = useState(false);

  function handleOpen() {
    setOpen((crnt) => !crnt);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-bold">Collection</h3>
        <div className="flex items-center gap-[10px]">
          <PiInfoLight
            onClick={() => {
              setInfoOpner((crnt) => !crnt);
            }}
            className="text-[20px] text-[#5188CD] cursor-pointer"
          />
          <IoMdAdd
            className="text-[22px] text-gray-400 hover:text-gray-100 cursor-pointer"
            onClick={() => {
              handleOpen();
            }}
          />
        </div>
        <CollectionInfo open={infoOpner} setOpen={setInfoOpner} />
      </div>
      <div className="mt-[10px] flex flex-col gap-[10px]">
        <ul className="flex flex-col gap-[5px]">
          {collectionObj.map(({ id, name, repoCount }) => {
            return (
              <li
                key={id}
                className={`${listStyle} ${
                  collectionId === id && "bg-dull-gray text-white"
                }`}
                onClick={() => {
                  router.push(`/dashboard?cl=${id}`);
                }}
              >
                <div className="flex items-center gap-[10px]">
                  <IoFolderOutline
                    className={` ${
                      collectionId === id ? "text-[#C084FC]" : "text-gray-400"
                    } `}
                  />
                  <span>{name}</span>
                </div>
                <div className="text-gray-400">{`${repoCount}`}</div>
              </li>
            );
          })}
        </ul>
        <CollectionAdder open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};
