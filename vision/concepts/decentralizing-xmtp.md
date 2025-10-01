---
sidebar_label: Decentralization
sidebar_position: 4
---

# Decentralizing XMTP

<p className="text-2xl font-bold mb-4">The future of secure messaging is decentralized—and XMTP is building it.</p>

Developers building secure chat apps, mini apps, and agents need infrastructure they can trust long term. XMTP's decentralized network is designed to give you that confidence. With the XMTP decentralized testnet live and mainnet launching later this year, you can start building on infrastructure that no single entity can control.

## Why decentralization matters

import TileGrid from '@site/src/components/TileGrid';

<TileGrid
  columns={3}
  tiles={[
    {
      icon: "🧑🏽‍💻",
      title: "For developers",
      description: "Build on infrastructure where the rules can't change overnight or support can't be dropped without warning"
    },
    {
      icon: "📲",
      title: "For your users",
      description: "Communication that works globally, even when centralized platforms face geopolitical restrictions or competitive pressures"
    },
    {
      icon: "📊",
      title: "For the business",
      description: "Transparent, predictable infrastructure costs and governance—no surprise changes based on a single entity’s priorities"
    }
  ]}
/>

## The risks of centralized messaging platforms

Building messaging features today means facing real platform risks that could derail your product:

<TileGrid
  columns={2}
  tiles={[
    {
      icon: "🙅",
      title: "Platform decisions beyond your control",
      description: "Centralized platforms regularly shut down APIs, change pricing models, or pivot their business focus. Your messaging features could stop working through no fault of your own. When a major platform gets acquired and decides to focus only on enterprise clients, developer access can end with little notice."
    },
    {
      icon: "🚫",
      title: "Geographic and regulatory restrictions",
      description: "Centralized platforms can be blocked or banned in specific countries, cutting off your global user base. When geopolitics restrict major messaging platforms, products built on centralized infrastructure, and their users, lose access."
    },
    {
      icon: "🥊",
      title: "Competitive conflicts",
      description: "Centralized platform providers can launch competing products, and suddenly, your API access gets slower, more expensive, or more restricted. There's no protection when the platform owner decides to favor their own services over yours."
    },
        {
      icon: "🕵🏼‍♂️",
      title: "Privacy compromises",
      description: "Governments can pressure centralized platforms to hand over user data or disable privacy features. A single point of control means a single point of vulnerability for your users' communications."
    }
  ]}
/>

## How XMTP's decentralized approach solves these problems

XMTP eliminates these risks by distributing control across multiple independent components:

<TileGrid
  columns={2}
  tiles={[
    {
      icon: "🏵️",
      title: "No single point of control",
      description: "Independent node operators run network infrastructure across different countries and organizations. No single entity can change the rules, shut down services, or alter pricing to suit their business interests. The network operates through distributed governance rather than centralized corporate decisions."
    },
    {
      icon: "🌎🌍🌏",
      title: "Global resilience",
      description: "Your messaging features work everywhere because there's no central server to block. Messages flow through multiple operators across different legal jurisdictions, so the network continues functioning even when individual regions face restrictions or pressure."
    },
    {
      icon: "⚖️",
      title: "Neutral infrastructure",
      description: "The network doesn't compete with your product. No centralized platform owner can limit your access to favor their own services. All apps are served equally by the decentralized infrastructure."
    },
    {
      icon: "🙈",
      title: "Distributed privacy protection",
      description: "User communications remain private even when individual companies face government pressure. No single entity controls enough of the network to compromise user privacy across the entire system."
    },
    {
      icon: "💰",
      title: "Predictable economics",
      description: ": Fee structures compensate node operators fairly while keeping costs manageable for apps, with transparent governance over any changes rather than surprise pricing adjustments."
    }
  ]}
/>

## What this means for your product roadmap

<TileGrid
  columns={2}
  tiles={[
    {
      icon: "🏗️",
      title: "Start building now",
      description: "On infrastructure designed for the long term. The decentralized XMTP testnet lets you prototype and prepare for the mainnet launch."
    },
    {
      icon: "🗺️",
      title: "Plan for global scale",
      description: "Without worrying about geographic restrictions or platform policies that could limit your growth."
    },
    {
      icon: "💪",
      title: "Build with confidence",
      description: "Knowing your messaging features will continue to work even as the technology landscape changes."
    },
        {
      icon: "💅🏽",
      title: "Focus on your product",
      description: "Instead of building and maintaining messaging infrastructure from scratch."
    }
  ]}
/>

:::tip Learn More

- For technical implementation details, see [XIP-49: Decentralized backend for MLS messages](https://community.xmtp.org/t/xip-49-decentralized-backend-for-mls-messages/856) and [**XIP-57: Messaging fee collection](https://community.xmtp.org/t/xip-57-messaging-fee-collection/876).**
- Follow decentralization progress on the [Ephemera Roadmap](https://github.com/orgs/xmtp/projects/34/views/1?filterQuery=area%3AD14Z).
- Ready to build messaging with XMTP?
    - See [Build agents](https://docs.xmtp.org/agents/get-started/build-an-agent)
    - See [Build chat apps](https://docs.xmtp.org/chat-apps/intro/get-started)

:::

---

## XMTP decentralization roadmap

- **Late 2025**
  - Incentives launch on testnet, demonstrating the full economic model with fees and rewards
  - Mainnet goes live with incentives, powered by geographically diverse professional node operators
- **2026**
  - Fully permissionless operation with automated node selection
