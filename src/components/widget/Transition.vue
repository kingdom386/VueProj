/**css3 动画 */
<template>
  <div class="trMain">
    <a href="javascript:void(0);" class="clickBtn" @click="test()">vue动画</a>
    <div class="aniPane">
      <transition enter-active-class="animated rubberBand" leave-active-class="animated rubberBand">
        <div class="test" v-if="rotate" ></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rotate: true
    };
  },
  mounted () {
    this.tryOnce();
  },
  methods: {
    tryOnce () {
      let sW = window.screen.availWidth;
      let sH = window.screen.availHeight;
      document.querySelector('.trMain').style.width = `${sW}px`;
      document.querySelector('.trMain').style.height = `${sH}px`;
    },
    test () {
      this.rotate = !this.rotate;
    }
  }
};
</script>

<style lang="less" scoped>
@import '/Static/less/animate.min.css';

.trMain{
  width: 100%;
  height: 100%;
  background: rgb(254, 254, 254);
  .clickBtn{
    display: block;
    outline: none;
    width: 1.2rem;
    height: .55rem;
    text-align: center;
    font-size: .14rem;
    line-height: .55rem;
    color: #fff;
    background: purple;
  }
  .aniPane{
    width:  auto;
    height: 200px;
    padding: .2rem;
    margin:  10px auto;
    background: rgba(233, 233, 233, .8);
    .test{
      margin: 0px auto;
      width: 150px;
      height: 150px;
      border-radius: 100%;
      background:#f60;
    }
  }
}
</style>




