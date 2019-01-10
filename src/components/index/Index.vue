<template>
    <div class="doc-man-container">
        <div class="doc-man-project-page">
            <div class="doc-man-nav">

            </div>
            <div class="doc-man-box">
                <div class="doc-man-tabBar-info"></div>
                <div class="doc-man-projects-list"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped lang="stylus">
    @import "~@assets/styles/variable.styl"
    @import "~@assets/styles/mixins.styl"
    .doc-man-project-page
        fullPage()
    .doc-man-nav
        width 266px
        height 100%
        background $themeNavBarColor
    .doc-man-box
        width calc(100% - 266px)
        height 100%
</style>