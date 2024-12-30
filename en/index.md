---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "vueAdmin"
    text: "Dashboard Template"
    tagline: '"Zero" front-end developments！'
    image: /assets/favicon.svg
    actions:
        - theme: brand
          text: Get Started
          link: /markdown-examples
#        - theme: alt
#          text: Demo
#          link: /api-examples

features:
    - title: 🚀 Zero-Code Development
      details: No front-end coding required, easily accessible even for non-technical personnel.
    - title: 🔓 Fully Decoupled
      details: Independent of backend architecture, plug-and-play, supports seamless updates with zero downtime.
    - title: 🛠️ Modern Tech Stack
      details: Crafted with Vue 3, Vite 5, Pinia state management, and Element Plus, delivering a cutting-edge front-end solution.
    - title: 🌳 Flexible Hierarchy
      details: Supports unlimited column levels, adaptable to complex business needs.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #409eff 20%, #2563eb);
  /* --vp-home-hero-image-background-image: linear-gradient(-45deg, #ff6900 50%, #fea502 50%); */
  /* --vp-home-hero-image-filter: blur(44px); */
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
</style>
