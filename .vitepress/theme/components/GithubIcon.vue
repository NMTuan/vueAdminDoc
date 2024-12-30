<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-05 10:46:24
 * @LastEditTime: 2024-03-20 17:08:31
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \2024.muyi.dev\docs\.vitepress\theme\components\GithubIcon.vue
-->
<template>
    <div class="flex items-center justify-end gap-2 mb-12" v-if="name">
        <template v-for="item in icons">
            <a :href="`https://www.github.com/nmtuan/${name}`" target="_blank">
                <img :src="`https://img.shields.io/github/${item}/nmtuan/${name}?style=flat-square&color=d97706`" />
            </a>
        </template>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
    name: {
        type: String,
        default: ''
    }
})

const icons = ref([
    'stars',
    'commit-activity/t',
    'last-commit'
])
</script>
