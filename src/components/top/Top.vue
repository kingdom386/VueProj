<template>
 <div class="appTop">
   <swiper :options="mySwiperOption" :not-next-tick="nextTick" ref="topSwiper">
    <swiper-slide class="swiper-slide nav-swiper-line" v-for="(nav,i) in navItem" :key="i">
      <router-link to="">{{nav.title}}</router-link>
    </swiper-slide>
   </swiper>
 </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'Static/less/swiper.css';

export default {
  name: 'appTop',
  props: ['navItem'],
  data () {
    return {
      nextTick: true,
      mySwiperOption: {
        freeMode: true,
        slidesPerView: 5
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.topSwiper.swiper;
    }
  }
};
</script>
<style lang="less" scoped>
.appTop{
  position: fixed;
  padding: .2rem 0;
  z-index: 2;
  top: 0.88rem;
  left: 0;
  width: 100%;
  height: .88rem;
  font-size: .16rem;
  line-height: .48rem;
  background: rgb(255,255,255);
  border-bottom: 1px solid #e4e4e4;
  .nav-swiper-line{
    text-align: center;
    border-right: 1px solid #e4e4e4;
    &:last-child{
      border-right: none;
    }
    a{
      color: #333;
      &:hover{
        color: #333
      }
    }
  }
}
</style>

