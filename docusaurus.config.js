const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "MyConfig",
  tagline:
    "A simple, fast, secure and highly available remote store for all your dynamic configs.",
  url: "https://docs.myconfig.store",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Avinash Sinha",
  projectName: "myconfigstore",
  themeConfig: {
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: "myconfigstore",
      contextualSearch: true,
      appId: "QMWBGZ5JQ3",
    },
    image: "img/myconfigstore-logo-196x196.png",
    navbar: {
      title: "MyConfig Docs",
      logo: {
        alt: "Logo",
        src: "img/myconfigstore-logo-196x196.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://github.com/webdevavi/myconfigstore",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Navigation",
          items: [
            { label: "Home", to: "https://www.myconfig.store" },
            { label: "Pricing", to: "https://www.myconfig.store/pricing" },
            { label: "Docs", to: "/docs/intro" },
          ],
        },
        {
          title: "Terms & Policies",
          items: [
            {
              label: "Terms & Conditions",
              to: "https://www.myconfig.store/terms",
            },
            {
              label: "Privacy Policy",
              to: "https://www.myconfig.store/privacy",
            },
            {
              label: "Cookies Policy",
              to: "https://www.myconfig.store/cookies",
            },
            { label: "Refund Policy", to: "https://www.myconfig.store/refund" },
            {
              label: "Cancellation Policy",
              to: "https://www.myconfig.store/refund#Cancellation%20Policy",
            },
          ],
        },
        {
          title: "Contact Us",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/myconfigstore",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/myconfigstore",
            },
          ],
        },
        {
          title: "Contact Us",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/webdevavi",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/webdevavi",
            },
            {
              label: "Polywork",
              href: "https://poly.work/avinash",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} myconfig`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
