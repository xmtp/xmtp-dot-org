import React, { useState } from "react";
import ListOfDevelopers from "./ListOfDevs.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { motion } from "framer-motion";

const BuiltWithXmtp = () => {
  const [openAccordions, setOpenAccordions] = useState({ 1: true });

  const toggleAccordion = (index) => {
    setOpenAccordions(prev => {
      // If clicking the currently open accordion and it's the only one open,
      // don't allow it to close
      if (prev[index] && Object.keys(prev).length === 1) {
        return prev;
      }
      // Otherwise, close all others and open the clicked one
      return { [index]: !prev[index] };
    });
  };

  // SVG components for better React integration
  const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>
  );

  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>
  );
  
  return (
    <div>

      {/* Hero */}
        <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-10 before:transform before:-translate-x-1/2">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">

            {/* Title */}
            <div className="mt-5 max-w-3xl text-center mx-auto">
              <h1 className="mt-8 text-center text-5xl md:text-6xl font-semibold tracking-tighter text-balance text-gray-900 fadeup">
                XMTP powers the next generation of secure chat
              </h1>
            </div>
            {/* End Title */}

            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-600 dark:text-neutral-400">Quantum-resistant, secure chat — powered by a decentralized network.</p>
            </div>

            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
              
                <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" target="_blank" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline fadeup">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Start building now <span aria-hidden="true">→</span>
                </a>
            </div>
            {/* End Buttons */}
          </div>
        </div>
        {/* End Hero */}

        <div className="mx-auto max-w-7xl overflow-hidden py-0 bg-gray-50 rounded-2xl">
          <h2 className="text-center font-normal text-sm pt-4">Compelling hero graphic goes here</h2>
        </div>

        <div className="overflow-hidden py-32">
          <div className="px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-7xl">
                  <div>
                      <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Trusted by the best</h2>
                      <h3 className="mt-2 text-2xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-5xl">Featured Apps</h3>
                  </div>
              </div>
          </div>
          <div className="mt-16">

             <div className="mx-auto max-w-2xl lg:max-w-7xl flex gap-8">
               <div className="relative flex aspect-9/16 w-72 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96 bg-black">
                 <video 
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                   className="absolute inset-x-0 top-0 w-full object-cover"
                 >
                   <source src="img/Comp 2_2.mp4" type="video/mp4" />
                 </video>
                   <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-transparent to-transparent ring-1 ring-gray-950/10 ring-inset"></div>
                  <p className="relative p-6">
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                          <p className="text-lg/6 font-semibold text-white">World App</p>
                          <p className="text-sm/6 font-medium"><span className="text-white">World combines Proof of Humanity with XMTP’s secure messaging, to create the world’s first, verified human messaging network.</span></p>
                      </figcaption>
                      <img src="img/worldLogoWhite.png" alt="Ecosystem" className="w-24 mt-2 fadeup" />
                  </p>
              </div>

              <div className="relative flex aspect-9/16 w-72 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96 bg-black">
                 <video 
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                   className="absolute inset-x-0 top-0 w-full object-cover"
                 >
                   <source src="img/Comp 2_2.mp4" type="video/mp4" />
                 </video>
                   <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0000ff]/80 via-transparent to-transparent ring-1 ring-gray-950/10 ring-inset"></div>
                  <p className="relative p-6">
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                          <p className="text-lg/6 font-semibold text-white">Base App</p>
                          <p className="text-sm/6 font-medium"><span className="text-white">Base App combines the power of wallets, agents, and mini apps with XMTP’s encrypted messaging — creating the connective layer for the onchain economy.</span></p>
                      </figcaption>
                      <img src="img/Base_lockup_white.png" alt="Ecosystem" className="w-24 mt-2 fadeup" />
                  </p>
              </div>
              
              <div className="relative flex aspect-9/16 w-72 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96 bg-black">
                 <video 
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                   className="absolute inset-x-0 top-0 w-full object-cover"
                 >
                   <source src="img/Comp 2_2.mp4" type="video/mp4" />
                 </video>
                   <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-transparent to-transparent ring-1 ring-gray-950/10 ring-inset"></div>
                  <p className="relative p-6">
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                          <p className="text-lg/6 font-semibold text-white">Convos</p>
                          <p className="text-sm/6 font-medium"><span className="text-white">World combines Proof of Humanity with XMTP’s secure messaging, to create the world’s first, verified human messaging network.</span></p>
                      </figcaption>
                      <img src="img/worldLogoWhite.png" alt="Ecosystem" className="w-24 mt-2 fadeup" />
                  </p>
              </div>
              
            </div>

          </div>
      </div>

        <div className="mx-auto max-w-7xl overflow-hidden py-0 pb-16 mb-32 bg-gray-50 rounded-2xl">
          <div className="px-0 md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="w-full overflow-hidden md:overflow-visible flex justify-center">
                <img src="img/ecosystemGraphicCut.png" alt="Ecosystem" className="w-[1200px] max-w-none md:w-full md:max-w-full fadeup" />
              </div>
            </div>
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <div className="py-4 pb-2 md:grid md:grid-cols-6 md:gap-4">
                <div className="col-start-1 col-end-7 text-center">
                  <div>
                    <h2 className="mt-0 text-center text-4xl md:text-5xl font-semibold tracking-tighter text-balance text-gray-900 fadeup">
                      Chat is the new app store
                    </h2>
                    <p className="mt-0 text-lg max-w-full md:max-w-3xl mx-auto fadeup">
                      XMTP powers a rapidly growing ecosystem of mini apps—where everything is a built-in chat experience from trading, prediction markets, event coordination, payments, and games.
                    </p>

                    <div className="mx-auto mt-6 mb-4 grid max-w-sm grid-cols-2 items-center gap-x-8 gap-y-10 fadeup">
                      <a href="https://www.base.org/ecosystem" target="_blank"><img src="img/baseLogo.png" alt="Base App Logo" className="w-auto" /></a>
                      <a href="https://farcaster.xyz/miniapps" target="_blank"><img src="img/farcasterLogo.png" alt="Farcaster Logo" className="w-auto" /></a>
                    </div>
                    <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" target="_blank" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline fadeup">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      Start building now <span aria-hidden="true">→</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mx-auto max-w-7xl overflow-hidden py-0 bg-gray-50 rounded-2xl">
          <h2 className="text-center font-normal text-sm pt-4">Feature section goes here</h2>
        </div>

        
      </div>
      
  );
};

export default BuiltWithXmtp;
