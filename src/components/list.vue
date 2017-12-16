<template lang="html">
  <li class="goods-list">
    <router-link :to="bidnos(bidno)"   class="goods-list-link">  <!--  这个是用来跳转页面的，可以理解为a标签 -->
      <div class="goods-list-pic">
          <img :src="img" alt="">
      </div>
      <div class="goods-list-desc">
        <p class="goods-list-name">{{ title }}</p>   
        <p class="goods-list-price">{{ price|fixednum}}</p>  <!-- 这里用到了过滤器货币形式和保留两位小数 -->
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name:'bidList',
  props: ['price', 'title', 'img','bidno'],   /*  props是子组件获取父组件数据用的 */
  methods:{
     /*
    * @methed:bidnos {function}(value) [拼接链接]
    */
    bidnos:(str)=>'/bid/detail/'+str
  },
  filters:{
    /*
    * @methed:fixednum {function}(value) [保存两位小数]
    */
    fixednum:(value)=>Number(value).toFixed(2)
  }
}
</script>

<style lang="css" scoped>
  .goods-list {
    width: 50%;
    float: left;
    box-sizing: border-box;
    margin-bottom: 0.02rem;
    border-bottom: 0.01rem solid #ccc;
    
  }
  .goods-list:nth-of-type(odd) {
    border-right: 0.01rem solid #ccc;
  }
  .goods-list:nth-of-type(even) {
    border-left: 0.01rem solid #ccc;
  }
  .goods-list-link {
    display: block;
    padding: 0.15rem 0;
    margin: 0;
    text-align: center;
    background-color: #fff;
  }
  .goods-list:nth-of-type(even) .goods-list-link{
    margin-left: 0;
  }
  .goods-list:nth-of-type(odd) .goods-list-link{
    margin-right: 0;
  }
  .goods-list-pic {
    width:100%;
  }
  .goods-list-pic > img {
    max-width: 100%;
    max-height: 1rem ;
  }
  .goods-list-desc {
    padding: 0 0.15rem;
  }
  .goods-list-desc:after {
    display: block;
    content: '';
    clear: both;
  }
  .goods-list-name,.goods-list-price {
    width: 50%;
    height:0.14rem;
    line-height:0.14rem;
    font-size: 0.14rem;
    color: #333;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-list-price {
    color: #ff8000;
    float: right;
  }
</style>
