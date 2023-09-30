import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { Client } from "@xmtp/xmtp-js";
import { AvatarResolver } from "@ensdomains/ens-avatar";

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
  const [walletAddress, setWalletAddress] = useState(initialWalletAddress);

  const [deviceSpecificApps, setDeviceSpecificApps] = useState([]);

  const styles = {
    avatar: {
      borderRadius: "50%",
      width: "100px",
      cursor: "pointer",
    },
    uLinkWrapper: {
      maxWidth: "800px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    uLinkContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      pointerEvents: "auto",
      margin: "0 auto",
      paddingTop: "30px",
      paddingBottom: "30px",
    },
    linkDomain: {
      fontSize: "3rem",
      fontWeight: "700",
      lineHeight: "1em",
      textAlign: "center",
      marginBottom: "0.5em",
      marginTop: "40px",
    },
    instructions: {
      marginBottom: "2rem",
      textAlign: "center",
      fontSize: "1.3rem",
      width: "90%",
    },
    listItemButton: {
      fontWeight: "bold",
      display: "inline-flex",
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "auto",
      padding: "12px 20px",
      borderRadius: "20px",
      border: "1px solid #333333",
      color: "#000",
      fontSize: "1.3rem",
      fontWeight: "500",
      transition: "color 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      textDecoration: "none",
      backgroundColor: "white",
      marginBottom: "30px",
      cursor: "pointer",
    },
    uLinkIcon: {
      width: "28px",
      height: "28px",
      marginRight: "8px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "transform 0.5s ease",
    },
  };

  let { domain } = useParams();
  domain = domain || "shanemac.eth";

  useEffect(() => {
    const devicep = detectDevice(device);
    const deepLinkAppsArray = Object.values(deepLinkApps);
    const filteredApps = filterAppsByDevice(deepLinkAppsArray, devicep);
    setDeviceSpecificApps(filteredApps);
  }, []);

  const [avatar, setAvatar] = useState(null);

  const resolveDomainToAddress = async () => {
    try {
      const provider = new ethers.providers.CloudflareProvider();
      const resolvedAddress = await provider.resolveName(domain);
      const isEthDomain = /\.eth$/.test(domain);
      const isValidEthereumAddress = /^0x[a-fA-F0-9]{40}$/.test(
        resolvedAddress,
      );

      if (resolvedAddress && isEthDomain && isValidEthereumAddress) {
        setWalletAddress(resolvedAddress);
        const avt = new AvatarResolver(provider);
        const avatarURI = await avt.getAvatar(domain);
        setAvatar(avatarURI);
      } else {
        setWalletAddress(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (domain) {
      resolveDomainToAddress();
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

  const [canMessage, setCanMessage] = useState(null);
  useEffect(() => {
    const checkCanMessage = async () => {
      const result = await Client.canMessage(walletAddress);
      setCanMessage(result);
    };

    checkCanMessage();
  }, [walletAddress]);

  return (
    <>
      <style>
        {`
        .uLinkContainer::before {
          content: "";
          position: absolute;
          top: 0px;
          left: 0;
          right: 0;
          height: 80px;
          background-color: rgb(56, 136, 255);
          z-index: -1;
          @media (max-width: 799px) {
            height: 80px;
          }
        }
        
      `}
      </style>
      <div className="uLinkContainer" style={styles.uLinkContainer}>
        <style>
          {`
        
          .listItemButton:hover .logo {
            transform: rotate(360deg);
          }
        `}
        </style>
        {avatar ? (
          <img
            style={styles.avatar}
            src={avatar}
            alt="User Avatar"
            width={100}
          />
        ) : (
          <SVGLogo parentClass={"ulink"} theme={"default"} size={"default"} />
        )}
        <div style={styles.uLinkWrapper}>
          <div style={styles.linkDomain}>{domain}</div>
          <div style={styles.instructions}>
            Just send a message to <b>{domain} </b>
            using your preferred XMTP inbox, and hit send!
          </div>
          {canMessage !== null && (
            <>
              {canMessage ? (
                deviceSpecificApps.map((app, index) => (
                  <a
                    style={styles.listItemButton}
                    key={index}
                    className="listItemButton"
                    target="_newtab"
                    href={app.url
                      .replace("{walletAddress}", walletAddress)
                      .replace("{domain}", domain)}
                    theme={theme}
                    size={size}>
                    <img
                      style={styles.uLinkIcon}
                      src={app.icon}
                      alt={`${app.name} Icon`}
                      width="50px"
                      className="logo"
                    />
                    Message on {app.name}
                  </a>
                ))
              ) : (
                <p>
                  You cannot send a message bacause this walet is not on the
                  xmtp network.
                </p>
              )}
            </>
          )}
        </div>
      </div>
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
      width: size === "large" ? "160px" : size === "medium" ? "100px" : "70px",
      marginRight: "5px",
      marginTop: "3px",
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
