# Welcome to the xmtp-dot-org repo

This is the repo for [xmtp.org](https://xmtp.org), an XMTP community resource you can use to learn about XMTP apps, use cases, and community resources.

If you are looking for documentation about XMTP, please visit [docs.xmtp.org](https://docs.xmtp.org/).

## Contribute to xmtp.org

When contributing to xmtp.org, please follow the XMTP community [code of conduct](https://github.com/xmtp/xmtp-dot-org/blob/main/vision/community/code-of-conduct.md) to help create a safe and positive experience for all.

### Report a bug

See a bug on xmtp.org? [Open a bug report](https://github.com/xmtp/xmtp-dot-org/issues/new?assignees=&labels=prelaunch-feedback&template=bug_report.md&title=Bug%3A+)

Please make sure that an issue for your bug [doesn't already exist](https://github.com/xmtp/xmtp-dot-org/issues).

Examples of bugs include things like:

- Inaccurate or confusing information
- Spelling or grammatical errors
- Broken links or images
- Broken or confusing website functionality

If you open a bug and want to work on it, comment on the issue to let us know.

### Request a feature or enhancement

Have an idea for a new xmtp.org feature or topic? [Open a feature request](https://github.com/xmtp/xmtp-dot-org/issues/new?assignees=&labels=prelaunch-feedback&template=feature_request.md&title=)

If you open a feature request and want to work on it, comment on the issue to let us know.

## Set up a local environment

If you are contributing to xmtp.org, you might be interested in setting up a local environment where you can build the site.

xmtp.org is built using [Docusaurus](https://docusaurus.io/), a static website generator.

### Prerequisites

Using Docusaurus requires that you have a [supported version of Node.js](https://docusaurus.io/docs/installation) installed.

### Install Docusaurus

Run this command in the root folder of your fork of the `xmtp-dot-org` repo.

```bash
$ npm install
```

### Run a local development server

Run this command to start a local development server you can use to view the website.

```bash
$ npm run start
```

The command opens the website at `http://localhost:3000/` in your default browser.

As you make and save changes to markdown files, the website automatically updates to reflect most changes without having to restart the server.

### Generate and view a local static build

1. Run this command to generate static website content in the `build` directory.

   ```bash
   $ npm run build
   ```

2. Run this command to start a local server to view the static website content generated in the `build` directory.

   ```bash
   $ npm run serve
   ```

   The command opens the website at `http://localhost:3000/` in your default browser.

Note that any changes you save to markdown files aren't reflected in this static build because the command serves the website from the `build` directory, not the editable markdown files.
