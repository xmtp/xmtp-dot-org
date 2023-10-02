---
sidebar_label: Contact Link
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {UConnect} from "@site/src/components/UWidgets/UConnect";

# Contact Link

The `UConnect` widget serves as a contact button, typically positioned in the header or footer of business websites for optimal visibility and accessibility.

<div className="widget-container">
<UConnect
domain="shanemac.eth"
walletAddress="0xUserWalletAddress"
defaultApp="xmtp"
theme={"light"}
size={"default"}
showText={true}
/>
</div>

### Props

- `domain`: (Required) Your ENS name.
- `walletAddress`: (Required) Your wallet address.
- `theme`: (Optional) Set the theme. Available options: 'dark', 'light', 'default'.
- `deepLinkApps`: (Optional) An object containing information about different messaging apps.

### Usage

Here's a simple example of how to use the UConnect component:

```jsx
<UConnect
  domain="shanemac.eth"
  walletAddress="0xUserWalletAddress"
  defaultApp="xmtp"
  theme={"light"}
  size={"default"}
  showText={true}
/>
```

### Installation

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="UConnect.js">

```jsx
import React from "react";

const styles = {
  uConnect: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0px",
    backgroundColor: "transparent",
    color: "#000",
    textDecoration: "none",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  },
};

export function UConnect({
  domain,
  walletAddress,
  defaultApp = "xmtp",
  deepLinkApps = {
    xmtp: {
      url: `https://xmtp-react-widgets.vercel.app/link/${domain}`,
      icon: "https://xmtp.chat/favicon.ico",
      device: ["All"],
      name: "xmtp",
    },
  },
  theme = "default",
  size = "small",
  showText = true,
}) {
  const selectedApp = deepLinkApps[defaultApp];

  return (
    <>
      <a
        href={selectedApp.url
          .replace("{walletAddress}", walletAddress)
          .replace("{domain}", domain)}
        target="_newtab"
        rel="noopener noreferrer"
        style={styles.uConnect}
        className={`uconnect ${theme}`}>
        <SVGLogo parentClass="uconnect" size={size} theme={theme} />
        {showText && domain}
      </a>
    </>
  );
}

function SVGLogo({ parentClass, size, theme }) {
  const color =
    theme === "dark" ? "#fc4f37" : theme === "light" ? "#fc4f37" : "#fc4f37";

  const hoverColor =
    theme === "dark" ? "#fff" : theme === "light" ? "#000" : "#000";

  const uniqueClassLogo = `logo-${Math.random().toString(36).substr(2, 9)}`;

  const logoStyles = {
    container: {
      width: size === "large" ? "16px" : size === "medium" ? "12px" : "15px",
      marginRight: "5px",
      marginTop: "0px",
    },
    logo: `
        .${uniqueClassLogo} {
          transition: transform 0.5s ease;
        }
  
        .${parentClass}:hover .${uniqueClassLogo} {
          transform: rotate(360deg);
        }
  
        .${parentClass}:hover .${uniqueClassLogo} path {
          fill: ${hoverColor};
        }
      `,
  };

  return (
    <>
      <style>{logoStyles.logo}</style>
      <svg
        className={"logo " + uniqueClassLogo}
        style={logoStyles.container}
        viewBox="0 0 462 462"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill={color}
          d="M1 231C1 103.422 104.422 0 232 0C359.495 0 458 101.5 461 230C461 271 447 305.5 412 338C382.424 365.464 332 369.5 295.003 349C268.597 333.767 248.246 301.326 231 277.5L199 326.5H130L195 229.997L132 135H203L231.5 184L259.5 135H331L266 230C266 230 297 277.5 314 296C331 314.5 362 315 382 295C403.989 273.011 408.912 255.502 409 230C409.343 131.294 330.941 52 232 52C133.141 52 53 132.141 53 231C53 329.859 133.141 410 232 410C245.674 410 258.781 408.851 271.5 406L283.5 456.5C265.401 460.558 249.778 462 232 462C104.422 462 1 358.578 1 231Z"
        />
      </svg>
    </>
  );
}
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { UConnect } from "./UConnect";
```
