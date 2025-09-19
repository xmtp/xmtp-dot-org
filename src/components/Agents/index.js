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
  const wordsToType = ["Transacts", "Coordinates", "Launches", "Plays", "Predicts"];
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
              Chat is the innovation layer that
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
              Create new chat experiences with built-in payments, secure and private communication, and seamless access to the entire XMTP messaging ecosystem.
            </h2>
          </div>
          <div className="max-w-lg">
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
        <h2 className="mt-0 text-center text-3xl md:text-5xl font-semibold tracking-tighter text-balance text-gray-900">Build apps that talk, transact, and scale</h2>
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
          </div>
        </div>
      </div>
    </div>

    <div className="px-8 py-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 mt-2 mb-8 bg-cover bg-center" style={{ backgroundImage: 'url(/img/spaceBG.jpg)' }}>
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 items-center gap-x-4 gap-y-8 md:gap-y-16 lg:grid-cols-12 pt-0">
          <div className="mx-auto w-full max-w-lg lg:mx-0 lg:col-span-5">
            <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-400 uppercase data-dark:text-gray-200">Up and Running in no time</h2>
            <h2 className="text-3xl/tight md:text-4xl/tight font-semibold tracking-tighter text-balance text-white sm:text-4xl">
              A Universal Chat SDK to Make Your App Come Alive
            </h2>
            <p className="mt-6 text-lg/8 text-gray-200">
            Enhance any product experiene  with automatic actions, powerful  LLMs, automations, and real-time notifications.
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
                <a href="https://github.com/xmtp/xmtp-js/tree/main/sdks/agent-sdk" className="my-4 md:mb-0 inline-flex shrink-0 items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse hover:no-underline">
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6 me-2 fill-white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
                  Explore the Chat SDK <span aria-hidden="true">→</span>
                </a>
             </div>
          </div>
          
           <div className="mx-auto min-w-full max-w-full lg:col-span-7">
             <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <div className="w-full overflow-hidden rounded-xl bg-gray-900 ring-1 ring-white/10">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                      chat.js
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
            <div className="col-start-1 col-end-7 text-center">
              <div>
                <h2 className="mt-0 text-3xl/tight md:text-4xl/tight font-semibold tracking-tighter text-balance text-gray-900 sm:text-5xl">
                  Native Chat apps are Exploding across the Ecosystem
                </h2>
                <p className="mt-6 text-lg max-w-full md:max-w-3xl mx-auto">
                  XMTP powers a rapidly growing ecosystem of chat-native apps—where everything is handled by the mini app and agent from trading, prediction markets, event coordination, payments, and games.
                </p>
                <p className="mt-4 text-lg max-w-full md:max-w-3xl mx-auto font-semibold">
                  The future isn't in app stores. It's in your DMs and Groups.
                </p>
              </div>
            </div>
          </div>

          {/* Ecosystem Showcase */}
          <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-8">Thriving Ecosystem of Chat-Native Apps</h3>
            </div>

            {/* Grid of App Logos */}
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-300">

              {/* Row 1 */}
              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-200">
                  <img src="img/bankr-logo.jpg" alt="Bankr" className="w-10 h-10 rounded-lg object-cover" />
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Bankr</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-200">
                  <img src="https://world-id-assets.com/app_a4f7f3e62c1de0b9490a5260cb390b56/558f3670-73ce-40e7-b7b7-681eea3e763f.png" alt="UNO" className="w-10 h-10 rounded-lg object-cover" />
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">UNO</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-200">
                  <img src="https://world-id-assets.com/app_f1e44837a5e3c2af4da8925b46027645/9d3a2e84-47e8-46a4-b6de-4d5faaa5ad25.jpg" alt="ORO" className="w-10 h-10 rounded-lg object-cover" />
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">ORO</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-200">
                  <img src="https://world-id-assets.com/app_3876b5f39809a50bb5ebe97c997bbcf1/fd6bc912-0015-4e0c-81e4-15fe700edb8e.png" alt="ORB" className="w-10 h-10 rounded-lg object-cover" />
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">ORB</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-200">
                  <img src="https://world-id-assets.com/app_e7d27c5ce2234e00558776f227f791ef/04eb7079-e3b1-43a9-8578-ac65c1490adf.png" alt="Add Money" className="w-10 h-10 rounded-lg object-cover" />
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Add Money</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">SQ</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Squabble</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">MM</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Mamo</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">FL</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Flaunch</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">BR</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Bracky</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">PD</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Ponder</p>
              </div>

              {/* Row 2 - Farcaster Apps */}
              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">BK</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Bookie</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">MP</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Megapot</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">FR</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Framedl</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-200">
                  <img src="https://world-id-assets.com/app_6acbab8bc5c5fe527f5ff6201934d043/31ac7d01-4bf4-4440-baf7-3a1e08506514.jpg" alt="Morpho" className="w-10 h-10 rounded-lg object-cover" />
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Morpho</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-slate-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">FV</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Farville</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-lime-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">CD</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Cody</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">CL</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Clanker</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-fuchsia-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">RX</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Remix</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-neutral-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">ON</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Onit</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-stone-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">EL</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Elsa</p>
              </div>

              {/* Row 3 */}
              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-200">
                  <img src="https://world-id-assets.com/app_459cd0d0d3125864ea42bd4c19d1986c/ba2211ee-cf6b-4f2e-9bb5-12fc67fdd987.png" alt="DropWallet" className="w-10 h-10 rounded-lg object-cover" />
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">DropWallet</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-200">
                  <img src="https://world-id-assets.com/app_ee968e983074cb090e6f12cd75b63bb3/2b7656b0-6154-4a7d-b06d-e5f8695c7fb1.png" alt="Eggs Vault" className="w-10 h-10 rounded-lg object-cover" />
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Eggs Vault</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-200">
                  <img src="https://world-id-assets.com/app_ab0484e59df747428e8207a21deeab98/2d8e1faf-0a31-46c5-8459-ea0c05a89a7f.png" alt="DIAMANTE" className="w-10 h-10 rounded-lg object-cover" />
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">DIAMANTE</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">ST</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Stake</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">RP</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Raffle</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">ID</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Identity</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">SC</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Social</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">DX</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">DeFi</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">CR</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Creator</p>
              </div>

              <div className="group hover:scale-110 transition-transform duration-200">
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">MT</span>
                </div>
                <p className="text-xs text-center mt-1 text-gray-600 font-medium">Mint</p>
              </div>

            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Thousands of apps and counting — from DeFi trading to games, prediction markets to social tools.
                <br />
                <span className="font-semibold">Every app speaks the same language: chat.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="py-12 md:py-16 pt-8 md:pt-6 rounded-2xl mt-0 mb-8 relative overflow-hidden text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 mt-16 mb-0 bg-cover bg-no-repeat bg-center bg-[#fcfcfc]" style={{ backgroundImage: 'url(/img/viralBG.jpg)' }}>
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
      Here. There. Everywhere.<br />Go viral with your apps in chat.
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

    <div className="py-8 md:py-16 pt-4 md:pt-0 md:pb-20 rounded-2xl mb-8 relative overflow-hidden text-center">
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
        <p className="m-auto md:max-w-xl text-center">Building apps for native chat experiences shouldn't be rocket science. We've done the heavy lifting so you can focus on the fun stuff.</p>
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
          <div className="space-y-4 text-left">
            {/* Group chat header */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 font-medium">Group: Dev Team Planning 💡</p>
            </div>

            {/* Alice message */}
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
                <p className="text-xs text-gray-600 font-medium">Alice</p>
                <p className="text-base">Who wants to split dinner tonight?</p>
              </div>
            </div>

            {/* Bob message */}
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                <p className="text-xs text-blue-100 font-medium">Bob</p>
                <p className="text-base">I'm in! @split $80 pizza 🍕</p>
              </div>
            </div>

            {/* Mini app response */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl max-w-sm border-2 border-green-400">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2">
                    <span className="text-green-500 font-bold text-xs">$</span>
                  </div>
                  <p className="text-xs font-bold">Split Pay Mini App</p>
                </div>
                <p className="text-sm">Split $80 pizza between 3 people</p>
                <p className="text-sm font-bold">$26.67 each</p>
                <div className="mt-2 space-y-1">
                  <p className="text-xs">✅ Alice: Paid</p>
                  <p className="text-xs">✅ Bob: Paid</p>
                  <p className="text-xs">⏳ Charlie: Pending</p>
                </div>
              </div>
            </div>

            {/* Charlie message */}
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
                <p className="text-xs text-gray-600 font-medium">Charlie</p>
                <p className="text-base">Just paid! Thanks for organizing 🙌</p>
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
