<template>
  <div class="nav">
      <span>KristijanTop</span>
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
    </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped lang="scss">
.nav {
  padding: 30px;
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  span {
    margin-right: auto;
    font-family: "ShoppingScript";
    font-size: 30px;
    pointer-events: none;
  }

  a {
    font-weight: bold;
    color: #fff;
    padding-left: 10px;
    text-decoration: none;
    transition: 0.2s ease-in-out;

    &.router-link-exact-active {
    }
  }
  a:hover {
    transform: rotate(-2deg);
  }
}
</style>
