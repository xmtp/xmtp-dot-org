import React, { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl/";
import Head from "@docusaurus/Head";

// Custom hook for counting animation
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-count="${end}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [end, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, start, duration]);

  return count;
};

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
  
  // Count-up animations
  const developerCount = useCountUp(1505, 2000);
  const appCount = useCountUp(1218, 2000);

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

  return (
  <div>
    <style jsx>{`
      .fadeup {
        opacity: 0;
        transform: translateY(30px);
      }
    `}</style>
    <Head>
      <title>Build agents and mini apps on XMTP</title>
      <meta property="og:title" content="Mini apps in chat" />
      <meta property="og:description" content="Add mini app experiences to chat with built-in payments, secure communication, and seamless access to the entire XMTP messaging ecosystem." />
      <meta property="og:image" content="https://xmtp.org/img/miniapps-preview.png" />
      <meta property="og:image:width" content="1470" />
      <meta property="og:image:height" content="710" />
      <meta property="og:url" content="https://xmtp.org/miniapps" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mini apps in chat" />
      <meta name="twitter:description" content="Add mini app experiences to chat with built-in payments, secure communication, and seamless access to the entire XMTP messaging ecosystem." />
      <meta name="twitter:image" content="https://xmtp.org/img/miniapps-preview.png" />
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Head>

    <div className="overflow-hidden pt-0 pb-8">
      <div className="px-0 md:px-8">
        <div className="mx-auto max-w-full max-w-[1920px]">
          <div className="w-full overflow-hidden md:overflow-visible flex justify-center">
            <img src="img/ecosystemGraphic.png" alt="Ecosystem" className="w-[1200px] max-w-none md:w-full md:max-w-full fadeup" />
          </div>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="py-4 pb-2 md:grid md:grid-cols-6 md:gap-4">
            <div className="col-start-1 col-end-7 text-center">
              <div>
                <h2 className="mt-8 text-center text-5xl md:text-6xl font-semibold tracking-tighter text-balance text-gray-900 fadeup">
                  Chat is the new app store
                </h2>
                <p className="mt-0 text-lg max-w-full md:max-w-3xl mx-auto fadeup">
                  XMTP powers a rapidly growing ecosystem of mini apps—where everything is a built-in chat experience from trading, prediction markets, event coordination, payments, and games.
                </p>
                <p className="mt-6 font-normal text-lg max-w-full md:max-w-3xl mx-auto fadeup">
                  As an <span className="font-semibold">open, permissionless protocol,</span> all mini apps are suppported whether they are built on <span className="font-semibold">Base, Farcaster, or any other ecosystem.</span> XMTP is built to support <a href="https://xmtp.org/vision/concepts/identity" target="_blank"><span className="font-semibold underline decoration-dotted hover:no-underline underline-offset-4">any identity and any network.</span></a>
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

              <div class="mt-10 mx-auto max-w-full shrink-0 lg:mx-0 fadeup">
                <dl class="mx-auto mt-4 mb-4 grid max-w-sm grid-cols-2 md:grid-cols-1 gap-x-0 gap-y-4 md:gap-y-4 text-black sm:gap-y-16 lg:grid-cols-2">
                  <div class="flex flex-col gap-y-0 border-none pr-0">
                    <dt class="text-base/8 text-black">Developers</dt>
                    <dd class="order-first text-4xl font-semibold tracking-tight" data-count="1505">{developerCount.toLocaleString()}+</dd>
                  </div>
                  <div class="flex flex-col gap-y-0 border-none ml-0 lg:ml-8">
                    <dt class="text-base/8 text-black">Production mini apps</dt>
                    <dd class="order-first text-4xl font-semibold tracking-tight" data-count="1218">{appCount.toLocaleString()}+</dd>
                  </div>
                </dl>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    
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

        <div className="relative mt-0 md:mt-8 -mx-6 lg:-mx-8 fadeup">
          <div className="relative mx-auto max-w-[1680px]">
            <video className="mt-8 rounded-none md:rounded-2xl relative top-0 max-w-[100%] overflow-hidden md:min-w-full md:w-full md:max-w-full" autoPlay muted playsInline loop src="img/agentsHeroVideo.mp4" type="video/mp4">Your browser does not support the video tag.</video>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-0 md:px-6 py-0 lg:px-0 py-16">

      <div className="grid grid-cols-1 items-top gap-x-24 gap-y-8 md:gap-y-16 lg:grid-cols-2 pt-0 fadeup">
        <div>
          <h1 className="mr-0 md:mr-10 float-left text-3xl md:text-4xl font-normal tracking-tighter text-balance text-gray-900">
            Build chat experiences that
          </h1>
          <h2 className="mt-0 text-[72px] md:text-[128px] leading-[0.75] font-normal text-balance text-gray-900 font-dotgothic tracking-tight" aria-live="polite">
            <span className="typing-wrap">
              <span className="typing-placeholder">Coordinate</span>
              <span className="typing-live">
                {typedWord}
                <span className="typing-cursor">|</span>
              </span>
            </span>
          </h2>
        </div>
        
        <div className="mx-auto max-w-full text-left">
          <div className="max-w-full">
            <h2 className="text-2xl/tight font-normal tracking-tight text-balance text-gray-900">
              Add mini app experiences to chat with built-in payments 💸 secure communication 🔒 seamless interoperability 🌐
            </h2>
          </div>
          <div className="max-w-lg">
            <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" target="_blank" className="my-6 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              Get started <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </div>
    </div>
    
    <div className="md:overflow-hidden md:flex md:justify-center bg-[#FBFBFB] relative fadeup">
      <div className="absolute top-0 inset-0 h-10 bg-gradient-to-t from-[#FBFBFB] to-white"></div>
        <div className="md:hidden overflow-x-auto overflow-y-hidden" id="mobile-scroll-container">
          <video className="mt-24 relative top-0 max-w-[200%]" autoPlay muted playsInline loop src="/img/Comp2.mp4" type="video/mp4">Your browser does not support the video tag.</video>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <video className="hidden md:block mt-24 md:mt-16 relative top-0 max-w-full" autoPlay muted playsInline loop src="/img/Comp2.mp4" type="video/mp4">Your browser does not support the video tag.</video>
        </div>
       <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-[#FBFBFB]"></div>
    </div>

    <div className="py-12 md:py-24 pt-8 md:pt-12 rounded-2xl mt-0 mb-8 relative overflow-hidden text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 bg-cover bg-no-repeat bg-center bg-[#fcfcfc] fadeup" style={{ backgroundImage: 'url(/img/viralBG.jpg)' }}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative z-10">
        
          <div className="mt-8 flex justify-center">
            <div className="bg-gradient-to-r from-black to-gray-900 border-red-500 p-8 pb-6 rounded-xl max-w-2xl shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img loading="lazy" className="h-8 w-8 rounded-full" src="img/bankr-logo.jpg" alt="Bankr logo" />
                </div>
                <div className="ml-3">
                  <p className="text-xl text-left md:text-center font-medium text-white">
                    "Bankr is part of <span className="font-bold text-red-600">20,000+ DMs and Group chats</span> in the Base App and it's not even out of beta yet"
                  </p>
                  <p className="mt-2 text-left md:text-center text-md text-white">
                    <a href="https://x.com/bankrbot/status/1957564153780228405" target="_blank" className="text-red-500 hover:text-red-600">@bankrbot on X</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

      <h3 className="mt-8 text-3xl/tight md:text-4xl/tight font-semibold tracking-tighter text-balance text-white data-dark:text-white sm:text-4xl text-center">
      Here. There. Everywhere.<br />Unlock a whole new world for group chats.
      </h3>
      <p className="m-auto max-w-full md:max-w-lg text-center text-white">Go viral with your mini apps in chat. Join the thousands of supercharged conversations happening right now across the vibrant ecosystems integrated with the XMTP network.</p>

       <div className="mx-auto mt-4 lg:mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-x-4">
        <a href="https://www.base.org/ecosystem" target="_blank" className="my-4 md:my-0 mb-0 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-[#0052FF] hover:bg-black transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 hover:no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1280" className="w-5 h-5 me-2">
           <path fill="white" d="M0,101.12c0-34.64,0-51.95,6.53-65.28,6.25-12.76,16.56-23.07,29.32-29.32C49.17,0,66.48,0,101.12,0h1077.76C1213.51,0,1230.84,0,1244.16,6.53c12.75,6.25,23.06,16.56,29.32,29.32,6.52,13.32,6.52,30.64,6.52,65.28v1077.76c0,34.63,0,51.96-6.52,65.28-6.26,12.75-16.57,23.06-29.32,29.32-13.32,6.52-30.65,6.52-65.28,6.52H101.12c-34.64,0-51.95,0-65.28-6.52-12.76-6.26-23.07-16.57-29.32-29.32-6.53-13.32-6.53-30.65-6.53-65.28V101.12Z"/>
         </svg>
          Explore the Base ecosystem <span aria-hidden="true">→</span>
        </a>
        <a href="https://farcaster.xyz/miniapps" target="_blank" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-[#8364C9] hover:bg-black transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 mt-0 lg:mt-0 hover:no-underline">
        <svg className="w-6 h-6 me-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M18.24 0.24H5.76C2.5789 0.24 0 2.8188 0 6v12c0 3.1811 2.5789 5.76 5.76 5.76h12.48c3.1812 0 5.76 -2.5789 5.76 -5.76V6C24 2.8188 21.4212 0.24 18.24 0.24m0.8155 17.1662v0.504c0.2868 -0.0256 0.5458 0.1905 0.5439 0.479v0.5688h-5.1437v-0.5688c-0.0019 -0.2885 0.2576 -0.5047 0.5443 -0.479v-0.504c0 -0.22 0.1525 -0.402 0.358 -0.458l-0.0095 -4.3645c-0.1589 -1.7366 -1.6402 -3.0979 -3.4435 -3.0979 -1.8038 0 -3.2846 1.3613 -3.4435 3.0979l-0.0096 4.3578c0.2276 0.0424 0.5318 0.2083 0.5395 0.4648v0.504c0.2863 -0.0256 0.5457 0.1905 0.5438 0.479v0.5688H4.3915v-0.5688c-0.0019 -0.2885 0.2575 -0.5047 0.5438 -0.479v-0.504c0 -0.2529 0.2011 -0.4548 0.4536 -0.4724v-7.895h-0.4905L4.2898 7.008l2.6405 -0.0005V5.0419h9.9495v1.9656h2.8219l-0.6091 2.0314h-0.4901v7.8949c0.2519 0.0177 0.453 0.2195 0.453 0.4724" stroke-width="1"></path>
        </svg>

          Explore the Farcaster ecosystem <span aria-hidden="true">→</span>
        </a>
      </div>
      
      </div>
    </div>

    <div className="py-8 md:py-16 pt-4 md:pt-0 md:pb-16 rounded-2xl mb-0 relative overflow-hidden text-center">
      <div className="bg-white absolute inset-0"></div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative z-10">
        <div className="mt-8">
        <h2 className="mb-8 text-center font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400 fadeup">Why builders love XMTP</h2>
          <h4 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center mb-2 fadeup">
          ⚡ Apps in motion</h4>
          <p className="text-black fadeup">Mini apps don't just sit in feeds—they live inside conversations, where people are.</p>
        </div>

        <div className="mt-10 fadeup">
          <h4 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center mb-2">
          🔒 Private by default</h4>
          <p className="text-black">Every message is end-to-end encrypted. Your users own their conversations.</p>
        </div>


        <div className="mt-10 fadeup">
          <h4 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center mb-2">
          🤝 Plug into people, not platforms</h4>
          <p className="text-black">Groups are the distribution channel. Chats are the retention engine.</p>
        </div>

        <div className="mt-10 fadeup">
          <h4 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center mb-2">
          🧩 Composable by design</h4>
          <p className="text-black">Use the XMTP SDK like Legos. Works across any mini app framework.</p>
        </div>

        <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" target="_blank" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline fadeup">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          Start building <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <div className="px-8 py-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 mt-2 mb-0 bg-cover bg-center fadeup" style={{ backgroundImage: 'url(/img/spaceBG.jpg)' }}>
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 items-center gap-x-4 gap-y-8 md:gap-y-16 lg:grid-cols-12 pt-0">
          <div className="mx-auto w-full max-w-lg lg:mx-0 lg:col-span-5">
            <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase data-dark:text-gray-200">Up and running in no time</h2>
            <h2 className="text-3xl/tight md:text-4xl/tight font-semibold tracking-tighter text-balance text-white sm:text-4xl">
              A modern SDK to make your mini app come alive
            </h2>
            <p className="mt-6 text-lg/8 text-gray-200">
            Make your mini app TALK
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-1 mb-4 mt-6">
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 mt-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-200 font-semibold text-base/6">One environment variable</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 mt-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-200 font-semibold text-base/6">Full TypeScript support</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 mt-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-200 font-semibold text-base/6">Rich-content messaging</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 mt-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-200 font-semibold text-base/6">Middleware support</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-x-4">     
                <a href="https://github.com/xmtp/xmtp-js/tree/main/sdks/agent-sdk" target="_blank" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6 me-2 fill-white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
                  Explore the SDK <span aria-hidden="true">→</span>
                </a>
             </div>
          </div>
          
           <div className="mx-auto min-w-full max-w-full lg:col-span-7">
             <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <div className="w-full overflow-hidden rounded-xl bg-gray-900 ring-1 ring-white/10">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                      agent.js
                    </div>
                    <div className="border-r border-gray-600/10 px-4 py-2">package.json</div>
                  </div>
                  <div className="ml-auto flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
                 <div className="px-6 pt-6 pb-4 font-mono text-sm">
                   <pre className="text-sm leading-relaxed text-white" style={{
                     background: 'transparent',
                     color: '#ffffff'
                   }}>
{`import { createUser, createSigner, Agent, getTestUrl } from "@xmtp/agent-sdk";

// 1. Create a local user + signer
const user = createUser();
const signer = createSigner(user);

// 2. Spin up the agent
const agent = await Agent.create(signer, {
  env: "dev", // or 'production'
  dbPath: null, // in-memory store
});

// 3. Respond to text messages
agent.on("text", async (ctx) => {
  await ctx.conversation.send("Hello from my XMTP Agent! 👋");
});

// 4. Log when we're ready
agent.on("start", () => {
  console.log(\`We are online: \${getTestUrl(agent)}\`);
});

await agent.start();`}
                   </pre>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white pb-0 pt-16 md:pt-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 items-center gap-x-24 gap-y-8 md:gap-y-16 lg:grid-cols-2 pt-0 fadeup">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl/tight md:text-4xl/tight font-semibold tracking-tighter text-balance text-gray-900">
              Join the community bringing mini apps into chat
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              The next wave of apps won't launch in stores—they'll start in chat. Join the builders making it happen.
            </p>

            <div className="mt-4 flex flex-col md:flex-row items-center gap-4 md:gap-x-4">
              <a href="mailto:eric@ephemerahq.com" target="_blank" className="w-full md:w-auto my-0 md:my-4 md:mb-0 inline-flex shrink-0 items-center justify-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 hover:no-underline">
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


    <div className="bg-[#141414] bg-[url(/img/footerBG.jpg)] bg-cover bg-no-repeat bg-bottom rounded-2xl fadeup">
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


export default Agents;