<!-- 列表上拉加载-->
<template>
  <div class="appList">
    <div class="list-item" v-for="(it,i) in itemList" :key="i"> 
      <router-link :to="'/detail/'+it.id" >
        <span class="item-thumbs"><img class="img-responsive" v-lazy="it.proImg" alt=""></span>
        <h3 class="item-name">{{it.proname}}</h3>
        <div class="item-price">¥<em>{{it.price}}</em></div>
        <div class="item-other"><span class="">{{ it.free==1?"免运费":"有运费" }}</span> <span class="p-right">{{it.addr}}</span></div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'appList',
  props: ['itemList']
};
</script>

<style lang="less" scoped>
.appList{
  margin: .2rem 0;
  padding: 0 .2rem;
  display: box;
  width: 100%;
  height: auto;
  background: rgb(255,255,255);
  .list-item{
    position: relative;
    padding: .2rem 0 .2rem 1.8rem;
    width: auto;
    height: 2rem;
    box-flex: 1;
    box-orient: vertical;
    overflow: hidden;
    border-bottom: 1px dashed #eee;
    &:last-child{
      border-bottom: none;
    }
    .item-thumbs{
      position: absolute;
      top: 0.2rem;
      left: 0;
      display:block;
      width: 1.6rem;
      height: 1.6rem;
      background: #f4f4f4;
      overflow: hidden;
    }
    .item-name{
      width: auto;
      font-weight: normal;
      font-size: .24rem;
      line-height: .28rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      color: #333;
    }
    .item-price{
      font-size: .2rem;
      line-height: .42rem;
      height: .42rem;
      color: #f60;
      em{
        font-style:normal;
        font-size: .24rem;
      }
    }
    .item-other{
      height: .4rem;
      font-size: .22rem;
      line-height: .4rem;
      color: #999;
      overflow: hidden;
    }
  }
}
</style>
