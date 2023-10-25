---
sidebar_label: Identity resolution
sidebar_position: 3
hide_table_of_contents: false
description: "Learn about identity resolution for apps built with XMTP."
---

# Resolve identities for XMTP

When you build with XMTP, there’s no cold start for your app and your users. As soon as your app plugs into the XMTP network, it can reach today’s most popular and meaningful identities. XMTP’s interoperability and composability help ensure that the network can continue to grow and bring messaging to every identity—via your app.

In this context, **identity** refers to:

- Wallet addresses, such as raw 0x addresses like `0x4b70d04124c2996De29e0caa050A49822Faec6Cc`
- Human-readable domain names associated with wallet addresses. These domain names are provided by name services, such as Ethereum Name Service (ENS) and Unstoppable Domains (UNS).

As a UX best practice, build your app to enable a user to enter a domain name in the To field and have the identity resolve to its associated raw wallet address. For example, a user should be able to enter `prxshant.eth` in your To field and have your app forward-resolve and display the identity's associated wallet address `0x4b70d04124c2996De29e0caa050A49822Faec6Cc`.

<div className="nopadding" style={{width:'50%'}}  >

![Entering prxshant.eth in a to field and having it resolve to 0x4b70d04124c2996De29e0caa050A49822Faec6Cc](img/id-resolution.gif)

</div>

And certainly, your app should also be able to accept a raw wallet address and reverse-resolve and display the identity's associated domain name, if available.

When displaying a name, also look for and display its associated avatar. For example, when displaying a Lens name, look for and display a Lens profile photo. For raw 0x addresses, display blockies as avatars.

## Third-party tools

Explore these third-party identity resolution tools.

:::tip FYI

Tools listed on this page are not official endorsements and are provided for informational purposes only.

Is your app using a great tool to resolve identities? Open an [issue](https://github.com/xmtp/xmtp-dot-org/issues) to share information about it.

:::

### Airstack

Airstack provides tools to forward- and reverse-resolve [ENS](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/resolve-identities/ens), [Farcaster](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/resolve-identities/farcaster), and [Lens](https://docs.airstack.xyz/airstack-docs-and-faqs/guides/resolve-identities/lens) identities.

### Everyname

Everyname provides tools to forward- and reverse-resolve [ENS, Farcaster, Lens, Unstoppable Domains, and other](https://docs.everyname.xyz/api/forward-social-profile) identities.

### Unstoppable Domains

Unstoppable Domains provides tools to reverse-resolve [Unstoppable Domains](https://docs.unstoppabledomains.com/openapi/resolution/#operation/ReverseController.getReverse) identities.
