# Welcome to `xmtp-dot-org`

This is the repo for the [`xmtp.org`](https://xmtp.org) website, an XMTP community resource you can use to learn about, build with, and contribute to XMTP.

This repo is open and contributions from the public are welcome! 🫶

When contributing to `xmtp.org`, please follow the XMTP community [code of conduct](https://github.com/osrm/xmtp-dot-org/blob/main/CODE_OF_CONDUCT.md) to help create a safe and positive experience for all.

## Ways to contribute

Thank you for your interest in contributing to `xmtp.org`! We're glad you're here. 👋

To help ensure that your contribution experience goes as smoothly as possible, please follow the guidance provided in this document.

Have a question about contributing to `xmtp.org`? Post to the [XMTP Help & Resources forum](https://community.xmtp.org/c/help/9).

### Make a quick fix to documentation

If you see a broken link, spelling or grammatical error, or other documentation issue that you feel comfortable fixing, consider [using the **Edit this page** link](#use-the-edit-this-page-link-to-submit-a-pull-request) to propose a fix.

If you prefer not to edit the page yourself or have feedback that requires more than a quick fix, open a [bug report](#report-a-bug) or [feature request](#request-a-feature-or-enhancement).

### Report a bug

See a bug on the `xmtp.org` website or in the documentation? [Open a bug report](https://github.com/xmtp/xmtp-dot-org/issues/new?assignees=&labels=prelaunch-feedback&template=bug_report.md&title=Bug%3A+). Please make sure that an issue for your bug [doesn't already exist](https://github.com/xmtp/xmtp-dot-org/issues).

Examples of bugs include things like:

- Inaccurate or confusing documentation
- Spelling or grammatical errors
- Broken links or images
- Broken or confusing website functionality

If you open a bug and want to work on it, comment on the issue to let us know.

### Request a feature or enhancement

Have an idea for a new website feature or documentation topic? [Open a feature request](https://github.com/xmtp/xmtp-dot-org/issues/new?assignees=&labels=prelaunch-feedback&template=feature_request.md&title=).

If you open a feature request and want to work on it, comment on the issue to let us know.

### Contribute to XMTP documentation

You can contribute by creating or updating XMTP documentation.

With the exception of [quick fixes](#make-a-quick-fix), please open a documentation issue **before** you start contributing to XMTP documentation: [Report a bug](#report-a-bug) or [request a feature](#request-a-feature)

Opening a documentation issue first gives the `xmtp.org` team the opportunity to share relevant context for your proposed contribution.

To contribute to XMTP documentation, [submit a pull request](#submit-a-pull-request-to-the-xmtp-dot-org-repo) (PR) to the `xmtp-dot-org` repo.

**Note:** The `xmtp.org` team isn't ready to accept **website code** contributions just yet. In the meantime, please provide your feedback by [reporting a bug](#report-a-bug) or [requesting a feature](#request-a-feature).

## Submit a pull request to the `xmtp-dot-org` repo

Here are two common methods for submitting a PR to the `xmtp-dot-org` repo. Use the one that best suits the issue and the way you like to work.

When you submit a PR, make sure to include a link to the [bug report](#report-a-bug) or [feature request](#request-a-feature-or-enhancement) your PR addresses. If a documentation issue doesn't exist, please open one before you start contributing.

- Use the **Edit this page** link at the bottom of every documentation page on `xmtp.org`.

  This method provides a guided flow for editing content and submitting a PR using the GitHub UI in a web browser.

  To learn more, see [Use the Edit this page link to submit a PR](#use-the-edit-this-page-link-to-submit-a-pull-request).

- Manually fork the `xmtp-dot-org` repo, make your changes, and submit your PR.

  To learn more about forking a repo, see [Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) in GitHub's documentation.

  When you use this technique to submit your PR, you might find it useful to [set up a local environment](#set-up-a-local-environment).

### What to expect

After you've submitted your PR, the `xmtp.org` team will review your PR and either:

- Accept your PR and publish your contribution
- Accept your PR but request some changes before publishing your contribution
- Not accept your PR and explain why

The `xmtp.org` team includes technical writers, product managers, developers, designers, and other XMTP subject matter experts. The team reviews documentation PRs based on a few criteria, including:

- Accuracy
- Audience needs
- Adherence to [documentation style guidance](#documentation-style-guidance)

## Use the “Edit this page” link to submit a pull request

Using the **Edit this page** link provides a guided flow for editing content and submitting a PR using the GitHub UI in a web browser. Note that this method only allows you to submit a PR to an **existing** documentation page.

A PR is a request to add (or pull) your content updates into the project and publish them to the documentation on the site. After you submit a pull request, your proposed changes are publicly visible, meaning that anyone with a GitHub account can see them on GitHub.

**To use the Edit this page link to submit a pull request:**

1. Click the **Edit this page** link at the bottom of the page you want to fix. The link takes you to the page’s markdown file on GitHub.

2. The GitHub UI might tell you that you need to fork the repository to propose changes. Forking the repo means that you’re making an editable copy of the `xmtp-dot-org` repo within an org or account you control. Click **Fork this repository** to continue.

3. Edit the markdown file to make your change.

4. Once you’re happy with your change, scroll to the bottom of the page to the **Propose changes** section. Add a short description explaining the reason for your change, including a link to the GitHub Issue your PR addresses. GitHub adds this information to the file’s changelog, which can help other contributors understand the purpose of your update. Click **Propose changes**.

5. A confirmation page appears. Use it to review your proposed changes. Click **Create pull request**. You have one more chance to review your change on the next page before you submit it to the `xmtp.org` team for review.

6. Now, to finally create your PR! You’ll see the change description you entered earlier. You can add some additional information if you want to. Once you’re happy with your PR, select **Create pull request**.

7. When you create a PR, the `xmtp.org` team receives a notification to [review it](#what-to-expect).

_The guidance in this section is inspired by the following public sector information licensed under the Open Government Licence v3.0: [Propose a content change using GitHub](https://design-system.service.gov.uk/use-cases/propose-a-content-change-using-github/) by the GOV.UK Design System._

## Set up a local environment

If you are contributing to `xmtp.org` documentation by forking the `xmtp-dot-org` repo, you might be interested in setting up a local environment where you can build the site and see your changes.

`xmtp.org` is built using [Docusaurus](https://docusaurus.io/), a static website generator.

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

1. Run this command to generate static website content into the `build` directory.

   ```bash
   $ npm run build
   ```

2. Run this command to start a local server to view the static website content generated to the `build` directory.

   ```bash
   $ npm run serve
   ```

   The command opens the website at http://localhost:3000/ in your default browser.

Note that any changes you save to markdown files aren't reflected in this static build because the command serves the website from the `build` directory, not the editable markdown files.

## Documentation style guidance

When writing XMTP documentation, follow the [Google developer documentation style guide](https://developers.google.com/style). You might find the [Word list](https://developers.google.com/style/word-list#word-list) particularly useful.

If you can't find the guidance you need in the _Google developer documentation style guide_, follow the [Microsoft Writing Style Guide](https://docs.microsoft.com/en-us/style-guide/welcome/).

If you need guidance about the spelling of a nontechnical term, follow the [Merriam-Webster Dictionary](https://www.merriam-webster.com/).

XMTP documentation strives to use plain language to ensure that content is clear to as many people as possible. [Plainlanguage.gov](https://www.plainlanguage.gov/) is a great place to learn how to write plainly.
