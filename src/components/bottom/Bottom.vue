<template>
  <div class="appBtm">
    <router-link :to="fitem.path" class="btm-nav iconfont"  v-for="(fitem,index) in footerItems" :class="[isActive===index?'active':'',fitem.name]"  @click="showIndex(index)" :key="fitem.name"></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datas: '/',
      isActive: 0,
      footerItems: [{'path': '/', 'name': 'icon-homepage'}, {'path': '/like', 'name': 'icon-manage'}, {'path': '/cart', 'name': 'icon-publishgoods_fill'}, {'path': '/profile', 'name': 'icon-mine'}]
    };
  },
  methods: {
    showIndex (index) {
      this.isActive = index;
      this.datas = this.linkItem[index];
    }
  }
};

</script>

<style lang="less" scoped>
.appBtm{
  position: fixed;
  left: 0;
  bottom: 0;
  display: -webkit-box;
  display: -mox-box;
  display: -o-box;
  z-index:2;
  width: 100%;
  height: .88rem;
  border-top: 1px solid #e4e4e4;
  background: rgb(255,255,255);
  .btm-nav{
    display: block;
    box-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -o-box-flex: 1;
    box-orient: horizontal;
    font-size: .55rem;
    line-height: .88rem;
    color: #666;
    height: .88rem;
    text-align: center;
    &.active{
      color: #f60;
    }
  }
}

</style>

