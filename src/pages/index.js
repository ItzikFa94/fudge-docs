import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Based on React Boilerplate',
    imageUrl: 'img/react-boilerplate-logo.jpg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'User Auth Using JWT',
    imageUrl: 'img/jwt-logo.png',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Integrated Push Notifications With Socket.io',
    imageUrl: 'img/socketio-logo.png',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Secure Connection to MongoDB',
    imageUrl: 'img/mongodb-logo.png',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Routing Implemented using ExpressJS',
    imageUrl: 'img/expressjs-logo.png',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by NodeJS',
    imageUrl: 'img/nodejs-logo.png',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const logoWhite = useBaseUrl('img/logo-white.svg');
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img style={{ width: '100px', height: '100px' }} src={logoWhite} alt="" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <div style={{ height: '45px' }}></div>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className="hero__subtitle">{siteConfig.customFields.tagline_note}</p>
          <p className="hero__subtitle">{siteConfig.customFields.tagline_more}</p>
          <div style={{ height: '45px' }}></div>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--lg',
                styles.white_text,
              )}
              to={'https://demo.botech.studio'}>
              View Demo
            </Link>
            <div style={{ width: '15px' }}></div>
            <Link
              className={clsx(
                'button button--outline button--lg',
                styles.green_text,
              )}
              to={'https://fudge.botech.studio'}>
              Download
            </Link>

          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className={styles.features_container}>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
