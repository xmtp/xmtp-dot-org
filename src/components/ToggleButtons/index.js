import React, { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function ToggleButtons() {
  const { colorMode, setColorMode } = useColorMode();
  const scrollToTopBtnRef = useRef(null);
  const darkModeBtnRef = useRef(null);

  const handleDarkMode = () => {
    if (colorMode === "dark") setColorMode("light");
    if (colorMode === "light") setColorMode("dark");
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  useEffect(() => {
    // Update theme in query param on color mode state change, so it can be accessed in iframe
    if (!window.location.href.includes(`theme=${colorMode}`)) {
      window.location.href = `${window.location.pathname}?theme=${colorMode}`;
    }
  }, [colorMode]);

  const scrollFunction = () => {
    if (scrollToTopBtnRef.current && darkModeBtnRef.current) {
      if (
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000
      ) {
        scrollToTopBtnRef.current.style.display = "grid";
        darkModeBtnRef.current.style.transform = "translateY(-4rem)";
        darkModeBtnRef.current.style.transition = "all 0.5s ease";
      } else {
        scrollToTopBtnRef.current.style.display = "none";
        darkModeBtnRef.current.style.transform = "translateY(-0.76rem)";
        darkModeBtnRef.current.style.transition = "all 0.5s ease";
      }
    }
  };

  return (
    <>
      <div
        ref={darkModeBtnRef}
        onClick={handleDarkMode}
        className="plausible-event-name=DarkMode w-11 h-11 rounded-full bg-gray-900 grid justify-center items-center border-2 border-solid border-gray-500 right-4 lg:right-12 bottom-5 z-[60] cursor-pointer fixed">
        <img src={`/img/${colorMode}.svg`} />
      </div>
      <div
        ref={scrollToTopBtnRef}
        onClick={handleScrollToTop}
        className="hidden w-11 h-11 rounded-full bg-gray-900 justify-center items-center border-2 border-solid border-gray-500 fixed right-4 lg:right-12 bottom-7 z-50 cursor-pointer">
        <img src="/img/arrow-up.svg" />
      </div>
    </>
  );
}
