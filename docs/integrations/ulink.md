---
sidebar_label: UProfileCard
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {ULink} from "@site/src/components/UWidgets/ULink";

# Link Landing

<img src="ULink.png"/>

The `Ulink` widget is a React component that displays a page based on its ENS or domain and shows different buttons for contacting through XMTP.

## **Usage**

```jsx
<ULink
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
  theme={"light"}
  deepLinkApps={deepLinkApps}
  size={"medium"}
/>
```

## **Props**

- `theme`: (Optional) Set the theme. Available options: 'default', 'dark', 'light'. Default is 'default'.
- `size`: (Optional) Set the button size. Available options: 'small', 'medium', 'large'. Default is 'medium'.
- `wallet`: (Required) An instance of ethers.js signer.
- `checkSubscriptionStatus`: (Required) A function that checks the subscription status of a given address.
- `onSubscribe`: (Required) A callback function that is called when a new subscription is made.
- `onUnsubscribe`: (Required) A callback function that is called when a subscription is cancelled.
- `onError`: (Required) A callback function that is called when an error occurs during subscription or unsubscription.
- **`env`**: XMTP developer environment. Read more [here](https://xmtp.org/docs/build/authentication#environments)

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js styled-components react-router-dom axios
```

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="ULink.js">

```jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Client } from "@xmtp/xmtp-js";

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  cursor: pointer;
`;
const ULinkWrapper = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ULinkContainer = styled.div`
  position: relative; // Add relative positioning
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  pointer-events: auto;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;

  &::before {
    content: "";
    position: absolute;
    top: 0px; // This is the pixel height from the top where the background starts
    left: 0;
    right: 0;
    height: 80px; // Set a fixed height for the colored background
    background-color: rgb(56, 136, 255); // Replace with the color you want
    z-index: -1; // To put it below the actual content
    @media (max-width: 799px) {
      height: 80px;
    }
  }
`;

const LinkDomain = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1em;
  text-align: center;
  margin-bottom: 0.5em;
  margin-top: 40px;
`;

const Instructions = styled.p`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.3rem;
  width: 90%;
`;

const ListItemButton = styled.a`
  font-weight: bold;
  display: inline-flex;
  width: 80%;
  @media (max-width: 799px) {
    width: 80%;
  }
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  padding: 12px 20px;
  border-radius: 20px;
  margin-bottom: 2px;
  border: 1px solid #333333;
  color: #000;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
  transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);

  text-decoration: none;
  color: inherit;
  text-align: center;
  background-color: white;
  margin-bottom: 30px;

  &:hover .logo {
    transform: rotate(360deg);
    transition: transform 0.5s ease;
  }
  cursor: hand;
`;

const ULinkIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
  transition: all 0.5s ease;
  border-radius: 5px;
  cursor: pointer;
  &.logo:hover {
    transform: rotate(360deg);
  }
