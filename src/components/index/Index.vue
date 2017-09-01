<template>
  <div class="appIndex">
    <search></search>
    <bottom></bottom>
    <div class="wrapper" ref="wrapper">
      <div id="content">
        <banner :banner="bannerItem"></banner>
        <list :itemList="itemList"></list>
      </div>
    </div>
    <transition sytle='animation-duration: .2s;' enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown"> 
      <div class="search-layer" v-show="pageShow">
        <!-- 根据用户的日常搜索推荐的关键搜索词 -->
      </div>
    </transition>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Search from '@/components/search/Search';
import Banner from '@/components/banner/Banner';
import List from '@/components/List/List';
import Bottom from '@/components/bottom/Bottom';
import Axios from 'axios';
import {getUrl} from './getUrl';
import Computer from '@/components/widget/Slot';

function req (u) {
  return Axios.get(u);
}

export default {
  name: 'appIndex',
  data () {
    return {
      pageShow: false,
      myscroll: '',
      itemList: [],
      bannerItem: []
    };
  },
  components: {
    Banner,
    List,
    Bottom,
    Computer,
    Search
  },
  mounted () {
    this.getList();
    let nodes = document.querySelector('.search-box');
    let cancleBtn = document.querySelector('.search-btn');
    nodes.onfocus = (evt) => {
      if (!this.pageShow) {
        this.pageShow = !this.pageShow;
      }
    };
    cancleBtn.onclick = () => {
      if (this.pageShow) {
        this.pageShow = !this.pageShow;
      }
    };
  },
  methods: {
    getList () {
      Axios.all([req(getUrl.Banner), req(getUrl.List)]).then(Axios.spread((bannerR, listR) => {
        this.bannerItem = bannerR.data.data;
        this.itemList = listR.data.data;
        this.$nextTick(() => {
          if (!this.myscroll) {
            this.myscroll = new BScroll(this.$refs.wrapper, {
              click: true,
              touch: true,
              pullUpLoad: this.pullUpLoad
            });
            this.myscroll.on('scrollEnd', (pos) => {
              if ((this.myscroll.maxScrollY + 80) >= pos.y) {
                Axios.get(getUrl.List).then((resp) => {
                  let str = '';
                  str = resp.data.data;
                  if (str.length > 0) {
                    this.itemList = this.itemList.concat(resp.data.data);
                    this.$nextTick(() => {
                      this.myscroll.refresh();
                    });
                  }
                });
              }
            });
          } else {
            this.myscroll.refresh();
          }
        });
      }));
    },
    changeState () {
     this.iShow = !this.iShow;
    }
  }
};
</script>

<style lang="less" scoped>
@import '/static/less/animate.min.css';

.animated{animation-duration:.2s;}

.appIndex{
  width: 100%;
  height: 100%;
  .appSlot{
    position: fixed;
    z-index: 88;
    left: .15rem;
    top: 50%;
    margin-top: -.5rem;
    width: 1rem;
    height: 1rem;
    text-align: center;
    overflow: hidden;
    background: rgb(235,170,0)
  }
  .wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    #content{
        padding: .88rem 0;
        position: absolute;
        z-index: 1;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        transform:translate3d(0,0,0);
        -ms-user-select: none;
        user-select: none;
        -webkit-text-size-adjust: none;
        }
      .content-item{
        background: rgb(255,255,255);
        width: 7.5rem;
        height: 4.2rem;
        overflow: hidden;
      }
  }
  .search-layer{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8;
    background: rgb(255,255,255);
    width: 100%;
    height: 100%;
  }
}

</style>

