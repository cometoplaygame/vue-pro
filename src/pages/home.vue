<template lang="html">
  <div class="container">
    <home-header :title="title"></home-header>   <!--  展示引入的header组件 -->
    <div class="content">
      <ul class="cont-ul">
          <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <list v-for="(item,index) in items" :price="item.price" :title="item.title" :img="item.img" :key="item.id" :bidno="item.id"></list>
      </ul>
    </div>
    <common-footer></common-footer>  <!--  展示引入的footer组件 -->
  </div>
</template>
<script>
import HomeHeader from "../components/HomeHeader"; /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
import CommonFooter from "../components/commonFooter";
import List from "../components/list";
export default {
  name: "home",
  data() {
    return {
      title: "首页",
      items: [] /* 定义一个空数组数据items */
    };
  },
  components: {
    HomeHeader,
    CommonFooter,
    List
  },
  created() {
    /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
    this.$http.get("/api/goods").then(data => {
      /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
      this.items = data.body.data;
    });
  }
};
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
.content {
  padding: 0.44rem 0;
}
.cont-ul {
  background-color: #fff;
}
.cont-ul::after {
  content: "";
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
</style>
