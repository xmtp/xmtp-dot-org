import React from "react";
import ListOfDevelopers from "./ListofGuides.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";

const Guides = () => {
  return (
    <ul className="bwx list-none grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
      {ListOfDevelopers.map((developer) => (
        <li className="relative group" key={developer.name}>
          <a
            className="rounded border-solid rounded-md bg-white border-slate-200 dark:border-slate-600 flex justify-center py-6 mb-3"
            href={developer.href}
          >
            <img
              className="max-h-20 max-w-100"
              src={useBaseUrl(developer.image)}
              alt={"this is an image of the" + developer.name + " icon"}
            ></img>
          </a>
          <h4 className="my-1 text-xl mt-0">{developer.name}</h4>
          <p className="text-base dark:text-neutral-300 line-clamp-3 mt-0 h-20">
            {developer.description}
          </p>
          <div className="flex items-center">
            <a
              className="mb-2 mt-1 text-base font-semibold text-red-500 flex align-center ml-2 before:content-[|]"
              href={developer.href}
            >
              Website
            </a>
            {developer.github && (
              <a
                className="mb-2 mt-1 text-base font-semibold text-red-500 flex align-center mr-2"
                href={developer.github}
              >
                | GitHub
              </a>
            )}
            <a
              className="mb-2 mt-1 text-base font-semibold text-red-500 flex align-center ml-2 before:content-[|]"
              href={developer.twitter}
            >
              | Twitter
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Guides;
