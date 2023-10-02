---
sidebar_label: Profile Card
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {UProfileCard} from "@site/src/components/UWidgets/UProfileCard";

# Profile Card Button

The `UProfileCard` widget showcases a profile with an image, name, description, and a call-to-action button to contact the person or company through xmtp.

<div className="widget-container">
<UProfileCard
  image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
  description="Hi, I'm Shane, Co-Founder of XMTP."
  domain="shanemac.eth"
  theme="default"
  size="medium"
/>
</div>

### Props

- `domain`: (Required) Your ENS name.
- `walletAddress`: (Required) Your wallet address.
- `image`: (Required) URL or path to the image of the person or company.
- `name`: (Required) Name of the person or company.
- `description`: (Required) A short description.
- `defaultApp`: (Optional) Name of the messaging app for contact.
- `deepLinkApps`: (Optional) An object containing information about different messaging apps.

### Usage

```jsx
<UProfileCard
  image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
  description="Hi, I'm Shane, Co-Founder of XMTP."
  domain="shanemac.eth"
  theme="default"
  size="medium"
/>
```

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js
```

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="UProfileCard.js">

```jsx
import React, { useState } from "react";

export function UProfileCard({
  image,
  name,
  description,
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
  size = "medium",
}) {
  const [showCard, setShowCard] = useState(false);

  const styles = {
    uProfileCardContainer: {
      position: "relative",
      display: "inline-block",
      zIndex: 1,
    },
    uButtonElement: {
      fontWeight: "bold",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 20px",
      borderRadius: "5px",
      marginBottom: "2px",
      border: "none",
      textAlign: "left",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      color: theme === "dark" ? "#ffffff" : "#333333",
      backgroundColor:
        theme === "dark" ? "#333333" : theme === "light" ? "#fff" : "#ededed",
      border: theme === "light" ? "1px solid #333333" : "none",
      fontSize: size === "large" ? "16px" : "12px",
    },
    styledLogo: {
      marginRight: "10px",
      borderRadius: "50%",
      width: "15px",
      height: "15px",
    },
    uProfileCardContent: {
      display: "flex",
      position: "absolute",
      top: "100%",
      left: "0",
      width: "390px",
      padding: "15px",
      backgroundColor: "#ffffff",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    uProfileCardText: {
      padding: "0px",
    },
    uProfileCardImage: {
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      marginRight: "15px",
    },
    title: {
      fontWeight: "bold",
      textAlign: "left",
      fontSize: "14px !important",
      lineHeight: "15px",
      margin: "0px  !important;",
      marginBottom: "0px !important;",
    },
    desc: {
      textAlign: "left",
      fontSize: "14px !important",
      margin: "0px 0px 0px 0px !important;",
      lineHeight: "20px",
    },
    contact: {
      textAlign: "left",
      fontSize: "14px",
      margin: "0px 0px 0px 0px !important;",
      lineHeight: "20px",
      fontSize: "14px !important",
    },
    contactLink: {
      textAlign: "left",
      margin: "0px",
      marginLeft: "5px",
    },
  };
  const selectedApp = deepLinkApps[defaultApp];
  const appUrl = selectedApp
    ? selectedApp.url
        .replace("{walletAddress}", walletAddress)
        .replace("{domain}", domain)
    : "";

  return (
    <div
      style={styles.uProfileCardContainer}
      className={`uprofilecard`}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}>
      <button style={styles.uButtonElement}>
        <SVGLogo parentClass={"uprofilecard"} theme={theme} size={size} />
        {domain}
      </button>
      {showCard && (
        <div style={styles.uProfileCardContent}>
          <img
            style={styles.uProfileCardImage}
            src={image}
            alt={`${name} Icon`}
          />
          <div style={styles.uProfileCardText}>
            <div style={styles.title}>{domain}</div>
            <div style={styles.desc}>{description}</div>
            <div style={styles.contact}>
              Contact me at
              <a
                style={styles.contactLink}
                href={appUrl}
                target="_newtab"
                rel="noopener noreferrer">
                {defaultApp}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
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
import { UProfileCard } from "./UProfileCard";
```
