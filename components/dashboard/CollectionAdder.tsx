"use client";
import { useKeyPress } from "@/hooks";
import React, { useEffect, useRef, useState } from "react";

export interface ModalProp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CollectionAdder: React.FC<ModalProp> = ({ open, setOpen }) => {
  const [collectionName, setCollectionName] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  //   custom hooks to handle keypress
  useKeyPress(() => {
    setOpen(false);
  }, "Enter");

  const handleOutsideClick = (e: any) => {
    if (inputRef.current !== e.target) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleOutsideClick);
    }
    // reseting input state whenever open changes
    setCollectionName("");
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  return (
    <input
      value={collectionName}
      onChange={(e) => {
        setCollectionName(e.currentTarget.value);
      }}
      ref={inputRef}
      type="text"
      className={`${
        !open && "scale0"
      } text-[13px] bg-transparent p-[5px] pl-[15px] pr-[15px] rounded-md border-[2px] border-purple-500 outline-none origin-center placeholder:text-[13px]`}
      placeholder="Collection name"
    />
  );
};
