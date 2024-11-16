import React from "react";
import ListOfDevelopers from "./ListOfDevs.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { motion } from "framer-motion";

const BuiltWithXmtp = () => {
  return (
    <div>

      <div className="homepageHero -mt-2">

        <div class="relative isolate overflow-hidden bg-gray-900 rounded-3xl">
          <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
          </svg>

          <div class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
            <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#FC4F37] opacity-20" style={{"clipPath":"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"}}></div>
          </div>

          <div class="mx-auto max-w-7xl px-16 pb-24 pt-0 sm:pb-32 lg:flex lg:px-16 lg:pt-16 lg:pb-40">
            <div class="mx-auto max-w-5xl shrink-0 lg:mx-0 lg:pt-8">
              <div class="mt-24 sm:mt-32 lg:mt-0">
                <a href="#" class="inline-flex space-x-6">
                  <span class="rounded-full bg-gray-500/10 px-3 py-1 text-sm/6 font-semibold text-red-400 ring-1 ring-inset ring-red-500/20">What's new</span>
                  <span class="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300">
                    <span>XMTP v3: Now with group chat</span>
                    <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </a>
              </div>
              <h1 class="mt-10 text-pretty text-3xl font-semibold tracking-tight text-white md:text-6xl">XMTP is the largest & most secure decentralized messaging network</h1>
              <div class="mx-auto max-w-full shrink-0 lg:mx-0 lg:max-w-2xl">
                <p class="mt-8 text-pretty text-lg font-normal text-gray-300 sm:text-lg/8">Bringing <a href="#" class="text-red-400 font-medium decoration-dotted">Messaging Layer Security</a> to any app, any identity, and any messaging use case.</p>
                <p class="mt-8 text-pretty text-lg font-normal text-gray-300 sm:text-lg/8"><span class="text-white font-medium">Over 2 million web3 identities, 60+ apps, & 1,000’s of developers</span> use XMTP today for secure, private, and portable messaging.</p>
              </div>
              <div class="mt-10 flex items-center gap-x-4">

                <a class="cursor-pointer flex items-center gap-x-1 text-white hover:text-white shadow-sm bg-red-500 hover:bg-red-700 transition-all font-semibold rounded-md text-base text-center inline-flex items-center me-2 px-5 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Explore SDKs <span aria-hidden="true">→</span>
                </a>

                <a class="cursor-pointer flex items-center gap-x-1 text-white hover:text-black shadow-sm hover:bg-gray-100 transition-all font-semibold rounded-md text-base text-center inline-flex items-center me-2 px-5 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  Read Documentation <span aria-hidden="true">→</span>
                </a>
                
              </div>
            </div>
          </div>
        </div>

        <div class="relative px-6 lg:px-8 -mt-4">
          <div class="mx-auto max-w-full lg:max-w-7xl">
              <div class="grid grid-cols-2 gap-8 lg:grid-cols-2">
                <div class="-m-2 grid grid-cols-1 rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
                    <div class="grid grid-cols-1 rounded-3xl p-2 shadow-md shadow-black/5">
                      <div class="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
                        <video autoPlay loop muted class="-mb-2 aspect-square max-w-full rounded-2xl">
                          <source src="img/familyVideo.mp4" type="video/mp4"></source>
                        </video>
                      </div>
                    </div>
                </div>
                <div class="-m-2 grid grid-cols-1 rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
                  <div class="grid grid-cols-1 rounded-3xl p-2 shadow-md shadow-black/5">
                    <div class="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
                      <video autoPlay loop muted class="-mb-2 aspect-square max-w-full rounded-2xl">
                        <source src="img/circle-family-usdc.mp4" type="video/mp4"></source>
                      </video>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>

      <div class="py-24 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class="text-center text-lg/8 font-semibold text-gray-900">Trusted by companies around the world</h2>
          <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="img/cbwalletLogo.svg" alt="Coinbase Wallet" width="158" height="48"></img>
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="img/logo-ens.svg" alt="ENS" width="100" height="48"></img>
            <img class="col-span-2 max-h-10 w-full object-contain lg:col-span-1" src="img/avara-wordmark-logo-dark.svg" alt="Avara" width="90" height="48"></img>
            <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="img/logo-converse.svg" alt="Converse" width="158" height="48"></img>
            <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="img/logo-unstoppabledomains.svg" alt="Unstoppable Domains" width="158" height="48"></img>
          </div>
        </div>
      </div>

      <div class="pt-24 pb-32 mb-32 overflow-hidden bg-gray-900 rounded-3xl">
        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">A <span class="leading-tight bg-gradient-to-r from-[#FFB07F] to-[#FC4F37] inline-block text-transparent bg-clip-text [text-shadow:_0_2px_24px_rgba(255_176_127_/_0.7)]">reimagined</span> messaging protocol.</h2>
              <p class="mt-6 text-xl/8 text-gray-300">Our personal communications have never been more vulnerable. Centralized companies control access, censor and remove users, & prevent innovation for third-party developers. Existing decentralized messaging protocols provide censorship-resistance, but are not built to handle AI, withstand complex phishing or spoofing, or support cryptographic and biometric identities & money.</p>
              <p class="mt-6 text-xl/8 text-gray-300">Our messaging protocols need to evolve.</p>
              <p class="mt-6 text-xl/8 text-gray-300">XMTP combines the <strong>security standards of Signal</strong> with the <strong>financial infrastructure of crypto,</strong> on a <strong>decentralized network.</strong> This ensures users are protected and that developers can innovate on messaging without the fear of being cut off.</p>
              <div>
                <dl class="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                  <div class="flex flex-col gap-y-2 border-l border-gray-900/10 pl-0">
                    <dt class="text-lg/6 text-gray-300">web3 activated identities</dt>
                    <dd class="order-first text-4xl font-semibold tracking-tight text-white">2,000,000+</dd>
                  </div>
                  <div class="flex flex-col gap-y-2 border-l border-gray-900/10 pl-0">
                    <dt class="text-lg/6 text-gray-300">Apps built with XMTP</dt>
                    <dd class="order-first text-4xl font-semibold tracking-tight text-white">60+</dd>
                  </div>
                  <div class="flex flex-col gap-y-2 border-l border-gray-900/10 pl-0">
                    <dt class="text-lg/6 text-gray-300">Developers using XMTP</dt>
                    <dd class="order-first text-4xl font-semibold tracking-tight text-white">1,000+</dd>
                  </div>
                  <div class="flex flex-col gap-y-2 border-l border-gray-900/10 pl-0">
                    <dt class="text-sm/6 text-gray-600"></dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900"></dd>
                  </div>
                </dl>
              </div>
            </div>
            <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <div class="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto w-full">
                  <div class="rounded-3xl p-2 shadow-md shadow-black/5">
                    <div class="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
                      <img src="img/grid-2.png" alt="" class="-mb-2 aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"></img>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <div class="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto w-full">
                    <div class="rounded-3xl p-2 shadow-md shadow-black/5">
                      <div class="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
                        <video autoPlay loop muted class="-mb-2 aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover">
                          <source src="img/Comp 1_10.mp4" type="video/mp4"></source>
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <div class="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto w-full">
                    <div class="rounded-3xl p-2 shadow-md shadow-black/5">
                      <div class="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
                        <img src="img/grid-4.png" alt="" class="-mb-2 aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <div class="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto w-full">
                    <div class="rounded-3xl p-2 shadow-md shadow-black/5">
                      <div class="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
                        <video autoPlay loop muted class="-mb-2 aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover">
                          <source src="img/ambiance_1.mp4" type="video/mp4"></source>
                        </video>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="bg-white pb-24 pt-0">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:pr-8 lg:pt-4">
              <div class="lg:max-w-lg">
                <h2 class="text-base/7 font-semibold text-red-500">Security</h2>
                <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900">Real Security from Real Standards.</p>
                <p class="mt-6 text-lg/8 text-gray-600">XMTP leverages <a href="#" class="text-red-500 font-medium">Messaging Layer Security (MLS)</a>, a cryptographic protocol developed by the IETF, providing the strongest available open source security standard for decentralized messaging.</p>
                <p class="mt-6 text-lg/8 text-gray-600">Messages sent with XMTP are unspoofable, tamper proof, cannot be intercepted, provide perfect forward secrecy & post-compromise security, even in environments with multiple recipients or devices.</p>
                <p class="mt-12">
                
                  <a class="cursor-pointer flex items-center gap-x-1 text-white bg-gray-900 hover:text-white shadow-sm hover:bg-red-600 transition-all font-semibold rounded-md text-base text-center inline-flex items-center me-2 px-5 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    Read more about XMTP encryption <span class="ml-2" aria-hidden="true">→</span>
                  </a>
                  
                </p>
              </div>
            </div>
            <div class="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto w-full">
              <div class="rounded-3xl p-2 shadow-md shadow-black/5">
                <div class="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
                  <img src="https://placehold.co/800x800/fff/fff" alt="screenshot" class="min-w-full max-w-full min-h-full max-h-full rounded-2xl ring-1 ring-gray-400/10"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white pb-24 pt-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:ml-auto lg:pl-4 lg:pt-4">
              <div class="lg:max-w-lg">
                <h2 class="text-base/7 font-semibold text-red-500">Identity</h2>
                <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900">Universal Identity Support</p>
                <p class="mt-6 text-lg/8 text-gray-600">XMTP is identity-agnostic, meaning it natively supports with a wide variety of identity systems, from cryptographic wallets (like Ethereum) to modern authentication standards like biometric passkeys.</p>
                <p class="mt-6 text-lg/8 text-gray-600">This flexibility allows apps and users to authenticate and communicate using any identity they control, without being tied to a specific identity provider or platform.</p>
                <p class="mt-12">
                
                  <a class="cursor-pointer flex items-center gap-x-1 text-white bg-gray-900 hover:text-white shadow-sm hover:bg-red-600 transition-all font-semibold rounded-md text-base text-center inline-flex items-center me-2 px-5 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>


                    Read more about XMTP’s Identity Support <span class="ml-2" aria-hidden="true">→</span>
                  </a>
                  
                </p>
              </div>
            </div>
            <div class="flex items-start justify-end lg:order-first">
              <div class="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto w-full">
                <div class="rounded-3xl p-2 shadow-md shadow-black/5">
                  <div class="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
                  <img src="https://placehold.co/800x800/fff/fff" alt="screenshot" class="min-w-full max-w-full min-h-full max-h-full rounded-2xl ring-1 ring-gray-400/10"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white pb-24 pt-0">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:pr-8 lg:pt-4">
              <div class="lg:max-w-lg">
                <h2 class="text-base/7 font-semibold text-red-500">No Spam</h2>
                <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900">Network-level Consent</p>
                <p class="mt-6 text-lg/8 text-gray-600">XMTP takes a new approach to mitigating spam. Unlike legacy systems that filter spam out after the fact, XMTP clients block spam at the network level before it gets to your inbox. The difference is foundational: by using encrypted, user-owned consent at the protocol level, users decide which senders can reach them on any app built on XMTP.</p>
                <p class="mt-6 text-lg/8 text-gray-600">The protocol ↔ client architecture enables developers to layer in entirely new forms of filtering and prioritization—proofs of human identity, on-chain and social graphs, even economic incentives like paying for attention. </p>
                <p class="mt-12">
                  
                  <a class="cursor-pointer flex items-center gap-x-1 text-white bg-gray-900 hover:text-white shadow-sm hover:bg-red-600 transition-all font-semibold rounded-md text-base text-center inline-flex items-center me-2 px-5 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>

                  Read more about XMTP’s network level consent <span class="ml-2" aria-hidden="true">→</span>
                  </a>

                </p>
              </div>
            </div>
            <div class="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto w-full">
              <div class="rounded-3xl p-2 shadow-md shadow-black/5">
                <div class="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
                  <img src="https://placehold.co/800x800/fff/fff" alt="screenshot" class="min-w-full max-w-full min-h-full max-h-full rounded-2xl ring-1 ring-gray-400/10"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white pb-32 pt-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:ml-auto lg:pl-4 lg:pt-4">
              <div class="lg:max-w-lg">
                <h2 class="text-base/7 font-semibold text-red-500">Censorship-resistant</h2>
                <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900">Decentralized by Design</p>
                <p class="mt-6 text-lg/8 text-gray-600">XMTP is designed as a decentralized messaging protocol, meaning it operates without a central server, giving users full ownership and control over their data. This structure ensures that no single entity has access to or control over messages, making communication censorship-resistant and enhancing privacy.</p>
                <p class="mt-12">
  
                <a class="cursor-pointer flex items-center gap-x-1 text-white bg-gray-900 hover:text-white shadow-sm hover:bg-red-600 transition-all font-semibold rounded-md text-base text-center inline-flex items-center me-2 px-5 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>

                Explore the XMTP decentralization roadmap <span class="ml-2" aria-hidden="true">→</span>
                </a>

                </p>
              </div>
            </div>
            <div class="flex items-start justify-end lg:order-first">
              <div class="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto w-full">
                <div class="rounded-3xl p-2 shadow-md shadow-black/5">
                  <div class="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
                    <img src="img/decentralized.png" alt="screenshot" class="-mb-2 min-w-full max-w-full min-h-full max-h-full rounded-2xl ring-1 ring-gray-400/10"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 py-24 rounded-3xl mb-8">
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p class="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-gray-950">Add secure, decentralized messaging to your app in minutes</p>
          <p class="max-w-3xl text-lg font-normal">XMTP enables secure, censorship-resistant messaging with user-owned consent, leveraging robust encryption and identity flexibility, so users stay in control of their communication on any platform, free from centralized oversight.</p>
          <a class="max-w-3xl text-lg font-semibold text-red-500 cursor-pointer">Explore SDKs <span aria-hidden="true">→</span></a>
          <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div class="relative lg:row-span-2">
              <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p class="mt-2 text-2xl font-semibold tracking-tight text-gray-950 max-lg:text-center">Universal Identity Support</p>
                  <p class="mt-2 max-w-lg text-base/6 text-gray-600 max-lg:text-center">Seamless, secure communication using any identity system to authenticate and connect without being locked into any specific platform</p>
                </div>
                <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <img class="size-full object-cover object-top" src="img/universalIdentity-tall.png" alt=""></img>
                </div>
              </div>
              <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div class="relative max-lg:row-start-1">
              <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p class="mt-2 text-2xl font-semibold tracking-tight text-gray-950 max-lg:text-center">Real Security from Real Standards</p>
                  <p class="mt-2 max-w-lg text-base/6 text-gray-600 max-lg:text-center">MLS ensures unspoofable, tamper-proof, and interception-resistant decentralized messaging</p>
                </div>
                <div class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img src="img/security.png" alt="screenshot" class="w-full"></img>
                </div>
              </div>
              <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div class="absolute inset-px rounded-lg bg-white"></div>
              <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div class="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p class="mt-2 text-2xl font-semibold tracking-tight text-gray-950 max-lg:text-center">Network-level Consent</p>
                  <p class="mt-2 max-w-lg text-base/6 text-gray-600 max-lg:text-center">Encrypted, user-owned consent at the protocol level, users decide which senders can reach them on any app using XMTP</p>
                </div>
                <div class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <img class="m-auto object-cover object-center" src="img/allowButton.png" alt=""></img>
                </div>
              </div>
              <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
            <div class="relative lg:row-span-2">
              <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p class="mt-2 text-2xl font-semibold tracking-tight text-gray-950 max-lg:text-center">Decentralized by Design</p>
                  <p class="mt-2 max-w-lg text-base/6 text-gray-600 max-lg:text-center">No single entity has access to or control over messages, making communication censorship-resistant and enhancing privacy</p>
                </div>
                <div class="relative min-h-[30rem] w-full grow">
                <img src="img/decentralized-tall.png" alt="screenshot" class="w-full"></img>
                </div>
              </div>
              <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
      

      
      <div class="relative isolate overflow-hidden bg-gray-900 rounded-3xl">
        <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
        </svg>

        <div class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
          <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#FC4F37] opacity-20" style={{"clipPath":"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"}}></div>
        </div>
        
        <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-24 lg:px-8">
          <div class="rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto w-full">
            <div class="rounded-3xl p-2 shadow-md shadow-black/5">
              
              <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 pb-0 text-center shadow-2xl sm:rounded-2xl sm:px-16">
                <h2 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-4xl">Open Source Everything</h2>
                <p class="mx-auto mt-2 max-w-2xl text-pretty text-lg/8 text-gray-300">XMTP’s protocol, app, and developer tools are all open source, enabling transparency, security, and community-driven improvements. XMTP’s features into their applications, expanding the ecosystem while upholding decentralized and privacy-first standards.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                
                  <a class="cursor-pointer flex items-center gap-x-1 text-black bg-white hover:text-black shadow-sm hover:bg-gray-400 transition-all font-semibold rounded-md text-base text-center inline-flex items-center me-2 px-5 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 me-2" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

                  Browse the Repos <span class="ml-2" aria-hidden="true">→</span>
                  </a>
                  
                </div>
                
                <div class="relative min-h-[16rem] w-full grow">
                  <div class="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(60%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]"><svg aria-hidden="true" viewBox="0 0 668 1069" width="668" height="1069" fill="none" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]"><defs><clipPath id=":Rqja:-clip-path"><path fill="#fff" transform="rotate(-180 334 534.4)" d="M0 0h668v1068.8H0z"></path></clipPath></defs><g opacity=".4" clip-path="url(#:Rqja:-clip-path)" stroke-width="4"><path opacity=".3" d="M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474" stroke="#334155"></path><path d="M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588" stroke="#334155"></path><path d="M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175" stroke="#334155"></path><circle cx="83.5" cy="384.1" r="10.438" transform="rotate(-180 83.5 384.1)" fill="#1E293B" stroke="#334155"></circle><circle cx="83.5" cy="200.399" r="10.438" transform="rotate(-180 83.5 200.399)" stroke="#334155"></circle><circle cx="83.5" cy="81.412" r="10.438" transform="rotate(-180 83.5 81.412)" stroke="#334155"></circle><circle cx="183.699" cy="375.75" r="10.438" transform="rotate(-180 183.699 375.75)" fill="#1E293B" stroke="#334155"></circle><circle cx="183.699" cy="563.625" r="10.438" transform="rotate(-180 183.699 563.625)" fill="#1E293B" stroke="#334155"></circle><circle cx="384.1" cy="651.3" r="10.438" transform="rotate(-180 384.1 651.3)" fill="#1E293B" stroke="#334155"></circle><circle cx="484.301" cy="574.062" r="10.438" transform="rotate(-180 484.301 574.062)" fill="#0EA5E9" fill-opacity=".42" stroke="#0EA5E9"></circle><circle cx="384.1" cy="749.412" r="10.438" transform="rotate(-180 384.1 749.412)" fill="#1E293B" stroke="#334155"></circle><circle cx="384.1" cy="1027.05" r="10.438" transform="rotate(-180 384.1 1027.05)" stroke="#334155"></circle><circle cx="283.9" cy="924.763" r="10.438" transform="rotate(-180 283.9 924.763)" stroke="#334155"></circle><circle cx="183.699" cy="870.487" r="10.438" transform="rotate(-180 183.699 870.487)" stroke="#334155"></circle><circle cx="283.9" cy="738.975" r="10.438" transform="rotate(-180 283.9 738.975)" fill="#1E293B" stroke="#FC4F37"></circle><circle cx="83.5" cy="695.138" r="10.438" transform="rotate(-180 83.5 695.138)" fill="#FC4F37" stroke="#FC4F37"></circle><circle cx="83.5" cy="484.3" r="10.438" transform="rotate(-180 83.5 484.3)" fill="#FC4F37" fill-opacity=".42" stroke="#FC4F37"></circle><circle cx="484.301" cy="432.112" r="10.438" transform="rotate(-180 484.301 432.112)" fill="#FC4F37" stroke="#FC4F37"></circle><circle cx="584.5" cy="432.112" r="10.438" transform="rotate(-180 584.5 432.112)" fill="#FC4F37" stroke="#FC4F37"></circle><circle cx="584.5" cy="642.95" r="10.438" transform="rotate(-180 584.5 642.95)" fill="#FC4F37" stroke="#FC4F37"></circle><circle cx="484.301" cy="851.699" r="10.438" transform="rotate(-180 484.301 851.699)" stroke="#FC4F37"></circle><circle cx="384.1" cy="256.763" r="10.438" transform="rotate(-180 384.1 256.763)" stroke="#FC4F37"></circle></g></svg></div>
                  
                  <div class="absolute bottom-0 left-20 right-20 top-16 overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
                    <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">xmtp-sdk.js</div>
                        <div class="border-r border-gray-600/10 px-4 py-2">Your_App.jsx</div>
                      </div>
                    </div>
                    
                    <code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-900 text-white p-6 w-full">
                        <span class="flex gap-4">
                            <span class="shrink-0 text-gray-500">
                                $
                            </span>

                            <span class="flex-1 flex gap-4">
                                <span>
                                  npm install
                                </span>

                                <span class="text-red-500">
                                  @xmtp/xmtp-js
                                </span>
                            </span>
                        </span>
                    </code>
                    
                  </div>
                </div>

                <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                  <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
                  <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                      <stop stop-color="#FC4F37" />
                      <stop offset="1" stop-color="#FC4F37" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default BuiltWithXmtp;
