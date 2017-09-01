<template>
  <div class="main">
   <div class="contentPane" v-for="(it, i) in imgItem" :key="i">
      <img v-lazy="it.proImg" />
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgItem: []
    };
  },
  created () {
    this.$axios.get(['/static/data/List.json']).then((resp) => {
      this.imgItem = resp.data.data;
    });
  }
};
</script>
<style scoped lang="less">
.contentPane{
  text-align: center;
}
</style>

