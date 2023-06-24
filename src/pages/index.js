import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { MainContent } from "../components/MainContent";
import "./custom.css";
import { Link } from "react-router-dom";
import FeedbackWidget from "../components/FeedbackWidget";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="homepageHeader px-0 pt-12 lg:pt-16 h-[504px] bg-cover border-0 border-b border-solid border-b-black">
      <div className="container text-left py-0 px-4 m-auto max-w-screen-max">
        <h1 className="hero__title max-w-2xl text-4xl lg:text-5xl">
          XMTP: The open protocol and network for secure messaging
        </h1>
        <p className="hero__subtitle max-w-2xl text-lg lg:text-xl">
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const element = document.getElementsByClassName("main-wrapper")[0];
    element.style.background = "none";
  }, []);

  return (
    <Layout
      title="XMTP: The web3 messaging network"
      description="Own and control your communication.">
      <HomepageHeader />
      <MainContent styles={styles} />
    </Layout>
  );
}
