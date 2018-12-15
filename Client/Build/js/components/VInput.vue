<template>
<div :style="{'color': color}" :class="{'sc-input': true, 'sc-input__filled': value}">
  <input
      ref="inputField"
      :id="'v_input['+id+']'"
      :style="{'background-color': backgroundColor}"
      :value="value" 
      :name="$slots.label" 
      class="sc-input__field"
      @input="updateInput()">
  <label
      v-if="$slots.label"
      :for="'v_input['+id+']'"
      class="sc-input__label">
      <slot name="label" />
    </label>
  <div v-if="icon" class="sc-input__icon">
    <div v-if="$slots.icon_info" class="sc-input__icon__help">
      <slot name="icon_info" />
    </div>
    <span
        v-if="icon"
        :class="'sc-icon icon-'+ icon" />
    </div>
    <slot />
  </div>
</template>

<script>
// import { resolveArrayValue } from 'css-in-js-utils';
// import { prefix } from 'inline-style-prefixer';
// import Colorable from './../../mixins/colorable';
export default {
  name: "VInput",
  props: {
    // Define the size of the button: s/m/l
    placeholder: {
      default: '',
      type: String
    },
    icon: {
      default: '',
      type: String
    },
    backgroundColor: {
      default: '',
      type: String
    },
    color: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    }
  },
  data: function () {
    return {
      id: this._uid
    }
  },
  methods: {
    updateInput: function () {
      this.$emit('input', this.$refs.inputField.value)
    }
  }
};
</script>

<style lang="scss">
$pfx: 'sc-input';

.#{$pfx} {
  position: relative;
  font-size: 1.5rem;
  display: inline-block;
  margin: 1.5em 0;

  &__icon {
    position: absolute;
    right: .5em;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: .8em;

    &:hover .#{$pfx}__icon__help {
      display: flex;
    }

    .#{$pfx}__icon__help {
      display: none;
      position: absolute;
      bottom: 2.5em;
      border-radius: 5px;
      width: 20rem;
      right: -.5rem;
      z-index: 5;
      background: $clr__gallery;
      padding: .5em;
      color: $clr__white;

      &::before {
        content: "";
        position: absolute;
        left: auto;
        transform: translateX(-50%);
        border-width: 8px 6px 0 6px;
        border-style: solid;
        border-color: $clr__gallery transparent transparent transparent;
        z-index: 100;
        bottom: -8px;
        right: 0;
      }
    }
  }

  &__field {
    font-size: 1em;
    display: inline-block;
    padding: 0 2em 0 0;
    color: $clr__black;
    border: none;
    border-bottom: 1px solid $clr__gallery;
    background: $clr__white;

    &:focus {
      border-bottom: 2px solid $clr__red;
    }
  }

  &__label {
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0;
    transition: 300ms ease all;
  }

  // Input has a value
  &__filled &__field {
    border-bottom: 2px solid $clr__red;
  }

  &__filled &__label,
  &__field:focus~&__label {
    top: -1.5em;
    font-size: .8em;
    color: $clr__red;
  }
}
</style>
