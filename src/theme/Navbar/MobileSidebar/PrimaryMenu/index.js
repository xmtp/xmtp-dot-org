import React from "react";
import PrimaryMenu from "@theme-original/Navbar/MobileSidebar/PrimaryMenu";
import { useColorMode } from "@docusaurus/theme-common";

export default function PrimaryMenuWrapper(props) {
  const { colorMode, setColorMode } = useColorMode();

  const handleMode = (mode) => {
    setColorMode(mode);
  };

  return (
    <>
      <PrimaryMenu {...props} />
      <div className="flexbar ">
        <div className="flex justify-between ">
          <a href="https://github.com/xmtp" className="pl-3 grid items-center">
            Explore
          </a>
          <img src="/img/github-icon-black.svg" className="w-10" />
        </div>
      </div>
    </>
  );
}
