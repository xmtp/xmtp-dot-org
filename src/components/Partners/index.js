import React from "react";
const Partners = () => {
  return (
    <div className="chain-list partners six">
      <a href="https://lens.xyz/" class="chain-item" target="_blank">
        <img src={"/img/partners/lens.svg"} />
        <span>Lens Protocol</span>
      </a>
      <a href="https://www.airstack.xyz/" class="chain-item" target="_blank">
        <img src={"/img/partners/airstack.svg"} />
        <span>Airstack</span>
      </a>
      <a href="https://dynamic.xyz/" class="chain-item" target="_blank">
        <img src={"/img/partners/dynamic.svg"} />
        <span>Dynamic</span>
      </a>
      <a href="https://thirdweb.com/" class="chain-item" target="_blank">
        <img src={"/img/partners/thirdweb.png"} />
        <span>Thirdweb</span>
      </a>
      <a href="https://everyname.xyz/" class="chain-item" target="_blank">
        <img src={"/img/partners/everyname.svg"} />
        <span>Everyname</span>
      </a>
      <a
        href="https://unstoppabledomains.com/"
        class="chain-item"
        target="_blank">
        <img src={"/img/partners/uns.svg"} />
        <span>Unstopable Domains</span>
      </a>
    </div>
  );
};
export default Partners;
