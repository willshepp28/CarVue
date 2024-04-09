"use client";

import { StyledButtonProps } from "@/types";
import Image from "next/image";

function StyledButton({
  title,
  layoutStyles,
  btnType,
  handleClick,
}: StyledButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${layoutStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default StyledButton;
