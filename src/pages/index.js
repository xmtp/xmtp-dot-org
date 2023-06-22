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
    <header className="homepageHeader px-0 pt-40 md:pt-0 h-[600px] md:h-[770px] bg-[length:1000px_auto] md:bg-[length:1560px_auto] bg-bottom bg-no-repeat flex flex-col justify-center items-center">
        
        <div className="main-carousel">
            <div className="absolute bottom-28 md:bottom-0">
              <img src="/img/leftPhone.png" className="w-[522px] leftPhone"></img>
            </div>
          
          <div className="carousel-cell">
            <div className="absolute bottom-28 md:bottom-0 right-0">
              <img src="/img/rightPhone1.png" className="w-[510px] rightPhone"></img>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1>XMTP delivers<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">reach to wallets</span>
              </h1>
              <h4 className="w-[460px]">Build apps that communicate with every wallet in the world.</h4>
              <button className="bg-red-500 rounded-lg p-5 h-12 text-white font-bold text-base cursor-pointer flex justify-center items-center border-0">
                <img src="/img/xmtp-sm-icon.png" class="w-5 h-5 mr-2.5"></img><a class="hover:no-underline text-white hover:text-white" href="/built-with-xmtp">Start building</a>
              </button>
            </div>
          </div>
          
          <div className="carousel-cell">
            <div className="absolute bottom-28 md:bottom-0 right-0">
              <img src="/img/rightPhone2.png" className="w-[510px] rightPhone"></img>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1>XMTP delivers<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">payments in apps</span>
              </h1>
              <h4 className="w-[460px]">Build apps that communicate with every wallet in the world.</h4>
              <button className="bg-red-500 rounded-lg p-5 h-12 text-white font-bold text-base cursor-pointer flex justify-center items-center border-0">
                <img src="/img/xmtp-sm-icon.png" class="w-5 h-5 mr-2.5"></img><a class="hover:no-underline text-white hover:text-white" href="/built-with-xmtp">Start building</a>
              </button>
            </div>
          </div>
          
          <div className="carousel-cell">
            <div className="absolute bottom-28 md:bottom-0 right-0">
              <img src="/img/rightPhone3.png" className="w-[510px] rightPhone"></img>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1>XMTP delivers<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">portability in apps</span>
              </h1>
              <h4 className="w-[460px]">Build apps that communicate with every wallet in the world.</h4>
              <button className="bg-red-500 rounded-lg p-5 h-12 text-white font-bold text-base cursor-pointer flex justify-center items-center border-0">
                <img src="/img/xmtp-sm-icon.png" class="w-5 h-5 mr-2.5"></img><a class="hover:no-underline text-white hover:text-white" href="/built-with-xmtp">Start building</a>
              </button>
            </div>
          </div>
          
          <div className="carousel-cell">
            <div className="absolute bottom-28 md:bottom-0 right-0">
              <img src="/img/rightPhone4.png" className="w-[510px] rightPhone"></img>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1>XMTP delivers<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">secure messaging</span>
              </h1>
              <h4 className="w-[460px]">Build apps that communicate with every wallet in the world.</h4>
              <button className="bg-red-500 rounded-lg p-5 h-12 text-white font-bold text-base cursor-pointer flex justify-center items-center border-0">
                <img src="/img/xmtp-sm-icon.png" class="w-5 h-5 mr-2.5"></img><a class="hover:no-underline text-white hover:text-white" href="/built-with-xmtp">Start building</a>
              </button>
            </div>
          </div>

        </div>

    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    
    var elem = document.querySelector('.main-carousel');
      var flkty = new Flickity( elem, {
        cellSelector: '.carousel-cell',
        cellAlign: 'center',
        autoPlay: 5000,
        draggable: false,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        fade: true
      });
      var flkty = new Flickity( '.main-carousel', {
    });

    flkty.on( 'select', function( index ) {

    });

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
      description="Own and control your communication."
    >
      <HomepageHeader />
      <MainContent styles={styles} />
    </Layout>
  );
}