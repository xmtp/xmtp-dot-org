---
sidebar_label: UProfileCard
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {UProfileCard} from "@site/src/components/UWidgets/UProfileCard";

# Profile Card Button

<div className="widget-container">
<UProfileCard
  image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
  description="Hi, I'm Shane, Co-Founder of XMTP."
  domain="shanemac.eth"
  theme="default"
  size="medium"
/>
</div>

The UProfileCard widget is a React component that showcases a profile with an image, name, description, and a call-to-action button to contact the person or company through various messaging apps.

## **Usage**

Here's a simple example of how to use the UProfileCard component:

```jsx
<UProfileCard
  image="https://pbs.twimg.com/profile_images/1561559544148500480/lBJtF9DK_400x400.jpg"
  description="Hi, I'm Shane, Co-Founder of XMTP."
  domain="shanemac.eth"
  theme="default"
  size="medium"
/>
```

### **Props**

- **`domain`**: (Required) Your ENS name.
- **`walletAddress`**: (Required) Your wallet address.
- **`image`**: (Required) URL or path to the image of the person or company.
- **`name`**: (Required) Name of the person or company.
- **`description`**: (Required) A short description.
- **`defaultApp`**: (Optional) Name of the messaging app for contact.
- **`deepLinkApps`**: (Optional) An object containing information about different messaging apps.

### Installation

Install required dependencies

```bash
npm install @xmtp/xmtp-js styled-components
```

Copy paste the component into your project

<Tabs >
<TabItem value="index" label="UProfileCard.js">

```jsx
import React, { useState } from "react";
import styled from "styled-components";

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

  const selectedApp = deepLinkApps[defaultApp];
  // Add a check to ensure selectedApp is defined before accessing its properties
  const appUrl = selectedApp
    ? selectedApp.url
        .replace("{walletAddress}", walletAddress)
        .replace("{domain}", domain)
    : "";

  return (
    <UProfileCardContainer
      className={`${theme} ${size}`}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}>
      <UButtonElement>
        <StyledLogo className="logo" />
        {domain}
      </UButtonElement>

      {showCard && (
        <UProfileCardContent>
          <UProfileCardImage src={image} alt={`${name} Icon`} />
          <UProfileCardText>
            <Title>{domain}</Title>
            <Desc>{description}</Desc>
            <Contact>
              Contact me at{" "}
              <ContactLink
                href={appUrl}
                target="_newtab"
                rel="noopener noreferrer">
                {defaultApp}
              </ContactLink>
            </Contact>
          </UProfileCardText>
        </UProfileCardContent>
      )}
    </UProfileCardContainer>
  );
}

const LogoIcon = styled.svg`
  width: ${({ size }) => {
    if (size === "large") return "16px";
    if (size === "medium") return "12px";
    return "10px"; // medium and small
  }};

  margin-right: 5px;
  transition: all 0.5s ease;
`;
function SVGLogo({ theme, size }) {
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
const UProfileCardContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;
  &.default .uprofilecard-button,
  &.default .uprofilecard-button-list li a {
    color: #333333;
  }
  &.default .uprofilecard-button,
  &.default .uprofilecard-button-list {
    background-color: #ededed;
  }
`;

const UButtonElement = styled.button`
  font-weight: bold;
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
    return "12px"; // medium and small
  }};

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

const StyledLogo = styled(SVGLogo)`
  margin-right: 10px;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  /* ... */
`;

const UProfileCardContent = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  width: 350px;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* ... */
`;

const UProfileCardText = styled.div`
  padding: 0px;
`;

const UProfileCardImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const Title = styled.p`
  font-weight: bold;
  text-align: left;
  margin: 0px !important;
  font-size: 14px !important;
  line-height: 15px;
`;

const Desc = styled.p`
  text-align: left;
  font-size: 14px !important;
  margin: 0px !important;
  line-height: 20px;
`;

const Contact = styled.p`
  text-align: left;
  font-size: 14px;
  margin: 0px !important;
  line-height: 20px;
  font-size: 14px !important;
`;

const ContactLink = styled.a`
  text-align: left;
  font-size: 14px;
  margin: 0px;
`;
```

</TabItem>
</Tabs>

Import the component into your project

```jsx
import { UProfileCard } from "./UProfileCard";
```
