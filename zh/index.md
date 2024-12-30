---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "vueAdmin"
    text: "admin管理平台模板"
    tagline: '零前端开发的数据管理解决方案！'
    image: /assets/favicon.svg
    actions:
        - theme: brand
          text: 开始使用
          link: /intro
#        - theme: alt
#          text: Demo 演示
#          link: /api-examples

features:
    - title: 🚀 零门槛开发
      details: 无需前端编码基础，即使是非技术人员也能轻松上手。
    - title: 🔓 完全解耦
      details: 独立于后端架构，即插即用，支持平滑更新，零中断运行。
    - title: 🛠️ 现代技术栈
      details: 基于 Vue 3、Vite 5、Pinia 状态管理及 Element Plus，匠心打造现代化前端解决方案。
    - title: 🌳 灵活栏目架构
      details: 支持任意层级组织结构，轻松应对复杂业务场景，框架弹性可扩展。
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
