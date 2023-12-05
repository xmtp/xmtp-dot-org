---
sidebar_label: Authentication
sidebar_position: 2
description: Learn how to create and configure an XMTP client
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Build authentication with XMTP

The XMTP message API revolves around a network client that allows retrieving and sending messages to other network participants. A client must be connected to a wallet on startup. The client will request a wallet signature in two cases:

1. To sign the newly generated key bundle. This happens only the very first time when key bundle is not found in storage.
2. To sign a random salt used to encrypt the key bundle in storage. This happens every time the client is started (including the very first time).

## Create a client

A client is created that requires passing in a connected wallet that implements the [Signer](https://github.com/xmtp/xmtp-js/blob/main/src/types/Signer.ts) interface.
[Use client configuration options](#configure-the-client) to change parameters of a client's network connection.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```ts
import { Client } from "@xmtp/xmtp-js";
// Create the client with a `Signer` from your application
const xmtp = await Client.create(signer, { env: "dev" });
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

To use the hooks provided by the React SDK, you must wrap your app with an `XMTPProvider`. This gives the hooks access to the XMTP client instance.

```ts
import { XMTPProvider } from "@xmtp/react-sdk";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <XMTPProvider>
      <App />
    </XMTPProvider>
  </StrictMode>,
);
```

```tsx
export const CreateClient: React.FC<{ signer: Signer }> = ({ signer }) => {
  const { client, error, isLoading, initialize } = useClient();

  const handleConnect = useCallback(async () => {
    const options = {
      persistConversations: false,
      env: "dev",
    };
    await initialize({ keys, options, signer });
  }, [initialize]);

  if (error) {
    return "An error occurred while initializing the client";
  }

  if (isLoading) {
    return "Awaiting signatures...";
  }

  if (!client) {
    return (
      <button type="button" onClick={handleConnect}>
        Connect to XMTP
      </button>
    );
  }

  return "Connected to XMTP";
};
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
// Create the client with a `SigningKey` from your app
val options =
    ClientOptions(
        api = ClientOptions.Api(env = XMTPEnvironment.PRODUCTION, isSecure = true)
    )
val client = Client().create(account = account, options = options)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
import XMTP

// Create the client with a `SigningKey` from your app
let client = try await Client.create(
  account: account, options: .init(api: .init(env: .production)))
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

```dart
var api = xmtp.Api.create();
var client = await Client.createFromWallet(api, wallet);
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

```tsx
import { Client } from "@xmtp/xmtp-react-native";
// Create the client with a `Signer` from your application
const xmtp = await Client.create(signer);
```

</TabItem>
</Tabs>

import USubscribe from '/src/components/USubscribe/index'

Example:

<div className="centered">
<USubscribe
theme="default"
size="medium"
onSubscribe={(address) => console.log("New subscriber: " + address)}
onUnsubscribe={(address) => console.log("Unsubscribed: " + address)}
onError={(address) => console.log("Error subscribing: " + address)}
env={"production"}
labels={{
          loading: "Loading...",
          subscribed: "Identity enabled. You can now message other XMTP users.",
          default: "Enable your XMTP identity",
        }}
/>
</div>

## Saving keys

You can export the unencrypted key bundle using the static method `getKeys`, save it somewhere secure, and then provide those keys at a later time to initialize a new client using the exported XMTP identity.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

```jsx
// Get the keys using a valid Signer. Save them somewhere secure.
import { loadKeys, storeKeys } from "./helpers";
const clientOptions = {
  env: "production",
};

let keys = loadKeys(address);
if (!keys) {
  keys = await Client.getKeys(signer, {
    ...clientOptions,
    // we don't need to publish the contact here since it
    // will happen when we create the client later
    skipContactPublishing: true,
    // we can skip persistence on the keystore for this short-lived
    // instance
    persistConversations: false,
  });
  storeKeys(address, keys);
}
const client = await Client.create(null, {
  ...clientOptions,
  privateKeyOverride: keys,
});
```

We are using the following helper funtions to store and retrieve the keys

```ts
// Create a client using keys returned from getKeys
const ENCODING = "binary";

export const getEnv = (): "dev" | "production" | "local" => {
  return "production";
};

export const buildLocalStorageKey = (walletAddress: string) =>
  walletAddress ? `xmtp:${getEnv()}:keys:${walletAddress}` : "";

export const loadKeys = (walletAddress: string): Uint8Array | null => {
  const val = localStorage.getItem(buildLocalStorageKey(walletAddress));
  return val ? Buffer.from(val, ENCODING) : null;
};

export const storeKeys = (walletAddress: string, keys: Uint8Array) => {
  localStorage.setItem(
    buildLocalStorageKey(walletAddress),
    Buffer.from(keys).toString(ENCODING),
  );
};

export const wipeKeys = (walletAddress: string) => {
  // This will clear the conversation cache + the private keys
  localStorage.removeItem(buildLocalStorageKey(walletAddress));
};
```

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

```jsx
import { Client, useClient } from "@xmtp/react-sdk";
import type { Signer } from "@xmtp/react-sdk";

export const CreateClientWithKeys: React.FC<{ signer: Signer }> = ({ signer }) => {
  const { initialize } = useClient();

  const initXmtpWithKeys = async () => {
    const options = {
      env: "dev"
    };
    const address = await getAddress(signer);
    let keys = loadKeys(address);
    if (!keys) {
      keys = await Client.getKeys(signer, {
        ...options,
        skipContactPublishing: true,
        persistConversations: false,
      });
      storeKeys(address, keys);
    }
    await initialize({ keys, options, signer });
  };

  // initialize client on mount
  useEffect(() => {
    void initXmtpWithKeys();
  }, []);

  return (
    ...
  );
};
```

We are using the following helper funtions to store and retrieve the keys

```ts
// Create a client using keys returned from getKeys
const ENCODING = "binary";

export const getEnv = (): "dev" | "production" | "local" => {
  return "production";
};

export const buildLocalStorageKey = (walletAddress: string) =>
  walletAddress ? `xmtp:${getEnv()}:keys:${walletAddress}` : "";

export const loadKeys = (walletAddress: string): Uint8Array | null => {
  const val = localStorage.getItem(buildLocalStorageKey(walletAddress));
  return val ? Buffer.from(val, ENCODING) : null;
};

export const storeKeys = (walletAddress: string, keys: Uint8Array) => {
  localStorage.setItem(
    buildLocalStorageKey(walletAddress),
    Buffer.from(keys).toString(ENCODING),
  );
};

export const wipeKeys = (walletAddress: string) => {
  // This will clear the conversation cache + the private keys
  localStorage.removeItem(buildLocalStorageKey(walletAddress));
};
```

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

```kotlin
// Create the client with a `SigningKey` from your app
val options =
    ClientOptions(
        api = ClientOptions.Api(env = XMTPEnvironment.PRODUCTION, isSecure = true)
    )
val client = Client().create(account = account, options = options)

// Get the key bundle
val keys = client.privateKeyBundleV1

// Serialize the key bundle and store it somewhere safe
val serializedKeys = PrivateKeyBundleV1Builder.encodeData(v1)
```

Once you have those keys, you can create a new client with `Client().buildFrom()`:

```kotlin
val keys = PrivateKeyBundleV1Builder.fromEncodedData(serializedKeys)
val client = Client().buildFrom(bundle = keys, options = options)
```

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

```swift
// Create the client with a `SigningKey` from your app
let client = try await Client.create(
  account: account, options: .init(api: .init(env: .production)))

// Get the key bundle
let keys = client.privateKeyBundle

// Serialize the key bundle and store it somewhere safe
let keysData = try keys.serializedData()
```

Once you have those keys, you can create a new client with `Client.from`:

```swift
let keys = try PrivateKeyBundle(serializedData: keysData)
let client = try Client.from(bundle: keys, options: .init(api: .init(env: .production)))
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

```dart
var api = xmtp.Api.create(host: 'dev.xmtp.network', isSecure: true)
var client = await Client.createFromWallet(api, wallet);
await mySecureStorage.save(client.keys.writeToBuffer());
//The second time a user launches the app they should call `createFromKeys` using the stored `keys` from their previous session.

var stored = await mySecureStorage.load();
var keys = xmtp.PrivateKeyBundle.fromBuffer(stored);
var api = xmtp.Api.create();
var client = await Client.createFromKeys(api, keys);
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

You can export the unencrypted key bundle using the static method `Client.exportKeyBundle`, save it somewhere secure, and then provide those keys at a later time to initialize a new client using the exported XMTP identity.

```js
import { Client } from "@xmtp/xmtp-react-native";
// Get the keys using a valid Signer. Save them somewhere secure.
const keys = await Client.exportKeyBundle();
// Create a client using keys returned from getKeys
const client = await Client.createFromKeyBundle(keys, "dev");
```

The keys returned by `exportKeyBundle` should be treated with the utmost care as compromise of these keys will allow an attacker to impersonate the user on the XMTP network. Ensure these keys are stored somewhere secure and encrypted.

</TabItem>
</Tabs>

## Configure the client

Configure a client's network connection and other options using these client creation parameters:

Set the `env` client option to `dev` while developing. Set it to `production` before you launch.

<Tabs groupId="sdk-langs">
<TabItem value="js" label="JavaScript"  attributes={{className: "js_tab"}}>

| Parameter                 | Default                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appVersion                | `undefined`                                                                       | Add a client app version identifier that's included with API requests. **Production apps are strongly encouraged to set this value.**<br/>For example, you can use the following format: `appVersion: APP_NAME + '/' + APP_VERSION`.<br/>Setting this value provides telemetry that shows which apps are using the XMTP client SDK. This information can help XMTP developers provide app support, especially around communicating important SDK updates, including deprecations and required upgrades.                                                 |
| env                       | `dev`                                                                             | Connect to the specified XMTP network environment. Valid values include `dev`, `production`, or `local`. For important details about working with these environments, see [XMTP `production` and `dev` network environments](#xmtp-production-and-dev-network-environments).                                                                                                                                                                                                                                                                            |
| apiUrl                    | `undefined`                                                                       | Manually specify an API URL to use. If specified, value of `env` will be ignored.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| keystoreProviders         | `[StaticKeystoreProvider, NetworkKeystoreProvider, KeyGeneratorKeystoreProvider]` | Override the default behavior of how the Client creates a Keystore with a custom provider. This can be used to get the user's private keys from a different storage mechanism.                                                                                                                                                                                                                                                                                                                                                                          |
| persistConversations      | `true`                                                                            | Maintain a cache of previously seen V2 conversations in the storage provider (defaults to `LocalStorage`).                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| skipContactPublishing     | `false`                                                                           | Do not publish the user's contact bundle to the network on Client creation. Designed to be used in cases where the Client session is short-lived (for example, decrypting a push notification), and where it is known that a Client instance has been instantiated with this flag set to false at some point in the past.                                                                                                                                                                                                                               |
| codecs                    | `[TextCodec]`                                                                     | Add codecs to support additional content types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| maxContentSize            | `100M`                                                                            | Maximum message content size in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| preCreateIdentityCallback | `undefined`                                                                       | `preCreateIdentityCallback` is a function that will be called immediately before a [Create Identity](/docs/concepts/account-signatures#sign-to-create-an-xmtp-identity) wallet signature is requested from the user.                                                                                                                                                                                                                                                                                                                                    |
| preEnableIdentityCallback | `undefined`                                                                       | `preEnableIdentityCallback` is a function that will be called immediately before an [Enable Identity](/docs/concepts/account-signatures#sign-to-enable-an-xmtp-identity) wallet signature is requested from the user.                                                                                                                                                                                                                                                                                                                                   |
| useSnaps                  | `false`                                                                           | Enabling the `useSnaps` flag will allow the client to attempt to connect to the "Sign in with XMTP" MetaMask Snap as part of client creation. It is safe to enable this flag even if you do not know whether the user has an appropriate MetaMask version enabled. If no compatible version of MetaMask is found, client creation will proceed as if this flag was set to `false`. To learn more, see [Build with the Snap](/docs/tutorials/other/xmtp-metamask-snap.md#as-a-developer-who-wants-my-app-to-use-sign-in-with-xmtp-how-do-i-get-started). |
| basePersistence           | `InMemoryPersistence` (Node.js) or `LocalStoragePersistence` (browser)            | A persistence provider used by the Keystore to persist its cache of conversations and metadata. Ignored in cases where the `useSnaps` is enabled and the user has a Snaps-compatible browser. To learn more, see [Keystore](https://github.com/xmtp/xmtp-js/blob/beta/src/keystore/README.md#keystore) and [Pluggable persistence](https://github.com/xmtp/xmtp-js/releases/tag/v11.0.0).                                                                                                                                                               |
| apiClientFactory          | `HttpApiClient`                                                                   | Override the function used to create an API client for the XMTP network. If you are running `xmtp-js` on a server, you will want to import [`@xmtp/grpc-api-client`](https://github.com/xmtp/bot-kit-pro) and set this option to `GrpcApiClient.fromOptions` for better performance and reliability. To learn more, see [Pluggable gRPC API client](https://github.com/xmtp/xmtp-js/releases/tag/v11.0.0).                                                                                                                                              |

</TabItem>
<TabItem value="react" label="React"  attributes={{className: "react_tab"}}>

| Parameter                 | Default                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appVersion                | undefined                                                                       | Add a client app version identifier that's included with API requests.<br/>For example, you can use the following format: appVersion: APP_NAME + '/' + APP_VERSION.<br/>Setting this value provides telemetry that shows which apps are using the XMTP client SDK. This information can help XMTP developers provide app support, especially around communicating important SDK updates, including deprecations and required upgrades. |
| env                       | dev                                                                             | Connect to the specified XMTP network environment. Valid values include dev, production, or local. For important details about working with these environments, see [XMTP production and dev network environments](https://github.com/xmtp/xmtp-web/blob/main/packages/react-sdk/README.md#xmtp-production-and-dev-network-environments).                                                                                              |
| apiUrl                    | undefined                                                                       | Manually specify an API URL to use. If specified, value of env will be ignored.                                                                                                                                                                                                                                                                                                                                                        |
| keystoreProviders         | [StaticKeystoreProvider, NetworkKeystoreProvider, KeyGeneratorKeystoreProvider] | Override the default behavior of how the client creates a Keystore with a custom provider. This can be used to get the user's private keys from a different storage mechanism.                                                                                                                                                                                                                                                         |
| persistConversations      | true                                                                            | Maintain a cache of previously seen V2 conversations in the storage provider (defaults to LocalStorage).                                                                                                                                                                                                                                                                                                                               |
| skipContactPublishing     | false                                                                           | Do not publish the user's contact bundle to the network on client creation. Designed to be used in cases where the client session is short-lived (for example, decrypting a push notification), and where it is known that a client instance has been instantiated with this flag set to false at some point in the past.                                                                                                              |
| codecs                    | [TextCodec]                                                                     | Add codecs to support additional content types.                                                                                                                                                                                                                                                                                                                                                                                        |
| maxContentSize            | 100M                                                                            | Maximum message content size in bytes.                                                                                                                                                                                                                                                                                                                                                                                                 |
| preCreateIdentityCallback | undefined                                                                       | preCreateIdentityCallback is a function that will be called immediately before a [Create Identity wallet signature](https://xmtp.org/docs/concepts/account-signatures#sign-to-create-an-xmtp-identity) is requested from the user.                                                                                                                                                                                                     |
| preEnableIdentityCallback | undefined                                                                       | preEnableIdentityCallback is a function that will be called immediately before an [Enable Identity wallet signature](https://xmtp.org/docs/concepts/account-signatures#sign-to-enable-an-xmtp-identity) is requested from the user.                                                                                                                                                                                                    |

</TabItem>
<TabItem value="kotlin" label="Kotlin"  attributes={{className: "kotlin_tab"}}>

| Parameter  | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appVersion | `undefined` | Add a client app version identifier that's included with API requests. **Production apps are strongly encouraged to set this value.**<br/>For example, you can use the following format: `appVersion: APP_NAME + '/' + APP_VERSION`.<br/>Setting this value provides telemetry that shows which apps are using the XMTP client SDK. This information can help XMTP developers provide app support, especially around communicating important SDK updates, including deprecations and required upgrades. |
| env        | `DEV`       | Connect to the specified XMTP network environment. Valid values include `DEV`, `.PRODUCTION`, or `LOCAL`. For important details about working with these environments, see [XMTP `production` and `dev` network environments](#xmtp-production-and-dev-network-environments).                                                                                                                                                                                                                           |

**Configure `env`**

```kotlin
// Configure the client to use the `production` network
val options =
    ClientOptions(
        api = ClientOptions.Api(env = XMTPEnvironment.PRODUCTION, isSecure = true)
    )
val client = Client().create(account = account, options = options)
```

:::note

The `apiUrl`, `keyStoreType`, `codecs`, and `maxContentSize` parameters from the XMTP client SDK for JavaScript (xmtp-js) are not yet supported.

:::

</TabItem>
<TabItem value="swift" label="Swift"  attributes={{className: "swift_tab"}}>

| Parameter  | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appVersion | `undefined` | Add a client app version identifier that's included with API requests. **Production apps are strongly encouraged to set this value.**<br/>For example, you can use the following format: `appVersion: APP_NAME + '/' + APP_VERSION`.<br/>Setting this value provides telemetry that shows which apps are using the XMTP client SDK. This information can help XMTP developers provide app support, especially around communicating important SDK updates, including deprecations and required upgrades. |
| env        | `dev`       | Connect to the specified XMTP network environment. Valid values include `.dev`, `.production`, or `.local`. For important details about working with these environments, see [XMTP `production` and `dev` network environments](#xmtp-production-and-dev-network-environments).                                                                                                                                                                                                                         |

**Configure `env`**

```swift
// Configure the client to use the `production` network
let clientOptions = ClientOptions(api: .init(env: .production))
let client = try await Client.create(account: account, options: clientOptions)
```

</TabItem>
<TabItem value="dart" label="Dart"  attributes={{className: "dart_tab"}}>

You can configure the client environment when you call `Api.create()`. By default, it will connect to a `local` XMTP network.

```dart
xmtp.Api.create(host: '127.0.0.1', port: 5556, isSecure: false)
xmtp.Api.create(host: 'dev.xmtp.network', isSecure: true)
xmtp.Api.create(host: 'production.xmtp.network', isSecure: true)*/
```

</TabItem>
<TabItem value="rn" label="React Native"  attributes={{className: "rn_tab"}}>

| Parameter  | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appVersion | `undefined` | Add a client app version identifier that's included with API requests. **Production apps are strongly encouraged to set this value.**<br/>For example, you can use the following format: `appVersion: APP_NAME + '/' + APP_VERSION`.<br/>Setting this value provides telemetry that shows which apps are using the XMTP client SDK. This information can help XMTP developers provide app support, especially around communicating important SDK updates, including deprecations and required upgrades. |
| env        | `dev`       | Connect to the specified XMTP network environment. Valid values include `dev`, `production`, or `local`. For important details about working with these environments, see [XMTP `production` and `dev` network environments](#xmtp-production-and-dev-network-environments).                                                                                                                                                                                                                            |

</TabItem>
</Tabs>

## Environments

XMTP identity on `dev` network is completely distinct from its XMTP identity on the `production` network, as are the messages associated with these identities.

- `production`: This network is used in production and is configured to store messages indefinitely.

  - Try the web inbox at [https://xmtp.chat/](https://xmtp.chat/).

  - Send a message to our `gm` bot to get started. `gm.xmtp.eth`

- `dev`: XMTP may occasionally delete messages and keys from this network

  - Try the web dev inbox at [https://dev.xmtp.chat/](https://xmtp.chat/).

  - Send a message to our `gm` bot to get started. `0x8DC925338C1eE1fE62c0C43404371deb701BfB55`

- `local`: Use to have a client communicate with an XMTP node you are running locally. For example, an XMTP node developer can set `env` to `local` to generate client traffic to test a node running locally.
