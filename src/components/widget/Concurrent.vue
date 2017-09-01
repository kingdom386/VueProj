/** 多个一部请求并发事件*/
<template>
  <div class="main">
    <a href="javascript:void(0);" class="testBtn" @click="show = !show">显示隐藏 ！</a>
     <div class="fades">
        <transition name="fade" >
            <div v-if="show" style="width: 100px;height: 100px;background:#f60;">
              {{show}}
            </div>
        </transition>
     </div>

    <a href="javascript:void(0);" class="testBtn" @click="skew = !skew">斜切 ！</a>
    <div class="fades">
        <transition name="skew" >
            <div v-if="skew" style="width: 100px;height: 100px;background:#f60;">
              {{skew}}
            </div>
        </transition>
    </div>

    <a href="javascript:void(0);" class="testBtn" @click="rotate = !rotate">旋转 ！</a>
    <div class="fades">
        <transition name="rotate" >
            <div v-if="rotate" style="width: 100px;height: 100px;background:#f60;-webkit-border-radius: 100%">
              {{rotate}}
            </div>
        </transition>
    </div>

  </div>
</template>

<script>
import Axios from 'axios';

let getUrl = ['/static/data/Nav.json', '/static/data/List.json'];
let urlMap = getUrl.map(req);

function req (u) {
  return Axios.get(u);
}

export default {
  data () {
    return {
      show: true,
      skew: true,
      rotate: false
    };
  },
  created () {
    Axios.all(urlMap).then(Axios.spread((resp1, resp2) => {
    }));
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
.main{
  .testBtn{
    display: block;
    font-size: .16rem;
    line-height: .3rem;
    height: .3rem;
    color: #333;
  }
  .fades{
    margin: 10px auto;
    width: auto;
    height:  100px;
    }
  .fade-enter-active, .fade-leave-active{
    transition: opacity .5s ease-in-out;
  } 
  .fade-enter, .fade-leave-to{
    margin-left: 25px;
    opacity: .5;
  } 

  .skew-enter,.skew-leave-to{
    transform: skew(45deg)
  }

  .skew-enter-active,.skew-leave-active{
    transition:  transform .5s ease-out
  }

  .rotate-enter,.rotate-leave-to{
    display: block;
    transform: rotate(360deg)
  }
  .rotate-enter-active,.rotate-leave-active{
    transition:  transform .5s ease-out
  }
}

</style>
