<template>
 <div class="appDetail">
   <twb></twb>
 </div>
</template>

<script>
import Twb from '@/components/top/Topwithback';

export default {
  data () {
    return {};
  },
  components: {
    Twb
  }
};
</script>

<style lang="less" scoped>
.appDetail{
  width: auto;
  height: 100%;
  background: rgb(255,255,255);
}
</style>