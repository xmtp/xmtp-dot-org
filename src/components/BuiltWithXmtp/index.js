import React, { useState, useEffect } from "react";
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

  // Fade-up animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 0.1s delay before animation starts
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 100);
        }
      });
    }, observerOptions);

    // Observe all elements with fadeup class
    const fadeupElements = document.querySelectorAll('.fadeup');
    fadeupElements.forEach((el) => {
      // Set initial state - ensure 0% opacity by default
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      el.style.visibility = 'visible'; // Ensure element is visible but transparent
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
    <div className="built-with-xmtp-page">
      <style jsx>{`
        .fadeup {
          opacity: 0;
          transform: translateY(30px);
        }
      `}</style>

        <div className="mx-auto w-full max-w-[1920px] overflow-hidden py-0 pb-16 mt-6 mb-6 bg-gray-50 rounded-2xl border border-gray-800">
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
                    <h2 className="mt-0 mb-8 text-center text-4xl md:text-6xl font-semibold tracking-tighter text-balance text-gray-900 fadeup">
                      The world’s open source<br />messaging layer
                    </h2>
                    <h3 className="font-semibold tracking-tight text-balance text-gray-900 fadeup">
                      Chat is the new app store.
                    </h3>
                    <p className="mt-4 text-lg max-w-full md:max-w-2xl mx-auto fadeup">
                      Build with a rapidly growing ecosystem of mini apps—where everything is a built-in chat experience from trading, prediction markets, event coordination, payments, and games.
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
                      <a href="/miniapps" className="w-full md:w-auto my-0 md:my-4 md:mb-0 inline-flex shrink-0 items-center justify-center gap-x-1 text-black hover:text-red-500 cursor-pointer font-semibold text-base me-2 px-5 py-2.5 md:py-3.5 hover:no-underline fadeup">
                        Explore apps
                        <span className="ml-1" aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden py-0">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 rounded-2xl mt-0 bg-[#F5F5EF]">
          <div className="px-6 lg:px-8">
              <div className="mx-auto max-w-full">
                <div class="grid grid-flow-col grid-rows-1 gap-4">
                    <div>
                        <h2 className="mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400 fadeup">Trusted by the best</h2>
                        <h3 className="mt-0 text-2xl font-semibold tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-5xl fadeup">Say hello<br />to the future of messaging</h3>
                    </div>

                    <div className="flex justify-center items-center mb-0 space-x-3">
                      <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-[#F5F5EF] hover:bg-gray-700 text-black hover:text-white transition-colors duration-200 cursor-pointer"
                        aria-label="Previous slide"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="p-2 rounded-full bg-[#F5F5EF] hover:bg-gray-700 text-black hover:text-white transition-colors duration-200 cursor-pointer"
                        aria-label="Next slide"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                </div>
              </div>        
          </div>

          <div className="mt-8">
            
             <div className="mx-auto max-w-full px-8">
              <div 
                className="flex gap-8 transition-transform duration-500 ease-in-out fadeup"
                style={{ transform: `translateX(-${currentSlide * (256 + 40)}px)` }}
              >
               <div 
                 className="relative flex aspect-9/16 w-64 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-80 bg-black cursor-pointer transition-all duration-300 hover:scale-102"
                 onClick={() => goToSlide(0)}
               >
                 <img
                  src="img/worldPhoneCrop.png"
                   className="absolute inset-x-0 top-0 w-full object-cover"
                 >
                 </img>
                   <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/90 via-transparent to-transparent ring-1 ring-gray-950/10 ring-inset"></div>
                  <p className="relative p-6">
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                          <p className="text-lg/6 font-semibold text-white">World App</p>
                          <p className="text-sm/6 font-medium"><span className="text-white">World combines Proof of Humanity with XMTP’s secure messaging, to create the world’s first, verified human messaging network.</span></p>
                      </figcaption>
                      <img src="img/worldLogoWhite.png" alt="Ecosystem" className="w-24 mt-2 fadeup" />
                  </p>
              </div>

              <div 
                className="relative flex aspect-9/16 w-64 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-80 bg-[#0000ff] cursor-pointer transition-all duration-300 hover:scale-102"
                onClick={() => goToSlide(1)}
              >
                 <img
                  src="img/basePhoneCrop.png"
                   className="absolute inset-x-0 top-0 w-full object-cover"
                 >
                 </img>
                   <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0000ff]/100 via-transparent to-transparent ring-1 ring-gray-950/10 ring-inset"></div>
                  <p className="relative p-6">
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                          <p className="text-lg/6 font-semibold text-white">Base App</p>
                          <p className="text-sm/6 font-medium"><span className="text-white">Base App combines the power of wallets, agents, and mini apps with XMTP’s encrypted messaging — creating the connective layer for the onchain economy.</span></p>
                      </figcaption>
                      <img src="img/Base_lockup_white.png" alt="Ecosystem" className="w-20 mt-2 fadeup" />
                  </p>
              </div>
              
              <div 
                className="relative flex aspect-9/16 w-64 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-80 bg-[#E54D00] cursor-pointer transition-all duration-300 hover:scale-102"
                onClick={() => goToSlide(2)}
              >
                 <img
                  src="img/convosPhoneCrop.png"
                   className="absolute inset-x-0 top-0 w-full object-cover"
                 >
                 </img>
                   <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#E54D00]/100 via-transparent to-transparent ring-1 ring-gray-950/10 ring-inset"></div>
                  <p className="relative p-6">
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                          <p className="text-lg/6 font-semibold text-white">Convos</p>
                          <p className="text-sm/6 font-medium"><span className="text-white">World combines Proof of Humanity with XMTP’s secure messaging, to create the world’s first, verified human messaging network.</span></p>
                      </figcaption>
                      <img src="img/convosLogo.svg" alt="Ecosystem" className="w-28 mt-2 fadeup" />
                  </p>
              </div>

              <div 
                className="relative flex aspect-9/16 w-64 h-[640px] shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-80 bg-[#4D7CF3] cursor-pointer transition-all duration-300 hover:scale-102"
                onClick={() => goToSlide(3)}
              >
                 <img
                  src="img/zoraPhoneCrop.png"
                   className="absolute inset-x-0 top-0 w-full object-cover"
                 >
                 </img>
                   <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#4D7CF3]/80 via-transparent to-transparent ring-1 ring-gray-950/10 ring-inset"></div>
                  <p className="relative p-6">
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                          <p className="text-lg/6 font-semibold text-white">Zora</p>
                          <p className="text-sm/6 font-medium"><span className="text-white">Zora combines Proof of Humanity with XMTP's secure messaging, to create the world's first, verified human messaging network.</span></p>
                      </figcaption>
                      <img src="img/convosLogo.svg" alt="Ecosystem" className="w-28 mt-2 fadeup" />
                  </p>
              </div>
              
              </div>
            </div>

            </div>      
          </div>
        </div>

        <div className="py-24 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">

          <div className="p-10 lg:col-span-1 lg:row-span-2 group relative flex flex-col overflow-hidden bg-white duration-300 fadeup h-[1200px]">
            <h3 className="mt-0 text-2xl font-semibold tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-5xl fadeup">Build on a different foundation</h3>
            <p className="mt-4 text-lg max-w-full md:max-w-2xl fadeup">
              Chat. Reinvented.
            </p>
            <p className="mt-2 text-lg max-w-full md:max-w-2xl mx-auto fadeup">
              Built on XMTP, every message is private, quantum-secure, and free from spam. Your identity works anywhere, across any network. Encryption, trust, and control—built in, not bolted on.
            </p>
          </div>

          <div className="rounded-2xl lg:col-span-1 lg:row-span-1 group relative flex flex-col overflow-hidden bg-[#1d1d1d] shadow-xs ring-1 ring-gray-700/50 hover:ring-gray-600/50 transition-all duration-300 fadeup h-[600px]">
            
            <div 
              className="absolute inset-0 bg-no-repeat bg-center bg-contain"
              style={{
                backgroundImage: 'url(/img/quantum-image.jpg)',
                backgroundPosition: 'center bottom'
              }}
            ></div>
            <div className="relative p-10 z-10">
              <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase">Encryption</h3>
              <p className="mt-0 text-2xl/8 font-medium tracking-tight text-white">Quantum-resistant end-to-end encryption</p>
              <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">XMTP handles the cryptography—from key generation and rotation to group membership and message encryption—so you can add secure messaging without building custom security infrastructure.</p>
              <a href="#" className="mt-2 max-w-[600px] text-sm/6 text-red-400 underline">Learn more</a>
            </div>
          </div>

          <div className="rounded-2xl lg:col-span-1 lg:row-span-1 group relative flex flex-col overflow-hidden bg-[#1d1d1d] shadow-xs ring-1 ring-gray-700/50 hover:ring-gray-600/50 transition-all duration-300 fadeup h-[600px]">
            
            <div 
              className="absolute inset-0 bg-no-repeat bg-center bg-contain"
              style={{
                backgroundImage: 'url(/img/identity-image.jpg)',
                backgroundPosition: 'center bottom'
              }}
            ></div>
            <div className="relative p-10 z-10">
              <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase">Identity</h3>
              <p className="mt-0 text-2xl/8 font-normal tracking-tight text-white">Any network, any identity,<br />anywhere in the world</p>
              <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">XMTP makes it simple to take any digital identity and use it as the basis for private, end-to-end encrypted, quantum-resistant conversations in your app.</p>
              <a href="#" className="mt-2 max-w-[600px] text-sm/6 text-red-400 underline">Learn more</a>
            </div>
          </div>

          <div className="rounded-2xl lg:col-span-1 lg:row-span-1 group relative flex flex-col overflow-hidden bg-[#1d1d1d] shadow-xs ring-1 ring-gray-700/50 hover:ring-gray-600/50 transition-all duration-300 fadeup h-[600px]">
            
            <div 
              className="absolute inset-0 bg-no-repeat bg-center bg-contain"
              style={{
                backgroundImage: 'url(/img/spam-image.jpg)',
                backgroundPosition: 'center bottom'
              }}
            ></div>
            <div className="relative p-10 z-10">
              <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase">No Spam</h3>
              <p className="mt-0 text-2xl/8 font-medium tracking-tight text-white">Spam protection, built-in</p>
              <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">XMTP's consent system gives your users complete inbox control with encrypted preferences that work across all apps built with XMTP, creating spam-free messaging experiences.</p>
              <a href="#" className="mt-2 max-w-[600px] text-sm/6 text-red-400 underline">Learn more</a>
            </div>
          </div>

          <div className="rounded-2xl lg:col-span-1 lg:row-span-1 group relative flex flex-col overflow-hidden bg-[#1d1d1d] shadow-xs ring-1 ring-gray-700/50 hover:ring-gray-600/50 transition-all duration-300 fadeup h-[600px]">
            
            <div 
              className="absolute inset-0 bg-no-repeat bg-center bg-contain"
              style={{
                backgroundImage: 'url(/img/money-image.jpg)',
                backgroundPosition: 'center bottom'
              }}
            ></div>
            <div className="relative p-10 z-10">
              <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase">Crypto</h3>
              <p className="mt-0 text-2xl/8 font-medium tracking-tight text-white">Works with any digital asset around the world</p>
              <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">XMTP makes it simple to take any digital identity and use it as the basis for priate, end-to-end encrypted, quantum-resistant conversations in your app.</p>
              <a href="#" className="mt-2 max-w-[600px] text-sm/6 text-red-400 underline">Learn more</a>
            </div>
          </div>

        </div>

        <div className="rounded-2xl mt-6 mb-0 p-16 py-32 relative overflow-hidden border border-gray-200 bg-cover bg-no-repeat bg-center bg-[#1d1d1d]">
          {/* Background globe image anchored to bottom right */}
          <div 
            className="absolute bottom-0 right-0 w-full h-full bg-no-repeat bg-right-bottom"
            style={{
              backgroundImage: 'url(/img/globe-fpo.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'right bottom'
            }}
          ></div>
          
          <div className="max-w-2xl lg:max-w-3xl relative z-10">
            <h3 className="mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase fadeup">Decentralization</h3>
            <h3 className="mt-0 text-left text-5xl md:text-6xl font-semibold tracking-tighter text-balance text-white fadeup">
              Censorship-resistant infrastructure backed by sustainable economics
            </h3>
            <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300 fadeup">XMTP's decentralized global server network ensures no single country can shut down messaging for everybody. Small messaging fees keep servers running indefinitely while protecting the network from DOS and spam.</p>
            <a href="#" className="mt-2 max-w-[600px] text-sm/6 text-red-400 underline fadeup">Learn more</a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16 pt-8 pb-10 rounded-2xl mt-6 bg-[#141414] bg-[url(/img/footerBG.jpg)] bg-contain bg-no-repeat bg-bottom rounded-2xl h-[75vh]">

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
              {/* Left side - Content */}
              <div className="flex-1">
                <div className="mt-5 max-w-3xl text-left">
                  <h1 className="mt-12 text-left text-5xl md:text-6xl font-semibold tracking-tighter text-balance text-white fadeup">
                    The new internet runs on open protocols
                  </h1>
                </div>

                <div className="mt-5 max-w-3xl text-left">
                  <p className="text-lg text-gray-300 fadeup">Join the thousands of developers building the future of messaging on XMTP</p>
                </div>

                <div className="mt-8 gap-3 flex">
                  
                    <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" target="_blank" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline fadeup">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      Start building now <span aria-hidden="true">→</span>
                    </a>
                </div>
              </div>

              {/* Right side - Metrics */}
              <div className="flex flex-col gap-8 lg:gap-12">
                {/* First metric */}
                <div className="text-center lg:text-left fadeup">
                  <div className="text-4xl md:text-5xl lg:text-5xl font-semibold text-white">
                    2.2M+
                  </div>
                  <div className="text-lg text-gray-300 mt-0">
                    Identities
                  </div>
                </div>

                {/* Second metric */}
                <div className="text-center lg:text-left fadeup">
                  <div className="text-4xl md:text-5xl lg:text-5xl font-semibold text-white">
                    100+
                  </div>
                  <div className="text-lg text-gray-300 mt-0">
                    Apps
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="absolute bottom-0 h-[200px] w-full -mb-8">
            <div className="flex animate-scroll">
              <img
                src="img/slidingHero.png"
                className="w-auto flex-shrink-0"
                style={{ width: '1400px', height: '200px', objectFit: 'cover' }}
                alt=""
              />
              <img
                src="img/slidingHero.png"
                className="w-auto flex-shrink-0"
                style={{ width: '1400px', height: '200px', objectFit: 'cover' }}
                alt=""
              />
              <img
                src="img/slidingHero.png"
                className="w-auto flex-shrink-0"
                style={{ width: '1400px', height: '200px', objectFit: 'cover' }}
                alt=""
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1d1d1d] to-transparent pointer-events-none"></div>
          </div>
          
        </div>

      </div>
      
  );
};

export default BuiltWithXmtp;
