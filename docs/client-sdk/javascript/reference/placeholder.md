---
sidebar_position: 1
sidebar_label: TypeDoc reference
---

# TypeDoc for XMTP JavaScript SDK

:::warning We want to push this from https://github.com/xmtp/xmtp-js

This content is a placeholder. We want to use a GitHub Action to dynamically generate this content from this source location https://github.com/xmtp/xmtp-js when there is a GitHub merge action in the source location. More details below.

:::

TypeDocs are currently published here: https://xmtp-js.pages.dev/. We want to publish them to this xmtp.org location instead.

TypeDocs are generated from https://github.com/xmtp/xmtp-js.

To generate the docs, run `npm run build:docs` while in this repo: https://github.com/xmtp/xmtp-js.

The HTML docs are output to the `docs` folder.

The docs are generated based on this line in the `package.json` file in the repo:

`"build:docs": "rm -rf docs && mkdir -p tmp && cp README.md tmp/ && sed -i.bak '/badge.svg/d' tmp/README.md && typedoc --excludePrivate --readme tmp/README.md src/index.ts",`

I'd like us to take the generated HTML files and display them in this order in this **Client SDK > javascript > reference** section of this sidebar/left nav:

- modules.html
- classes/Client.html
- classes/CompositeCodec.html
- classes/ContentTypeId.html
- classes/Conversation.html
- classes/Conversations.html
- classes/Message.html
- classes/PrivateKey.html
- classes/PrivateKeyBundle.html
- classes/PublicKey.html
- classes/PublicKeyBundle.html
- classes/Stream.html
- classes/TextCodec.html
- interfaces/ContentCodec.html
- interfaces/EncodedContent.html

The Reference section of the sidebar/left nav should look something like this:

![](typedoc-leftnav.png)

There are some items in the generated docs that we want to remove before they display on the Dev Portal:

- We don't need to display the **Exports** right nav menu. We don't want to display it because we are displaying that navigation in the sidebar/left nav instead.
- We don't need to display the **@xmtp/xmtp-js** "home" link and search field in the header. These controls will be confusing to users.
- We don't need to display the **All** dropdown, **Inherited** checkbox, and **Externals** checkbox in the header. These controls don't do anything and will be confusing to users.
- We don't need to display the **Settings** Theme selector at the bottom of the pages.
- How difficult is it to get the icons to display in the left nav?
