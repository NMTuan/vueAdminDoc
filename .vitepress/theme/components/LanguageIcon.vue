<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-03-19 18:27:18
 * @LastEditTime: 2024-03-20 17:14:46
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \2024.muyi.dev\docs\.vitepress\theme\components\LanguageIcon.vue

 icon logo: https://simpleicons.org/
-->
<template>
    <div class="flex flex-wrap items-center justify-start gap-2 mb-12 z-10">
        <template v-for="item in language">
            <img v-if="typeof item === 'string'"
                :src="`https://img.shields.io/badge/${item}-gray?style=flat-square&logo=${item}`" />
            <img v-else :src="`https://img.shields.io/badge/${item.text}-gray?style=flat-square&logo=${item.logo}`" />
        </template>
    </div>
</template>
<script setup>
const props = defineProps({
    language: {
        type: Array,
        default: () => []
    }
})
</script>
