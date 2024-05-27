import { defineConfig } from "vitepress";

import { sidebar as enSidebar } from "./internationalization/en.mts";
import { sidebar as esSidebar } from "./internationalization/es.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src/content/docs",
  base: "/",
  cleanUrls: true,
  lastUpdated: true,
  title: "Veloz",
  description: "Coming Soon",
  head: [
    [
      "link",
      { rel: "preconnect", href: "https://cdn.tpeoficial.com" }
    ],
    [
      "script",
      { src: "/main.js" }
    ]
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/en",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Examples", link: "/markdown-examples" }
        ],
        sidebar: enSidebar
      }
    },
    es: {
      label: "Español",
      lang: "es",
      link: "/es",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Examples", link: "/markdown-examples" }
        ],
        sidebar: esSidebar
      }
    }
  },
  themeConfig: {
    outline: "deep",
    siteTitle: false,
    i18nRouting: true,
    search: {
      provider: "local"
    },
    logo: { 
      light: "/light.svg",
      dark: "/dark.svg",
      alt: "Veloz",
    },
    editLink: {
      pattern: "https://github.com/TPEOficial/veloz/edit/main/src/content/docs/:path"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" }
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      }
    ],
    socialLinks: [
      { 
        icon: "discord",
        link: "https://tpeoficial.com/dsc"
      },
      { 
        icon: "github",
        link: "https://github.com/TPEOficial/veloz"
      }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present TPEOficial"
    }
  }
})
