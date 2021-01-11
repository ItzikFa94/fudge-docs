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
      A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices
      </>
    ),
  },
  {
    title: 'User Auth Using JWT',
    imageUrl: 'img/jwt-logo.png',
    description: (
      <>
      Industry standard method for representing claims securely between two parties.
      </>
    ),
  },
  {
    title: 'Integrated Push Notifications With Socket.io',
    imageUrl: 'img/socketio-logo.png',
    description: (
      <>
      Enables real-time, bidirectional and event-based communication.
      It works on every platform, browser or device, focusing equally on reliability and speed.
      </>
    ),
  },
  {
    title: 'Secure Connection to MongoDB',
    imageUrl: 'img/mongodb-logo.png',
    description: (
    <>
    Cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.      
    </>
    ),
  },
  {
    title: 'Routing Implemented using ExpressJS',
    imageUrl: 'img/expressjs-logo.png',
    description: (
      <>
      Minimal and flexible Node.js web application framework that provides a robust set of features for web.
      </>
    ),
  },
  {
    title: 'Powered by NodeJS',
    imageUrl: 'img/nodejs-logo.png',
    description: (
      <>
      Open source, cross-platform runtime environment for developing server-side and networking applications.
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
              to={'http://shop.botech.studio/'}>
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
