<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>账户中心</p>
    <ul>
      <li>
        <router-link to="/account/3">账户中心</router-link>
      </li>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'account',
  data () {
    return {
      title: '我的'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
