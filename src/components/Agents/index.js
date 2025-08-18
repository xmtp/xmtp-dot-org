import React, { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl/";
import Head from "@docusaurus/Head";

const Agents = () => {
  const wordsToType = ["Coordinate", "Transact", "Scale"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = wordsToType[currentWordIndex];
    const isWordFullyTyped = typedWord === fullWord;
    const isWordFullyDeleted = typedWord.length === 0;

    let delayMs = isDeleting ? 45 : 90;

    if (!isDeleting && isWordFullyTyped) {
      delayMs = 1100; // pause at full word
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
  return (
  <div>
    <Head>
      <title>Give your agents a voice by building on XMTP</title>
      <meta property="og:title" content="Notifi uses XMTP to deliver real-time alerts on Coinbase Wallet" />
      <meta property="og:description" content="Notifi’s integration with XMTP enables DeFi projects like GMX to deliver real-time notifications and critical alerts for traders directly in Coinbase Wallet." />
    </Head>
    
    <div className="relative isolate px-6 pt-14 lg:px-8">
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
      <div className="mx-auto max-w-3xl py-32 sm:py-16 lg:py-0">
        <div className="hidden sm:mb-4 sm:flex">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            XMTP is now fully quantum-resistant {' '}
            <a href="#" className="font-semibold text-red-500">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-left">
          <h1 className="text-3xl font-normal tracking-tighter text-balance text-gray-900 sm:text-6xl">
            Build A.I.<br />agents that
          </h1>
          <h2 className="mt-0 text-[140px] leading-none font-normal text-balance text-gray-900 font-dotgothic tracking-tight" aria-live="polite">
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

      <div className="overflow-hidden">
        <img className="mt-8 relative top-0 min-w-full rounded-lg" src="img/fpoHero.png"></img>
      </div>

      <div className="mx-auto max-w-3xl py-32 sm:py-16 lg:py-0">

        <div className="text-left">
          <div className="max-w-lg">
            <h2 className="mt-8 text-2xl font-semibold tracking-tighter text-balance text-gray-900 sm:text-3xl">
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
            <a href="https://docs.xmtp.org/" class="my-6 md:mb-0 w-full md:w-auto cursor-pointer flex items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base text-center inline-flex items-center me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse justify-center hover:no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
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
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>

    <div className="overflow-hidden">
      <img className="mt-32 relative -left-24 -right-24 top-0 min-w-[110%]" src="img/temp-hero.png"></img>
    </div>

    <div className="mx-auto max-w-xl py-32 sm:py-16 lg:py-0">

      <div className="text-left">
        <h2 className="mt-24 text-3xl font-semibold tracking-tighter text-balance text-gray-900 sm:text-5xl">
          Commerce 🤝 Messaging
        </h2>
        <div className="max-w-lg">
          <p className="text-lg">
            AI agents that can listen, respond, and transact natively in the conversation are the future of customer experience, financial coordination, and agent-to-agent collaboration.
          </p>
          <a href="https://docs.xmtp.org/" class="my-4 md:mb-0 w-full md:w-auto cursor-pointer flex items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base text-center inline-flex items-center me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse justify-center hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Start building <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="overflow-hidden">
        <img className="mt-16 relative min-w-full rounded-lg" src="img/fpoBankr.png"></img>
      </div>

      <div className="text-left">
        <div className="mt-4 max-w-xs">
          <p className="text-xs font-mono">
            AI agents that can listen, respond, and transact natively in the conversation are the future of customer experience, financial coordination, and agent-to-agent collaboration.
          </p>
        </div>
      </div>

    </div>

    <div className="mt-16 mx-auto max-w-xl py-32 sm:py-16 lg:py-0">
      <p className="text-lg font-semibold">XMTP makes this seamless:</p>
  
      <div class="py-4 pb-2 grid grid-cols-6 gap-4 border-solid border-t-1 border-r-0 border-l-0 border-gray-200">
        <div class="col-start-1 col-end-4">
          <p className="font-bold text-normal/6">Payments are programmable messages.</p>
        </div>
        <div class="col-span-3 col-end-7">
          <p className="text-normal/6">Send, receive, and settle assets as easily as sending a text — all within a secure chat.</p>
        </div>
      </div>
      <div class="py-4 pb-2 grid grid-cols-6 gap-4 border-solid border-t-1 border-r-0 border-l-0 border-gray-200">
        <div class="col-start-1 col-end-4">
          <p className="font-bold text-normal/6">No middlemen.</p>
        </div>
        <div class="col-span-3 col-end-7">
          <p className="text-normal/6">No need to rely on third-party processors or embed external widgets. Transactions happen directly between wallets and apps.</p>
        </div>
      </div>
      <div class="py-4 pb-2 grid grid-cols-6 gap-4 border-solid border-t-1 border-r-0 border-l-0 border-gray-200">
        <div class="col-start-1 col-end-4">
          <p className="font-bold text-normal/6">One agent, every app.</p>
        </div>
        <div class="col-span-3 col-end-7">
          <p className="text-normal/6">Write your agent once and deploy across all XMTP-connected apps, from wallets and web apps to bots and browser extensions.</p>
        </div>
      </div>
      <div class="py-4 pb-2 grid grid-cols-6 gap-4 border-solid border-t-1 border-r-0 border-l-0 border-gray-200">
        <div class="col-start-1 col-end-4">
          <p className="font-bold text-normal/6">Built for developer freedom.</p>
        </div>
        <div class="col-span-3 col-end-7">
          <p className="text-normal/6">Integrate with any EVM chain, wallet, identity system or mini-app ecosystem.</p>
        </div>
      </div>

    </div>

    <div class="overflow-hidden py-32">
      <div class="px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-7xl">
          <div class="max-w-2xl">
            <div>
              <h2 class="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">Featured Agents</h2>
              <h3 class="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-5xl">See XMTP Agents in the Wild</h3>
              <p>Agents are already live across the XMTP network & on the Base App, serving users, coordinating payments, and making onchain actions conversational.</p>
              <a href="https://docs.xmtp.org/" class="my-4 md:mb-0 w-full md:w-auto cursor-pointer flex items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base text-center inline-flex items-center me-2 px-5 py-2.5 md:py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 pulse-this pulse justify-center hover:no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                Start building <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          
          <div className="mx-auto mt-4 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
              
            <div className="flex flex-col border border-black">
                <video class="h-full w-full rounded-2xl" autoplay="" muted="" playsinline="" loop="" src="img/temp-elsa.mp4" type="video/mp4">Your browser does not support the video tag.</video>
                <dt className="mt-4 flex items-center text-base/7 font-semibold text-gray-900">
                  <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                  Your very own crypto quant
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">Buy/sell tokens, manage, and analyze your crypto portfolio all in a chat</p>
                  <p className="mt-2">
                    <a href="#" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col border border-black">
                <video class="h-full w-full rounded-2xl" autoplay="" muted="" playsinline="" loop="" src="img/temp-elsa.mp4" type="video/mp4">Your browser does not support the video tag.</video>
                <dt className="mt-4 flex items-center text-base/7 font-semibold text-gray-900">
                  <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                  Your very own crypto quant
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">Buy/sell tokens, manage, and analyze your crypto portfolio all in a chat</p>
                  <p className="mt-2">
                    <a href="#" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col border border-black">
                <video class="h-full w-full rounded-2xl" autoplay="" muted="" playsinline="" loop="" src="img/temp-elsa.mp4" type="video/mp4">Your browser does not support the video tag.</video>
                <dt className="mt-4 flex items-center text-base/7 font-semibold text-gray-900">
                  <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                  Your very own crypto quant
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">Buy/sell tokens, manage, and analyze your crypto portfolio all in a chat</p>
                  <p className="mt-2">
                    <a href="#" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col border border-black">
                <video class="h-full w-full rounded-2xl" autoplay="" muted="" playsinline="" loop="" src="img/temp-elsa.mp4" type="video/mp4">Your browser does not support the video tag.</video>
                <dt className="mt-4 flex items-center text-base/7 font-semibold text-gray-900">
                  <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                  Your very own crypto quant
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">Buy/sell tokens, manage, and analyze your crypto portfolio all in a chat</p>
                  <p className="mt-2">
                    <a href="#" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col border border-black">
                <video class="h-full w-full rounded-2xl" autoplay="" muted="" playsinline="" loop="" src="img/temp-elsa.mp4" type="video/mp4">Your browser does not support the video tag.</video>
                <dt className="mt-4 flex items-center text-base/7 font-semibold text-gray-900">
                  <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                  Your very own crypto quant
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">Buy/sell tokens, manage, and analyze your crypto portfolio all in a chat</p>
                  <p className="mt-2">
                    <a href="#" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col border border-black">
                <video class="h-full w-full rounded-2xl" autoplay="" muted="" playsinline="" loop="" src="img/temp-elsa.mp4" type="video/mp4">Your browser does not support the video tag.</video>
                <dt className="mt-4 flex items-center text-base/7 font-semibold text-gray-900">
                  <div aria-hidden="true" className="size-5 flex-none text-red-600" />
                  Your very own crypto quant
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">Buy/sell tokens, manage, and analyze your crypto portfolio all in a chat</p>
                  <p className="mt-2">
                    <a href="#" className="text-sm/6 font-semibold text-red-500 hover:text-red-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              
            </dl>
          </div>

        </div>
      </div>
    
    </div>

    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-red-500">Deploy faster</h2>
        <h3 class="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-5xl text-center">You Own the Agent,
        XMTP Handles the Infrastructure</h3>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Enterprise-grade encryption
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    alt=""
                    src="#"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Flexible identity foundation</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="#"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Built-in spam protection</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="#"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                Unruggable infrastructure
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </div>
              
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-900 bg-[url(/img/footerBG.jpg)] bg-cover">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Add messaging to your app in 10 minutes. Try it today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-200">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-red-600 shadow-xs hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {' '}
              Get started{' '}
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
  );
};


export default Agents;
