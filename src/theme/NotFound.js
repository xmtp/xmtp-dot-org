import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page not found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1>
                <Translate
                  id="theme.NotFound.title"
                  description="Title of the 404 page">
                  Oops... We couldn't find that page.
                </Translate>
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  We're sorry, but the page you're looking for has been moved or no longer exists.
                </Translate>
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p2"
                  description="The second paragraph of the 404 page">
                  Please
                </Translate>{' '}
                <strong><a href="https://xmtp.org/"> return to the homepage
                </a></strong> to try to find what you need.
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p3"
                  description="The third paragraph of the 404 page">
                  For XMTP documentation, please visit
                </Translate>{' '}
                <strong><a href="https://docs.xmtp.org/" target="_blank" rel="noopener noreferrer">
                  docs.xmtp.org
                </a></strong>.
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p4"
                  description="The fourth paragraph of the 404 page">
                  To request help or report a bug, please
                </Translate>{' '}
                <strong><a href="https://github.com/xmtp/xmtp-dot-org/issues/new/choose" target="_blank" rel="noopener noreferrer">
                  open an issue
                </a></strong>.
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p5"
                  description="The fifth paragraph of the 404 page">
                  We know how important it is to have reliable documentation and we appreciate your patience.
                </Translate>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
