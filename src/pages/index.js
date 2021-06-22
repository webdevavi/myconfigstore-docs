import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Docs"
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.heroBanner}>
        <h1 className="hero__title">
          <span className="hero__title-dark">my</span>config
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg button--hero"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </Layout>
  );
}
