/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
  "package.json": {
    file: {
      contents: `
    {
      "name": "example-app",
      "type": "module",
      "dependencies": {
        "express": "latest",
        "nodemon": "latest"
      },
      "scripts": {
        "start": "nodemon --watch './' index.js"
      }
    }`,
    },
  },
};
