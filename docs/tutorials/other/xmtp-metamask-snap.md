---
sidebar_label: MetaMask Snap
sidebar_position: 3
---

# Use the "Sign in with XMTP" MetaMask Snap

Use the “Sign in with XMTP” MetaMask Snap to securely and conveniently sign in to any web app built with XMTP.

When you install the Snap, you give it permission to store your XMTP user keys in MetaMask secure storage. From then on, when you use an app you’ve authorized to work with Sign in with XMTP, the Snap seamlessly and securely allows the app to use those keys without accessing the key material directly, enabling you to start messaging without needing to provide a signature.

## FAQ about Sign in with XMTP

### How do I install Sign in with XMTP?

Use [MetaMask](https://metamask.io/) to sign in to any web app built with XMTP that supports MetaMask Snaps. [View supported apps](https://github.com/xmtp/snap)

- If this is your first time using an app built with XMTP, you’ll be given the option to install Sign in with XMTP to securely store your user keys. You’ll then be prompted to sign with your wallet account to create and enable an XMTP identity and generate your user keys. Your user keys will then be stored in MetaMask secure storage.

- If this isn’t your first time using an app built with XMTP, you’ll be given the option to install Sign in with XMTP to securely store your user keys. You’ll then be prompted to sign with your wallet account to enable your XMTP identity and provide your user keys for secure storage.

As a part of this flow, you also authorize the web app you’re using to work with Sign in with XMTP.

Because your XMTP user keys are securely stored in the Snap, Sign in with XMTP can seamlessly and securely allow your authorized apps to use those keys without accessing the key material directly, enabling you to start new messaging sessions without needing to provide a signature.

### How do I use Sign in with XMTP?

Once you install Sign in with XMTP, store your XMTP user keys, and authorize an app to work with the Snap, you won’t need to interact with the Snap again for that app. 

When you access the app, Sign in with XMTP will seamlessly and securely allow the authorized app to use your keys without accessing the key material directly, enabling you to start messaging without needing to provide a signature.

You can use Sign in with XMTP with multiple apps. For example, if you access a different web app, you’ll be given the option to use Sign in with XMTP with the new app.

### What does Sign in with XMTP do?

With your permission, Sign in with XMTP stores your XMTP user keys in MetaMask secure storage.

When you authorize Sign in with XMTP permission to work with an app, the Snap seamlessly and securely allows the app to use those keys without accessing the key material directly, enabling you to start messaging without needing to provide a signature.

The Snap is used only when you visit a Snap-enabled app that you have already authorized to work with Sign in with XMTP.

### What does Sign in with XMTP NOT do?

Sign in with XMTP doesn’t:

- Show your inbox
- Show notifications for new messages
- Allow you to send messages

All of that is handled by apps that use the Snap.

### Do my Sign in with XMTP app authorizations expire?

Yes. All app authorizations expire automatically after 30 days.

### As a developer who wants my app to use Sign in with XMTP, how do I get started?

Build your app with [XMTP JavaScript SDK](https://github.com/xmtp/xmtp-js) ≥v11.0.0, which supports Sign in with XMTP. Upon first use, your users will be prompted to choose to use Sign in with XMTP with your app.

### How do I get support for Sign in with XMTP?

- Email: [support@xmtp.com](mailto:support@xmtp.com)
- Discord: [User support channel](https://discord.com/channels/831836269558235136/1149024081874784356)
