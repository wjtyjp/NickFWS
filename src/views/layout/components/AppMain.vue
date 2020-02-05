<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->

      <!-- tab切换刷新include -->
      <keep-alive :include="cachedViews">
        <!-- <keep-alive> -->
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  // height: calc(100vh - 40px);
  position: relative;
  overflow: auto;
  min-width:1280px;
}
$h: ($navbar-height + $tag-height);
$mainHeight:($navbar-height + $tag-height + $footer-height);
.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 40 + 30 */

    height: calc(100vh - #{$h});
  }

  .fixed-header+.app-main {
    padding-top: $h;
  }
}
</style>