`;

export function ULink({
  walletAddress: initialWalletAddress,
  deepLinkApps = {
    xmtp: {
      url: `https://xmtp.chat/dm/${initialWalletAddress}`,
      icon: "https://xmtp.chat/favicon.ico",
      device: ["All"],
      name: "xmtp.chat",
    },
  },
  theme = "default",
  size = "medium",
  device = "All",
}) {
  const [walletAddress, setWalletAddress] = useState(initialWalletAddress); // Add this state
  const [message, setMessage] = useState(""); // Add this state to display messages
  const [loadingResolve, setLoadingResolve] = useState(false); // Add this state to track loading status
  const [deviceSpecificApps, setDeviceSpecificApps] = useState([]);

  let { domain } = useParams();
  domain = domain || "shanemac.eth"; // Set a default value

  useEffect(() => {
    const devicep = detectDevice(device);
    const deepLinkAppsArray = Object.values(deepLinkApps);
    const filteredApps = filterAppsByDevice(deepLinkAppsArray, devicep);
    setDeviceSpecificApps(filteredApps);
  }, []);

  const isValidEthereumAddress = (address) => {
    // Add your logic to validate Ethereum address
    return true; // Placeholder, replace with actual logic
  };

  const resolveDomainToAddress = async () => {
    setLoadingResolve(true); // Set loading to true here
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://api.everyname.xyz/forward?domain=${domain}`,
        headers: {
          Accept: "application/json",
          "api-key": process.env.REACT_APP_EVERYNAME_KEY,
        },
      };

      const response = await axios.request(config);
      const resolvedAddress = response.data.address;
      if (resolvedAddress && isValidEthereumAddress(resolvedAddress)) {
        setWalletAddress(resolvedAddress);
      } else {
        setMessage("Invalid Ethereum address");
        setWalletAddress(null);
      }
    } catch (error) {
      console.log(error);
      setMessage("Error resolving address");
    } finally {
      setLoadingResolve(false);
    }
  };
  const [loadingMetadata, setLoadingMetadata] = useState(false); // Add this state to track loading status for metadata
  const [avatar, setAvatar] = useState(null); // State to hold the avatar
  // New function to fetch metadata like avatar
  const fetchMetadata = async () => {
    setLoadingMetadata(true); // Set loading to true here

    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://api.everyname.xyz/forward/social-profile?domain=${domain}`,
        headers: {
          Accept: "application/json",
          "api-key": process.env.REACT_APP_EVERYNAME_KEY,
        },
      };

      const response = await axios.request(config);
      const avatarUrl = response.data.avatar;
      if (avatarUrl && avatarUrl.length > 10) {
        setAvatar(avatarUrl);
      } else {
        setMessage("Avatar not found");
        setAvatar(null);
      }
    } catch (error) {
      console.log(error);
      setMessage("Error fetching metadata");
    } finally {
      setLoadingMetadata(false);
    }
  };

  useEffect(() => {
    if (domain) {
      resolveDomainToAddress();
      fetchMetadata();
    }
  }, [domain]);

  const detectDevice = (device) => {
    const userAgent = window.navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) return "Android";
    if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
    return device ? device : "Desktop";
  };

  const filterAppsByDevice = (apps, device) => {
    return apps.filter(
      (app) => app.device.includes(device) || app.device.includes("All"),
    );
  };

  const [canMessage, setCanMessage] = useState(null); // State to hold the result

  useEffect(() => {
    // Asynchronous function to call Client.canMessage
    const checkCanMessage = async () => {
      const result = await Client.canMessage(walletAddress);
      setCanMessage(result);
    };

    // Execute the function
    checkCanMessage();
  }, [walletAddress]); // Dependency array, will rerun if walletAddress changes

  return (
    <ULinkContainer>
      {avatar ? (
        <Avatar src={avatar} alt="User Avatar" width={100} />
      ) : (
        <SVGLogo width={100} />
      )}
      <ULinkWrapper>
        <LinkDomain>{domain}</LinkDomain>
        <Instructions>
          Just send a message to <b>{domain} </b>
          using your preferred XMTP inbox, and hit send!
        </Instructions>
        {canMessage !== null && (
          <>
            {canMessage ? (
              deviceSpecificApps.map((app, index) => (
                <ListItemButton
                  key={index}
                  target="_newtab"
                  href={app.url
                    .replace("{walletAddress}", walletAddress)
                    .replace("{domain}", domain)}
                  theme={theme}
                  style={{
                    cursor: "pointer !important", // Explicitly set cursor
                    zIndex: 2, // Explicitly set z-index
                    opacity: loadingResolve ? 0.5 : 1,
                    pointerEvents: loadingResolve ? "none" : "auto", // Make sure it's 'auto' when not loading
                  }}
                  size={size}>
                  <ULinkIcon
                    src={app.icon}
                    alt={`${app.name} Icon`}
                    width="50px"
                    className="logo"
                  />
                  Message on {app.name}
                </ListItemButton>
              ))
            ) : (
              <p>
                You cannot send a message bacause this walet is not on the xmtp
                network.
              </p>
            )}
          </>
        )}
      </ULinkWrapper>
    </ULinkContainer>
  );
}

