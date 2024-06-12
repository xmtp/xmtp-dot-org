---
sidebar_label: Subscribe
sidebar_position: 5.3
---

# Enable subscriptions using consent proofs with XMTP

This document describes methods to add an optional signed payload to conversations that client apps can consider proof that a recipient has granted a sender consent to reach the recipient's main inbox.

Senders ask users to produce a signature attesting to the consent update. Inbox apps can then consider this signature proof that the recipient has explicitly opted-in to receive the sender's messages.

You can use this functionality to provide a **Subscribe** button like the one you can try on this [example subscribe page](https://subscribe-broadcast.vercel.app/subscribe/button). To explore the code providing this page, see the [subscribe-broadcast button repo](https://github.com/alexrisch/subscribe-broadcast/blob/main/src/app/subscribe/button/page.tsx) and [broadcast-api backend repo](https://github.com/alexrisch/broadcast-api/blob/main/src/index.ts#L51).

## How it works

There are three components to the consent proof workflow:

- Obtain a consent signature from the user  
Requires actions by the sender and receiver
- Create a new conversation with the encoded payload  
Requires actions by the sender
- Verify the consent payload to allow the sender  
Requires actions by the client SDK

This diagram provides an overview of how consent proofs work. Senders can provide a consent proof-enabled **Subscribe** button in Frames, apps, and websites. After the user clicks **Subscribe**, they're prompted to sign with their wallet to provide "proof of consent" that they've opted-in to receive messages from the sender. The sender can then include the consent proof when sending a broadcast message to the user to enable strong deliverability for their message and ensure that it displays in the user's main inbox.

![Diagram illustrating how consent proofs can be surfaced in Frames, websites, and apps to enable a user to provide consent to receive messages from a sender. The sender can then use the consent proof to ensure that their message is displayed in the user's main inbox.](img/consent-proof-flow.png)

## Obtain a consent signature from the user

A consent proof signature must be obtained from a user's wallet. The signature is then encoded into a payload that client SDKs can use to verify and validate consent before allowing the sender to message the user's wallet.

The decoded payload that must be collected by senders is defined in a protobuf as follows:

```protobuf
message ConsentProofPayload {
  // the user's signature in hex format
  string signature = 1;
  // approximate time when the user signed
  uint64 timestamp = 2;
  // version of the payload
  uint32 payload_version = 3;
}
```

The message to be signed by the user's wallet contains the sender's address, a timestamp, and a human-readable explanation, such as follows:

```text
XMTP : Grant inbox consent to sender

Current Time: <ISO 8601 date and time in UTC>
From Address: <ethereum address>

For more info: https://xmtp.org/signatures/
```

To see an implementation of this functionality, see [Sign to consent to receive broadcast messages](docs/concepts/signatures.md).

A lightweight JavaScript bundle provides a function that initiates the signing process and returns an encoded payload that senders must store on their end. This function is intended for use as a callback to a click event, such as clicking a **Subscribe** button.

## Create a new conversation with the encoded payload

Once senders have the encoded payload, they can include it when starting a new conversation with a user. For example:

```js
const conversation = await client.conversations.newConversation(
  peerAddress,
  context,
  consentProofPayload
);
```

Users who have created a consent signature might not have an identity on the XMTP network. Senders should check for an identity with `Client.canMessage` before starting a new conversation. If a user does not yet have an XMTP identity, the sender can routinely check for a network identity and start a conversation when it finds one.

##  Verify the consent payload

To finalize the consent preference, SDKs must look for the consent payload in new conversations. Using this payload, SDKs can verify that the current user's wallet signed the consent message and validate that the addresses and timestamp match the expected values.

After the consent payload is verified and validated, the SDKs then automatically update network consent preferences.
