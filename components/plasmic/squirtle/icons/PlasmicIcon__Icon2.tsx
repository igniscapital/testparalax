// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"#000"}
      viewBox={"0 0 24 24"}
      data-name={"Line Color"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon line-color"
      )}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17 3l-6.84 5H6a1 1 0 00-1 1v6a1 1 0 001 1h4.16L17 21zm4 15.63L3 5.37"
        }
        fill={"none"}
        stroke={"#935951"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
