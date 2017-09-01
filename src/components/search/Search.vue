<template>
  <div class="app-search">
    <span class="logo"><img class="img-responsive" v-lazy="imgUrl" alt=""></span>
    <i class="iconfont icon-search i-search"></i>
    <form action="">
      <input type="text" class="search-box" placeholder="冬天女装" />
    </form>
    <a href="javascript:void(0);" class="search-btn">取消</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: '/static/images/timg.jpg'
    };
  }
};
</script>

<style lang="less" scoped>
.app-search{
  padding: 0 1.2rem;
  position: fixed;
  z-index:10;
  top: 0;
  left: 0;
  width: 100%;
  height: .88rem;
  background: rgb(255,255,255);
  border-bottom: 1px solid #eee;
  .logo{
    display: block;
    position: absolute;
    z-index: 11;
    top:.1rem;
    left: .2rem;
    width: .68rem;
    height: .68rem;
    font-size: .22rem;
    line-height: .68rem;
    background: #f2f2f2;
    overflow: hidden;
  }
  .i-search{
    display: block;
    width: .35rem;
    height: .35rem;
    position: absolute;
    top:50%;
    left: 1.23rem;
    color: #999;
    margin-top: -.175rem;
  }
  .search-box{
    padding: 0 0 0 .35rem;
    float: left;
    margin-top: .2rem;
    width: 100%;
    height: .48rem;
    font-size: .22rem;
    line-height: .48rem;
    color: #333;
    background: #f4f4f4;
    border: 1px solid #e4e4e4;
    border-radius: .04rem;
  }
  .search-btn{
    display: block;
    width: 1rem;
    height: .48rem;
    text-align: center;
    font-size: .22rem;
    line-height: .48rem;
    color: #999;
    position: absolute;
    z-index: 11;
    top: .2rem;
    right: .15rem;
  }
}
</style>

