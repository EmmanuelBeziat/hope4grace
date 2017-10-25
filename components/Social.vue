<template>
	<nav class="social">
		<a data-animation="fade-in" class="social-item" href="https://www.facebook.com/Hope4Grace/" :data-tooltip="$store.state.lang.social.facebook">
			<i class="icon-facebook" aria-hidden="true"></i>
			<span class="sr-only">{{ $store.state.lang.social.facebook }}</span>
		</a>

		<a data-animation="fade-in" class="social-item" href="https://hope4grace.bandcamp.com/" :data-tooltip="$store.state.lang.social.bandcamp">
			<i class="icon-bandcamp" aria-hidden="true"></i>
			<span class="sr-only">{{ $store.state.lang.social.bandcamp }}</span>
		</a>

		<a data-animation="fade-in" class="social-item" href="https://soundcloud.com/hope4grace" :data-tooltip="$store.state.lang.social.soundcloud">
			<i class="icon-soundcloud" aria-hidden="true"></i>
			<span class="sr-only">{{ $store.state.lang.social.soundcloud }}</span>
		</a>

		<a data-animation="fade-in" class="social-item" href="https://www.youtube.com/channel/UCYkAHQhO-3YBmU_7LLHRTeA" :data-tooltip="$store.state.lang.social.youtube">
			<i class="icon-youtube-play" aria-hidden="true"></i>
			<span class="sr-only">{{ $store.state.lang.social.youtube }}</span>
		</a>
	</nav>
</template>

<script>
export default {
	name: 'Social'
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'
@require '~assets/styles/animations.styl'
@require '~assets/styles/helpers.styl'
@require '~assets/styles/modules/tooltips.styl'

.social
	text-align center

.social-item
	display inline-block
	text-decoration none
	color $color-black
	transition .3s ease
	font-size rem(32px)
	size 2em
	line-height 2em
	text-align center
	border 0
	position relative

	&::after
		content ""
		position absolute
		top 0
		left 0
		right 0
		bottom 0
		box-shadow inset 0 0 0 35px $color-white
		z-index -1
		transform scale3d(0.9, 0.9, 1)
		transition .3s ease

	i
		position relative
		z-index 5

.social-item:hover
.social-item:focus
	border-color $color-white
	color $color-white

	&::after
		box-shadow inset 0 0 0 1px $color-white
		transform scale3d(1, 1, 1)

.social-item + .social-item
	margin-left 5px

.social-item:nth-child(1)
	animation-delay 2s

.social-item:nth-child(2)
	animation-delay 2.2s

.social-item:nth-child(3)
	animation-delay 2.4s

.social-item:nth-child(4)
	animation-delay 2.6s

</style>
