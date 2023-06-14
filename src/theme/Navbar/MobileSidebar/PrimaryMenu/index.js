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
          <div className="pl-3 grid items-center">Built with XMTP</div>
          <img src="/img/xmtp-icon.svg" className="w-10" />
        </div>
        <div className="flex justify-between ">
          <div className="pl-3 grid items-center">Join our discord</div>
          <img src="/img/discord-color.svg" className="w-10" />
        </div>
        <div className="flex justify-between ">
          <div className="pl-3 grid items-center">Join our Github</div>
          <img src="/img/github-icon-black.svg" className="w-10" />
        </div>
      </div>
    </>
  );
}
