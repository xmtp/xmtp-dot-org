import React from "react";
import ListOfDevelopers from "./ListOfDevs.json";
import useBaseUrl from "@docusaurus/useBaseUrl/";

const BuiltWithXmtp = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden px-6 py-32 sm:pt-32 mb-0 bg-color built">
        <div className=" absolute inset-0 -z-10 h-full w-full builder-bg"></div>
        <div className="max-w-4xl">
          <div className="mx-auto md:mx-0">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mt-8">
              A secure, scalable, and decentralized messaging protocol—<strong>for the next phase of the internet.</strong>
            </h1>
            <p className="text-lg leading-8 text-gray-600">
              XMTP is built from the ground up to provide developers with the necessary security, identity, & distribution to power global communication. 
            </p>
          </div>
          <div className="mt-6 max-w-2xl md:mx-0 lg:max-w-none mb-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-4 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a
                href="/docs/introduction"
                className="btn-principal bg-red-500 rounded-lg p-5 h-12 text-white font-bold text-base cursor-pointer flex justify-center items-center border-0 no-underline"
                rel="noreferrer">
                <img
                  src="/img/xmtp-sm-icon.png"
                  className="w-5 h-5 mr-2.5"
                  alt="XMTP icon"></img>
                Explore the Docs
              </a>
            </div>
          </div>
          
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-sm font-semibold text-gray-900 lg:text-left">
              Trusted by 1,000s of developers and companies like:
            </p>
            <ul className="mt-2 flex max-w-xl flex-wrap gap-x-10 gap-y-2 lg:mx-0 lg:justify-start list-none pl-0 md:gap-x-12">
                  <li className="p-0 m-0">
                    <svg width="130" height="23" viewBox="0 0 130 23" fill="none" className="h-10">
                      <path d="M0 14.5706C0.0434671 14.2316 0.0782535 13.8925 0.121721 13.5534C0.521618 10.8236 1.90387 8.75455 4.32933 7.43312C5.45078 6.82456 6.66784 6.5116 7.95447 6.45943C10.1017 6.38119 12.0404 6.92889 13.7095 8.31118C15.0483 9.42397 15.8655 10.8584 16.248 12.545C16.2915 12.7362 16.2393 12.7971 16.0394 12.7971C14.9092 12.7971 13.7791 12.7971 12.6402 12.7971C12.4664 12.7971 12.4055 12.7188 12.3447 12.571C11.7535 11.1192 10.7016 10.189 9.15417 9.87603C6.91996 9.42396 4.73791 10.6672 4.01635 12.8319C3.50344 14.3707 3.56432 15.9007 4.36411 17.3352C5.09436 18.6479 6.22448 19.4043 7.73714 19.5694C9.42366 19.7607 10.7972 19.213 11.8057 17.8394C12.0404 17.5264 12.1795 17.1439 12.3707 16.7962C12.4142 16.7092 12.5185 16.6049 12.5968 16.6049C13.7704 16.5962 14.9527 16.6049 16.1263 16.6049C16.1611 16.6049 16.1958 16.6223 16.248 16.631C16.1611 17.3178 15.9263 17.9524 15.6221 18.561C14.3702 21.0647 12.3273 22.4818 9.57146 22.873C7.30248 23.1947 5.18997 22.7426 3.31219 21.3864C1.55612 20.1258 0.547696 18.3784 0.173879 16.2658C0.104332 15.8746 0.0956255 15.4747 0.0521584 15.0835C0.043465 14.9966 0.0173868 14.9183 0 14.8314C0 14.7445 0 14.6575 0 14.5706Z" fill="#344AFB"/>
                      <path d="M65.761 20.6387C65.7523 20.7256 65.7349 20.8212 65.7349 20.9082C65.7349 21.4124 65.7349 21.9166 65.7349 22.4209C65.7349 22.6034 65.6654 22.6643 65.4828 22.6643C64.4657 22.6643 63.4486 22.6556 62.4314 22.6643C62.1793 22.6643 62.1445 22.56 62.1445 22.3513C62.1445 19.5346 62.1445 16.7179 62.1445 13.9011C62.1445 9.39781 62.1445 4.89453 62.1445 0.391224C62.1445 0.130415 62.2749 0 62.5357 0C63.5007 0 64.4656 0 65.4306 0C65.7784 0 65.7871 -2.33441e-05 65.7871 0.356416C65.7871 3.03406 65.7871 5.70298 65.7871 8.38062C65.7871 8.48495 65.7871 8.58927 65.7871 8.76315C65.9001 8.67621 65.9609 8.64148 66.0044 8.58932C67.0911 7.38959 68.4472 6.66799 70.0555 6.49412C72.1246 6.26809 74.0197 6.78973 75.6541 8.09377C77.3667 9.45867 78.3056 11.2669 78.6099 13.4143C78.8794 15.3182 78.6098 17.1438 77.7144 18.8478C76.5843 20.9951 74.8196 22.3252 72.4376 22.8034C71.0205 23.0903 69.6209 22.9947 68.2821 22.4383C67.404 22.0731 66.6564 21.5167 66.0218 20.8126C65.961 20.743 65.8914 20.6735 65.8305 20.6039C65.8045 20.6039 65.7784 20.6126 65.7523 20.6213L65.761 20.6387ZM75.0195 14.7009C75.0021 14.4488 74.9847 14.1532 74.9499 13.8664C74.7847 12.7275 74.324 11.7364 73.4634 10.954C72.7157 10.2759 71.8203 9.89334 70.8118 9.8151C69.3253 9.70208 68.03 10.1455 67.0042 11.2409C65.987 12.3189 65.6045 13.6229 65.6828 15.0834C65.7958 17.2829 67.2997 19.1868 69.4905 19.552C70.5598 19.7259 71.5942 19.6215 72.5505 19.0912C74.2457 18.1436 74.9586 16.6222 75.0195 14.7009Z" fill="#344AFB"/>
                      <path d="M128.936 17.561C128.736 18.0565 128.571 18.5521 128.336 19.0041C127.198 21.1341 125.381 22.3425 123.042 22.7945C120.538 23.2727 118.2 22.8467 116.131 21.3253C114.444 20.0908 113.471 18.3869 113.097 16.3439C112.732 14.3096 113.001 12.3709 114.001 10.5626C115.174 8.44134 117 7.15468 119.365 6.65045C121.269 6.25054 123.129 6.42441 124.876 7.29377C127.102 8.39786 128.415 10.2236 128.849 12.6491C129.006 13.5445 128.971 14.4748 129.023 15.3876C129.04 15.6136 128.884 15.5962 128.745 15.5962C127.606 15.5962 126.467 15.5962 125.328 15.5962C122.564 15.5962 119.799 15.5962 117.035 15.5962C116.931 15.5962 116.826 15.5962 116.67 15.5962C116.722 15.8483 116.765 16.0657 116.818 16.283C117.339 18.3956 119.043 19.7257 121.225 19.7344C122.077 19.7344 122.894 19.604 123.642 19.178C124.25 18.8303 124.702 18.3347 125.015 17.7088C125.059 17.6218 125.181 17.5088 125.268 17.5088C126.441 17.5001 127.615 17.5088 128.797 17.5088C128.814 17.5088 128.832 17.5175 128.927 17.5523L128.936 17.561ZM116.922 12.9881C117.009 12.9968 117.052 13.0055 117.096 13.0055C119.739 13.0055 122.381 13.0055 125.015 13.0055C125.233 13.0055 125.259 12.9186 125.215 12.7273C124.842 11.1537 123.877 10.1453 122.312 9.76278C120.382 9.29333 118.452 9.92797 117.417 11.6667C117.183 12.0666 116.991 12.4926 116.913 12.9881H116.922Z" fill="#344AFB"/>
                      <path d="M91.0697 20.0739C90.835 20.4216 90.6612 20.7259 90.4525 21.0041C89.6788 22.0125 88.6356 22.5776 87.4011 22.8037C86.0537 23.0471 84.7062 23.0037 83.4022 22.5603C81.6461 21.9691 80.542 20.5433 80.3943 18.7785C80.1856 16.3443 81.4027 14.8751 83.3935 14.0666C84.5584 13.5971 85.7842 13.4058 87.0273 13.2754C87.9401 13.1798 88.853 13.0668 89.6875 12.6495C90.0613 12.4583 90.3743 12.2062 90.5047 11.7976C90.696 11.1977 90.4612 10.5109 89.9309 10.1023C89.418 9.70238 88.8269 9.57198 88.2009 9.51112C87.4098 9.43288 86.6274 9.51111 85.8885 9.82408C85.1235 10.1631 84.628 10.7456 84.428 11.5628C84.3845 11.7454 84.2976 11.7801 84.1411 11.7801C83.1066 11.7801 82.0721 11.7801 81.0376 11.7801C80.8202 11.7801 80.7681 11.7193 80.8115 11.4932C81.0636 10.2414 81.5766 9.12858 82.5067 8.24183C83.3935 7.39855 84.4628 6.91172 85.6451 6.67699C87.3142 6.34663 88.9834 6.35531 90.609 6.87693C92.7302 7.55503 93.9473 9.00687 94.2168 11.2237C94.269 11.641 94.2776 12.067 94.2863 12.493C94.2863 14.6838 94.2863 16.8746 94.2863 19.0654C94.2863 19.474 94.2864 19.474 94.7036 19.474C95.1035 19.474 95.5034 19.474 95.8946 19.474C96.0598 19.474 96.1293 19.5349 96.1293 19.7087C96.1293 20.6303 96.1293 21.5431 96.1293 22.4646C96.1293 22.595 96.1207 22.6906 95.9468 22.6906C95.0948 22.6733 94.2255 22.7167 93.3822 22.6211C92.1651 22.4907 91.2784 21.5518 91.122 20.3347C91.122 20.2738 91.0958 20.2217 91.0697 20.0913V20.0739ZM90.6612 14.6838C90.6612 14.6838 90.5829 14.736 90.5569 14.7708C90.1396 15.2576 89.6093 15.5271 88.9921 15.6314C88.227 15.7618 87.462 15.8574 86.697 15.9878C85.9928 16.1095 85.2974 16.2834 84.6975 16.7007C83.6369 17.4223 83.6803 18.8828 84.7757 19.5349C85.6016 20.0217 86.5057 20.0565 87.4186 19.8826C88.6704 19.6479 89.6615 19.0132 90.3048 17.8917C90.8785 16.8833 90.7307 15.7879 90.6699 14.6838H90.6612Z" fill="#344AFB"/>
                      <path d="M34.4171 14.7182C34.3997 19.3345 30.9397 22.9945 26.0106 22.9685C21.0118 22.9424 17.5866 19.2476 17.7518 14.4052C17.9083 9.78023 21.4726 6.42448 26.0975 6.45925C31.1397 6.49403 34.4345 10.2497 34.4171 14.7269V14.7182ZM30.7658 14.7095C30.7484 14.5009 30.7224 14.2487 30.6963 14.0053C30.4529 11.8667 28.975 10.2583 26.8712 9.85844C25.0456 9.51069 23.1504 10.3279 22.1855 11.9015C21.4378 13.1273 21.2466 14.4574 21.5248 15.8484C22.2376 19.3606 25.9497 20.5082 28.523 18.9433C30.0791 17.9957 30.6876 16.5091 30.7658 14.7095Z" fill="#344AFB"/>
                      <path d="M48.3059 8.78049C48.4015 8.65878 48.5058 8.54578 48.6014 8.42407C49.4707 7.33737 50.6357 6.77226 51.9745 6.55492C53.1307 6.36366 54.2782 6.42454 55.3997 6.79837C57.0079 7.32868 58.0859 8.41534 58.7118 9.96281C59.1204 10.9713 59.2943 12.0319 59.2943 13.1099C59.2943 16.1788 59.2943 19.2563 59.2943 22.3252C59.2943 22.586 59.2335 22.6729 58.9553 22.6729C57.9903 22.6555 57.0253 22.6729 56.0604 22.6729C55.788 22.6729 55.6517 22.5425 55.6517 22.2817C55.6517 19.3694 55.6604 16.457 55.6517 13.5446C55.6517 12.5535 55.4084 11.6146 54.6955 10.867C53.7827 9.91068 52.6264 9.64988 51.3659 9.8933C49.6446 10.2237 48.471 11.5624 48.2972 13.3272C48.2624 13.6576 48.245 13.9967 48.245 14.327C48.245 17.0047 48.245 19.6736 48.245 22.3512C48.245 22.5947 48.1928 22.6903 47.9233 22.6816C46.9149 22.6642 45.9064 22.6729 44.898 22.6816C44.6633 22.6816 44.5938 22.6121 44.5938 22.3773C44.5938 17.2742 44.5938 12.171 44.5938 7.06787C44.5938 6.84183 44.6546 6.76356 44.8893 6.76356C45.8977 6.77225 46.9062 6.77225 47.9146 6.76356C48.1233 6.76356 48.1928 6.82441 48.1928 7.03306C48.1841 7.5199 48.1928 8.00674 48.1928 8.49358C48.1928 8.58921 48.2015 8.67616 48.2102 8.77179C48.2363 8.77179 48.2624 8.7892 48.2797 8.79789L48.3059 8.78049Z" fill="#344AFB"/>
                      <path d="M97.3251 17.7522C97.8727 17.7522 98.3856 17.7522 98.8986 17.7522C99.481 17.7522 100.063 17.7522 100.646 17.7522C100.768 17.7522 100.881 17.7522 100.924 17.9174C101.133 18.8042 101.724 19.3692 102.55 19.6561C103.932 20.1343 105.323 20.1517 106.688 19.6127C107.349 19.3519 107.74 18.752 107.714 18.1435C107.688 17.4393 107.279 16.8655 106.549 16.6742C105.845 16.483 105.114 16.3873 104.402 16.2482C103.297 16.0396 102.167 15.9005 101.081 15.6049C99.8027 15.2572 98.716 14.5704 98.1596 13.3098C97.2121 11.2059 97.7598 8.69348 100.177 7.38943C101.246 6.81565 102.393 6.55481 103.602 6.48526C104.88 6.41571 106.123 6.52873 107.322 6.9721C109.313 7.71976 110.478 9.16292 110.869 11.232C110.904 11.4059 110.852 11.4928 110.652 11.4841C109.635 11.4841 108.618 11.4841 107.601 11.4755C107.514 11.4755 107.375 11.3972 107.357 11.3189C107.018 10.3105 106.288 9.77149 105.28 9.56284C104.323 9.36289 103.367 9.38025 102.437 9.70192C101.863 9.90187 101.402 10.2496 101.281 10.9016C101.168 11.4667 101.368 11.9275 101.828 12.2665C102.28 12.5882 102.802 12.7099 103.332 12.8056C104.697 13.0316 106.079 13.1968 107.427 13.501C108.896 13.8314 110.174 14.5443 110.826 15.9961C111.678 17.8913 111.304 20.5081 109.148 21.847C108.018 22.5424 106.784 22.8293 105.488 22.951C104.184 23.0727 102.889 22.9684 101.628 22.6206C99.9418 22.1512 98.5943 21.2123 97.8119 19.5953C97.5424 19.0389 97.386 18.4391 97.3164 17.7783L97.3251 17.7522Z" fill="#344AFB"/>
                      <path d="M41.4919 14.7012C41.4919 17.2311 41.4919 19.7696 41.4919 22.2995C41.4919 22.6559 41.4919 22.6559 41.1268 22.6559C40.1618 22.6559 39.1969 22.6559 38.2406 22.6559C37.9856 22.6559 37.8581 22.5255 37.8581 22.2647C37.8581 18.3265 37.8581 14.3883 37.8581 10.4587C37.8581 9.9458 37.8928 9.99799 37.406 9.99799C36.867 9.99799 36.328 9.99799 35.789 9.99799C35.6065 9.99799 35.5195 9.95449 35.5195 9.74584C35.5282 8.82432 35.5195 7.9115 35.5195 6.98998C35.5195 6.80741 35.5717 6.74658 35.7629 6.74658C37.5885 6.74658 39.4228 6.74658 41.2485 6.74658C41.518 6.74658 41.4919 6.90302 41.4919 7.07689C41.4919 9.61543 41.4919 12.1627 41.4919 14.7012Z" fill="#344AFB"/>
                      <path d="M39.6619 4.76453C38.3057 4.76453 37.332 3.80823 37.332 2.4868C37.332 1.15667 38.3231 0.174316 39.6706 0.174316C41.0354 0.174316 42.0177 1.13927 42.0177 2.4694C42.0177 3.8343 41.0615 4.76453 39.6619 4.76453Z" fill="#344AFB"/>
                    </svg>
                  </li>
                  <li className="p-0 m-0">
                    <svg width="97" height="16" viewBox="0 0 97 16" fill="none" className="h-12">
                      <path d="M11.2631 15.9989C12.9863 15.9989 14.3832 14.602 14.3832 12.8789C14.3832 11.1557 12.9863 9.75879 11.2631 9.75879C9.53997 9.75879 8.14307 11.1557 8.14307 12.8789C8.14307 14.602 9.53997 15.9989 11.2631 15.9989Z" fill="#201D1D"/>
                      <path d="M19.4162 15.9989C21.1394 15.9989 22.5363 14.602 22.5363 12.8789C22.5363 11.1557 21.1394 9.75879 19.4162 9.75879C17.693 9.75879 16.2961 11.1557 16.2961 12.8789C16.2961 14.602 17.693 15.9989 19.4162 15.9989Z" fill="#201D1D"/>
                      <path d="M15.3379 0C6.86622 0 -0.002217 6.99928 5.36811e-07 15.6307H3.91838C3.91838 9.16211 8.99062 3.91764 15.3379 3.91764C21.6853 3.91764 26.7575 9.16211 26.7575 15.6307H30.6759C30.6774 6.99928 23.8089 0 15.3379 0Z" fill="#201D1D"/>
                      <path d="M88.2711 12.7077C86.2073 12.7077 84.3734 11.2123 83.9011 9.14782H96.1544C96.1544 9.14782 96.2202 8.39977 96.2202 8.13514C96.2202 3.75329 92.6552 0.1875 88.2733 0.1875C83.8915 0.1875 80.3264 3.75256 80.3264 8.13514C80.3264 12.5177 83.8715 16 88.2733 16C92.6751 16 95.2452 12.7572 95.8869 10.4096H92.1518C92.1518 10.4096 90.9639 12.7077 88.2711 12.7077ZM88.2733 3.47832C90.2521 3.47832 91.9699 4.78519 92.5583 6.73292H83.9883C84.5745 4.78519 86.2931 3.47832 88.2733 3.47832Z" fill="#201D1D"/>
                      <path d="M41.5112 16C37.1293 16 33.6921 12.4719 33.6921 8.13514C33.6921 3.79838 37.2572 0.1875 41.639 0.1875C46.0209 0.1875 49.5859 3.893 49.5859 8.09301C49.5859 9.88256 49.5859 15.606 49.5859 15.606H46.5006V13.0987L46.2759 13.0396C45.7326 14.3716 43.7642 16 41.5104 16H41.5112ZM41.639 3.47832C39.1643 3.47832 37.15 5.55615 37.15 8.11075C37.15 10.6653 39.1635 12.7084 41.639 12.7084C44.1145 12.7084 46.1281 10.6461 46.1281 8.11075C46.1281 5.57537 44.1145 3.47832 41.639 3.47832Z" fill="#201D1D"/>
                      <path d="M58.3893 16C54.0075 16 50.5703 12.4719 50.5703 8.13514C50.5703 3.79838 54.1354 0.1875 58.5172 0.1875C62.8991 0.1875 66.4641 3.893 66.4641 8.09301C66.4641 9.88256 66.4641 15.606 66.4641 15.606H63.3788V13.0987L63.1541 13.0396C62.6108 14.3716 60.6423 16 58.3886 16H58.3893ZM58.5172 3.47832C56.0424 3.47832 54.0282 5.55615 54.0282 8.11075C54.0282 10.6653 56.0417 12.7084 58.5172 12.7084C60.9927 12.7084 63.0062 10.6461 63.0062 8.11075C63.0062 5.57537 60.9927 3.47832 58.5172 3.47832Z" fill="#201D1D"/>
                      <path d="M71.6433 15.6046L65.3108 0.583008H68.7753L73.4166 11.6485L78.0587 0.583008H81.5224L75.1906 15.6046H71.6433Z" fill="#201D1D"/>
                    </svg>
                  </li>
                  <li className="p-0 m-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="97" height="30" viewBox="0 0 97 30" fill="none" className="h-10">
                      <path d="M87.0387 26.3364C81.9936 26.3364 77.781 24.3351 77.2216 19.5545C77.2043 19.4066 77.3109 19.2726 77.4584 19.2538L82.6349 18.5911C82.7969 18.5703 82.9409 18.6946 82.9551 18.8575C83.1628 21.2388 84.8472 22.3147 87.1682 22.3147C89.6293 22.3147 90.8814 21.4065 90.8814 19.8065C90.8814 18.3794 89.2407 17.8605 85.8297 17.0388C81.6848 16.0442 77.8852 14.7469 77.8852 10.2927C77.8852 5.53579 82.0734 3.67627 86.7365 3.67627C91.4006 3.67627 95.3985 5.21935 96.0722 9.94373C96.093 10.0896 95.9923 10.2256 95.8473 10.2503L90.8427 11.1052C90.6793 11.1331 90.5288 11.0112 90.5115 10.8461C90.2799 8.64298 88.8868 7.65477 86.8228 7.65477C85.0526 7.65477 83.5846 8.30344 83.5846 9.817C83.5846 11.2873 85.1389 11.8063 88.0318 12.4549C91.8745 13.3198 96.6671 14.3577 96.6671 19.5038C96.6671 24.6931 92.0904 26.3364 87.0387 26.3364Z" fill="#011A25"/>
                      <path d="M73.8403 5.73538C75.5674 7.46516 75.7832 9.80037 75.7832 12.6113V25.8701C75.7832 26.0234 75.6592 26.1477 75.5061 26.1477H69.9725C69.8194 26.1477 69.6953 26.0234 69.6953 25.8701V13.1302C69.6953 11.1409 69.5226 10.1031 68.5727 9.19494C67.7956 8.45979 67.0615 8.33005 65.7662 8.33005C63.9096 8.33005 61.7508 9.58414 61.7508 14.0383V25.8701C61.7508 26.0234 61.6267 26.1477 61.4737 26.1477H55.9832C55.8301 26.1477 55.7061 26.0234 55.7061 25.8701V4.49938C55.7061 4.34609 55.8301 4.22182 55.9832 4.22182H61.4305C61.5835 4.22182 61.7076 4.34609 61.7076 4.49938V6.85266C61.7076 6.98561 61.9049 7.02764 61.9667 6.90999C63.1815 4.59857 65.4906 3.70288 68.0978 3.70288C70.8611 3.70288 72.4586 4.35155 73.8403 5.73538Z" fill="#011A25"/>
                      <path d="M50.9229 6.45725C53.0191 8.59229 54.0751 11.8373 54.164 15.9467C54.1673 16.0978 54.0478 16.223 53.8971 16.2278L38.654 16.7104C38.4997 16.7153 38.3788 16.8462 38.3894 17.0004C38.6258 20.4417 40.4009 22.1499 43.5529 22.0501C46.2126 21.9659 47.555 20.7598 47.9728 18.6512C48.0004 18.5116 48.1248 18.4103 48.2667 18.4183L53.5757 18.7186C53.7466 18.7282 53.868 18.8905 53.826 19.0568C52.646 23.7284 49.1321 26.1568 43.688 26.3292C40.3218 26.4357 37.6121 25.4399 35.7437 23.7251C33.6081 21.7592 32.4824 18.9393 32.3678 15.3085C32.2586 11.8507 33.1153 8.88148 35.1658 6.78305C37.0059 4.86435 39.5639 3.78824 42.93 3.68167C46.3392 3.57373 49.049 4.5696 50.9229 6.45725ZM43.0623 7.8743C41.2929 7.93032 40.0578 8.48862 39.272 9.59515C38.7439 10.3214 38.4365 11.2201 38.3159 12.2598C38.2968 12.4241 38.4302 12.5639 38.5953 12.5587L47.6044 12.2734C47.7679 12.2683 47.8918 12.1229 47.8663 11.961C47.677 10.7595 47.2956 9.75413 46.5543 9.01847C45.7071 8.17996 44.6159 7.82512 43.0623 7.8743Z" fill="#011A25"/>
                      <path d="M12.8059 0.278909L4.52032 13.9123C4.45534 14.0192 4.30436 14.0311 4.22376 13.9354C3.49433 13.0693 0.776816 9.38466 4.13946 6.02631C7.20789 2.96181 11.1162 0.776893 12.5647 0.0217387C12.729 -0.0639373 12.9021 0.120655 12.8059 0.278909Z" fill="#011A25"/>
                      <path d="M12.3428 29.9655C12.5082 30.0812 12.7119 29.8838 12.6011 29.7153C10.7504 26.9004 4.59842 17.5346 3.74859 16.1286C2.91038 14.7419 1.26174 12.4373 1.12421 10.4656C1.11048 10.2687 0.838295 10.2288 0.769825 10.4139C0.6594 10.7124 0.541837 11.0687 0.432269 11.4758C-0.950933 16.614 1.0579 22.0665 5.42067 25.1202L12.3428 29.9655V29.9655Z" fill="#011A25"/>
                      <path d="M13.4817 29.7198L21.7673 16.0864C21.8323 15.9795 21.9833 15.9676 22.0639 16.0633C22.7933 16.9294 25.5108 20.614 22.1482 23.9724C19.0798 27.0369 15.1715 29.2218 13.723 29.9769C13.5587 30.0626 13.3855 29.878 13.4817 29.7198Z" fill="#011A25"/>
                      <path d="M13.9441 0.0346591C13.7788 -0.0810829 13.575 0.116302 13.6859 0.284863C15.5366 3.09974 21.6886 12.4655 22.5384 13.8715C23.3766 15.2582 25.0252 17.5628 25.1628 19.5346C25.1765 19.7314 25.4487 19.7714 25.5172 19.5863C25.6276 19.2877 25.7451 18.9314 25.8547 18.5243C27.2379 13.3861 25.2291 7.93365 20.8663 4.87989L13.9441 0.0346591Z" fill="#011A25"/>
                    </svg>
                  </li>
              </ul>
          </div>
          
        </div>
      </div>

      <div class="overflow-hidden py-24 sm:py-32">
        <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 class="text-base font-semibold leading-7 text-red-500 mb-2">Secure</h2>
                <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-4xl">Best in Class Security</p>
                <p class="mt-2 text-lg leading-8">XMTP provides End-to-End Encryption with <a href="https://www.ietf.org/blog/mls-secure-and-usable-end-to-end-encryption/" target="_blank" className="underline underline-offset-2"><strong>MLS: An IETF Standard</strong></a></p>
                <p class="mt-2 text-base leading-8">XMTP leverages Messaging Layer Security (MLS), a cryptographic protocol developed by the IETF, to provide best-in-class security for decentralized messaging.</p>
                <p class="mt-2 text-base leading-8">Messages sent with XMTP are unspoorfable, tamper proof, cannot be intercepted, provide perfect forward secrecy & post-compromise security, even in environments with multiple recipients or devices.</p>
                <p class="mt-2 text-base leading-8"><a href="/docs/concepts/invitation-and-message-encryption" className="font-semibold underline underline-offset-2">Read more about security and privacy guarantees →</a></p>
              </div>
            </div>
            <div class="sm:px-6 lg:px-0">
                <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  src="/img/security.png"
                  className="rounded-3xl">
                </img>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="overflow-hidden py-24 sm:py-32">
        <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div class="sm:px-6 lg:px-0">
              <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  src="/img/identities.png"
                  className="rounded-3xl">
                </img>
              </div>
            </div>
            <div class="px-6 lg:px-0 lg:pl-4 lg:pt-4">
              <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 class="text-base font-semibold leading-7 text-red-500 mb-2">Identity</h2>
                <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-4xl">Universal Identity Support</p>
                <p class="mt-2 text-lg leading-8">XMTP supports the broadest range of identity types for registration.</p>
                <p class="mt-6 text-base leading-8">XMTP is identity-agnostic, seamlessly integrating with a wide variety of identity systems, including:</p>
                <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                  <div class="relative pl-9">
                    <dt class="inline font-semibold">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-red-500">
                        <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                      </svg>
                    </dt>
                    <dd class="inline">Legacy systems with <strong>Federated Identities</strong></dd>
                  </div>
                  <div class="relative pl-9">
                    <dt class="inline font-semibold">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-red-500">
                        <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clip-rule="evenodd" />
                      </svg>
                    </dt>
                    <dd class="inline"><strong>Cryptographic wallets</strong> like Ethereum, Decentralized Identifiers (DIDs), and ENS.</dd>
                  </div>
                  <div class="relative pl-9">
                    <dt class="inline font-semibold">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-red-500">
                        <path fill-rule="evenodd" d="M12 3.75a6.715 6.715 0 0 0-3.722 1.118.75.75 0 1 1-.828-1.25 8.25 8.25 0 0 1 12.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 0 1-1.395-.551A21.69 21.69 0 0 0 18.75 10.5 6.75 6.75 0 0 0 12 3.75ZM6.157 5.739a.75.75 0 0 1 .21 1.04A6.715 6.715 0 0 0 5.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 0 1-1.27-.8A6.715 6.715 0 0 0 3.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 0 1 1.04-.211ZM12 7.5a3 3 0 0 0-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 1 1-1.112-1.008A10.459 10.459 0 0 0 7.5 10.5a4.5 4.5 0 1 1 9 0c0 .547-.022 1.09-.067 1.626a.75.75 0 0 1-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 0 0-3-3Zm0 2.25a.75.75 0 0 1 .75.75c0 3.908-1.424 7.485-3.781 10.238a.75.75 0 0 1-1.14-.975A14.19 14.19 0 0 0 11.25 10.5a.75.75 0 0 1 .75-.75Zm3.239 5.183a.75.75 0 0 1 .515.927 19.417 19.417 0 0 1-2.585 5.544.75.75 0 0 1-1.243-.84 17.915 17.915 0 0 0 2.386-5.116.75.75 0 0 1 .927-.515Z" clip-rule="evenodd" />
                      </svg>
                    </dt>
                    <dd class="inline"><strong>Modern authentication</strong> standards like passkeys and Biometric Identities.</dd>
                  </div>
                </dl>
                <p class="mt-6 text-base leading-8">This flexibility allows users to authenticate and communicate using any identity they control, without being tied to a specific identity provider or platform.</p>
                <p class="mt-2 text-base leading-8"><a href="/docs/concepts/v3/identity" className="font-semibold underline underline-offset-2">Read more about XMTP’s Universal Identity Support →</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-hidden py-24 sm:py-32">
        <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 class="text-base font-semibold leading-7 text-red-500 mb-2">Decentralized</h2>
                <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-4xl">A global, decentralized distribution network</p>
                <p class="mt-2 text-lg leading-8">XMTP supports the broadest range of identity types for registration.</p>
                <p class="mt-6 text-base leading-8">XMTP is the largest wallet to wallet messaging network today, delivering a reliable, high-performance, end-to-end encrypted messaging service for users around the world.</p>
                <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                  <div class="relative pl-9">
                    <dt class="inline font-semibold">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-red-500">
                        <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
                      </svg>
                    </dt>
                    <dd class="inline">Legacy systems with XMTP <strong>broadcast network</strong></dd>
                  </div>
                  <div class="relative pl-9">
                    <dt class="inline font-semibold">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="absolute left-1 top-1 h-5 w-5 text-red-500">
                        <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                      </svg>
                    </dt>
                    <dd class="inline"><strong>XMTP appchain</strong> is an L3 blockchain securing all metadata that require strict ordering. Four smart contracts will manage this data</dd>
                  </div>
                </dl>
                <p class="mt-6 text-base leading-8">This flexibility allows users to authenticate and communicate using any identity they control, without being tied to a specific identity provider or platform.</p>
                <p class="mt-2 text-base leading-8"><a href="https://community.xmtp.org/t/archived-decentralizing-xmtp-a-minimum-viable-proposal/510" className="underline underline-offset-2 font-semibold">Read more about XMTP’s Decentralization efforts →</a></p>
              </div>
            </div>
            <div class="sm:px-6 lg:px-0">
                <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <img
                    src="/img/decentralized.png"
                    className="rounded-3xl">
                  </img>
                </div>
            </div>
          </div>
        </div>
      </div>


      <div className="relative isolate overflow-hidden max-w-2xl px-6 bg-color mb-8">
        <div className=" absolute inset-0 -z-10 h-full w-full"></div>
        <h2>Explore the XMTP Ecosystem
        <p class="mt-2 text-lg font-normal leading-8">XMTP is trusted by thousands of developers across clients, tools, & dapps to power global communication.</p>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pb-16">
        {ListOfDevelopers.map((developer) => (
          <div
            className="relative flex items-top space-x-4 rounded-lg border border-gray-400 px-6 py-4 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            key={developer.name}>
            <div className="flex-shrink-0">
              <a
                href={developer.href}
                target="_blank"
                className="rounded rounded-md flex justify-center py-0 mb-4">
                <img
                  className="h-16 w-16 max-h-16 max-w-16 rounded-2xl"
                  src={useBaseUrl(developer.image)}
                  alt={
                    "this is an image of the" + developer.name + " icon"
                  }></img>
              </a>
            </div>

            <div className="min-w-0 flex-1 builder">
              <a
                href={developer.href}
                target="_blank"
                className="focus:outline-none">
                <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-0">
                  {developer.name}
                </h5>
              </a>
              <p className="text-base text-gray-400">{developer.description}</p>

              <div className="flex items-center space-x-3">
                {developer.href && (
                  <a
                    className="text-base font-semibold text-red-500 flex align-center"
                    href={developer.href}
                    target="_blank">
                    <div className="website-icon h-5 w-5"></div>
                  </a>
                )}
                {developer.github && (
                  <a
                    className="text-base font-semibold  flex align-center"
                    href={developer.github}
                    target="_blank">
                    <div className="github-icon h-5 w-5"></div>
                  </a>
                )}
                {developer.twitter && (
                  <a
                    className="flex align-center text-black x-logo"
                    href={developer.twitter}
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                    target="_blank">
                    𝕏
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="relative flex items-top space-x-4 rounded-lg border border-gray-400 px-6 py-4 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
          <div className="flex-shrink-0">
            <a className="rounded rounded-md flex justify-center py-0 mb-4">
              <img
                className="h-16 w-16 max-h-16 max-w-16 rounded-xl"
                src="/img/getFeatured.jpg"></img>
            </a>
          </div>

          <div className="min-w-0 flex-1">
            <a
              href="https://forms.gle/p1VgVtkoGfHXANXt5"
              target="_blank"
              className="focus:outline-none">
              <h5 className="text-lg font-bold text-gray-900 mb-0">
                Help build this list
              </h5>
            </a>
            <p className="text-base text-gray-500">
              Know of a project built with XMTP that should be here?
              <a
                className="px-1"
                href="https://forms.gle/p1VgVtkoGfHXANXt5"
                target="_blank"
                rel="noreferrer">
                <strong>Submit it</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltWithXmtp;
