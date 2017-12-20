<template>
	<div class="">
		<loanMoney></loanMoney>
		<loanTime></loanTime>
	</div>

</template>
<script>

import loanMoney from '@/components/index/loanMoney';
import loanTime from '@/components/index/loanTime';
export default {
	name:'index',
	components: {
		loanMoney,
		loanTime
	},
	data () {
		return {

		}
	}
}
</script>

<style lang="">
body{
	background-color:#f1f1f1;
	margin:0;
}
</style>
