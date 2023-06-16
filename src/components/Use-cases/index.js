import React from "react";

const Usecases = () => {
  return (
    <div className="chain-list seven">
      <a href="/docs/use-cases/messaging" className="chain-item">
        <img src={"/img/messaging-icon.svg"} />
        <span>Messaging</span>
      </a>
      <a href="/docs/use-cases/deso" className="chain-item">
        <img src={"/img/social-icon.svg"} />
        <span>DeSo</span>
      </a>
      <a href="/docs/use-cases/marketing" className="chain-item">
        <img src={"/img/marketing-icon.svg"} />
        <span>Marketing</span>
      </a>
      <a href="/docs/use-cases/finance" className="chain-item">
        <img src={"/img/finance-icon.svg"} />
        <span>DeFi</span>
      </a>
      <a href="/docs/use-cases/automation" className="chain-item">
        <img src={"/img/chip-icon.svg"} />
        <span>Automation</span>
      </a>
      <a href="/docs/use-cases/support" className="chain-item">
        <img src={"/img/support-icon.svg"} />
        <span>Support</span>
      </a>
      <a href="/docs/use-cases/commerce" className="chain-item">
        <img src={"/img/commerce-icon.svg"} />
        <span>Commerce</span>
      </a>
    </div>
  );
};
export default Usecases;