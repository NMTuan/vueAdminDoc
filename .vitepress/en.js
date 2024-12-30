/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-12-17 21:39:35
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-12-30 15:03:54
 * @FilePath: \vueAdminDoc\.vitepress\en.js
 * @Description: 
 * 
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved. 
 */
import { createRequire } from "module";
import { defineConfig } from "vitepress";

// const require = createRequire(import.meta.url);
// const pkg = require("vitepress/package.json");

export const en = defineConfig({
    lang: "en-US",
    description:
        'Admin Dashboard Template! "Zero" front-end developments backend data management solution！',

    themeConfig: {
        nav: nav(),

        sidebar: sidebar(),


        // editLink: {
        //     pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
        //     text: "Edit this page on GitHub",
        // },

        // footer: {
        //     message: "Released under the MIT License.",
        //     copyright: "Copyright © 2019-present Evan You",
        // },
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
        { text: "Introduction", link: "/en/intro" },
        { text: "Guide", link: "/en/guide" },
        { text: "API Contract", link: "/en/contract" },
        { text: "Built-in Components", link: "/en/component" },
        { text: "System Configuration", link: "/en/config" },
    ];
}

