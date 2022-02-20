import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Almost everything in Ambient is a <Link to="/docs/docs/plugins/mvp">plugin</Link>. Grab a few of
        the <Link to="/docs/docs/plugins/library">pre-built plugins</Link> to get a
        website up and running in no time.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Ambient helps you build apps with reusable plugins that
        have <Link to="/docs/docs/plugins/permissions">security built-in</Link> so
        you focus on your business logic.
      </>
    ),
  },
  {
    title: 'Powered by Interfaces',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Use or build plugins that satisfy interfaces, then
        use <Link to="/docs/docs/plugins/router#test-suite">pre-built test suites</Link> and <Link to="/docs/docs/plugins/docgen">doc generation</Link> to
        make things even easier. Marketplace coming soon!
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
