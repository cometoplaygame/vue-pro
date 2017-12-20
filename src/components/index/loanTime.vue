<template>
  <div class="slider-container">
    <vue-slider ref="slider" v-model="value"></vue-slider>
  </div>
</template>
<script>
import vueSlider from 'vue-slider-component';
export default {
  name:'index_loan_money',
	components: {
		vueSlider
	},
	data () {
		return {
      value: 9,
      width: 280,
      height: 8,
      dotSize: 30,
      min: 1,
      max: 25,
      interval: 4,
      disabled: false,
      show: true,
      speed: 0.3,
      reverse: false,
      lazy: true,
      tooltip: "hover",
      piecewise: true
		}
	}
}
</script>

<style lang="css">
</style>
