import React from "react";
import ListOfTutorials from "./ListOfTutorials.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";

const Tutorials = () => {
  return (
    <div className="chain-list-blog">
      {ListOfTutorials.map((developer) => (
        <div className="chain-item-blog" key={developer.name}>
          <img
            src={useBaseUrl(developer.image)}
            alt={"this is an image of the" + developer.name + " icon"}
          ></img>
          <h3>
            <a href={developer.href}>{developer.name}</a>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Tutorials;
