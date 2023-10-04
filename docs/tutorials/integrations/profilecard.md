---
sidebar_label: Profile Card
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {ProfileCard} from "@site/src/components/Widgets/ProfileCard";

# Profile Card Tutorial

This tutorial will guide you through the process of creating a `ProfileCard` widget. This widget displays a profile with an image, name, description, and a call-to-action button to contact the person or company through XMTP.

<div className="widget-container">
<ProfileCard
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
  description="Hi, I'm Shane, Co-Founder of XMTP."
  image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
  theme="default"
  size="medium"
/>
</div>

### Props

- `domain`: (Required) Your ENS name.
- `walletAddress`: (Required) Your wallet address.
- `image`: (Required) URL or path to the image of the person or company.
- `description`: (Required) A short description.
- `defaultApp`: (Optional) Name of the messaging app for contact.
- `deepLinkApps`: (Optional) An object containing information about different messaging apps.

### Usage

```jsx
<ProfileCard
  domain="shanemac.eth"
  walletAddress="0x7E0b0363404751346930AF92C80D1fef932Cc48a"
  description="Hi, I'm Shane, Co-Founder of XMTP."
  image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
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
<TabItem value="index" label="ProfileCard.js">

```jsx
import React, { useState } from "react";
// This is the ProfileCard component. It displays a profile with an image, name, description, and a call-to-action button to contact the person or company through XMTP.
export function ProfileCard({
  image,
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

  // These are the styles for the ProfileCard component.
  const styles = {
    ProfileCardContainer: {
      position: "relative",
      display: "inline-block",
      zIndex: 1,
    },
    ButtonElement: {
      fontWeight: "bold",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 20px",
      borderRadius: "5px",
      marginBottom: "2px",
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
    ProfileCardContent: {
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
    ProfileCardText: {
      padding: "0px",
    },
    ProfileCardImage: {
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

  // This is the return statement for the ProfileCard component. It includes the layout and functionality of the component.
  return (
    <div
      style={styles.ProfileCardContainer}
      className={`ProfileCard`}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}>
      <button style={styles.ButtonElement}>{domain}</button>
      {showCard && (
        <div style={styles.ProfileCardContent}>
          <img style={styles.ProfileCardImage} src={image} />
          <div style={styles.ProfileCardText}>
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
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { ProfileCard } from "./ProfileCard";
```

#### Deep Link Apps

In the `src/deepLinkApps.js` file, we have a `deepLinkApps` object that contains information about different messaging apps.

```jsx
//Alphabetical order
export const deepLinkApps = {
  xmtp: {
    url: `https://xmtp.chat/dm/{walletAddress}`,
    icon: "https://xmtp.chat/favicon.ico",
    device: ["Desktop"],
    name: "xmtp",
  },
  CustomApp: {
    url: `https://xmtp-react-widgets.vercel.app/link/{walletAddress}`,
    icon: "https://xmtp-react-widgets.vercel.app/link/favicon.ico",
    device: ["All"],
    name: "Custom App",
  },
};
```

**Props**

- `url`: The URL for direct messaging in the app. The `{walletAddress}` placeholder will be replaced with the actual wallet address.
- `name`: The descriptive name of the app.
- `icon`: The URL of the app's favicon.
- `device`: An array of operating systems where the app is available. "All" means the app is available on all operating systems.

**Usage**

This custom configuration works with `Button`, `Connect` and `ProfileCard`. All widgets that have deeplinking use case.

```jsx
<Button
 /*Other props*/
defaultApp = "CustomApp";
deepLinkApps = { deepLinkApps };
/>
```

This way, contributors can easily add new apps by modifying the `deepLinkApps.js` file through PR's.
