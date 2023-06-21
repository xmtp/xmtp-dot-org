import React from "react";

const SDKs = () => {
  return (
    <div className="chain-list six ">
      <a href="/docs/sdks/js" className="chain-item">
        <img src={"/img/js.svg"} />
        <span>JavaScript</span>
      </a>
      <a href="/docs/sdks/react" className="chain-item">
        <img src={"/img/react.svg"} />
        <span>React</span>
      </a>
      <a href="/docs/sdks/swift" className="chain-item">
        <img src={"/img/swift.svg"} />
        <span>Swift</span>
      </a>
      <a href="/docs/sdks/dart" className="chain-item">
        <img src={"/img/dart.svg"} />
        <span>Dart</span>
      </a>
      <a href="/docs/sdks/kotlin" className="chain-item">
        <img src={"/img/kotlin.svg"} />
        <span>Kotlin</span>
      </a>
      <a href="/docs/sdks/react-native" className="chain-item">
        <img src={"/img/react.svg"} />
        <span>React Native</span>
      </a>
    </div>
  );
};
export default SDKs;
