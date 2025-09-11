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
            <h1 className="mr-0 md:mr-10 float-left text-5xl md:text-6xl font-normal tracking-tighter text-balance text-gray-900">
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
            <h2 className="mt-4 md:mt-8 text-3xl/tight md:text-4xl/tight font-semibold tracking-tighter text-balance text-gray-900">
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
    
    <div className="mx-auto max-w-full px-6 mt-24 md:max-w-7xl lg:px-8">
      <div className="mx-auto max-w-full md:max-w-2xl px-6">
        <h2 className="mt-0 text-center text-3xl md:text-5xl font-semibold tracking-tighter text-balance text-gray-900">Secure agents and mini apps in your group chats that can transact</h2>
      </div>
    </div>
    
    <div className="md:overflow-hidden md:flex md:justify-center bg-[#FBFBFB] relative">
      <div className="absolute top-0 inset-0 h-10 bg-gradient-to-t from-[#FBFBFB] to-white"></div>
        <div className="md:hidden overflow-x-auto overflow-y-hidden" id="mobile-scroll-container">
          <video className="mt-24 relative top-0 max-w-[200%]" autoPlay muted playsInline loop src="/img/Comp2.mp4" type="video/mp4">Your browser does not support the video tag.</video>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <video className="hidden md:block mt-24 md:mt-16 relative top-0 max-w-full" autoPlay muted playsInline loop src="/img/Comp2.mp4" type="video/mp4">Your browser does not support the video tag.</video>
        </div>
       <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-[#FBFBFB]"></div>
    </div>

    <div className="mx-auto max-w-3xl py-0 md:py-32 lg:py-0">
      <div className="text-left lg:ml-24">
        <div className="max-w-lg">
          
          <div className="mt-0">
            <h2 className="text-2xl font-bold tracking-tighter text-balance text-gray-900 sm:text-4xl">
              <strong>Agents Give Mini Apps a Voice</strong>
            </h2>
            <p className="mt-4 text-lg font-normal text-pretty text-gray-500 sm:text-xl/7">
              Give your mini app a voice, memory, and a presence in every conversation.
            </p>
            
            <div className="mt-10 space-y-6 max-w-full">
              <div className="flex justify-start">
                <div className="flex flex-col">
                  <div className="bg-[#E5E5EA] text-black px-4 py-2 rounded-3xl rounded-bl-sm max-w-sm shadow-sm relative" style={{ 
                    background: 'linear-gradient(135deg, #E5E5EA 0%, #D1D1D6 100%)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    borderRadius: '18px 18px 18px 4px'
                  }}>
                    <p className="text-base md:text-lg font-normal !mb-0 pb-0">Natural language interface</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex flex-col">
                  <div className="bg-[#007AFF] text-white px-4 py-2 rounded-3xl rounded-br-sm max-w-sm shadow-sm relative" style={{ 
                    background: 'linear-gradient(135deg, #007AFF 0%, #0056CC 100%)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    borderRadius: '18px 18px 4px 18px'
                  }}>
                    <p className="text-base md:text-lg font-normal !mb-0 pb-0">Real-time group coordination</p>
                  </div>
                  <div className="mt-0 mr-2 text-right">
                    <span className="text-xs text-gray-500 font-semibold">Delivered</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="flex flex-col">
                  <div className="bg-[#E5E5EA] text-black px-4 py-2 rounded-3xl rounded-bl-sm max-w-sm shadow-sm relative" style={{ 
                    background: 'linear-gradient(135deg, #E5E5EA 0%, #D1D1D6 100%)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    borderRadius: '18px 18px 18px 4px'
                  }}>
                    <p className="text-base md:text-lg font-normal !mb-0 pb-0">More distribution and sharing</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex flex-col">
                  <div className="bg-[#007AFF] text-white px-4 py-2 rounded-3xl rounded-br-sm max-w-sm shadow-sm relative" style={{ 
                    background: 'linear-gradient(135deg, #007AFF 0%, #0056CC 100%)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    borderRadius: '18px 18px 4px 18px'
                  }}>
                    <p className="text-base md:text-lg font-normal !mb-0 pb-0">Persistent memory and context</p>
                  </div>
                  <div className="mt-0 mr-2 text-right">
                    <span className="text-xs text-gray-500 font-semibold">Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="px-8 py-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 mt-16 mb-24 bg-cover bg-center" style={{ backgroundImage: 'url(/img/spaceBG.jpg)' }}>
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 items-center gap-x-4 gap-y-8 md:gap-y-16 lg:grid-cols-12 pt-0">
          <div className="mx-auto w-full max-w-lg lg:mx-0 lg:col-span-5">
            <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase data-dark:text-gray-200">Up and Running in no time</h2>
            <h2 className="text-3xl/tight md:text-4xl/tight font-semibold tracking-tighter text-balance text-white sm:text-4xl">
              Zero-config Agent Development
            </h2>
            <p className="mt-6 text-lg/8 text-gray-200">
            Our Agent SDK handles all the complexity so you can focus on building amazing experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 mt-6">
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
                <span className="text-gray-200 font-semibold text-base/6">Full TypeScript Support</span>
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
                <a href="https://docs.xmtp.org/agents/get-started/build-an-agenthttps://github.com/xmtp/xmtp-js/tree/main/sdks/agent-sdk#quick-start" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6 me-2 fill-white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
                  Explore the Agents SDK <span aria-hidden="true">→</span>
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

    <div className="overflow-hidden pt-0 pb-0">
      <div className="px-0 md:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="py-4 pb-2 md:grid md:grid-cols-6 md:gap-4">
          <div className="col-start-1 col-end-7 text-left">
            <div>
              <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Featured Agents and Mini Apps</h2>
              <h2 className="mt-0 text-3xl/tight md:text-4xl/tight font-semibold tracking-tighter text-balance text-gray-900 sm:text-5xl">
                Agents  🤝  Mini Apps
              </h2>
              <p className="text-lg max-w-4xl">
                AI agents and mini apps that can listen, respond, and transact natively in conversations are transforming customer experience, financial coordination, and real-time collaboration across apps.
              </p>
            </div>
          </div>
        </div>
          
        <div className="mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none">
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-4">Trading & Finance</h3>
          </div>
          
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4 mb-16">
            
              <div className="flex flex-col relative">
                <div className="absolute top-2 left-2 z-10">
                  <span className="uppercase tracking-widest inline-flex items-center rounded-full bg-blue-50 px-2 py-1 font-mono text-xs font-semibold tracking-widest text-blue-700 inset-ring inset-ring-blue-700/10">
                    Agent
                  </span>
                </div>
                <video className="mb-2 rounded-2xl border-solid border-2 border-gray-200" autoPlay muted playsInline loop src="img/featuredBNKR.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              
              <h2 className="mt-4 mb-2 font-mono text-xs font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Bankr</h2>
              
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Your onchain finance agent
              </dt>
              
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Buy/sell tokens, manage, and analyze your crypto portfolio all through natural conversation in any chat.</p>
                <div className="mt-2 flex gap-6">
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
                <span className="uppercase tracking-widest inline-flex items-center rounded-full bg-orange-50 px-2 py-1 font-mono text-xs font-semibold tracking-widest text-orange-700 inset-ring inset-ring-blue-700/10">
                  Agent & Mini App
                </span>
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
              <span className="uppercase tracking-widest inline-flex items-center rounded-full bg-blue-50 px-2 py-1 font-mono text-xs font-semibold tracking-widest text-blue-700 inset-ring inset-ring-blue-700/10">
                Agent
              </span>
              </div>
              <video className="rounded-2xl border-solid border-2 border-gray-200" autoPlay muted playsInline loop src="img/elsaWeb.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Elsa</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Turn words into onchain actions
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Trade smarter, and maximize returns, all with unparalleled ease and safety.</p>
                <div className="mt-2 flex gap-2">
                  <a href="https://x.com/flaunchgg" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </dd>
            </div>

            <div className="flex flex-col relative">
              <div className="absolute top-2 left-2 z-10">
                <span className="uppercase tracking-widest inline-flex items-center rounded-full bg-orange-50 px-2 py-1 font-mono text-xs font-semibold tracking-widest text-orange-700 inset-ring inset-ring-blue-700/10">
                  Agent & Mini App
                </span>
              </div>
              <div className="rounded-2xl border-solid border-2 border-gray-200 bg-gray-100 flex items-center justify-center h-48">
                <img loading="lazy" className="min-w-full rounded-2xl border-solid border-2 border-gray-200" src="img/mamoWeb.png" alt="Mamo" />
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-4">Prediction Markets, Games, and Social</h3>
          </div>
          
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4 mb-16">

            <div className="flex flex-col relative">
              <div className="absolute top-2 left-2 z-10">
                <span className="uppercase tracking-widest inline-flex items-center rounded-full bg-orange-50 px-2 py-1 font-mono text-xs font-semibold tracking-widest text-orange-700 inset-ring inset-ring-blue-700/10">
                  Agent & Mini App
                </span>
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
                <span className="uppercase tracking-widest inline-flex items-center rounded-full bg-orange-50 px-2 py-1 font-mono text-xs font-semibold tracking-widest text-orange-700 inset-ring inset-ring-blue-700/10">
                  Agent & Mini App
                </span>
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
                <span className="uppercase tracking-widest inline-flex items-center rounded-full bg-orange-50 px-2 py-1 font-mono text-xs font-semibold tracking-widest text-orange-700 inset-ring inset-ring-blue-700/10">
                  Agent & Mini App
                </span>
              </div>
              <video className="rounded-2xl border-solid border-2 border-gray-200" autoPlay muted playsInline loop src="img/ponderWeb.mp4" type="video/mp4">Your browser does not support the video tag.</video>
              <h2 className="mt-4 mb-2 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Ponder</h2>
              <dt className="mt-0 flex items-center text-base/7 font-semibold text-gray-900">
                <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                Predict what the crowd thinks
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">Ponder lets you make money by answering simple daily polls on group opinions.</p>
                <div className="mt-2 flex gap-2">
                  <a href="#" target="_blank" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </dd>
            </div>

            <div className="flex flex-col relative max-w-md">
              <div className="absolute top-2 left-2 z-10">
                <span className="uppercase tracking-widest inline-flex items-center rounded-full bg-orange-50 px-2 py-1 font-mono text-xs font-semibold tracking-widest text-orange-700 inset-ring inset-ring-blue-700/10">
                  Agent & Mini App
                </span>
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
          
        </div>

        </div>
      </div>
    
    </div>

    <div className="py-12 md:py-16 pt-8 rounded-2xl mt-0 mb-8 relative overflow-hidden text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 mt-16 mb-0 bg-cover bg-no-repeat bg-center bg-[#fcfcfc]" style={{ backgroundImage: 'url(/img/viralBG.jpg)' }}>
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
      Go viral with your agents and mini apps
      </h3>
      <p className="m-auto max-w-full md:max-w-lg text-center text-white">Join thousands of conversations happening right now across the XMTP network.</p>
      <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
        Start building <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>

    <div className="bg-white pb-0 pt-16 md:pt-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 items-center gap-x-24 gap-y-8 md:gap-y-16 lg:grid-cols-2 pt-0">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl/tight md:text-4xl/tight font-semibold tracking-tighter text-balance text-gray-900">
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

    <div className="py-8 md:py-16 pt-4 md:pb-20 rounded-2xl mb-8 relative overflow-hidden text-center">
      <div className="bg-white absolute inset-0" style={{ background: 'linear-gradient(200deg,#163869 15%,#571861 35%,#a79bb0 55%,#163869 85%)', opacity: 0.16 }}></div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative z-10">
        <div className="mt-16">
        <h2 className="mb-8 text-center font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Why Builders Love Building on XMTP</h2>
          <h4 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center mb-2">
          💸 Money = 💬 Messages</h4>
          <p className="text-black">Send money like sending a DM. No APIs to wrestle with.</p>
        </div>

        <div className="mt-10">
          <h4 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center mb-2">
          🚫 Zero Gatekeepers</h4>
          <p className="text-black">No app store approvals. No middlemen taking cuts.</p>
        </div>

        <div className="mt-10">
          <h4 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center mb-2">
          🔥 Write Once, Run Everywhere</h4>
          <p className="text-black">Your code works in every app that supports XMTP.</p>
        </div>

        <h3 className="mt-12 font-semibold leading-normal tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-4xl text-center">
        We know chat.
        </h3>
        <p className="m-auto md:max-w-xl text-center">Building agents and mini apps shouldn't be rocket science. We've done the heavy lifting so you can focus on the fun stuff.</p>
        <a href="https://docs.xmtp.org/agents/get-started/build-an-agent" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          Start building <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <div className="bg-[#141414] bg-[url(/img/footerBG.jpg)] bg-contain bg-no-repeat bg-bottom rounded-2xl">
      <div className="px-6 py-6 pb-16 md:pb-24 md:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="space-y-8 text-left">
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white px-4 py-2 pb-0 rounded-2xl rounded-br-md max-w-xs">
                <p className="text-base md:text-md">Hey @Agent, I'm ready to build with XMTP.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-900 px-4 py-2 pb-4 rounded-2xl rounded-bl-md max-w-sm">
              <p className="text-base md:text-md">Amazing.</p>
                <p className="text-base md:text-md">Join thousands of developers building next-generation transactional agents with XMTP — the secure messaging layer for AI, money, and coordination.</p>
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
