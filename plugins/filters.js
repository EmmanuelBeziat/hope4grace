import Vue from 'vue'
import Moment from 'moment'

/**
 * Moment.js - http://moment.js/docs/#/displaying
 * @param {String} format
 * @return {String}
 */
Vue.filter('moment', (value, format) => Moment(value).format(format))
