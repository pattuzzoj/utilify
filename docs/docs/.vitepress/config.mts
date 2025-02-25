import { defineConfig } from 'vitepress';
import { pt } from './pt';
import { en } from './en';

export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'shortcut icon', href: '/logo.png', type: 'image/x-icon' }],
    ['meta', { name: 'author', content: 'Júlio Pattuzzo' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'keywords', content: 'Utilify, core, array, browser, colors, date, environment, function, math, object, regex, string, types, library, JavaScript, TypeScript, programming utilities, web development, tools, modular, minimalistic, secure by design, easy installation, tree-shaking, cross-platform' }],
    ['meta', { name: 'description', content: 'Utilify is a collection of essential utilities for JavaScript and TypeScript development, providing tools for arrays, strings, math, date manipulation, and more.' }],
    ['meta', { property: 'og:title', content: 'Utilify' }],
    ['meta', { property: 'og:description', content: 'Utilify is a collection of essential utilities for JavaScript and TypeScript development, providing tools for arrays, strings, math, date manipulation, and more.' }],
    ['meta', { property: 'og:image', content: '/logo.png' }],
    ['meta', { property: 'og:image:height', content: '32px' }],
    ['meta', { property: 'og:image:width', content: '32px' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Utilify' }],
    ['meta', { name: 'twitter:image', content: '/logo.png' }]
  ],  
  title: "Utilify",
  description: "A practical library of utility functions",
  lastUpdated: true,
  cleanUrls: true,
  rewrites: {
    'en/:rest*': ':rest*'
  },
  locales: {
    root: {
      label: "English",
      ...en
    },
    pt: {
      label: "Português",
      ...pt
    },
  },
  themeConfig: {
    i18nRouting: true,
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pattuzzoj/utilify-docs' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright ©2025'
    }
  },
  markdown: {
    lineNumbers: false
  },
  ignoreDeadLinks: true
})