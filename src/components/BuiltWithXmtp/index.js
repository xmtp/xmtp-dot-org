import React from "react";
import ListOfDevelopers from "./ListOfDevs.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

const BuiltWithXmtp = () => {
  return (
    <div>
      <div className="container text-left py-0 px-4 m-auto max-w-screen-max">
        <Link to="/docs/build/group-chat">
          <div className="rounded-full border border-blue-300 bg-blue-50 text-l font-semibold text-blue-800 border-solid px-2.5 py-0.5 mb-3 lg:mb-4 w-fit">
            🚀 Build with Group Chat in prod! »
          </div>
        </Link>
      </div>
      <div className="relative s isolate overflow-hidden px-6 py-16 sm:py-24 mb-8 bg-color  built">
        <div className=" absolute inset-0 -z-10 h-full w-full builder-bg"></div>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              The open protocol for web3 messaging
            </h1>
            <p className="text-lg leading-7 text-gray-600">
              <strong className="pr-1">
                <a href="https://dune.com/xmtp_team/dash" target="_blank" rel="noreferrer">
                  1,919,923+
                </a>
              </strong>
              web3 identities rely on apps built with XMTP for secure, private,
              and portable messaging
            </p>
          </div>
          <div className="mx-auto mt-4 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a
                href="/docs/introduction"
                className="btn-principal bg-red-500 rounded-lg p-5 h-12 text-white font-bold text-base cursor-pointer flex justify-center items-center border-0 no-underline" rel="noreferrer">
                <img
                  src="/img/xmtp-sm-icon.png"
                  className="w-5 h-5 mr-2.5" alt="XMTP icon"></img>
                Build with XMTP
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ListOfDevelopers.map((developer) => (
          <div
            className="relative flex items-top space-x-4 rounded-lg border border-gray-400 px-6 py-4 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            key={developer.name}>
            <div className="flex-shrink-0">
              <a
                href={developer.href}
                target="_blank"
                className="rounded rounded-md flex justify-center py-0 mb-4">
                <img
                  className="h-16 w-16 max-h-16 max-w-16 rounded-2xl"
                  src={useBaseUrl(developer.image)}
                  alt={
                    "this is an image of the" + developer.name + " icon"
                  }></img>
              </a>
            </div>

            <div className="min-w-0 flex-1 builder">
              <a
                href={developer.href}
                target="_blank"
                className="focus:outline-none">
                <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-0">
                  {developer.name}
                </h5>
              </a>
              <p className="text-base text-gray-400">{developer.description}</p>

              <div className="flex items-center space-x-3">
                {developer.href && (
                  <a
                    className="text-base font-semibold text-red-500 flex align-center"
                    href={developer.href}
                    target="_blank">
                    <div className="website-icon h-5 w-5"></div>
                  </a>
                )}
                {developer.github && (
                  <a
                    className="text-base font-semibold  flex align-center"
                    href={developer.github}
                    target="_blank">
                    <div className="github-icon h-5 w-5"></div>
                  </a>
                )}
                {developer.twitter && (
                  <a
                    className="  flex align-center"
                    href={developer.twitter}
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                    target="_blank">
                    𝕏
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="relative flex items-top space-x-4 rounded-lg border border-gray-400 px-6 py-4 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
          <div className="flex-shrink-0">
            <a className="rounded rounded-md flex justify-center py-0 mb-4">
              <img
                className="h-16 w-16 max-h-16 max-w-16 rounded-xl"
                src="/img/getFeatured.jpg"></img>
            </a>
          </div>
          <div className="min-w-0 flex-1">
            <a
              href="https://forms.gle/p1VgVtkoGfHXANXt5"
              target="_blank"
              className="focus:outline-none">
              <h5 className="text-lg font-bold text-gray-900 mb-0">
                Help build this list
              </h5>
            </a>
            <p className="text-base text-gray-500">
              Know of a project built with XMTP that should be here?
              <a className="px-1" href="https://forms.gle/p1VgVtkoGfHXANXt5" target="_blank" rel="noreferrer">
                <strong>Submit it</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltWithXmtp;
