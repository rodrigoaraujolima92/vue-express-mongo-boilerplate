
<template>
  <header
    id="sm-header"
    class="sm-header">
    <div
      class="sm-burger"
      @click="$store.commit(`TheSidebar/${TOGGLE_SIDEBAR}`)">
      <div class="sm-burger__line" />
      <div class="sm-burger__line" />
      <div class="sm-burger__line" />
    </div>
  </header>
</template>
<script>
import {TOGGLE_SIDEBAR} from './../store/mutationsTypes';


export default {
  name: "TheHeader",
  data: () => {
    return {
      TOGGLE_SIDEBAR
    }
  }
};
</script> 

<style lang="scss"> 
.sm-header {
  background-color: $clr__white;
  color: $clr__black;
  height: $unit__hgt-header;
  left: 0;
  right: 0;
  position: fixed;
  top: 0; 
  z-index: $unit__zi--sidebar;
  display: flex;
  width: 100%; 
  padding: 0 2rem;
  align-items: center;
  &:after{
    bottom: -5px;
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .06);
    content: "";
    height: 5px;
    left: 0;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    right: 0px;
    width: 100%;
  }
  .sm-burger{
    cursor: pointer;
    position: relative;
  }
  .sm-burger__line {
    height: .2rem;
    width: 2rem;
    background: $clr__gray;
    margin: .4rem 0;
  }
}
</style>
