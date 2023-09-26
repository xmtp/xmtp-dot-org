---
sidebar_label: USubscribe
sidebar_position: 4
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {USubscribe} from "@site/src/components/UWidgets/USubscribe";

# Subscribe Button

The `USubscribe` widget is allows users to subscribe to the Dapp through XMTP. Has callbacks for managing subscriers lists.

<div className="widget-container">
<USubscribe
theme="default"
size="medium"
onSubscribe={(address) => console.log("New subscriber: " + address)}
onUnsubscribe={(address) => console.log("Unsubscribed: " + address)}
onError={(address) => console.log("Error subscribing: " + address)}
env={"production"}
/>
</div>

### Props

- `theme`: (Optional) Set the theme. Available options: 'default', 'dark', 'light'. Default is 'default'.
- `size`: (Optional) Set the button size. Available options: 'small', 'medium', 'large'. Default is 'medium'.
- `wallet`: (Required) An instance of ethers.js signer.
- `checkSubscriptionStatus`: (Required) A function that checks the subscription status of a given address.
- `onSubscribe`: (Required) A callback function that is called when a new subscription is made.
- `onUnsubscribe`: (Required) A callback function that is called when a subscription is cancelled.
- `onError`: (Required) A callback function that is called when an error occurs during subscription or unsubscription.
- `env`: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)
- `labels`: (Optional) An object that contains the labels for different states of the component. The object should have the following structure:

```jsx
labels = {
  loading: "Loading...",
  subscribed: "Subscribed",
  unsubscribed: "Unsubscribed",
  default: "Subscribe with your wallet",
};
```

### Usage

```jsx
<USubscribe
  theme="default"
  size="medium"
  wallet={signer}
  checkSubscriptionStatus={(address) => checkSubscriptionStatus(address)}
  onSubscribe={(address) => console.log("New subscriber: " + address)}
  onUnsubscribe={(address) => console.log("Unsubscribed: " + address)}
  onError={(address) => console.log("Error subscribing: " + address)}
/>
```

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js styled-components ethers
```

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="USubscribe.js">

```jsx
import React, { useEffect, useState } from "react";
import { Client } from "@xmtp/xmtp-js";
import styled, { keyframes } from "styled-components";
import { ethers } from "ethers";

