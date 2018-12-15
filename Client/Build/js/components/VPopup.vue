<template>
<div :class="{'sm-popup': true, 'sm-popup--active': value }">
  <div class="sm-popup__layer" @click="toggleState()" />
  <div class="sm-popup__content">
     <font-awesome-icon class="sm-icon" icon="times-circle" @click="toggleState()" />
    <slot />
  </div>
</div>
</template>

<script>
export default { 
  name: "VPopup",
  
  props: {
    // Call a function when the user clicks on a button
    onClick: {
      default: function () {

      },
      type: Function
    },
    value: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    toggleState: function(){
      this.$emit("input", !this.value) ;
    } 
  }
};
</script>

<style lang="scss">
.sm-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: $unit__zi--popup;
  display: none;
  align-items: center;

  &.sm-popup--active {
    display: flex;
  }

  .sm-popup__layer {
    background: rgba($clr__black, .6);
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
  }
  .sm-icon{
    position: absolute;
    font-size: 4rem;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  .sm-popup__content {
    width: auto;
    min-width: 30%;
    margin: auto;
    padding: 6rem 4rem;
    background: $clr__white;
    color: $clr__black;
    z-index: 5;
    position: relative;
  }
}
</style>
