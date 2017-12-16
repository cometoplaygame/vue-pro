<template lang="html">
  <div class="detail">
      <detail-header :title="title"></detail-header>
      <p class="site-title">树懒果园 泰国进口大金煌芒果</p>
      <p class="site-cont">5斤装，约2-4个果，大！！！甜！！！</p>
      <common-footer></common-footer>
  </div>
</template>

<script>
import DetailHeader from "@/components/HomeHeader";
import CommonFooter from "@/components/commonFooter";

export default {
  name: "gooddetail",
  
  data() {
    return {
      title: "商品详情",
      good:{},//当前商品的数据
    };
  },
  components: {
    DetailHeader,
    CommonFooter
  },
  /*
  * 如何获取到bid_no?window.loaction.search?
  */
  // created() {
  //   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
  //   this.$http.get("/api/goods").then(data => {
  //     /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
  //     this.items = data.body.data;
  //   });
  // }
};
</script>

<style lang="css">
.detail {
  padding: 0.44rem 0;
  font-size: 0.12px;
}
.detail > img {
  display: block;
  width: 80%;
  margin: 0 auto 0.05rem;
}
.detail > p {
  font-size: 0.12rem;
  line-height: 0.14rem;
  text-align: left;
  padding-bottom: 0.05rem;
}
.detail > p.site-title {
  color: #ff8000;
}
.detail > p.site-cont {
  color: #666;
  font-size: 0.12rem;
}
</style>
