---
sidebar_label: Quickstart
sidebar_position: 2
description: Build this quickstart app to learn some of the fundamental concepts involved in building with XMTP.
---

# Quickstart

<iframe src="https://xmtp-alpha-interactive-tutorial.vercel.app/" width="100%" style={{height: '100vh'}}></iframe>

import Quickstarts from "@site/src/components/Quickstarts/index.md";

<Quickstarts />

import Bots from "@site/src/components/Bots/index.md";

<Bots />

#### Troubleshooting

If you get into issues with `Buffer` and `polyfills` check out our fix below:

1. Install buffer dependency

```bash
npm i buffer
```

2. Create a new file `polyfills.js` in the root of your project

```tsx
import { Buffer } from "buffer";

window.Buffer = window.Buffer ?? Buffer;
```

3. Import it into your main file on the first line

- ReacJS: `index.js` or `index.tsx`
- VueJS: `main.js`
- NuxtJS: `app.vue`

```tsx
//has to be on the first line of the file for it to work
import "./polyfills";
```

4. Update config files

- Webpack: `vue.config.js` or `webpack.config.js`:

```jsx
const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  },
  transpileDependencies: true,
};
```

- Vite: `vite.config.js`:

```jsx
import { defineConfig } from "vite";
import { Buffer } from "buffer";

export default defineConfig({
  /**/
  define: {
    global: {
      Buffer: Buffer,
    },
  },
  /**/
});
```

- NuxtJS: `nuxt.config.js`:

```tsx
export default {
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.node = {
          Buffer: true,
        };
      }
    },
  },
};
```
