<template>
<nav id="sm-sidebar" :class="{'sm-sidebar': true, 'sm-sidebar--open': $store.state.TheSidebar.sidebar_open }">
  <div class="sm-sidebar__center">
    <ul class="sm-main-menu">
      <li v-for="(route, index) in $router.options.routes" v-if="route.name" :key="index" class="sm-main-menu__item">
        <router-link :to="route" :title="route.name" class="sm-main-menu__link sm-main-menu__item--level-0" active-class="sm-main-menu__link--active">
          <span
              v-if="route.icon"
              :class="'sr-icon--menue icon-'+route.icon" />
            <div class="sm-main-menu__text">
              {{ route.name }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  <div class="sm-sidebar__bottom"/>
</nav>
</template>

<script>
import {
  TOGGLE_SIDEBAR
} from './../store/mutationsTypes';

export default {
  name: "TheSidebar",
  data: () => {
    return {
      TOGGLE_SIDEBAR
    }
  }
};
</script> 

<style lang="scss">
.sm-sidebar {
  background-color: $clr__wild_sand;
  color: $clr__black;
  height: calc(100vh - #{$unit__hgt-header});
  top: $unit__hgt-header;
  left: 0;
  position: fixed; 
  z-index: $unit__zi--sidebar;
  display: none;
  width: $unit__wdt--sidebar;
  &.sm-sidebar--open{
    display: flex
  }
  .sm-sidebar__top {
    padding: 2rem 1.5rem;
    flex: none !important;
  }

  .sm-sidebar__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1rem;
    background: $clr__red;
  }

  .sm-sidebar__center {
    width: 100%;

    .sm-main-menu__item {
      font-size: 1.6rem;
    }

    .sm-main-menu {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    .sm-main-menu__item--level-0 {
      .sm-main-menu__text {
        padding-left: 5px;
      }
    }

    .sr-icon--menue {
      padding-top: 5px;
    }

    .sr-icon {
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $clr__red;
      border: 1px solid $clr__red;
      padding: 5px;
      font-size: 1.5rem;

      * {
        font-weight: $typo__fw--bold;
      }
    }

    .sm-main-menu__link {
      text-decoration: none;
      color: $clr__black;
      display: flex;
      position: relative;
      padding: 1.5rem 1rem;

      &:visited {
        text-decoration: none;
        color: $clr__black;
      }

      &:hover,
      &.sm-main-menu__link--active {
        background: $clr__gallery;
      }
    }
  }
}
</style>
