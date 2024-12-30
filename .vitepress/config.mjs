/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-12-17 20:19:22
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-12-30 20:07:44
 * @FilePath: \vueAdminDoc\.vitepress\config.mjs
 * @Description: 
 * 
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved. 
 */
import { defineConfig } from "vitepress";
import UnoCSS from 'unocss/vite'

import { en } from "./en.js";
import { zh } from "./zh.js";
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "vueAdmin",
    rewrites: {
        "zh/:rest*": ":rest*",
    },
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    // markdown: {
    //     math: true,
    //     codeTransformers: [
    //         // We use `[!!code` in demo to prevent transformation, here we revert it back.
    //         {
    //             postprocess(code) {
    //                 return code.replace(/\[\!\!code/g, "[!code");
    //             },
    //         },
    //     ],
    // },

    // sitemap: {
    //     hostname: "https://vitepress.dev",
    //     transformItems(items) {
    //         return items.filter((item) => !item.url.includes("migration"));
    //     },
    // },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // nav: [
        //     { text: "Home12", link: "/" },
        //     { text: "Examples", link: "/markdown-examples" },
        // ],

        // sidebar: [
        //     {
        //         text: "Examples",
        //         items: [
        //             { text: "Markdown Examples", link: "/markdown-examples" },
        //             { text: "Runtime API Examples", link: "/api-examples" },
        //         ],
        //     },
        // ],

        socialLinks: [
            { icon: "github", link: "https://github.com/nmtuan/vueAdmin" },
        ],
    },
    locales: {
        root: { label: "简体中文", ...zh },
        en: {
            label: "English",
            ...en,
        },
    },
    vite: {
        plugins: [UnoCSS()]
    },
});
