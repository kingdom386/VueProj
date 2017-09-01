<template>
 <div class="appLike">
   <twb></twb>
   <top :navItem = "navItem"></top>
 </div>
</template>

<script>
import Twb from '@/components/top/Topwithback';
import Top from '@/components/top/Top';
import Axios from 'axios';
import {getUrl} from '@/components/index/getUrl';

export default {
  data () {
    return {
      navItem: []
    };
  },
  components: {
    Twb,
    Top
  },
  mounted () {
    this.getNav();
  },
  methods: {
    getNav () {
      Axios.get(getUrl.Nav).then((resp) => {
        this.navItem = resp.data.data;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.appLike{
  width: auto;
  height: 100%;
  background: rgb(255,255,255);
}
</style>