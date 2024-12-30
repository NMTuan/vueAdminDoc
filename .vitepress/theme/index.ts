/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-16 22:46:04
 * @LastEditTime: 2024-12-30 20:05:13
 * @LastEditors: nmtuan nmtuan@qq.com
 * @Description:
 * @FilePath: \vueAdminDoc\.vitepress\theme\index.ts
 */

import DefaultTheme from 'vitepress/theme'
// import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

import GithubIcon from './components/GithubIcon.vue'
import LanguageIcon from './components/LanguageIcon.vue'

import './style/index.css'
import 'virtual:uno.css'
// import 'vitepress-markdown-timeline/dist/theme/index.css'


export default {
    extends: DefaultTheme,
    enhanceApp({ app}) {
        app.component('GithubIcon', GithubIcon)
        app.component('LanguageIcon', LanguageIcon)
    },
    setup() {
        const route = useRoute()
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            // mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        }
        onMounted(() => {
            initZoom()
        })
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        )
    }
}
