import { defineConfig } from "vitepress";
import { defaultThemeConfig } from "./internationalization/default.mts";
import { themeConfig as enThemeConfig } from "./internationalization/en.mts";
import { themeConfig as esThemeConfig } from "./internationalization/es.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src/content/docs",
  base: "/",
  cleanUrls: true,
  lastUpdated: true,
  title: "Veloz",
  description: "Coming Soon",
  ignoreDeadLinks: true,
  head: [
    [
      "link",
      { rel: "icon", href: "/favicon.ico" }
    ],
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
      themeConfig: enThemeConfig
    },
    es: {
      label: "Español",
      lang: "es",
      link: "/es",
      themeConfig: esThemeConfig
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
    logoLink: "/",
    editLink: {
      pattern: defaultThemeConfig.editLink.pattern
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
