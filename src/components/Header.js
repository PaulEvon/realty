import React from "react";
import { Banner } from "./Banner";

export const Header = ({ className, bannerType }) => {
  return (
    <header className={className}>
      <Banner bannerType={bannerType} />
    </header>
  );
};

Header.defaultProps = {
  className: "defaultHeader",
};
