<template>
  <div :class="'sm-btn__wrapper sm-btn__wrapper--size-'+ size">
    <button
       class="sm-btn" 
      @click="$emit('on-click')">
      <span 
        v-if="icon"
        :class="'sm-icon icon-'+ icon" />
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "VButton",
  props: {
    // Call a function when the user clicks on a button
    // onClick: {
    //   default: function(){
        
    //   },
    //   type: Function
    // },
    // Define the size of the button: s/m/l
    size: {
      default: 's',
      type: String
    },
    // Define if an icon should be displayed
    icon: {
      default: '',
      type: String
    }
  }
};
</script>

<style lang="scss">
 .sm-btn__wrapper {
   display: inline-block;

   &.sm-btn__wrapper--size-s {
     .sm-btn {
       padding: .6rem 1rem;
     }
   }

   &.sm-btn__wrapper--size-m {
     .sm-btn {
       padding: 1rem 1.5rem;
     }
   }

   &.sm-btn__wrapper--size-l {
     .sm-btn {
       padding: 1.5rem 2rem;
     }
   }
 }

 .sm-btn {
   @include button--reset();
   display: flex;
   align-items: center;
   background-color: $clr__gallery;
   border-radius: 2px;
   color: $clr__black;
   cursor: pointer;
   font-size: 1.4rem;

   &:hover {
     background-color: $clr__gray;
   }

   .sm-icon {
     padding-right: 5px;
   }
 }
</style>
