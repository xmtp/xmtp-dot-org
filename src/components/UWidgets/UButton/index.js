import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Client } from "@xmtp/xmtp-js";

export function UButton({
  domain,
  walletAddress,
  deepLinkApps = {
    xmtp: {
      url: `https://xmtp.chat/dm/${walletAddress}`,
      icon: "https://xmtp.chat/favicon.ico",
      device: ["All"],
      name: "xmtp.chat",
    },
  },
  theme = "default",
  size = "medium",
  device = "All",
}) {
  const [deviceSpecificApps, setDeviceSpecificApps] = useState([]);
  const [showApps, setShowApps] = useState(false);

  useEffect(() => {
    const devicep = detectDevice(device);
    const deepLinkAppsArray = Object.values(deepLinkApps);
    const filteredApps = filterAppsByDevice(deepLinkAppsArray, devicep);
    setDeviceSpecificApps(filteredApps);
  }, []);

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

  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    let maxTextLength = 0;

    // Find the longest app.name
    deviceSpecificApps.forEach((app) => {
      const len = app.name.length;
      if (len > maxTextLength) {
        maxTextLength = len;
      }
    });

    // Base width (padding, margin, etc) + (8 pixels per character * maxTextLength)
    const estimatedWidth = 100 + 18 * maxTextLength;
    console.log(estimatedWidth);
    setMaxWidth(estimatedWidth);
  }, [deviceSpecificApps]);
  if (!canMessage) {
    return null;
  }

  return (
    <UButtonContainer>
      <UButtonElement
        theme={theme}
        size={size}
        onClick={() => setShowApps(!showApps)}>
        <SVGLogo theme={theme} size={size} />
        {`${domain}`}
        <CopyPasteIcon
          walletAddress={walletAddress}
          theme={theme}
          size={size}
        />
      </UButtonElement>
      {showApps && (
        <UButtonList
          theme={theme}
          size={size}
          style={{ minWidth: `${maxWidth}px` }}>
          {deviceSpecificApps.map((app, index) => (
            <li key={index}>
              <UButtonIcon src={app.icon} alt={`${app.name} Icon`} />
              <a
                href={app.url
                  .replace("{walletAddress}", walletAddress)
                  .replace("{domain}", domain)}
                target="_newtab"
                rel="noopener noreferrer">
                Message on {app.name}
              </a>
            </li>
          ))}
        </UButtonList>
      )}
    </UButtonContainer>
  );
}

const UButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 5px;
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
const UButtonList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  border-radius: 5px;
  position: absolute;
  top: 100%;
  left: 0;
  text-align: left;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
  li {
    padding: 10px;
    display: flex;
    background: transparent;
    align-items: center;

    &:last-child {
      border-bottom: none;
    }

    a {
      text-decoration: none;
      font-size: 1.2rem !important;
    }

    img {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
  li a {
    color: ${({ theme }) => {
      if (theme === "dark") return "#ffffff";
      return "#333333"; // default and light
    }};
  }

  background-color: ${({ theme }) => {
    if (theme === "dark") return "#333333";
    if (theme === "light") return "#fff";
    return "#ededed"; // default
  }};

  border: ${({ theme }) => (theme === "light" ? "1px solid #333333" : "none")};

  li a {
    font-size: ${({ size }) => {
      if (size === "large") return "16px";
      return "12px"; // medium and small
    }};
  }
`;

const UButtonIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

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

const CopyPasteIconContainer = styled.div`
  width: ${({ size }) => {
    if (size === "large") return "16px";
    if (size === "medium") return "12px";
    return "10px"; // medium and small
  }};
  margin-left: 5px;
`;

function CopyPasteIcon({ walletAddress, size }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (event) => {
    event.stopPropagation();
    console.log(walletAddress);
    navigator.clipboard.writeText(walletAddress).then(
      () => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      },
      (err) => {
        console.error("Failed to copy wallet address:", err);
      },
    );
  };

  return (
    <CopyPasteIconContainer
      size={size}
      className={isCopied ? "copied" : ""}
      onClick={(event) => handleCopyClick(event)}>
      {isCopied ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9 16.2l-4.6-4.6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.6 5.6c.2.2.5.2.7 0l11.6-11.6c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9 16.2z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 96 96">
          <path
            fill="currentColor"
            d="M50 96c-7.732 0-14-6.268-14-14V42c0-7.732 6.268-14 14-14h24c7.732 0 14 6.268 14 14v40c0 7.732-6.268 14-14 14H50Zm-2-14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V42a2 2 0 0 0-2-2H50a2 2 0 0 0-2 2v40Z"></path>
          <path
            fill="currentColor"
            d="M22 0C14.268 0 8 6.268 8 14v40c0 7.732 6.268 14 14 14a6 6 0 0 0 0-12 2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2 6 6 0 0 0 12 0c0-7.732-6.268-14-14-14H22Z"></path>
        </svg>
      )}
    </CopyPasteIconContainer>
  );
}
