<template>
  <div class="loan-money-container">
    <p class="loan-money-title">您期望借款的金额（单位：元）</p>
    <div class="from-group">
      <input :type="type" :min="min" :max="max" v-model="value" class="input"/>
    </div>
  </div>
</template>
<script>
export default {
  name:'index_loan_money',
	components: {
	},
	data () {
		return {
      min:1000,
      max:99999,
      value:1000,
      type:'number'
		}
	}
}
</script>

<style lang="css">
.loan-money-container{
  margin-bottom:0.2rem ;
  overflow: hidden;
  padding-bottom: 0.2rem;
background-color: #fff;
}
.input{
  width:100%;
  line-height: 40px;
  height:40px;
  display: block;
  border-radius: 5px;
  background-color: #fff;
  border:0;
  text-align: center;
  font-size: 0.24rem;
  color:#999;
  outline:none;
}
.from-group{
  position: relative;
}
.from-group:after{
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left:0;
  width:100%;
  height: 1px;
  transform: scaleY(0.5);
  background-color: #999;
}
.loan-money-title{
  font-size:0.18rem;
}
</style>
