import React from "react";
import ListOfDevelopers from "./ListofGuides.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";

const Tutorials = () => {
  return (
    <ul className="bwx-guides list-none grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
      {ListOfDevelopers.map((developer) => (
        <li className="relative group" key={developer.name}>
          <a className="flex justify-center " href={developer.href}>
            <img
              className="img-guides"
              src={useBaseUrl(developer.image)}
              alt={"this is an image of the" + developer.name + " icon"}
            ></img>
          </a>
          <h4 className="my-1 text-xl mt-0">{developer.name}</h4>
        </li>
      ))}
    </ul>
  );
};

export default Tutorials;
