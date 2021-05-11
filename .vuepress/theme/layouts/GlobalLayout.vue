<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
    <v-app id="global-layout">
        <v-main>
            <component :is="layout"/>
        </v-main>
    </v-app>
</template>

<script>
export default {
    computed: {
        layout () {
        if (this.$page.path) {
            if (this.$frontmatter.layout) {
            // You can also check whether layout exists first as the default global layout does.
            return this.$frontmatter.layout
            }
            return 'Layout'
        }
        return 'NotFound'
        }
    }
}
</script>