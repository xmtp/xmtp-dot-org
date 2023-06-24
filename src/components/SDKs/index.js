import React from "react";

const SDKs = () => {
  return (
    <div className="chain-list six ">
      <a
        href="https://github.com/xmtp/xmtp-js"
        target="_blank"
        className="chain-item">
        <img src={"/img/js.svg"} />
        <span>JavaScript</span>
      </a>
      <a
        target="_blank"
        href="https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk"
        className="chain-item">
        <img src={"/img/react.svg"} />
        <span>React</span>
      </a>
      <a
        target="_blank"
        href="https://github.com/xmtp/xmtp-ios"
        className="chain-item">
        <img src={"/img/swift.svg"} />
        <span>Swift </span>
      </a>
      <a
        target="_blank"
        href="https://github.com/xmtp/xmtp-flutter"
        className="chain-item">
        <img src={"/img/dart.svg"} />
        <span>Dart</span>
      </a>
      <a
        target="_blank"
        href="https://github.com/xmtp/xmtp-android"
        className="chain-item">
        <img src={"/img/kotlin.svg"} />
        <span>Kotlin</span>
      </a>
      <a
        target="_blank"
        href="https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk"
        className="chain-item">
        <img src={"/img/react.svg"} />
        <span>React Native</span>
      </a>
    </div>
  );
};
export default SDKs;
