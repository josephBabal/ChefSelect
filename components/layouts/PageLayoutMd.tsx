import { PropsWithChildren } from "react";

type PageLayoutProps = PropsWithChildren;

const PageLayoutMd = ({ children }: PageLayoutProps) => {
  return <div className="container-md">{children}</div>;
};

export default PageLayoutMd;
