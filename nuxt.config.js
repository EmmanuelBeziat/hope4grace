module.exports = {
	// mode: 'spa',

	/*
	** Headers of the page
	*/
	head: {
		htmlAttrs: {
			lang: 'fr',
			prefix: 'og: http://ogp.me/ns#'
		},
		title: '',
		titleTemplate: 'hope4grace :: %s',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'description', content: `Sur une musique intimiste, à la manière d'un road movie, Hope4Grace vous amène dans son univers sensible, tantôt grisé d'espoir, tantôt teinté d'accablement. Elle vous raconte ses histoires comme un murmure, un souffle qui laisse méditatif, une pulsation planante où le monde onirique côtoie avec finesse le monde actuel, cruel et lucide` },
			{ name: 'apple-mobile-web-app-title', content: 'Hope4Grace' },
			{ name: 'application-name', content: 'Hope4Grace' },
			{ name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
			{ name: 'theme-color', content: '#000' }
		],
		link: [
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
			{ rel: 'manifest', href: '/favicons/manifest.json' },
			{ rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#bd1747' },
			{ rel: 'shortcut icon', href: '/favicons/favicon.ico' }
		],
		noScript: [
			{ innerHTML: 'Javascript est requis pour parcourir ce site.' }
		]
	},

	/*
	** Customize the progress bar color
	*/
	loading: {
		color: '#fff'
	},

	generate: {
		dir: '../site'
	},

	css: [
		'@/assets/icons/icons.css'
	],

	/**
	 * Router
	 */
	router: {
		linkActiveClass: '-active'
	},

	minify: {
		removeEmptyAttributes: false,
		collapseWhitespace: true,
		conservativeCollapse: true,
		collapseBooleanAttributes: true,
		removeTagWhitespace: false,
		removeStyleLinkTypeAttributes: true
	},

	modules: [
		'@nuxtjs/manifest'
	],

	/**
	 * Plugins
	 */
	plugins: [
		'~/plugins/filters.js'
	],

	manifest: {
		name: 'Hope4Grace',
		lang: 'fr'
	},

	/**
	 * Transition
	 */
	transition: {
		name: 'page',
		mode: 'out-in'
	},

	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		extend (config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},

		postcss: [
			require('autoprefixer')
		],

		vendor: [
			'moment'
		]
	}
}
