<template>
	<div class="home">
		<Logo/>
		<Social/>
	</div>
</template>

<script>
import Logo from '~/components/Logo'
import Social from '~/components/Social'
export default {
	name: 'Home',

	head () {
		return {
			title: this.$store.state.lang.site.home,
			htmlAttrs: {
				lang: this.$store.state.locale
			}
		}
	},

	components: {
		Logo,
		Social
	}
}
</script>

<style lang="stylus">
.home
	position relative
	z-index 5
</style>

