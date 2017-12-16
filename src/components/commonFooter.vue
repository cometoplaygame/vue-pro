<template lang="html">
  <div class="footer">
    <ul class="footer-cont">
        <li>
         <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/bid">项目</router-link>
        </li>
        <li>
          <router-link to="/account">个人中心</router-link>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'commonFooter'
}
</script>
<style lang="css"  >
  .footer {
    height: 0.44rem;
    width: 3.75rem;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
     line-height: 0.44rem;
  }
  .footer-cont li {
    float: left;
    width: 33.333%;
    height: inherit;
    line-height: inherit;
    font-size: 0.18rem;
    color: #007aff;
    text-align: center;
  }
  .footer-cont li:active {
    background-color: #ccc;
  }
  .footer-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
