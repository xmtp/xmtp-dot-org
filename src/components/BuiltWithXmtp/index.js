import React, { useState } from "react";
import ListOfDevelopers from "./ListOfDevs.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { motion } from "framer-motion";

const BuiltWithXmtp = () => {
  const [openAccordions, setOpenAccordions] = useState({ 1: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, 1)); // Max slide 1 to show cards 1,2,3
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0)); // Min slide 0 to show cards 0,1,2
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.max(0, Math.min(index, 1))); // Clamp between 0 and 1
  };

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

        <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-10 before:transform before:-translate-x-1/2">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">

            <div className="mt-5 max-w-3xl text-center mx-auto">
              <h1 className="mt-8 text-center text-5xl md:text-6xl font-semibold tracking-tighter text-balance text-gray-900 fadeup">
                XMTP powers the next generation of secure chat
              </h1>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-600 dark:text-neutral-400">Quantum-resistant, secure chat — powered by a decentralized network.</p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              
                <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" target="_blank" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline fadeup">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Start building now <span aria-hidden="true">→</span>
                </a>
            </div>

          </div>
        </div>

        <div className="mx-auto w-full max-w-[1920px] overflow-hidden py-0 bg-gray-50 rounded-2xl">
          <h2 className="text-center font-normal text-sm pt-4">Compelling hero graphic goes here</h2>
        </div>

        <div className="overflow-hidden py-32">
          <div className="px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div class="grid grid-flow-col grid-rows-1 gap-4">
                    <div>
                        <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Trusted by the best</h2>
                        <h3 className="mt-2 text-2xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-5xl">Experience the future secured by XMTP</h3>
                    </div>

                    <div className="flex justify-center items-center mb-8 space-x-4">
                      <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-gray-100 hover:bg-gray-700 text-black hover:text-white transition-colors duration-200"
                        aria-label="Previous slide"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Slide Indicators
                      <div className="flex space-x-2">
                        {[0, 1].map((index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                              index === currentSlide 
                                ? 'bg-gray-800' 
                                : 'bg-gray-400 hover:bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div> /*}

                      */}
                      
                      <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-gray-100 hover:bg-gray-700 text-black hover:text-white transition-colors duration-200"
                        aria-label="Next slide"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                </div>
              </div>              
          </div>

          <div className="mt-8">
            
             <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <div 
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (288 + 32)}px)` }}
              >
               <div 
                 className="relative flex aspect-9/16 w-72 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96 bg-black cursor-pointer transition-all duration-300 hover:scale-102"
                 onClick={() => goToSlide(0)}
               >
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

              <div 
                className="relative flex aspect-9/16 w-72 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96 bg-black cursor-pointer transition-all duration-300 hover:scale-102"
                onClick={() => goToSlide(1)}
              >
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
                      <img src="img/Base_lockup_white.png" alt="Ecosystem" className="w-20 mt-2 fadeup" />
                  </p>
              </div>
              
              <div 
                className="relative flex aspect-9/16 w-72 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96 bg-black cursor-pointer transition-all duration-300 hover:scale-102"
                onClick={() => goToSlide(2)}
              >
                 <video 
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                   className="absolute inset-x-0 top-0 w-full object-cover"
                 >
                   <source src="img/Comp 2_2.mp4" type="video/mp4" />
                 </video>
                   <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#E54D00]/80 via-transparent to-transparent ring-1 ring-gray-950/10 ring-inset"></div>
                  <p className="relative p-6">
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                          <p className="text-lg/6 font-semibold text-white">Convos</p>
                          <p className="text-sm/6 font-medium"><span className="text-white">World combines Proof of Humanity with XMTP’s secure messaging, to create the world’s first, verified human messaging network.</span></p>
                      </figcaption>
                      <img src="img/convosLogo.svg" alt="Ecosystem" className="w-28 mt-2 fadeup" />
                  </p>
              </div>

              <div 
                className="relative flex aspect-9/16 w-72 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96 bg-black cursor-pointer transition-all duration-300 hover:scale-102"
                onClick={() => goToSlide(3)}
              >
                 <video 
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                   className="absolute inset-x-0 top-0 w-full object-cover"
                 >
                   <source src="img/Comp 2_2.mp4" type="video/mp4" />
                 </video>
                   <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#E54D00]/80 via-transparent to-transparent ring-1 ring-gray-950/10 ring-inset"></div>
                  <p className="relative p-6">
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                          <p className="text-lg/6 font-semibold text-white">Convos</p>
                          <p className="text-sm/6 font-medium"><span className="text-white">World combines Proof of Humanity with XMTP's secure messaging, to create the world's first, verified human messaging network.</span></p>
                      </figcaption>
                      <img src="img/convosLogo.svg" alt="Ecosystem" className="w-28 mt-2 fadeup" />
                  </p>
              </div>
              
              </div>
            </div>

          </div>
        </div>

        <div className="mx-auto w-full max-w-[1920px] overflow-hidden py-0 pb-16 mb-6 bg-gray-50 rounded-2xl border border-gray-800">
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

                    <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-x-4">
                      <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" target="_blank" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline fadeup">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        Start building now <span aria-hidden="true">→</span>
                      </a>
                      <a href="/miniapps" className="w-full md:w-auto my-0 md:my-4 md:mb-0 inline-flex shrink-0 items-center justify-center gap-x-1 text-black hover:text-red-500 cursor-pointer font-semibold text-base me-2 px-5 py-2.5 md:py-3.5 hover:no-underline">
                        Learn more
                        <span className="ml-1" aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="rounded-2xl mt-0 mb-8 pb-10 relative overflow-hidden border border-gray-200 bg-cover bg-no-repeat bg-center bg-[#1d1d1d] ">
   
          
        </div> */}

        <div className="bg-[#141414] bg-[url(/img/footerBG.jpg)] bg-contain bg-no-repeat bg-bottom rounded-2xl">
          <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-16 py-16 rounded-3xl">

          <div class="grid grid-cols-2 gap-4 items-center align-top">

              <div className="max-w-2xl lg:max-w-3xl relative z-10">
                <h3 className="mt-0 text-3xl/tight md:text-4xl/tight font-semibold tracking-tighter text-balance text-white data-dark:text-white sm:text-4xl">
                  Built on an open-source, standards-based, secure chat protocol
                </h3>
              </div>

              <div className="relative z-10 flex justify-end">
                <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" target="_blank" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline fadeup">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Start building now <span aria-hidden="true">→</span>
                </a>
              </div>

          </div>
   
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">

            <div className="max-lg:rounded-t-4xl lg:col-span-3 lg:row-span-1 lg:rounded-tl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-xs ring-1 ring-gray-700/50 hover:ring-gray-600/50 transition-all duration-300">
              <div className="relative h-80 shrink-0">
                <div className="h-80 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                  Hey
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ring-1 ring-gray-700/20 ring-inset"></div>
              </div>
              <div className="relative p-10">
                <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase">Encryption</h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-white">Quantum-resistant end-to-end encryption</p>
                <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">XMTP handles the cryptography—from key generation and rotation to group membership and message encryption—so you can add secure messaging without building custom security infrastructure.</p>
                <a href="#" className="mt-2 max-w-[600px] text-sm/6 text-red-400 underline">Learn more</a>
              </div>
            </div>

            <div className="lg:col-span-3 lg:row-span-1 lg:rounded-tr-4xl group relative flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-xs ring-1 ring-gray-700/50 hover:ring-gray-600/50 transition-all duration-300">
              <div className="relative h-80 shrink-0">
                <div className="h-80 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  Hey
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ring-1 ring-gray-700/20 ring-inset"></div>
              </div>
              <div className="relative p-10">
                <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase">Identity</h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-white">Any network, any identity, anywhere in the world</p>
                <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">XMTP makes it simple to take any digital identity and use it as the basis for private, end-to-end encrypted, quantum-resistant conversations in your app.</p>
                <a href="#" className="mt-2 max-w-[600px] text-sm/6 text-red-400 underline">Learn more</a>
              </div>
            </div>

            <div className="max-lg:rounded-t-4xl lg:col-span-3 lg:row-span-1 lg:rounded-tl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-xs ring-1 ring-gray-700/50 hover:ring-gray-600/50 transition-all duration-300">
              <div className="relative h-80 shrink-0">
                <div className="h-80 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                  Hey
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ring-1 ring-gray-700/20 ring-inset"></div>
              </div>
              <div className="relative p-10">
                <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase">No Spam</h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-white">Spam protection, built-in</p>
                <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">XMTP's consent system gives your users complete inbox control with encrypted preferences that work across all apps built with XMTP, creating spam-free messaging experiences.</p>
                <a href="#" className="mt-2 max-w-[600px] text-sm/6 text-red-400 underline">Learn more</a>
              </div>
            </div>

            <div className="lg:col-span-3 lg:row-span-1 lg:rounded-tr-4xl group relative flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-xs ring-1 ring-gray-700/50 hover:ring-gray-600/50 transition-all duration-300">
              <div className="relative h-80 shrink-0">
                <div className="h-80 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  Hey
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ring-1 ring-gray-700/20 ring-inset"></div>
              </div>
              <div className="relative p-10">
                <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase">Decentralization</h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-white">Censorship-resistant infrastructure backed by sustainable economics</p>
                <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">XMTP's decentralized global server network ensures no single country can shut down messaging for everybody. Small messaging fees keep servers running indefinitely while protecting the network from DOS and spam.</p>
                <a href="#" className="mt-2 max-w-[600px] text-sm/6 text-red-400 underline">Learn more</a>
              </div>
            </div>

          </div>
        </div>
          <div className="px-6 py-6 pb-16 md:pb-24 md:py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mt-16 text-center font-mono text-xs/5 font-semibold tracking-widest text-gray-300 uppercase data-dark:text-gray-400">Build the future of messaging</h2>
              <h3 className="mt-4 font-medium mleading-none d:leading-normal tracking-normal text-5xl md:text-7xl text-pretty text-white data-dark:text-white text-center font-dotgothic">
                Ready to<br />launch?
              </h3>
              <p className="mt-8 text-lg font-dotgothic font-bold text-gray-300 tracking-normal text-center leading-none">You own the logic.</p>
              <p className="text-lg font-dotgothic font-bold text-gray-300 tracking-normal text-center leading-none">You own the experience.</p>
              <p className="text-lg font-dotgothic font-bold text-gray-300 tracking-normal text-center leading-none">Your users own their messages.</p>
              
              <div className="mt-8 flex items-center justify-center gap-x-4">
                <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" target="_blank" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse justify-center hover:no-underline">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Start building <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      
  );
};

export default BuiltWithXmtp;
