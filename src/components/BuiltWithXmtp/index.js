import React from "react";
import ListOfDevelopers from "./ListOfDevs.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";

const BuiltWithXmtp = () => {
  return (
    <div>
      <div className="relative s isolate overflow-hidden px-6 py-16 sm:py-24 mb-8 bg-color  built">
        <div className=" absolute inset-0 -z-10 h-full w-full builder-bg"></div>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Built with XMTP
            </h1>
            <p className="text-lg leading-7 text-gray-600">
              Hundreds of awesome projects, people, and partners rely on XMTP.
              <br />
              <strong>Come build with us!</strong>
            </p>
          </div>
          <div className="mx-auto mt-4 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <button class="bg-red-500 hover:bg-red-600 hover:drop-shadow transition rounded-lg p-5 h-12 text-white font-bold text-base cursor-pointer flex justify-center items-center border-0">
                <img src="/img/xmtp-sm-icon.png" class="w-5 h-5 mr-2.5"></img>
                <a
                  className="hover:no-underline text-white hover:text-white"
                  href="/docs/build/get-started">
                  Start building
                </a>
              </button>
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
                      fontSize: "22px",
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
                Get Featured!
              </h5>
            </a>
            <p className="text-base text-gray-500">
              Have a project building on XMTP? Want your profile updated?{" "}
              <a href="https://forms.gle/p1VgVtkoGfHXANXt5" target="_blank">
                Share your details
              </a>{" "}
              and we'll follow up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltWithXmtp;
