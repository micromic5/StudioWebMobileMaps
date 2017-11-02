import Vue from 'vue'
import App from './App.vue'

import './assets/foundation/js/vendor/foundation.js'
import './assets/foundation/js/vendor/what-input.js'
import './assets/foundation/css/foundation.css'
import './assets/twentytwenty-master/js/jquery.event.move.js'
import './assets/twentytwenty-master/js/jquery.twentytwenty.js'
import './assets/twentytwenty-master/css/twentytwenty.css'
import {createClient} from 'contentful'
import './style/style.scss'
import './style/cssAnimation.scss'
import mapStyleModule from './modules/mapStyle.js'
import scrollModule from './modules/scroll.js'
import imageSlider from './components/imageSlider.vue'
import map from './components/map.vue'
import infoWindow from './components/info-window.vue'
import contentReplaceDiv from './components/contentDiv.vue';
//test stuff
import myTestModule from './modules/mymodule.js'
import myComp from './components/myComp.vue'


$(document).foundation()


window.contentfulClient = createClient({
  accessToken: 'a6e983108e36277cae5e4daa6f591ffb81eda8c8c8054f0251fd847bcbffeeb4',
  space: 'vmu4ico0uc5f'
});
/*
contentfulClient.getEntries()
.then((response) => console.log(response.items))
.catch(console.error);
*/
Vue.component("image-slider",imageSlider);
Vue.component("map-component", map);
Vue.component("content-replace-div",contentReplaceDiv);

new Vue({
  el: '#app',
  render: h => h(App)
})