function ENSLogo({ width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 152 56"
      fill="none">
      <script
        type="text/javascript"
        src="chrome-extension://fnjhmkhhmkbjkkabndcnnogagogbneec/in-page.js"
      />
      <g clipPath="url(#clip0_1_2)">
        <path
          d="M6.56002 13.1758C7.08395 12.2032 7.84007 11.374 8.76169 10.7614L24.2289 0L8.38088 26.1102C8.38088 26.1102 6.99618 23.7787 6.45613 22.5989C5.78318 21.1156 5.44378 19.5037 5.46171 17.876C5.47965 16.2482 5.85453 14.6441 6.56002 13.1758ZM0.176508 31.1874C0.351142 33.6843 1.05919 36.1152 2.25323 38.3173C3.44728 40.5196 5.09976 42.442 7.10003 43.9562L24.208 55.8421C24.208 55.8421 13.5043 40.4726 4.47602 25.179C3.56199 23.5632 2.94753 21.7966 2.66205 19.9638C2.53567 19.1339 2.53567 18.2896 2.66205 17.4597C2.42664 17.8944 1.9697 18.7842 1.9697 18.7842C1.05427 20.6444 0.430814 22.6336 0.12112 24.6823C-0.057137 26.8479 -0.038599 29.0251 0.176508 31.1874ZM43.7947 33.2568C43.2407 32.0772 41.8699 29.7456 41.8699 29.7456L26.0497 55.8421L41.5168 45.0875C42.4384 44.4749 43.1946 43.6459 43.7186 42.6732C44.424 41.2049 44.7988 39.6007 44.8169 37.9731C44.8348 36.3454 44.4954 34.7333 43.8224 33.25L43.7947 33.2568ZM50.0742 24.6615C49.8996 22.1647 49.1916 19.7337 47.9976 17.5316C46.8035 15.3295 45.151 13.4069 43.1507 11.8927L26.0704 0C26.0704 0 36.7672 15.3695 45.8025 30.6631C46.7141 32.2794 47.3261 34.0459 47.6096 35.8782C47.7359 36.7082 47.7359 37.5524 47.6096 38.3824C47.845 37.9477 48.3019 37.0578 48.3019 37.0578C49.2173 35.1977 49.8409 33.2085 50.1504 31.1597C50.331 28.9943 50.3148 26.8172 50.1021 24.6547L50.0742 24.6615Z"
          fill="url(#paint0_linear_1_2)"
        />
        <path
          d="M62.8142 45.3704H85.3339V38.6387H70.0786V30.5511H83.6388V24.1584H70.0786V16.4097H85.3339V9.67801H62.8142V45.3704Z"
          fill="url(#paint1_linear_1_2)"
        />
        <path
          d="M91.3213 45.3704H98.5373V21.8428L114.18 45.3704H121.348V9.67801H114.18V33.312L98.5373 9.67801H91.3213V45.3704Z"
          fill="url(#paint2_linear_1_2)"
        />
        <path
          d="M126.072 19.8966C126.072 17.7657 126.621 15.8931 127.719 14.2788C128.849 12.6322 130.382 11.3408 132.319 10.4045C134.289 9.46815 136.533 9 139.051 9C141.569 9 143.733 9.45201 145.541 10.356C147.381 11.2277 148.801 12.4708 149.802 14.0851C150.835 15.6994 151.352 17.6204 151.352 19.8482H144.136C144.104 18.4922 143.62 17.4267 142.683 16.6518C141.779 15.877 140.536 15.4895 138.954 15.4895C137.243 15.4895 135.871 15.8608 134.838 16.6034C133.837 17.346 133.336 18.363 133.336 19.6545C133.336 20.8168 133.643 21.7208 134.257 22.3665C134.902 22.9799 135.887 23.4319 137.211 23.7225L142.683 24.8848C145.815 25.5305 148.14 26.6444 149.657 28.2264C151.174 29.8085 151.933 31.9878 151.933 34.7644C151.933 37.0244 151.384 39.01 150.287 40.7212C149.189 42.4001 147.623 43.7077 145.589 44.644C143.587 45.548 141.23 46 138.518 46C135.935 46 133.659 45.5641 131.69 44.6924C129.753 43.7884 128.251 42.5292 127.186 40.9149C126.12 39.2683 125.572 37.3634 125.539 35.2003H132.804C132.804 36.5563 133.304 37.6217 134.305 38.3966C135.338 39.1392 136.759 39.5105 138.567 39.5105C140.439 39.5105 141.925 39.1553 143.022 38.445C144.12 37.7024 144.669 36.7177 144.669 35.4908C144.669 34.3931 144.394 33.5537 143.846 32.9725C143.297 32.3591 142.377 31.9232 141.085 31.6649L135.564 30.5026C132.432 29.8569 130.059 28.6462 128.445 26.8704C126.863 25.0947 126.072 22.7701 126.072 19.8966Z"
          fill="url(#paint3_linear_1_2)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_2"
          x1="8.54564"
          y1="104.067"
          x2="-12.5779"
          y2="-169.21"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.104167" stopColor="#44BCF0" />
          <stop offset="0.378895" stopColor="#A099FF" />
          <stop offset="0.854167" stopColor="#7298F8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_2"
          x1="8.54564"
          y1="104.067"
          x2="-12.5779"
          y2="-169.21"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.104167" stopColor="#44BCF0" />
          <stop offset="0.378895" stopColor="#A099FF" />
          <stop offset="0.854167" stopColor="#7298F8" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_2"
          x1="8.54564"
          y1="104.067"
          x2="-12.5779"
          y2="-169.21"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.104167" stopColor="#44BCF0" />
          <stop offset="0.378895" stopColor="#A099FF" />
          <stop offset="0.854167" stopColor="#7298F8" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1_2"
          x1="8.54564"
          y1="104.067"
          x2="-12.5779"
          y2="-169.21"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.104167" stopColor="#44BCF0" />
          <stop offset="0.378895" stopColor="#A099FF" />
          <stop offset="0.854167" stopColor="#7298F8" />
        </linearGradient>
        <clipPath id="clip0_1_2">
          <rect width="152" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SVGLogo({ width }) {
  return (
    <svg
      width={width}
      height={width}
      className="logo"
      viewBox="0 0 462 462"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#fc4f37"
        d="M1 231C1 103.422 104.422 0 232 0C359.495 0 458 101.5 461 230C461 271 447 305.5 412 338C382.424 365.464 332 369.5 295.003 349C268.597 333.767 248.246 301.326 231 277.5L199 326.5H130L195 229.997L132 135H203L231.5 184L259.5 135H331L266 230C266 230 297 277.5 314 296C331 314.5 362 315 382 295C403.989 273.011 408.912 255.502 409 230C409.343 131.294 330.941 52 232 52C133.141 52 53 132.141 53 231C53 329.859 133.141 410 232 410C245.674 410 258.781 408.851 271.5 406L283.5 456.5C265.401 460.558 249.778 462 232 462C104.422 462 1 358.578 1 231Z"
      />
    </svg>
  );
}
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { UButton } from "../UWidgets/UButton";
```
