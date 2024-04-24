import React from "react";
import Footer from "@theme-original/Footer";
import { useColorMode } from "@docusaurus/theme-common";
import { Link } from "react-router-dom";
import ALink from "../../components/ALink";
import ToggleButtons from "../../components/ToggleButtons";

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode();
  return (
    <>
      <Footer {...props} />
      <ToggleButtons />
    </>
  );
}
