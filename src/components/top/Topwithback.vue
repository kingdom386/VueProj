<template>
 <div class="topWithBack">
   <span class="iconfont icon-return" @click="backPrev()"></span>
 </div>
</template>

<script>
export default {
  name: 'twb',
  methods: {
    backPrev () {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.topWithBack{
  position: fixed;
  padding: 0 .6rem;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: .88rem;
  background: rgb(255,255,255);
  border-bottom: 1px solid #e4e4e4;
  span:first-child{
    position: absolute;
    left: 0;
    top: .2rem;
    display: block;
    width: .48rem;
    height: .48rem;
    font-size: .5rem;
    line-height: .48rem;
    color: #999
  }
}
</style>


