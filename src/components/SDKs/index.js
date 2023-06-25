import React from "react";

const SDKs = () => {
  return (
    <div className="chain-list six ">
      <a
        href="https://github.com/xmtp/xmtp-js"
        target="_blank"
        className="chain-item">
        <img src={"/img/js.svg"} />
        <span>
          JavaScript <img src="/img/el.svg" className="svg" />
        </span>
      </a>
      <a
        target="_blank"
        href="https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk"
        className="chain-item">
        <img src={"/img/react.svg"} />
        <span>
          React <img src="/img/el.svg" className="svg" />
        </span>
      </a>
      <a
        target="_blank"
        href="https://github.com/xmtp/xmtp-ios"
        className="chain-item">
        <img src={"/img/swift.svg"} />
        <span>
          Swift <img src="/img/el.svg" className="svg" />
        </span>
      </a>
      <a
        target="_blank"
        href="https://github.com/xmtp/xmtp-flutter"
        className="chain-item">
        <img src={"/img/dart.svg"} />
        <span>
          Dart <img src="/img/el.svg" className="svg" />
        </span>
      </a>
      <a
        target="_blank"
        href="https://github.com/xmtp/xmtp-android"
        className="chain-item">
        <img src={"/img/kotlin.svg"} />
        <span>
          Kotlin <img src="/img/el.svg" className="svg" />
        </span>
      </a>
      <a
        target="_blank"
        href="https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk"
        className="chain-item">
        <img src={"/img/react.svg"} />
        <span>
          React Native <img src="/img/el.svg" className="svg" />
        </span>
      </a>
    </div>
  );
};
export default SDKs;
