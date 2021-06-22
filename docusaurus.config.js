const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "MyConfigStore",
  tagline:
    "A simple, fast, secure and highly available remote store for all your dynamic configs.",
  url: "https://docs.myconfig.store",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Avinash Sinha", // Usually your GitHub org/user name.
  projectName: "myconfigstore", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "MyConfigStore Docs",
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
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
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
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
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/webdevavi/myconfigstore",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} myconfig.store`,
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
