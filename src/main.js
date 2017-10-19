import Vue from 'vue'
import App from './App.vue'

import './assets/foundation/js/vendor/foundation.js'
import './assets/foundation/js/vendor/what-input.js'
import './assets/foundation/css/foundation.css'
import {createClient} from 'contentful'
import './style/style.scss'

$(document).foundation()

window.contentfulClient = createClient({
  accessToken: 'e52765142537e7bbd550d7eaa928f7c618c1737a4ed54c17dbd4031949a4f262',
  space: 'zjd4jl2bg8e3'
});

contentfulClient.getEntries()
.then((response) => console.log(response.items))
.catch(console.error);

new Vue({
  el: '#app',
  render: h => h(App)
})
