<template>
  <div id="app">
    <transition>
      <router-view class="pageShow"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    };
  }
};

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img[lazy=loading] {
  background: 50% 50% no-repeat;
  background-size: 1.2rem 1.2rem;
  }
</style>
