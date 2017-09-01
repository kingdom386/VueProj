<template>
 <div class="banner-swiper">
    <swiper :options="bannerOption" ref="bannerOption">
      <swiper-slide class="swiper-slide" v-for="(bi,i) in banner" :key="i">
        <img class="img-responsive" :src="bi.banner" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
 </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default{
  name: 'appBanner',
  props: ['banner'],
  data () {
    return {
      bannerOption: {
        autoplay: 5000,
        loop: true,
        autoplayDisableOnInteraction: false,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
      },
      swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.bannerOption.swiper;
    }
  },
  mounted () {
    this.$nextTick(() => {
      let swiperSlides = this.swiperSlides;
      if (swiperSlides.length < 5) swiperSlides.push(swiperSlides.length + 1);
    });
  }
};
</script>

<style>

.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #ddd;
    opacity: .9
}
.swiper-pagination-bullet-active {
    opacity: .9;
    background: #f60 !important;
}
</style>

<style lang="less" scoped>
@import '/Static/less/swiper.css';

.banner-swiper{
  width: 7.5rem;
  height: 4.2rem;
  overflow: hidden;
  background: rgb(255,255,255);
}

</style>

