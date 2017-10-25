<template>
	<div class="player-holder">
		<iframe class="player" src="https://bandcamp.com/EmbeddedPlayer/album=3393402190/size=small/bgcol=333333/linkcol=ffffff/transparent=true/" seamless></iframe>
	</div>
</template>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.player-holder
	position absolute
	z-index 6
	bottom 0
	left 0
	width 100vw
	background #303030
	display flex

.player
	border 0
	height 42px
	width 100%
	max-width 700px
	margin auto
</style>
