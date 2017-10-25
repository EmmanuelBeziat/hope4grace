import Vuex from 'vuex'

export const store = () => new Vuex.Store({
	state: {
		locale: 'fr',
		lang: {}
	},

	mutations: {
		setLocale (state, locale) {
			state.locale = locale
		},

		setLang (state, lang) {
			state.lang = lang
		}
	},

	actions: {
		async nuxtServerInit ({ dispatch, commit, state }, { req }) {
			try {
				// Get the first accepted language by the browser sending the request
				const userLang = process.BROWSER_BUILD ? navigator.language : 'fr'
				commit('setLocale', userLang)

				// Get content lang
				commit('setLang', require(`~/static/lang/${state.locale}.json`))
			}
			catch (error) {
				console.log(error)
			}
		}
	}
})

export default store
