<template>
  <div class="ripple-outer" @mousedown="addRipple" v-on="$listeners">
    <TransitionGroup class="ripples" name="ripple">
      <div class="ripple"
           v-for="ripple in ripples"
           :key="ripple.id"
           :style="{
             top: ripple.top,
             left: ripple.left,
             width: ripple.width,
             height: ripple.height,
             background: color
           }"
      ></div>
    </TransitionGroup>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'rgba(255, 255, 255, .3)'
      }
    },
    data: () => ({
      ripples: []
    }),
    methods: {
      addRipple(e) {
        const { left, top } = this.$el.getBoundingClientRect();
        const { offsetWidth, offsetHeight } = this.$el;
        const rippleWidth = offsetWidth > offsetHeight ? offsetWidth : offsetHeight;
        const halfRippleWidth = rippleWidth / 2;

        this.ripples.push({
          width: `${rippleWidth}px`,
          height: `${rippleWidth}px`,
          left: `${e.clientX - left - halfRippleWidth}px`,
          top: `${e.clientY - top - halfRippleWidth}px`,
          id: Date.now()
        });
      },
      purgeRipples() {
        this.ripples = [];
      }
    },
    mounted() {
      addEventListener('mouseup', this.purgeRipples);
    },
    beforeDestroy() {
      removeEventListener('mouseup', this.purgeRipples);
    }
  }
</script>

<style>
  .ripple-outer {
    position: relative;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;
  }

  .ripples {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }

  .ripple {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    opacity: 0;
  }

  .ripple-enter-active, .ripple-enter-to-active {
    transition: all 1.5s ease-out;
  }

  .ripple-leave-active, .ripple-leave-to-active {
    transition: all .7s ease-out;
  }

  .ripple-outer.fast .ripple-enter-active,
  .ripple-outer.fast .ripple-enter-to-active {
    transition: all 1s ease-out;
  }

  .ripple-outer.fast .ripple-leave-active,
  .ripple-outer.fast .ripple-leave-to-active {
    transition: all .4s ease-out;
  }

  .ripple-enter {
    transform: scale(0);
    opacity: 1;
  }

  .ripple-enter-to,
  .ripple-leave {
    transform: scale(4);
    opacity: 1;
  }

  .ripple-leave-to {
    transform: scale(4);
    opacity: 0;
  }
</style>