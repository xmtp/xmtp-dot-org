---
sidebar_label: Signature Changes
sidebar_position: 1
---

# Signature Changes for XMTP v3

## Why are signatures changing?

XMTP v2 signatures use `secp256k1` keys signed by the user’s wallet. To use MLS for group chat, XMTP is migrating to `ed25519` keys signed by the `secp256k1` keys.

XMTP is also requiring a signature for each app/device combination (“installation”).  Users will have to authorize XMTP for each app they install on each device (instead of once per app).

## How do XMTP Identities get the new key type?

When an existing user opens a V3 app for the first time, XMTP will take their `secp256k1` Create Identity signature and sign it with an `ed25519` key.

New users who go through the Create Identity signature process will also get an `secp256k1` Create Identity signature signed with an `ed25519` key.

There is no cryptographic difference between V2 users who migrated to V3, and new V3 users.

## How do app/device installations work?

Every app/device combination has to have an Enable Identity signature.  When a previously enabled app on one device is installed on a new device, users will have to provide an Enable Identity signature.  This is a change from V2.

New apps also have to get an Enable Identity signature, as they did before.

## How do apps get permission to send group messages?

When a first-time V3 user goes through the Create Identity signature process and the Enable Identity signature process, the V3 app they are using is automatically granted messaging access with no extra signature.

When an existing V2 user is upgraded to V3 for the first time, the V3 app they are using is automatically granted messaging access with no extra signature.

***Those are the only times an app gets messaging access without a signature, and they are mutually exclusive.***

When a V3 user opens another app, either a new app or an existing app that doesn’t have a grant, they will have to provide a Grant Messaging Access signature for that app.

## How do these changes fit together?

In sum:

1. New users still have to Create Identity.
1. New app/device combinations have to Enable Identity.
1. Users have to Grant Messaging Access to previously enabled apps, or newly enabled apps.
     1. Except for V2 users the one time they are automatically migrated to V3.
     1. Or if the user provides a Create Identity signature to create a new V3 identity in an app.

In this table, a *V2 user* has a V2 identity that has not been migrated to V3.  A *V3 user* has a V3 identity, either from migration or from a brand new identity.  An *existing install* means an app that already has an Enable Identity signature.

| | New V3 user, new install | V2 user, existing install | V3 user, existing install | V3 user, new install |
| ---- | ---- | ---- | ---- | ---- |  
| **Create Identity** | Y | N | N | N |
| **Enable Identity** | Y | N | N | Y |
| **Grant Messaging Access** | N | N | Y | Y |
| **Notes** | Same as before | Identity is migrated to a V3 identity | V3 identity already exists, app was previously enabled | V3 identity already exists, new apps need to be enabled |
