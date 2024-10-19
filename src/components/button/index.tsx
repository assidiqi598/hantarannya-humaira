'use client'

import { FC, ReactNode } from "react";
import cn from "classnames";

type condition = Record<string, boolean>;

interface IButton extends React.PropsWithChildren {
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
  width?: string;
  additionalClassNames?: Array<string>;
  id: string;
  condition?: condition;
  onClick?(): void;
}

const Button: FC<IButton> = ({
  id,
  children,
  bgColor = "bg-black-400",
  textColor = "text-white",
  width = "w-fit",
  additionalClassNames = [],
  condition = {},
  onClick = () => {},
}) => {
  return (
    <button
      id={id}
      className={cn(
        "flex flex-wrap align-center justify-center text-center px-4 py-2.5 rounded-lg origin-center active:scale-95 transition-transform",
        bgColor,
        textColor,
        width,
        additionalClassNames,
        { ...condition }
      )}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
