# Welcome to xmtp.org! (✉️,✉️)

This is the repo for the [xmtp.org](https://xmtp.org) website, a resource for the XMTP community to learn about, build with, and contribute to XMTP.

This repo is open and contributions from the public are welcome!🫶

## How to contribute

Thank you for your interest in contributing to [xmtp.org](https://xmtp.org)

Contributing can mean anything from opening an issue to provide feedback about missing documentation to opening a pull request to provide the missing documentation.

To help ensure that your experience as a contributor goes as smoothly as possible, please follow the recommended steps described here.

**Note:** If you have feedback or questions about XMTP code and software, and not [xmtp.org](https://xmtp.org) the website, please post to the [XMTP Discussions forum](https://github.com/orgs/xmtp/discussions) or [XMTP Discord community](https://discord.gg/xmtp) instead.

### 1. Open a GitHub Issue

To provide feedback about the [xmtp.org](https://xmtp.org) website and documentation, please open one of these types of GitHub Issues:

- [Report a bug]()

  Examples of bug might include things like:

  - Incorrect or confusing documentation
  - Broken links in documentation
  - Bugs in website functionality

- [Request an enhancement]()

Examples of enhancements include things like:

  - New documentation topics
  - New website features

If your opened a documentation-related issue and you want to work on it, thank you and please comment on the issue to let us know so we can assign the issue to you. Working on an issue you open isn't required! We're grateful for your feedback whether you work on it or not.

**Note:** At this time, the [xmtp.org](https://xmtp.org) team isn't prepared to accept website code contributions just yet. To help ensure that the contribution process meets everyone's expectations, we're working on code contribution guidelines for the website. In the meantime, do please contribute by opening a bug or feature request to share your feedback!

### 2. Work on a documentation-related issue (optional)

To work on a documentation issue, you must submit a pull request (PR) to the `xmtp-dot-org` repo.

A PR is a request to the [xmtp.org](https://xmtp.org) team to add (or pull) your content updates into the project and publish them to the documentation on the site. After you submit a pull request, your proposed changes are publicly visible, meaning that anyone with a GitHub account can see them on GitHub.

Here are two common techniques for submitting a PR to the `xmtp-dot-org` repo. Use the one that best suits the issue, as well as the way you prefer to work:

- Use the **Edit this page** link located the bottom of every documentation page on [xmtp.org](https://xmtp.org).

  Using this technique enables you to submit your PR using a UI. This approach may be preferable for people who don't want to interact with GitHub using git in a command line interface.

  Note that this technique allows you to make a change to an existing page of documentation only. To add a new page, you must fork the repo.

  To learn more, see [Submit a PR using the Edit this page link](#submit-a-PR-using-the-Edit-this-page-link).

- Fork the `xmtp-dot-org` repo, create a feature branch, make your changes, and submit your PR.

  To learn more about forking a repo, see [Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) in GitHub's documentation.

  When you use this technique to submit your PR, you might find it useful to [set up a local environment](#set-up-a-local-environment).

### Submit a PR using the Edit this page link

fjdsklfgjdasklgfjasdklfjkl;dfjd

## Set up a local environment (optional)

If you are contributing to [xmtp.org](https://xmtp.org) documentation by forking the `xmtp-dot-org` repo, you might be interested in setting up a local environment so you can build the site and see your changes.

[xmtp.org](https://xmtp.org) is built using [Docusaurus](https://docusaurus.io/), a static website generator.

### Prerequisites

You must have [Node.js](https://nodejs.org/en/download/) version 16.14 or above installed. You can check your version by running `node -v`.

Docusaurus recommends checking all checkboxes related to dependencies when you install Node.

Node is required because you need npm, a tool installed along with Node, to install and run Docusaurus.

If you need to manage multiple Node versions installed on a single machine, consider using [nvm](https://github.com/nvm-sh/nvm).

To learn more, see [Installation](https://docusaurus.io/docs/installation) in Docusaurus' documentation.

### Install Docusaurus

To install Docusaurus:

1. At the command line, navigate to the root folder of your fork of the `xmtp-dot-org` repo.
2. Run `npm install`.

### Build the site

When you run the build command, Docusaurus builds the website into a directory of static contents and puts it on a local server so that you can view it.

To build the website, run `npm run build`.

### Run a local development server

To run a local server that displays the website build, run `npm run serve`.

```bash
npm run start
```
