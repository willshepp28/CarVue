"use client";

import { StyledButtonProps } from "@/types";
import Image from "next/image";

function StyledButton({ title, layoutStyles, handleClick }: StyledButtonProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${layoutStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default StyledButton;
