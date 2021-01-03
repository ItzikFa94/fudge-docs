module.exports = {
  title: 'Fudge',
  tagline: 'Fully implemented web application with both client and server code ready for use!',
  customFields: {
    tagline_more: 'Skip all the hard initial work and focus on your own project core',
    tagline_note: 'Based on best practices and latest technologies',
  },
  url: 'https://botechstudio.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.ico',
  organizationName: 'BotechStudio', // Usually your GitHub org/user name.
  projectName: 'fudge-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Fudge',
      logo: {
        alt: 'Fudge',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/project-stracture',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://fudge.botech.studio',
          label: 'Pricing',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://botech.studio',
          label: 'by botech.studio',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'How to Install',
              to: '/docs/installation',
            },
            {
              label: 'Project Structure',
              to: 'docs/project-stracture',
            },
            {
              label: 'What Fudge is based on',
              to: 'docs/based-on',
            },
          ],
        },
        {
          title: 'Download Fudge',
          items: [
            {
              label: 'Purchase Page',
              href: 'https://fudge.botech.studio',
            },
            {
              label: 'Personal Area',
              href: 'https://fudge.botech.studio/download',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Web Apps Development',
              href: 'https://botech.studio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fudge Documentation. By botech.studio`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
