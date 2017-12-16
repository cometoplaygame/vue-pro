<template lang="html">
  <div class="head">
    <div class="header">
      <h4 class="header-cont">{{title}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name:'HomeHeader',
  props: ["title"] /*  props是子组件获取父组件数据用的 */
};
</script>
<style lang="css" scoped>
.head {
  width: 3.75rem;
  height: 0.44rem;
  position: fixed;
   left: 0;
  top: 0;
}
.header {
  width: 3.75rem;
  height: 0.44rem;
 
  background-color: #007aff;
  border-bottom: 2px solid #007aff;

}
.header h4 {
  width: 100%;
  text-align: center;
  line-height: 0.44rem;
  font-size: 0.18rem;
  color: #fff;
}
</style>
