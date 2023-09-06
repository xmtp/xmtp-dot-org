import React from "react";

const Usecases = () => {
  return (
    <div className="chain-list four ct">
      <a href="/docs/build/messages/remote-attachment" className="chain-item">
        <img src={"/img/ct/remote-attachment.svg"} />
        <span>Remote Attachments</span>
      </a>
      <a href="docs/build/messages/read-receipt" className="chain-item">
        <img src={"/img/ct/read-receipt.svg"} />
        <span>Read Receipts</span>
      </a>
      <a href="/docs/build/messages/reply" className="chain-item">
        <img src={"/img/ct/reply.svg"} />
        <span>Replies</span>
      </a>
      <a href="/docs/build/messages/reaction" className="chain-item">
        <img src={"/img/ct/reaction.svg"} />
        <span>Reactions</span>
      </a>
    </div>
  );
};
export default Usecases;
