import React from "react";

const Usecases = () => {
  return (
    <div className="chain-list eight ct">
      {/* 
      <a href="/docs/content-types/plain-text" className="chain-item">
        <img src={"/img/ct/plain-text.svg"} />
        <span>Text</span>
  </a>
      <a href="/docs/content-types/attachment" className="chain-item">
        <img src={"/img/ct/attachment.svg"} />
        <span>Attachments</span>
      </a>*/}
      <a href="/docs/content-types/remote-attachment" className="chain-item">
        <img src={"/img/ct/remote-attachment.svg"} />
        <span>Remote Attachments</span>
      </a>
      <a href="/docs/content-types/read-receipt" className="chain-item">
        <img src={"/img/ct/read-receipt.svg"} />
        <span>Read Receipts</span>
      </a>
      <a href="/docs/content-types/reply" className="chain-item">
        <img src={"/img/ct/reply.svg"} />
        <span>Replies</span>
      </a>
      <a href="/docs/content-types/reaction" className="chain-item">
        <img src={"/img/ct/reaction.svg"} />
        <span>Reactions</span>
      </a>
      {/*
      <a href="/docs/content-types/composite" className="chain-item">
        <img src={"/img/ct/composite.svg"} />
        <span>Composite</span>
    </a>*/}
      <a href="/docs/content-types/custom" className="chain-item">
        <img src={"/img/ct/custom.svg"} />
        <span>Custom</span>
      </a>
    </div>
  );
};
export default Usecases;
