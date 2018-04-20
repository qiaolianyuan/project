<template>
	<div class="home">
			<Header></Header>
			<Banner></Banner>
			<weixiu-box></weixiu-box>
			<hardware-box></hardware-box>
			<lunbo-box></lunbo-box>
			WELCOME
	</div>
</template>

<script>
import Header from './Header'
import Banner from './Banner'
import WeixiuBox from './WeixiuBox'
import HardwareBox from './HardwareBox'
import LunboBox from './LunboBox'
export default {
	name: 'Home',
	components: {
      Header,Banner,WeixiuBox,HardwareBox,LunboBox
  }
}
</script>

<style scoped>
	.home{
		height: 900px;
	}
</style>