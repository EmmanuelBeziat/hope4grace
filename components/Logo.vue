<template>
	<h1 class="logo" data-animation="fade-in"><img src="~/assets/images/logo-hope4grace.svg" alt="Hope4Grace"></h1>
</template>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'
@require '~assets/styles/animations.styl'

.logo
	font 100 $font-size-title/1 $font-stack-heading
	text-transform uppercase
	margin-top 0

	img
		display block
		max-width 100%
		width 788px

</style>
