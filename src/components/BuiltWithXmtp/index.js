import React from "react";
import ListOfDevelopers from "./ListOfDevs.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";

const BuiltWithXmtp = () => {
  return (
    <ul className="bwx list-none grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
      {ListOfDevelopers.map((developer) => (
        <li className="relative group" key={developer.name}>
          <a className="rounded border-solid rounded-md bg-white border-slate-200 dark:border-slate-600 flex justify-center py-6 mb-3">
            <img
              className="max-h-20 max-w-20 min-h-20"
              src={useBaseUrl(developer.image)}
              alt={"this is an image of the" + developer.name + " icon"}
            ></img>
          </a>
          <a href={developer.href} className="my-1 text-xl mt-0">
            {developer.name}
          </a>
          <p className="text-base dark:text-neutral-300 line-clamp-3 mt-0 h-20">
            {developer.description}
          </p>
        </li>
      ))}
      <li className="relative group">
        <a
          className="rounded border-solid rounded-md border-slate-200 dark:border-slate-600 flex justify-center py-6 mb-3 bg-gradient-to-r from-indigo-900 to-red-500"
          href="https://forms.gle/p1VgVtkoGfHXANXt5"
          alt="Submit your"
        >
          <img
            className="max-h-20 max-w-20 min-h-20"
            src="/img/builtWithXmtp/building.svg"
            alt=""
          ></img>
        </a>
        <a href="https://forms.gle/p1VgVtkoGfHXANXt5">
          <h4 className="my-1 text-xl mt-0">Submit request</h4>
        </a>
        <p className="text-base dark:text-neutral-300 line-clamp-3 mt-0 h-20">
          Have a project building on XMTP? Want your profile updated?{" "}
          <a href="https://forms.gle/p1VgVtkoGfHXANXt5">Share your details</a>{" "}
          and we'll follow up.
        </p>
      </li>
    </ul>
  );
};

export default BuiltWithXmtp;
