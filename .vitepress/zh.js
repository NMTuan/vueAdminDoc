import { createRequire } from "module";
import { defineConfig } from "vitepress";
// const require = createRequire(import.meta.url);
// const pkg = require("vitepress/package.json");

export const zh = defineConfig({
    lang: "zh-Hans",
    description: "admin管理平台模板！“零”前端开发的后端数据管理解决方案！",

    themeConfig: {
        nav: nav(),

        sidebar: sidebar(),
        // sidebar: {
        //     "/zh/guide/": {
        //         base: "/zh/guide/",
        //          items: sidebarGuide()
        //     },
        //     "/zh/reference/": {
        //         base: "/zh/reference/",
        //         items: sidebarReference(),
        //     },
        //     "/changelog/": {
        //         base: "/changelog/",
        //         items: [],
        //     },
        // },

        // editLink: {
        //     pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
        //     text: "在 GitHub 上编辑此页面",
        // },

        // footer: {
        // message: "基于 MIT 许可发布",
        // copyright: `版权所有 © 2024-${new Date().getFullYear()}`,
        // },

        docFooter: {
            prev: "上一页",
            next: "下一页",
        },

        outline: {
            label: "页面导航",
        },

        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "medium",
            },
        },

        langMenuLabel: "多语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
        skipToContentLabel: "跳转到内容",
    },
});

function nav() {
    return [
        // {
        //     text: "指南",
        //     link: "/zh/guide/what-is-vitepress",
        //     activeMatch: "/zh/guide/",
        // },
        // {
        //     text: "参考",
        //     link: "/zh/reference/site-config",
        //     activeMatch: "/zh/reference/",
        // },
        // {
        //     text: pkg.version,
        //     items: [
        //         {
        //             text: "更新日志",
        //             link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
        //         },
        //         {
        //             text: "参与贡献",
        //             link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md",
        //         },
        //     ],
        // },
    ];
}

function sidebar() {
    return [
        { text: "项目介绍", link: "/intro" },
        { text: "使用指南", link: "/guide" },
        { text: "接口约定", link: "/contract" },
        { text: "内置组件", link: "/component" },
        { text: "系统配置", link: "/config" },
    ];
}
