import classNames from "classnames";
import { PropsWithChildren } from "react";

type Grid2LayoutProps = {
  direction?: "" | "reverse";
  type?: "regular" | "small";
} & PropsWithChildren;

const Grid2Layout = ({
  children,
  direction = "",
  type = "regular",
}: Grid2LayoutProps) => {
  const classes = classNames({
    "grid-col-2": type === "regular",
    "grid-col-2-sm": type === "small",
    reverse: direction === "reverse",
  });
  return <div className={classes}>{children}</div>;
};

export default Grid2Layout;
