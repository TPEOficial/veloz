---

# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Veloz"
  text: "Improve your technology skills"
  tagline: 🚀 Empower Your Future with Cutting-Edge Tech Skills
  actions:
    - theme: brand
      text: Get Started
      link: /en/getting-started
    - theme: alt
      text: Contribute
      link: /en/guides/contribute
  image:
    src: /home_image.webp
    alt: Veloz

features:
  - icon: 📝
    title: All in one
    details: All the information you need here. Learn in community and improve your skills.
  - icon: 🆓
    title: All for free
    details: All the information available in this project is Open Source, and completely free of charge.
  - icon: 🎗️
    title: Open Source
    details: Send us your courses, suggestions or whatever you can think of!
    link: https://github.com/TPEOficial/veloz/
    linkText: See project structure
  - icon: 🔣
    title: Multi-language
    details: Enjoy the content in different languages to be able to understand everything perfectly.
  - icon: 💸
    title: Earn by teaching
    details: We monetize the website with ads in order to offer you a symbolic amount for supporting the community.
    link: /en/guides/contribute/
    linkText: See project structure
  - icon: 🌐
    title: All about technology from 0
    details: You can learn from 0 the basic concepts of all available areas. You will surely find new concepts that you did not know before.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

img.VPImage.image-src {
  zoom: 2;
}
</style>