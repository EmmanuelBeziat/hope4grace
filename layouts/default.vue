<template>
	<div class="site">
		<nuxt/>
		<Player/>
		<div class="bg-overlay" data-animation="zap"></div>
	</div>
</template>

<script>
import Player from '~/components/Player'

export default {
	components: {
		Player
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'
@require '~assets/styles/modules/base.styl'
</style>