export function USubscribe({
  theme = "default",
  size = "medium",
  wallet,
  onSubscribe,
  onUnsubscribe,
  checkSubscriptionStatus,
  onError,
  env,
  labels = {
    loading: "Loading...",
    subscribed: "Subscribed",
    unsubscribed: "Unsubscribed",
    default: "Subscribe with your wallet",
  },
}) {
  const [loading, setLoading] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState("none");

  const getAddress = async (signer) => {
    try {
      return await signer?.getAddress();
    } catch (e) {
      console.log(e);
      console.log("entra4");
    }
  };
  const handleClick = async () => {
    setLoading(true);
    let currentSigner = wallet || (await connectWallet());
    if (currentSigner) {
      await connect(currentSigner);
    }
    setLoading(false);
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        return provider.getSigner();
      } catch (error) {
        console.error("User rejected request", error);
      }
    } else {
      console.error("Metamask not found");
    }
  };

  const connect = async (signer) => {
    try {
      console.log("entra7");
      const address = await getAddress(signer);
      console.log(address);
      let isSubscribed = false;
      if (checkSubscriptionStatus)
        isSubscribed = await checkSubscriptionStatus(address);
      if (isSubscribed) {
        await unsubscribe(signer);
      } else {
        await subscribe(signer);
      }
    } catch (error) {
      if (typeof onError === "function") onError(error);
      console.log(error);
    }
  };

  async function unsubscribe(signer) {
    console.log("entra7");
    const address = await getAddress(signer);
    setSubscriptionStatus("unsubscribed");
    if (onUnsubscribe) onUnsubscribe(address);
    setTimeout(() => {
      setSubscriptionStatus("none");
    }, 5000);
  }

  async function subscribe(signer) {
    const xmtp = await Client.create(signer, { env: env });
    setSubscriptionStatus("subscribed");
    if (onSubscribe) onSubscribe(xmtp.address);
    setTimeout(() => {
      setSubscriptionStatus("none");
    }, 5000);
  }

  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      setLoading(true);
      if (checkSubscriptionStatus && wallet) {
        const address = await getAddress(wallet);
        const isSubscribed = await checkSubscriptionStatus(address);
        if (isMounted) {
          setSubscriptionStatus(isSubscribed ? "subscribed" : "unsubscribed");
        }
      }
      setLoading(false);
    };
    init();
    return () => {
      isMounted = false;
    };
  }, [checkSubscriptionStatus, wallet]);

  return (
    <USubscribeButtonContainer
      theme={theme}
      size={size}
      className={` ${theme} ${size} ${loading ? "loading" : ""}`}>
      <USubscribeButton theme={theme} size={size} onClick={handleClick}>
        <SVGLogo theme={theme} size={size} className="logo" />
        {loading
          ? labels.loading
          : subscriptionStatus === "subscribed"
          ? labels.subscribed
          : subscriptionStatus === "unsubscribed"
          ? labels.unsubscribed
          : labels.default}
      </USubscribeButton>
    </USubscribeButtonContainer>
  );
}

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}`;

// Styled components
const USubscribeButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 5px;

  &.loading .logo {
    animation: ${spin} 0.5s linear infinite;
  }
  &:hover .logo {
    transform: rotate(360deg);
    transition: transform 0.5s ease;
  }
  &:hover .logo path {
    fill: ${({ theme }) => {
      if (theme === "dark") return "#ededed";
      if (theme === "light") return "#333333";
      return "#333333"; // default
    }};
  }
`;

const USubscribeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 2px;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;

  color: ${({ theme }) => {
    if (theme === "dark") return "#ffffff";
    return "#333333"; // default and light
  }};
  background-color: ${({ theme }) => {
    if (theme === "dark") return "#333333";
    if (theme === "light") return "#fff";
    return "#ededed"; // default
  }};
  border: ${({ theme }) => (theme === "light" ? "1px solid #333333" : "none")};

  font-size: ${({ size }) => {
    if (size === "large") return "16px";
    if (size === "medium") return "12px";
    return "12px"; // medium and small
  }};
`;

const LogoIcon = styled.svg`
  width: ${({ size }) => {
    if (size === "medium") return "12px";
    if (size === "large") return "16px";
    return "10px"; // medium and small
  }};
  height: ${({ size }) => {
    if (size === "medium") return "12px";
    if (size === "large") return "16px";
    return "10px"; // medium and small
  }};

  margin-right: 5px;
  transition: all 0.5s ease;
`;
function SVGLogo({ theme, size, loading }) {
  // Use theme to conditionally set fill color
  const determineFill = () => {
    if (theme === "dark") {
      return "#fc4f37";
    }
    if (theme === "light") {
      return "#fc4f37";
    }
    return "#fc4f37";
  };

  return (
    <LogoIcon
      className="logo"
      size={size}
      viewBox="0 0 462 462"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={determineFill()}
        d="M1 231C1 103.422 104.422 0 232 0C359.495 0 458 101.5 461 230C461 271 447 305.5 412 338C382.424 365.464 332 369.5 295.003 349C268.597 333.767 248.246 301.326 231 277.5L199 326.5H130L195 229.997L132 135H203L231.5 184L259.5 135H331L266 230C266 230 297 277.5 314 296C331 314.5 362 315 382 295C403.989 273.011 408.912 255.502 409 230C409.343 131.294 330.941 52 232 52C133.141 52 53 132.141 53 231C53 329.859 133.141 410 232 410C245.674 410 258.781 408.851 271.5 406L283.5 456.5C265.401 460.558 249.778 462 232 462C104.422 462 1 358.578 1 231Z"
      />
    </LogoIcon>
  );
}
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { USubscribe } from "./USubscribe";
```
