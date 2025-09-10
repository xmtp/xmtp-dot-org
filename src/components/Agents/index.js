import React, { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl/";
import Head from "@docusaurus/Head";

// Optimized image component with lazy loading
const OptimizedImage = ({ src, alt, className, ...props }) => (
  <img 
    loading="lazy" 
    src={src} 
    alt={alt} 
    className={className} 
    {...props}
  />
);

// Optimized video component with performance attributes
const OptimizedVideo = ({ src, className, ...props }) => (
  <video 
    className={className}
    autoPlay 
    muted 
    playsInline 
    loop 
    src={src} 
    type="video/mp4"
    preload="metadata"
    {...props}
  >
    Your browser does not support the video tag.
  </video>
);

const Agents = () => {
  const wordsToType = ["Transact", "Coordinate", "Launch", "Play", "Predict"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = wordsToType[currentWordIndex];
    const isWordFullyTyped = typedWord === fullWord;
    const isWordFullyDeleted = typedWord.length === 0;

    let delayMs = isDeleting ? 50 : 90;

    if (!isDeleting && isWordFullyTyped) {
      delayMs = 1200; // pause at full word
      const timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, delayMs);
      return () => clearTimeout(timeoutId);
    }

    if (isDeleting && isWordFullyDeleted) {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsToType.length);
      delayMs = 250; // brief pause before typing next word
    }

    const nextText = isDeleting
      ? fullWord.slice(0, Math.max(typedWord.length - 1, 0))
      : fullWord.slice(0, typedWord.length + 1);

    const timeoutId = setTimeout(() => {
      setTypedWord(nextText);
    }, delayMs);

    return () => clearTimeout(timeoutId);
  }, [typedWord, isDeleting, currentWordIndex]);

  // Center mobile video on load
  useEffect(() => {
    const centerMobileVideo = () => {
      const container = document.getElementById('mobile-scroll-container');
      if (container && window.innerWidth < 768) { // Only on mobile (md breakpoint)
        // Wait for content to be fully loaded
        setTimeout(() => {
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;
          const scrollLeft = (scrollWidth - clientWidth) / 2;
          container.scrollLeft = scrollLeft;
        }, 100);
      }
    };

    // Center on initial load with delay
    setTimeout(centerMobileVideo, 200);
    
    // Also center on window resize (in case of orientation change)
    window.addEventListener('resize', centerMobileVideo);
    
    return () => window.removeEventListener('resize', centerMobileVideo);
  }, []);
  return (
  <div>
    <Head>
      <title>Build Agents and Mini Apps on XMTP</title>
      <meta property="og:title" content="Build Agents and Mini Apps on XMTP" />
      <meta property="og:description" content="Create powerful AI agents and native mini apps with built-in payments, secure communication, and seamless access to the entire XMTP messaging ecosystem." />
      <meta property="og:image" content="https://xmtp.org/img/agents-preview.png" />
      <meta property="og:image:width" content="1470" />
      <meta property="og:image:height" content="710" />
      <meta property="og:url" content="https://xmtp.org/buildinchat" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Build Agents and Mini Apps on XMTP" />
      <meta name="twitter:description" content="Create powerful AI agents and native mini apps with built-in payments, secure communication, and seamless access to the entire XMTP messaging ecosystem." />
      <meta name="twitter:image" content="https://xmtp.org/img/agents-preview.png" />
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Head>
    
    <div className="relative isolate px-0 md:px-6 pt-4 pb-8 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="hidden sm:mb-6 sm:flex lg:ml-16">
          <div className="relative rounded-full px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            XMTP is now fully quantum-resistant {' '}
            <a href="https://github.com/xmtp/libxmtp/blob/main/xmtp_mls/hndl_security.md" className="font-semibold text-red-500">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        
        <div className="py-0 md:py-32 lg:py-0 lg:ml-16">
          <div className="text-left">
            <h1 className="mr-0 md:mr-10 float-left text-3xl font-normal tracking-tighter text-balance text-gray-900 sm:text-6xl">
              Build<br />Agents and Mini Apps that
            </h1>
            <h2 className="mt-0 text-[72px] md:text-[135px] leading-[0.75] font-normal text-balance text-gray-900 font-dotgothic tracking-tight" aria-live="polite">
              <span className="typing-wrap">
                <span className="typing-placeholder">Coordinate</span>
                <span className="typing-live">
                  {typedWord}
                  <span className="typing-cursor">|</span>
                </span>
              </span>
            </h2>
          </div>
        </div>

        <div className="relative mt-0 md:mt-8 -mx-6 lg:-mx-8">
          <div className="relative mx-auto max-w-[1680px]">
            <video className="mt-8 rounded-none md:rounded-2xl relative top-0 max-w-[100%] overflow-hidden md:min-w-full md:w-full md:max-w-full" autoPlay muted playsInline loop src="img/agentsHeroVideo.mp4" type="video/mp4">Your browser does not support the video tag.</video>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl py-0 md:py-32 lg:py-0">

        <div className="text-left lg:ml-24">
          <div className="max-w-lg">
            <h2 className="mt-4 md:mt-8 text-2xl font-semibold tracking-tighter text-balance text-gray-900 sm:text-4xl/tight">
              Create powerful AI agents and native mini apps with built-in payments, secure and private communication, and seamless access to the entire XMTP messaging ecosystem.
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="mt-6 text-lg font-normal text-pretty text-gray-500 sm:text-xl/7">
              Your agents and mini apps can live anywhere in chat and transact everywhere.
            </p>
            <p className="mt-6">
              All powered by XMTP’s quantum-resistant, enterprise-grade, decentralized messaging protocol.
            </p>
            <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" className="my-6 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              Get started <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 17.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
    
    <div className="mx-auto max-w-2xl px-6 mt-24 lg:max-w-7xl lg:px-8">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="mt-0 text-3xl text-center font-semibold tracking-tighter text-balance text-gray-900 sm:text-5xl">Secure agents and mini apps in your group chats that can transact</h2>
      </div>
    </div>
    
    <div className="md:overflow-hidden md:flex md:justify-center bg-[#FBFBFB] relative">
      <div className="absolute top-0 inset-0 h-10 bg-gradient-to-t from-[#FBFBFB] to-white"></div>
        <div className="md:hidden overflow-x-auto overflow-y-hidden" id="mobile-scroll-container">
          <video className="mt-24 relative top-0 max-w-[200%]" autoPlay muted playsInline loop src="img/Comp2.mp4" type="video/mp4">Your browser does not support the video tag.</video>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <video className="hidden md:block mt-24 md:mt-16 relative top-0 max-w-full" autoPlay muted playsInline loop src="img/Comp2.mp4" type="video/mp4">Your browser does not support the video tag.</video>
        </div>
       <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-[#FBFBFB]"></div>
    </div>

    <div className="mx-auto max-w-3xl py-0 md:py-32 lg:py-0">
      <div className="text-left lg:ml-24">
        <div className="max-w-lg">
          <h2 className="mt-4 md:mt-8 text-2xl font-semibold tracking-tighter text-balance text-gray-900 sm:text-4xl/tight">
            Mini Apps built for chat.
          </h2>
          <h3 className="mt-6 text-xl font-semibold tracking-tighter text-balance text-gray-900 sm:text-2xl">
            Bring your mini app into any secure DM or group
          </h3>
          <p className="mt-2 text-lg font-normal text-pretty text-gray-500 sm:text-xl/7">
            Enhance your mini app with an agent
          </p>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tighter text-balance text-gray-900 sm:text-3xl">
              <strong>Agents Make Mini Apps Talk 💬</strong>
            </h2>
            <p className="mt-4 text-lg font-normal text-pretty text-gray-500 sm:text-xl/7">
              Give your mini app a voice, memory, and a presence in every conversation.
            </p>
            
            <h3 className="mt-8 text-xl font-bold tracking-tighter text-balance text-gray-900 sm:text-2xl">
              <strong>What happens when you add an Agent?</strong>
            </h3>
            
            <div className="mt-4 space-y-4 max-w-md">
              <div className="flex justify-start">
                <div className="bg-black text-white px-4 py-2 rounded-2xl rounded-bl-md max-w-sm">
                  <p className="text-lg">Natural language interface</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-black text-white px-4 py-2 rounded-2xl rounded-br-md max-w-sm">
                  <p className="text-lg">Real-time group coordination</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-black text-white px-4 py-2 rounded-2xl rounded-bl-md max-w-sm">
                  <p className="text-lg">More distribution and sharing</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-black text-white px-4 py-2 rounded-2xl rounded-br-md max-w-sm">
                  <p className="text-lg">Persistent memory and context</p>
                </div>
              </div>
            </div>
          </div>
          
          
          
          
          <a href="https://github.com/xmtp/xmtp-js/tree/main/sdks/agent-sdk" className="my-6 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Explore the Agent SDK <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="mt-16"></div>
    <div className="mt-16"></div>

    <div className="overflow-hidden pt-0 pb-0">
      <div className="px-0 md:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="py-4 pb-2 md:grid md:grid-cols-6 md:gap-4">
          <div className="col-start-1 col-end-7 text-left">
            <div>
              <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Featured Agents and Mini Apps</h2>
              <h2 className="mt-0 text-3xl font-semibold tracking-tighter text-balance text-gray-900 sm:text-5xl">
                Agents 💬 Mini Apps
              </h2>
              <p className="text-lg max-w-4xl">
                AI agents and mini apps that can listen, respond, and transact natively in conversations are transforming customer experience, financial coordination, and real-time collaboration across apps.
              </p>
            </div>
          </div>
        </div>
          
        <div className="mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none">
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Trading & Finance</h3>
          </div>
          
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4 mb-16">
            
            <div className="flex flex-col relative">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">AGENT</span>
              </div>
              <video className="rounded-2xl border-solid border-2 border-gray-200" autoPlay muted playsInline loop src="img/featuredBNKR.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Bankr</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Your onchain finance agent
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Buy/sell tokens, manage, and analyze your crypto portfolio all through natural conversation in any chat.</p>
                <div className="mt-2 flex gap-2">
                  <a href="https://x.com/bankrbot" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                  <a href="https://bankr.bot/" target="_blank" className="text-sm/6 font-semibold text-blue-500 hover:text-blue-500">
                    Try it now <span aria-hidden="true">→</span>
                  </a>
                </div>
              </dd>
            </div>

            <div className="flex flex-col relative">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">AGENT & MINI APP</span>
              </div>
              <video className="rounded-2xl border-solid border-2 border-gray-200" autoPlay muted playsInline loop src="img/flaunchyWeb.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Flaunch</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Earn from launches
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">A complete token launch platform that lives in your messages - buy, sell, launch coins & earn 100% revenue.</p>
                <div className="mt-2 flex gap-2">
                  <a href="https://x.com/flaunchgg" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </dd>
            </div>

            <div className="flex flex-col relative">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">AGENT</span>
              </div>
              <div className="rounded-2xl border-solid border-2 border-gray-200 bg-gray-100 flex items-center justify-center h-48">
                <img loading="lazy" className="max-w-32 max-h-32" src="https://heyelsa.ai/assets/img/logo.svg" alt="Elsa logo" />
              </div>
              <h2 className="mt-4 mb-2 font-mono text-xs font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Elsa</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Turn words into onchain actions
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Trade smarter, and maximize returns, all with unparalleled ease and safety.</p>
                <div className="mt-2 flex gap-2">
                  <a href="#" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </dd>
            </div>

            <div className="flex flex-col relative">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">AGENT & MINI APP</span>
              </div>
              <div className="rounded-2xl border-solid border-2 border-gray-200 bg-gray-100 flex items-center justify-center h-48">
                <img loading="lazy" className="max-w-32 max-h-32" src="https://pbs.twimg.com/profile_images/1922015106508193793/EC-4X-lf_400x400.png" alt="Mamo logo" />
              </div>
              <h2 className="mt-4 mb-2 font-mono text-xs font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Mamo</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Personal finance companion
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Mamo helps you track, grow, and understand your money – step by step, without the stress.</p>
                <div className="mt-2 flex gap-2">
                  <a href="#" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </dd>
            </div>

          </dl>
          
          <div className="mb-8 mt-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🔮 Prediction Markets</h3>
          </div>
          
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3 mb-16">

            <div className="flex flex-col relative">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">AGENT & MINI APP</span>
              </div>
              <img loading="lazy" className="min-w-full rounded-2xl border-solid border-2 border-gray-200" src="img/brackyWeb.png" alt="Bracky" />
              <h2 className="mt-4 mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Bracky</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Your sports prediction market agent
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">An AI-powered prediction market platform that makes betting with friends fun and social through messaging.</p>
                <div className="mt-2 flex gap-2">
                  <a href="https://x.com/BrackyHQ" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </dd>
            </div>

            <div className="flex flex-col relative">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">AGENT & MINI APP</span>
              </div>
              <video className="rounded-2xl border-solid border-2 border-gray-200" autoPlay muted playsInline loop src="img/onitWeb.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Onit</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Create custom prediction markets
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Deploy fully customizable prediction markets for any question with AI assistance, all happening in your group chats.</p>
                <div className="mt-2 flex gap-2">
                  <a href="https://x.com/onit_fun" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </dd>
            </div>

            <div className="flex flex-col relative">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">AGENT & MINI APP</span>
              </div>
              <div className="rounded-2xl border-solid border-2 border-gray-200 bg-gray-100 flex items-center justify-center h-48">
                <img loading="lazy" className="max-w-32 max-h-32" src="https://pbs.twimg.com/profile_images/1965768681847222272/Gx1IMqFf_400x400.jpg" alt="Ponder logo" />
              </div>
              <h2 className="mt-4 mb-2 font-mono text-xs font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Ponder</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Predict what the crowd thinks
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Ponder lets you make money by answering simple daily polls on group opinions.</p>
                <div className="mt-2 flex gap-2">
                  <a href="#" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </dd>
            </div>

          </dl>
          
          <div className="mb-8 mt-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🎮 Gaming & Social</h3>
          </div>
          
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-1 mb-16">

            <div className="flex flex-col relative max-w-md">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">AGENT & MINI APP</span>
              </div>
              <video className="rounded-2xl border-solid border-2 border-gray-200" autoPlay muted playsInline loop src="img/squabbleWeb.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Squabble</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Play a word game for real stakes
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Play a popular interlocking word game with real onchain stakes and instant payouts, all within your chat.</p>
                <div className="mt-2 flex gap-2">
                  <a href="https://x.com/xmtp_/status/1937889105188388879" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </dd>
            </div>

          </dl>
          
          <div className="mx-auto max-w-7xl py-16 md:py-24 lg:py-16">
            <div className="text-right lg:mr-24">
              <div className="max-w-lg ml-auto">
                <h2 className="text-2xl font-semibold tracking-tighter text-balance text-gray-900 sm:text-4xl/tight">
                  Go viral with your agents and mini apps
                </h2>
                <p className="mt-6 text-lg font-normal text-pretty text-gray-500 sm:text-xl/7">
                  Join thousands of conversations happening right now across the XMTP network.
                </p>
                <div className="mt-8">
                  <div className="bg-gray-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <img loading="lazy" className="h-8 w-8 rounded-full" src="img/bankr-logo.jpg" alt="Bankr logo" />
                      </div>
                      <div className="ml-3">
                        <p className="text-lg font-medium text-gray-900">
                          "Bankr is part of <span className="font-bold text-red-600">20,000+ DMs and Group chats</span> in the Base App and it's not even out of beta yet"
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                          — <a href="https://x.com/bankrbot/status/1957564153780228405" target="_blank" className="text-red-500 hover:text-red-600">@bankrbot on X</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        </div>
      </div>
    
    </div>

    <div className="bg-white pb-0 pt-16 md:pt-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 items-center gap-x-24 gap-y-8 md:gap-y-16 lg:grid-cols-2 pt-0">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">
              Ready to join a community building the future of messaging?
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              The future is almost here. Experience what a messaging experience with native financial rails feels like today by joining the waitlist for Base App.
            </p>

            <div className="mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-x-4">
               <a href="mailto:eric@ephemerahq.com" className="w-full md:w-auto my-0 md:my-4 md:mb-0 inline-flex shrink-0 items-center justify-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 hover:no-underline">
                 Request to join the group chat <span aria-hidden="true">→</span>
               </a>
               <a href="https://join.base.app" className="w-full md:w-auto my-0 md:my-4 md:mb-0 inline-flex shrink-0 items-center justify-center gap-x-1 text-black hover:text-[#0052FF] font-semibold text-base me-2 px-5 py-2.5 md:py-3.5 hover:no-underline">
                 Join the Base App waitlist
                 <span className="ml-1" aria-hidden="true">→</span>
               </a>
             </div>
          </div>
          <div className="mx-auto max-w-full">
            <img className="max-w-xs md:max-w-sm" src="img/basePlace.png" alt="Phone hero" />
          </div>
        </div>
      </div>
    </div>
    
    

    <div className="py-16 md:py-32 pt-4 md:pt-16 rounded-2xl mb-8 relative overflow-hidden">
      <div className="bg-white absolute inset-0" style={{ background: 'linear-gradient(200deg,#163869 15%,#571861 35%,#a79bb0 55%,#163869 85%)', opacity: 0.16 }}></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 pt-0 md:pt-16">
        <div className="mx-auto w-full max-w-xl lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight text-pretty text-gray-900">
            We know chat 💬
          </h2>
          <p className="mt-6 text-xl font-normal text-pretty text-gray-600">
            Building agents and mini apps shouldn't be rocket science. We've done the heavy lifting so you can focus on the fun stuff.
          </p>
          <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Start building <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mx-auto max-w-full">
          <p className="text-2xl font-bold mb-8">Here's why devs love building with us:</p>
          
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="text-xl flex items-center h-6">💸</div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">Money = Messages</h3>
                <p className="text-gray-600">Send money like sending a DM. No APIs to wrestle with.</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="text-xl flex items-center h-6">🚫</div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">Zero Gatekeepers</h3>
                <p className="text-gray-600">No app store approvals. No middlemen taking cuts.</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="text-xl flex items-center h-6">🔥</div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">Write Once, Run Everywhere</h3>
                <p className="text-gray-600">Your code works in every app that supports XMTP.</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="text-xl flex items-center h-6">🛠️</div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">Actually Decentralized</h3>
                <p className="text-gray-600">No single point of failure. No rug pulls.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    
    





    <div className="bg-[#141414] bg-[url(/img/footerBG.jpg)] bg-contain bg-no-repeat bg-bottom rounded-2xl">
      <div className="px-6 py-24 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="space-y-8 text-left">
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white px-4 py-2 pb-0 rounded-2xl rounded-br-md max-w-xs">
                <p className="text-lg">Hey @Agent, I'm ready to build with XMTP.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-900 px-4 py-2 pb-4 rounded-2xl rounded-bl-md max-w-sm">
              <p className="text-lg">Amazing.</p>
                <p className="text-lg">Join thousands of developers building next-generation transactional agents with XMTP — the secure messaging layer for AI, money, and coordination.</p>
                <a target="_blank" className="color-white underline text-lg hover:no-underline" href="https://docs.xmtp.org/agents/get-started/build-an-agent">https://docs.xmtp.org</a>
              </div>
            </div>
          </div>
          <h2 className="mt-16 text-center font-mono text-xs/5 font-semibold tracking-widest text-gray-300 uppercase data-dark:text-gray-400">Build the future of messaging</h2>
          <h3 className="mt-4 font-medium mleading-none d:leading-normal tracking-normal text-5xl md:text-7xl text-pretty text-white data-dark:text-white text-center font-dotgothic">
            Ready to<br />Launch?
          </h3>
          <p className="mt-8 text-lg font-dotgothic font-bold text-gray-300 tracking-normal text-center leading-none">You own the logic.</p>
          <p className="text-lg font-dotgothic font-bold text-gray-300 tracking-normal text-center leading-none">You own the keys.</p>
          <p className="text-lg font-dotgothic font-bold text-gray-300 tracking-normal text-center leading-none">You own the experience.</p>
          
          <div className="mt-8 flex items-center justify-center gap-x-4">
            <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse justify-center hover:no-underline">
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


export default Agents;
