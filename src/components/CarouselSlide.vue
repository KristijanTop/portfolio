<template>
  <transition :name="direction">
    <div class="carouselSlide" v-show="visibleImage === index">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CarouselSlide",
  props: ["visibleImage", "index", "direction"],
};
</script>

<style>

.carouselSlide {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.left-enter-active {
    animation: leftInAnimation 0.7s ease-in-out;
}

.left-leave-active {
    animation: leftOutAnimation 0.7s ease-in-out;
}

@keyframes leftInAnimation {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes leftOutAnimation {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

.right-enter-active {
    animation:rightInAnimation 0.7s ease-in-out;
}

.right-leave-active {
    animation:rightOutAnimation 0.7s ease-in-out;
}

@keyframes rightInAnimation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes rightOutAnimation {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}

</style>