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
      <title>Give your agents a voice by building on XMTP</title>
      <meta property="og:title" content="Notifi uses XMTP to deliver real-time alerts on Coinbase Wallet" />
      <meta property="og:description" content="Notifi's integration with XMTP enables DeFi projects like GMX to deliver real-time notifications and critical alerts for traders directly in Coinbase Wallet." />
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
              Build A.I.<br />agents that
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
              Create powerful AI agents with built-in payments, secure and private communication, and seamless access to the entire XMTP messaging ecosystem.
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="mt-6 text-lg font-normal text-pretty text-gray-500 sm:text-xl/7">
              Your agents can live anywhere — wallets, apps, bots — and transact everywhere.
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
        <h2 className="mt-0 text-3xl text-center font-semibold tracking-tighter text-balance text-gray-900 sm:text-5xl">Secure agents in your group chats that can transact</h2>
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

    <div className="overflow-hidden pt-0 pb-0">
      <div className="px-0 md:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="py-4 pb-2 md:grid md:grid-cols-6 md:gap-4">
          <div className="col-start-1 col-end-4">
            <div>
              <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Featured Agents</h2>
              <h2 className="mt-0 text-3xl font-semibold tracking-tighter text-balance text-gray-900 sm:text-5xl">
                Commerce 🤝 Messaging
              </h2>
              <p className="text-lg">
                AI agents that can listen, respond, and transact natively in the conversation are the future of customer experience, financial coordination, and agent-to-agent collaboration.
              </p>
            </div>
          </div>
          <div className="col-span-2 col-end-7 md:text-right">
            <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              Start building <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
          
        <div className="mx-auto mt-4 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            
            <div className="flex flex-col">
              <video className="rounded-2xl border-solid border-b-1 border-t-1 border-r-1 border-l-1 border-gray-200" autoPlay muted playsInline loop src="img/featuredBNKR.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Bankr</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Your onchain finance agent
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Buy/sell tokens, manage, and analyze your crypto portfolio all in a chat</p>
                <p className="mt-0">
                  <a href="https://x.com/bankrbot" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>

            <div className="flex flex-col border border-black">
              <video className="rounded-2xl" autoPlay muted playsInline loop src="img/flaunchyWeb.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Flaunch</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                 Launch coins from your group chat
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">A platform that lives in your messages to buy, sell, launch coins & earn 100% revenue</p>
                <p className="mt-2">
                  <a href="https://x.com/flaunchgg" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>

                          <div className="flex flex-col border border-black">
                <img loading="lazy" className="min-w-full rounded-2xl border-solid border-b-1 border-t-1 border-r-1 border-l-1 border-gray-200" src="img/brackyWeb.png" alt="Bracky" />
              <h2 className="mt-4 mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Bracky</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Your sports prediction market agent
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">An AI-powered predcition market platform that becomes so much fun by messaging with friends</p>
                <p className="mt-2">
                  <a href="https://x.com/BrackyHQ" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>

            <div className="flex flex-col border border-black">
              <video className="rounded-2xl" autoPlay muted playsInline loop src="img/squabbleWeb.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Squabble</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Play a game for real stakes
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Play a popular interlocking word game now with onchain stakes and payouts</p>
                <p className="mt-2">
                  <a href="https://x.com/xmtp_/status/1937889105188388879" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>

            <div className="flex flex-col border border-black">
              <video className="rounded-2xl" autoPlay muted playsInline loop src="img/onitWeb.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Onit</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Create any market between friends
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Deploy fully customisable prediction markets for any question, now in your chats</p>
                <p className="mt-2">
                  <a href="https://x.com/onit_fun" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <video className="rounded-2xl border-solid border-b-1 border-t-1 border-r-1 border-l-1 border-gray-200" autoPlay muted playsInline loop src="img/communityVid.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">XMTP Community</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Say "gm" to the XMTP group chat
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Join a community of 100+ builders building on XMTP and unlock the potential in your ideas</p>
                <p className="mt-0">
                  <a href="mailto:eric@ephemerahq.com" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Request to join the group chat <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
            
          </dl>
        </div>

        </div>
      </div>
    
    </div>
    
    

    <div className="mt-16 mb-16 md:mt-0 mx-auto max-w-7xl py-0 md:py-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 pt-0 md:pt-16">
        <div className="mx-auto w-full max-w-xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">
            Messaging that's secure, extensible, and built for every app
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Make payments as easy as sending a text — secure, direct, and wallet-to-wallet — with one agent that works across all apps and full flexibility for developers on any EVM chain or ecosystem.
          </p>
          <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Start building <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mx-auto max-w-full">
          <p className="text-lg font-semibold">XMTP makes this seamless:</p>
          <div className="py-4 pb-2 grid grid-cols-6 gap-4 border-solid border-b-0 border-t-1 border-r-0 border-l-0 border-black">
            <div className="col-start-1 col-end-4">
              <p className="font-bold text-normal/6">Payments are programmable messages.</p>
            </div>
            <div className="col-span-3 col-end-7">
              <p className="text-normal/6">Send, receive, and settle assets as easily as sending a text — all within a secure chat.</p>
            </div>
          </div>
          <div className="py-4 pb-2 grid grid-cols-6 gap-4 border-solid border-b-0 border-t-1 border-r-0 border-l-0 border-gray-200">
            <div className="col-start-1 col-end-4">
              <p className="font-bold text-normal/6">No middlemen.</p>
            </div>
            <div className="col-span-3 col-end-7">
              <p className="text-normal/6">No need to rely on third-party processors or embed external widgets. Transactions happen directly between wallets and apps.</p>
            </div>
          </div>
          <div className="py-4 pb-2 grid grid-cols-6 gap-4 border-solid border-b-0 border-t-1 border-r-0 border-l-0 border-gray-200">
            <div className="col-start-1 col-end-4">
              <p className="font-bold text-normal/6">One agent, every app.</p>
            </div>
            <div className="col-span-3 col-end-7">
              <p className="text-normal/6">Write your agent once and deploy across all XMTP-connected apps, from wallets and web apps to bots and browser extensions.</p>
            </div>
          </div>
          <div className="py-4 pb-2 grid grid-cols-6 gap-4 border-solid border-b-0 border-t-1 border-r-0 border-l-0 border-gray-200">
            <div className="col-start-1 col-end-4">
              <p className="font-bold text-normal/6">Built for developer freedom.</p>
            </div>
            <div className="col-span-3 col-end-7">
              <p className="text-normal/6">Integrate with any EVM chain, wallet, identity system or mini-app ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    


    <div className="py-16 md:py-32 pt-4 md:pt-16 rounded-2xl mb-8 relative overflow-hidden text-center">
      <div className="bg-white absolute inset-0" style={{ background: 'linear-gradient(200deg,#163869 15%,#571861 35%,#a79bb0 55%,#163869 85%)', opacity: 0.16 }}></div>
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative z-10">

        <div className="mt-16">
          <h4 className="text-4xl md:text-6xl font-semibold tracking-tighter text-center mb-8 md:mb-4">✔️ No gatekeepers or app store approvals</h4>
          <h4 className="text-4xl md:text-6xl font-semibold tracking-tighter text-center mb-8 md:mb-4">✔️ No centralized servers</h4>
          <h4 className="text-4xl md:text-6xl font-semibold tracking-tighter text-center mb-16">✔️ Full encryption, including metadata</h4>
        </div>  
        <h2 className="text-center font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Messages unleashed</h2>
        <h3 className="mt-4 font-semibold leading-normal tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-4xl text-center">
          You Own the Agent,<br />XMTP Handles the Infrastructure
        </h3>
        <p className="text-center">You own the logic. You own the keys. You own the experience.</p>
        <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          Start building <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <div className="bg-gray-50 pb-8 md:pb-24 py-8 md:py-24 rounded-2xl mb-0">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-center font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Privacy is the future</h2>
          <h3 className="mt-2 text-4xl font-medium leading-none tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-5xl text-center">
            XMTP is built for next generation messaging apps.
          </h3>
        </div>

        <div className="mt-24 md:grid md:grid-cols-3 tablet:grid-cols-2 desktop:grid-cols-3 md:gap-6 tablet:gap-8">
          <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
                  <div className="w-12 h-12 bg-[#FC4F37] rounded-md shadow-lg flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                  <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
            </svg>

                  </div>
              </div>
              <div className="mb-16 md:mb-0 pt-10 p-8 bg-[rgba(255,255,255,0.7)] bg-blur-sm rounded-3xl shadow-[inset_2px_4px_4px_0px_rgba(0,0,0,0.02)] outline outline-[1.5px] outline-offset-[-1.5px] outline-black/5 backdrop-blur-[50px] flex flex-col justify-center items-center pb-10">
                  <div className="flex flex-col justify-center items-center gap-2 text-center">
                      <div className="text-black text-lg font-semibold font-inter leading-7">End-to-End Encrypted</div>
                      <div className="text-gray-500 text-base font-normal font-inter leading-normal">Messages and transactions are fully encrypted — including metadata — with built-in key rotation and MLS-based security.</div>
                  </div>
              </div>
          </div>
          <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
                  <div className="w-12 h-12 bg-[#FC4F37] rounded-md shadow-lg flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
                    </svg>
                  </div>
              </div>
              <div className="mb-16 md:mb-0 pt-10 p-8 bg-[rgba(255,255,255,0.7)] bg-blur-sm rounded-3xl shadow-[inset_2px_4px_4px_0px_rgba(0,0,0,0.02)] outline outline-[1.5px] outline-offset-[-1.5px] outline-black/5 backdrop-blur-[50px] flex flex-col justify-center items-center pb-10">
                  <div className="flex flex-col justify-center items-center gap-2 text-center">
                      <div className="text-black text-lg font-semibold font-inter leading-7">Native Money</div>
                      <div className="text-gray-500 text-base font-normal font-inter leading-normal">Send, receive, and manage digital assets - all through a secure, consent-based messaging channel. No third-part infrastructure needed.</div>
                  </div>
              </div>
          </div>
          <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
                  <div className="w-12 h-12 bg-[#FC4F37] rounded-md shadow-lg flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                      <path fill-rule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
                    </svg>
                  </div>
              </div>
              <div className="mb-16 md:mb-0 pt-10 p-8 bg-[rgba(255,255,255,0.7)] bg-blur-sm rounded-3xl shadow-[inset_2px_4px_4px_0px_rgba(0,0,0,0.02)] outline outline-[1.5px] outline-offset-[-1.5px] outline-black/5 backdrop-blur-[50px] flex flex-col justify-center items-center pb-10">
                  <div className="flex flex-col justify-center items-center gap-2 text-center">
                      <div className="text-black text-lg font-semibold font-inter leading-7">Deploy in Minutes</div>
                      <div className="text-gray-500 text-base font-normal font-inter leading-normal">XMTP’s developer experience makes it easy to ship agents using frameworks like Railway, Replit, or you can bring your own stack.</div>
                  </div>
              </div>
          </div>
          <div className="relative mt-16">
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
                  <div className="w-12 h-12 bg-[#FC4F37] rounded-md shadow-lg flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                      <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clip-rule="evenodd" />
                    </svg>
                  </div>
              </div>
              <div className="mb-16 md:mb-0 pt-10 p-8 bg-[rgba(255,255,255,0.7)] bg-blur-sm rounded-3xl shadow-[inset_2px_4px_4px_0px_rgba(0,0,0,0.02)] outline outline-[1.5px] outline-offset-[-1.5px] outline-black/5 backdrop-blur-[50px] flex flex-col justify-center items-center pb-10">
                  <div className="flex flex-col justify-center items-center gap-2 text-center">
                      <div className="text-black text-lg font-semibold font-inter leading-7">Scales With You</div>
                      <div className="text-gray-500 text-base font-normal font-inter leading-normal">Whether it’s 10 users or 10 million, the XMTP network handles scaling automatically — no server ops required.</div>
                  </div>
              </div>
          </div>
          <div className="relative mt-16">
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
                  <div className="w-12 h-12 bg-[#FC4F37] rounded-md shadow-lg flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                      <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
                    </svg>
                  </div>
              </div>
              <div className="mb-16 md:mb-0 pt-10 p-8 bg-[rgba(255,255,255,0.7)] bg-blur-sm rounded-3xl shadow-[inset_2px_4px_4px_0px_rgba(0,0,0,0.02)] outline outline-[1.5px] outline-offset-[-1.5px] outline-black/5 backdrop-blur-[50px] flex flex-col justify-center items-center pb-10">
                  <div className="flex flex-col justify-center items-center gap-2 text-center">
                      <div className="text-black text-lg font-semibold font-inter leading-7">Built for Censorship Resistance</div>
                      <div className="text-gray-500 text-base font-normal font-inter leading-normal">Your agents can’t be blocked, silenced, or surveilled. XMTP nodes preserve communication and consent at the protocol level.</div>
                  </div>
              </div>
          </div>
          <div className="relative mt-16">
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
                  <div className="w-12 h-12 bg-[#FC4F37] rounded-md shadow-lg flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                      <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                    </svg>
                  </div>
              </div>
              <div className="mb-16 md:mb-0 pt-10 p-8 bg-[rgba(255,255,255,0.7)] bg-blur-sm rounded-3xl shadow-[inset_2px_4px_4px_0px_rgba(0,0,0,0.02)] outline outline-[1.5px] outline-offset-[-1.5px] outline-black/5 backdrop-blur-[50px] flex flex-col justify-center items-center pb-10">
                  <div className="flex flex-col justify-center items-center gap-2 text-center">
                      <div className="text-black text-lg font-semibold font-inter leading-7">Decentralized by Default</div>
                      <div className="text-gray-500 text-base font-normal font-inter leading-normal">Your messaging infrastructure doesn’t depend on one company or server. XMTP is an open protocol backed by a growing decentralized network of nodes.</div>
                  </div>
              </div>
          </div>
        </div>  
      </div>
    </div>

    <div className="bg-white pb-0 pt-16 md:pt-0">
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
               <a href="https://join.base.app" className="w-full md:w-auto my-4 md:mb-0 inline-flex shrink-0 items-center justify-center gap-x-1 text-black hover:text-[#0052FF] font-semibold text-base me-2 px-5 py-2.5 md:py-3.5 hover:no-underline">
                 Join the Base App waitlist
                 <span className="ml-1" aria-hidden="true">→</span>
               </a>
             </div>
          </div>
          <div className="mx-auto max-w-full">
            <video className="mt-0 -mb-2 max-w-xs h-80 md:h-auto md:max-w-md rounded-none relative top-0 bottom-0 max-w-[100%] overflow-hidden" autoPlay muted playsInline loop src="img/sectionVid.mp4" type="video/mp4">Your browser does not support the video tag.</video>
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
            <a href="https://docs.xmtp.org/" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse justify-center hover:no-underline">
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
