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

function HomepageLogos() {
  const { siteConfig } = useDocusaurusContext();

  return (

  <div class="py-24 sm:py-0">
    <div class="mx-auto max-w-[1440px] px-6 lg:px-8">
      <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/img/logo-cyberconnect.svg" alt="CyberConnect" width="206" height="32"></img>
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/img/logo-lens.svg" alt="Lens" width="72" height="24"></img>
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/img/logo-converse.svg" alt="Converse App" width="132" height="40"></img>
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/img/logo-ens.svg" alt="ENS" width="109" height="42"></img>
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/img/logo-unstoppabledomains.svg" alt="Unstoppable Domains" width="150" height="40"></img>
      </div>
      <div class="mt-12 flex justify-center">
        <p class="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
          <span class="hidden md:inline">🎉 We just launched an unforgettable partnership with a big company.</span>
          <a href="#" class="font-semibold text-red-500"><span class="absolute inset-0" aria-hidden="true"></span> Read more <span aria-hidden="true">&rarr;</span></a>
        </p>
      </div>
    </div>
  </div>
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
      <HomepageLogos />
      <MainContent styles={styles} />
    </Layout>
  );
}