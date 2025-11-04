import React, { useEffect, useState, useRef } from "react";

const BuiltWithXmtp = () => {
  const [imageOffset, setImageOffset] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);
  const [activeSection, setActiveSection] = useState(0);
  const textSectionRef = useRef(null);
  const scrollSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textSectionRef.current && scrollSectionRef.current) {
        const textSectionRect = textSectionRef.current.getBoundingClientRect();
        const scrollSectionRect = scrollSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if text section has been fully scrolled past (its bottom has passed viewport top)
        // This means the entire text section was visible and is now above the viewport
        const textSectionFullyScrolledPast = textSectionRect.bottom <= 0;
        
        // Only start animating image after the entire text section has been in view and scrolled past
        if (textSectionFullyScrolledPast && scrollSectionRect.bottom > 0) {
          const scrollSectionTop = scrollSectionRect.top;
          const scrollSectionHeight = scrollSectionRect.height;
          
          // The section is 200vh (windowHeight * 2) tall
          // Image starts from the very bottom of the section and moves to center (0)
          // The bottom of the section would be at scrollSectionHeight from the top
          const startOffset = scrollSectionHeight; // Start from bottom of the section
          
          // Calculate scroll progress through the section
          // When scroll section first enters viewport: scrollSectionTop = windowHeight
          // As we scroll, scrollSectionTop decreases
          // When we've scrolled the full section height: scrollSectionTop = windowHeight - scrollSectionHeight
          
          const sectionEnterPoint = windowHeight; // When section top reaches viewport top
          const scrollRange = scrollSectionHeight; // Full height to scroll through
          
          // Calculate how far past the entry point we've scrolled
          const scrolledPastEntry = sectionEnterPoint - scrollSectionTop;
          const progress = Math.max(0, Math.min(1, scrolledPastEntry / scrollRange));
          
          // Map progress to image offset: start at scrollSectionHeight (bottom), end at 0 (center)
          const newOffset = startOffset - (progress * startOffset);
          setImageOffset(newOffset);
          
          // Fade out text as image scrolls in (opacity goes from 1 to 0.25 as progress goes from 0 to 1)
          const newOpacity = 1 - (progress * 0.9);
          setTextOpacity(newOpacity);
        } else {
          // Keep image at bottom of section until text section has been fully scrolled past
          if (scrollSectionRef.current) {
            const scrollSectionHeight = scrollSectionRef.current.getBoundingClientRect().height;
            setImageOffset(scrollSectionHeight);
          } else {
            setImageOffset(window.innerHeight * 2); // Fallback to 200vh
          }
          // Keep text fully visible
          setTextOpacity(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
    <div ref={textSectionRef} className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFFEEA]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="font-satoshi font-normal text-[56px] leading-[64px] tracking-[-2px] text-gray-900 text-center">
          Our mission is to increase the world's freedom to communicate.
        </h1>
        <h2 className="font-satoshi font-normal mt-6 text-[40px] leading-[56px] tracking-tight text-gray-900 text-center">
          Every idea, every movement, every revolution has started with a message; one person reaching out to another and saying something new. But somewhere along the way, we lost that freedom. Our words were captured. Our messages were mined. Our voices were filtered, ranked, and sold. Technology promised connection and delivered control. Promised openness and instead built walls. It's time to take it back. XMTP is that new foundation — a <span className="font-bold underline">decentralized</span>, <span className="font-bold underline">private</span>, and <span className="font-bold underline">permissionless protocol</span> for messaging. One that belongs to everyone, not anyone. One that can't be turned off, sold out, or censored. And now, your words can move money. Freedom doesn't ask for permission.
          <br />
          It moves through every message sent.
          <br />
          <br />
          <span className="font-bold">The future of freedom begins here.</span>
        </h2>
      </div>        
    </div> 
    <div 
      ref={scrollSectionRef}
      className="relative px-24 left-1/2 right-1/2 -mx-[50vw] w-screen tracking-tight transition-colors duration-500 ease-in-out"
      style={{ 
        height: '200vh',
        backgroundColor: activeSection === 1 ? '#0000FF' : activeSection === 2 ? '#E54D01' : '#FFFEEA'
      }}
    >
      {/* Sticky text container - stays fixed while image scrolls */}
      <div className="sticky top-0 h-screen flex flex-col items-center z-10 overflow-hidden">
        <div className="mx-auto px-4 py-12 w-full relative flex-1 flex flex-col items-center">
          <div className="flex-1 flex items-center justify-center">
          <p 
            className="mx-auto max-w-6xl font-satoshi font-normal text-center tracking-tight text-gray-900 text-[112px] leading-[112px] relative z-20"
            style={{ opacity: textOpacity, willChange: 'opacity' }}
          >
            The next generation of messengers build with the future of identity and money
          </p>
          </div>

          {/* Scrolling sections container */}
          <div 
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
            style={{
              transform: `translateY(${imageOffset}px)`,
            }}
          >
            {/* Segmented Controller - positioned below content sections */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-auto">
              <div className="inline-flex rounded-full p-0.5" style={{ backgroundColor: '#fafafa' }}>
                {[
                  { name: 'World', icon: (
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18.0167 1.60446c-1.8384-1.069641-3.844-1.60446-6.0167-1.60446s-4.17827.534819-6.01671 1.60446c-1.83844 1.06963-3.3092 2.54039-4.37883 4.37883-1.069641 1.83844-1.60446 3.84401-1.60446 6.01671s.534819 4.1783 1.60446 6.0167c1.06963 1.8385 2.54039 3.3092 4.37883 4.3788 1.83844 1.0697 3.84401 1.6045 6.01671 1.6045s4.1783-.5348 6.0167-1.6045c1.8385-1.0696 3.3092-2.5403 4.3788-4.3788 1.0697-1.8384 1.6045-3.844 1.6045-6.0167s-.5348-4.17827-1.6045-6.01671c-1.0696-1.83844-2.5403-3.3092-4.3788-4.37883zm-5.2813 14.74094c-1.3705 0-2.4401-.4011-3.27579-1.1699-.56825-.5348-.93593-1.1699-1.10306-1.9387h12.96935c-.1337 1.103-.468 2.1392-.9359 3.1086h-7.6212zm-4.37885-5.5487c.16713-.7354.53481-1.40394 1.10306-1.93876.83569-.7688 1.90529-1.16992 3.27579-1.16992h7.6546c.5014.96936.8022 2.00557.9359 3.10868zm-4.47911-3.57664c.83565-1.43733 1.97214-2.60725 3.40947-3.4429 1.43732-.83566 3.00839-1.2702 4.74649-1.2702 1.7382 0 3.3092.43454 4.7465 1.2702.7354.43454 1.3705.93593 1.9722 1.5376h-6.0502c-1.3704 0-2.6072.30084-3.67683.86908-1.06964.56825-1.90529 1.37048-2.47354 2.37326-.40111.70195-.66852 1.4708-.80223 2.273h-2.97493c.13371-1.27021.53482-2.47355 1.16992-3.57662zm12.86906 13.00274c-1.4373.8357-3.0083 1.2702-4.7465 1.2702s-3.30919-.4345-4.74652-1.2702c-1.43732-.8356-2.57381-2.0055-3.40947-3.4429-.6351-1.103-1.03621-2.2729-1.16992-3.5431h2.97493c.13371.8022.40112 1.571.80223 2.2729.60167 1.0028 1.43733 1.7716 2.47354 2.3733 1.06964.5683 2.30641.8691 3.67691.8691h6.0167c-.5683.5682-1.2034 1.0696-1.9053 1.4707z" fill="#fff"/></svg>
                  )},
                  { name: 'Base App', icon: (                    
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_165_59)">
                    <path d="M0.0001875 1.896C0.0001875 1.2465 0.000187504 0.921937 0.122625 0.672C0.239812 0.43275 0.433125 0.239437 0.672375 0.12225C0.922125 0 1.24669 0 1.89619 0H22.1042C22.7535 0 23.0784 0 23.3282 0.122437C23.5672 0.239625 23.7606 0.432937 23.8779 0.672187C24.0002 0.921937 24.0002 1.24669 24.0002 1.89619V22.1042C24.0002 22.7535 24.0002 23.0784 23.8779 23.3282C23.7606 23.5672 23.5672 23.7606 23.3282 23.8779C23.0784 24.0002 22.7535 24.0002 22.1042 24.0002H1.89619C1.24669 24.0002 0.922125 24.0002 0.672187 23.8779C0.432937 23.7606 0.239625 23.5672 0.122437 23.3282C0 23.0784 0 22.7535 0 22.1042V1.896H0.0001875Z" fill="#0000FF"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_165_59">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                  )},
                  { name: 'Convos', icon: (                    
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7328 13.1188L17.7743 16.1537L16.1882 17.7363L13.1467 14.7014V18.9933H10.9043V14.7434L7.90484 17.7363L6.31877 16.1537L9.36027 13.1188H5.01564V10.8812H9.31694L6.27544 7.84634L7.86151 6.26372L10.9036 9.29924V5.00665H13.1461V9.34185L16.2303 6.26435L17.8163 7.84697L14.7748 10.8819H23.9987C23.4341 4.77838 18.2898 0 12.0264 0C5.38459 0 0 5.3729 0 11.9997C0 18.6265 5.38459 24 12.0264 24C18.2904 24 23.4348 19.2216 24 13.1188H14.7334H14.7328Z" fill="#E54D01"/>
                    </svg>
                  )},
                  { name: 'Zora', icon: (                  
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <g clipPath="url(#clip0_165_63)">
                        <mask id="mask0_165_63" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                          <path d="M23.9877 0.012207H0.0117188V23.9882H23.9877V0.012207Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_165_63)">
                          <mask id="mask1_165_63" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <path d="M11.9923 23.9733C18.6089 23.9733 23.9728 18.6094 23.9728 11.9928C23.9728 5.37607 18.6089 0.012207 11.9923 0.012207C5.37559 0.012207 0.0117188 5.37607 0.0117188 11.9928C0.0117188 18.6094 5.37559 23.9733 11.9923 23.9733Z" fill="#D9D9D9"/>
                          </mask>
                          <g mask="url(#mask1_165_63)">
                            <path d="M28.0328 -5.19678H-3.68555V26.5216H28.0328V-5.19678Z" fill="#A1723A"/>
                            <g filter="url(#filter0_f_165_63)">
                              <path d="M12.9074 23.4692C19.9682 23.4692 25.6919 17.747 25.6919 10.6885C25.6919 3.62984 19.9682 -2.09229 12.9074 -2.09229C5.84684 -2.09229 0.123047 3.62984 0.123047 10.6885C0.123047 17.747 5.84684 23.4692 12.9074 23.4692Z" fill="#531002"/>
                            </g>
                            <g filter="url(#filter1_f_165_63)">
                              <path d="M14.286 19.4238C20.0127 19.4238 24.6552 14.7797 24.6552 9.05103C24.6552 3.32227 20.0127 -1.32178 14.286 -1.32178C8.5594 -1.32178 3.91699 3.32227 3.91699 9.05103C3.91699 14.7797 8.5594 19.4238 14.286 19.4238Z" fill="#2B5DF0"/>
                            </g>
                            <g filter="url(#filter2_f_165_63)">
                              <path d="M14.097 20.0168C20.0672 20.0168 24.9068 15.1754 24.9068 9.20327C24.9068 3.23106 20.0672 -1.61035 14.097 -1.61035C8.12688 -1.61035 3.28711 3.23106 3.28711 9.20327C3.28711 15.1754 8.12688 20.0168 14.097 20.0168Z" fill="url(#paint0_radial_165_63)"/>
                            </g>
                            <g filter="url(#filter3_f_165_63)">
                              <path d="M15.89 11.926C18.8977 11.926 21.3357 9.48796 21.3357 6.48036C21.3357 3.47279 18.8977 1.03467 15.89 1.03467C12.8824 1.03467 10.4443 3.47279 10.4443 6.48036C10.4443 9.48796 12.8824 11.926 15.89 11.926Z" fill="#FCB8D4"/>
                            </g>
                            <g filter="url(#filter4_f_165_63)">
                              <path d="M15.8865 8.65091C17.0876 8.65091 18.0611 7.67734 18.0611 6.47634C18.0611 5.27535 17.0876 4.30176 15.8865 4.30176C14.6855 4.30176 13.7119 5.27535 13.7119 6.47634C13.7119 7.67734 14.6855 8.65091 15.8865 8.65091Z" fill="white"/>
                            </g>
                            <g filter="url(#filter5_f_165_63)">
                              <path d="M14.441 28.189C25.2335 28.189 33.9826 19.44 33.9826 8.64752C33.9826 -2.14497 25.2335 -10.894 14.441 -10.894C3.64848 -10.894 -5.10059 -2.14497 -5.10059 8.64752C-5.10059 19.44 3.64848 28.189 14.441 28.189Z" fill="url(#paint1_radial_165_63)" fillOpacity="0.9"/>
                            </g>
                          </g>
                        </g>
                      </g>
                      <defs>
                        <filter id="filter0_f_165_63" x="-2.8406" y="-5.05593" width="31.4956" height="31.4888" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="1.48182" result="effect1_foregroundBlur_165_63"/>
                        </filter>
                        <filter id="filter1_f_165_63" x="-2.01031" y="-7.24908" width="32.5929" height="32.6002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="2.96365" result="effect1_foregroundBlur_165_63"/>
                        </filter>
                        <filter id="filter2_f_165_63" x="1.06437" y="-3.83309" width="26.0656" height="26.0724" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="1.11137" result="effect1_foregroundBlur_165_63"/>
                        </filter>
                        <filter id="filter3_f_165_63" x="5.99886" y="-3.4108" width="19.7825" height="19.7825" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="2.22274" result="effect1_foregroundBlur_165_63"/>
                        </filter>
                        <filter id="filter4_f_165_63" x="10.7483" y="1.33812" width="10.2769" height="10.2764" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="1.48182" result="effect1_foregroundBlur_165_63"/>
                        </filter>
                        <filter id="filter5_f_165_63" x="-7.32333" y="-13.1168" width="43.5285" height="43.5285" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="1.11137" result="effect1_foregroundBlur_165_63"/>
                        </filter>
                        <radialGradient id="paint0_radial_165_63" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.9203 6.15254) rotate(128.228) scale(20.4158 20.4141)">
                          <stop offset="0.286458" stopColor="#387AFA"/>
                          <stop offset="0.647782" stopColor="#387AFA" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial_165_63" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.441 8.64752) rotate(90) scale(19.5416)">
                          <stop offset="0.598958" stopOpacity="0"/>
                          <stop offset="0.671875"/>
                          <stop offset="0.734375" stopOpacity="0"/>
                        </radialGradient>
                        <clipPath id="clip0_165_63">
                          <rect width="24" height="24" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    type="button"
                    className={`inline-flex items-center gap-3 px-6 py-2 text-base font-satoshi font-semibold tracking-tight transition-all duration-200 ease-out rounded-full border-0 outline-none ${
                      activeSection === index
                        ? 'text-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]'
                        : 'font-normal text-gray-900 hover:text-gray-700 bg-transparent cursor-pointer'
                    }`}
                    style={activeSection === index ? { backgroundColor: '#000000' } : {}}
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Section 1 */}
            <div 
              className={`absolute flex flex-col items-center justify-center transition-opacity duration-500 ${
                activeSection === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img 
                src="/img/worldiPhone.png" 
                alt="Section 1 Image" 
                className="max-w-full h-auto object-contain"
                style={{ height: '60vh' }}
              />
              <div className="mt-4 mb-8 max-w-2xl flex flex-col items-center">
                <img 
                  src="/img/worldLogo.svg" 
                  alt="Section 1 Logo" 
                  className="h-auto block"
                  style={{ height: '2em' }}
                />
                <h3 className="font-satoshi font-normal text-center text-gray-900 text-lg leading-7 mt-4">
                  World App combines Proof of Humanity with XMTP's secure messaging to create the world's first, verified human messaging network.
                </h3>
                <img 
                  src="/img/apple-store.svg" 
                  alt="Section 1 Badge" 
                  className="h-auto block"
                  style={{ height: '2.5em' }}
                />
              </div>
            </div>

            {/* Section 2 */}
            <div 
              className={`absolute flex flex-col items-center justify-center transition-opacity duration-500 ${
                activeSection === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img 
                src="/img/baseiPhone.png" 
                alt="Section 2 Image" 
                className="max-w-full h-auto object-contain"
                style={{ height: '60vh' }}
              />
              <div className="mt-4 mb-8 max-w-xl flex flex-col items-center">
                <img 
                  src="/img/Base_lockup_white.svg" 
                  alt="Section 2 Logo" 
                  className="h-auto block"
                  style={{ height: '2em' }}
                />
                <h3 className="font-satoshi font-normal text-center text-white text-lg leading-7 mt-4">
                  Base App is powered by XMTP's secure messaging, to create the world's first, verified human messaging network.
                </h3>
                <img 
                  src="/img/apple-store.svg" 
                  alt="Section 2 Badge" 
                  className="h-auto block"
                  style={{ height: '2.5em' }}
                />
              </div>
            </div>

            {/* Section 3 */}
            <div 
              className={`absolute flex flex-col items-center justify-center transition-opacity duration-500 ${
                activeSection === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img 
                src="/img/convosiPhone.png" 
                alt="Section 3 Image" 
                className="max-w-full h-auto object-contain"
                style={{ height: '60vh' }}
              />
              <div className="mt-4 mb-8 max-w-xl flex flex-col items-center">
                <img 
                  src="/img/convosLogoBlack.svg" 
                  alt="Section 3 Logo" 
                  className="h-auto block"
                  style={{ height: '2em' }}
                />
                <h3 className="font-satoshi font-normal text-center text-black text-lg leading-7 mt-4">
                  Convos is powered by XMTP's secure messaging, to create the world's first, verified human messaging network.
                </h3>
                <img 
                  src="/img/apple-store.svg" 
                  alt="Section 3 Badge" 
                  className="h-auto block"
                  style={{ height: '2.5em' }}
                />
              </div>
            </div>

            {/* Section 4 */}
            <div 
              className={`absolute flex flex-col items-center justify-center transition-opacity duration-500 ${
                activeSection === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img 
                src="/img/zoraiPhone.png" 
                alt="Section 4 Image" 
                className="max-w-full h-auto object-contain"
                style={{ height: '60vh' }}
              />
              <div className="mt-4 mb-8 max-w-xl flex flex-col items-center">
                <img 
                  src="/img/zoraLogo.svg" 
                  alt="Section 4 Logo" 
                  className="h-auto block"
                  style={{ height: '2em' }}
                />
                <h3 className="font-satoshi font-normal text-center text-black text-lg leading-7 mt-4">
                  Zora is powered by XMTP's secure messaging, to create the world's first, verified human messaging network.
                </h3>
                <img 
                  src="/img/apple-store.svg" 
                  alt="Section 4 Badge" 
                  className="h-auto block"
                  style={{ height: '2.5em' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* New section that slides up */}
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white min-h-[100vh] flex items-center justify-center">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-satoshi font-normal text-center text-gray-900 text-4xl">
          This section slides up after scrolling past
        </p>
      </div>
    </div>
    </>
  );
};

export default BuiltWithXmtp;
