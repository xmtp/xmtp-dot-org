import React from "react";
import ListOfTutorials from "./ListOfTutorials.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";

const Tutorials = () => {
  return (
    <div className="chain-list">
      {ListOfTutorials.map((developer) => (
        <div className="chain-item-3" key={developer.name}>
          <img
            src={useBaseUrl(developer.image)}
            alt={"this is an image of the" + developer.name + " icon"}
          ></img>
          <a>{developer.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Tutorials;
