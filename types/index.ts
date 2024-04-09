import { MouseEventHandler } from "react";

export interface StyledButtonProps {
  title: string;
  layoutStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
