<template>
<div id="sm-page" class="sm-page">
  <TheHeader />
  <TheSidebar />
  <main id="sm-main" :class="{'sm-main': true, 'sm-main--open': $store.state.TheSidebar.sidebar_open }">
    <slot />
  </main>
</div>
</template>

<script>
import TheHeader from "@/TheHeader";
import TheSidebar from "@/TheSidebar";

export default {
  name: "Default",
  components: {
    TheHeader,
    TheSidebar
  }
};
</script>

<style lang="scss">
.sm-main {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  top: calc(#{$unit__hgt-header} + 2rem);
  padding: 0 5rem 0 5rem;
  height: calc(100vh - 5rem);

  &.sm-main--open {
    padding: 0 5rem 0 calc(#{$unit__wdt--sidebar} + 5rem);
  }
}
</style>
