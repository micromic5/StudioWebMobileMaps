import Vue from 'vue'
import App from './App.vue'

import './assets/foundation/js/vendor/foundation.js'
import './assets/foundation/js/vendor/what-input.js'
import './assets/foundation/css/foundation.css'
import {createClient} from 'contentful'
import './style/style.scss'
import mapStyleModule from './modules/mapStyle.js'
import imageSlider from './components/imageSlider.vue'
import map from './components/map.vue'
//test stuff
import myTestModule from './modules/mymodule.js'
import myComp from './components/myComp.vue'


$(document).foundation()


window.contentfulClient = createClient({
  accessToken: 'a6e983108e36277cae5e4daa6f591ffb81eda8c8c8054f0251fd847bcbffeeb4',
  space: 'vmu4ico0uc5f'
});

contentfulClient.getEntries()
.then((response) => console.log(response.items))
.catch(console.error);

Vue.component("my-comp", myComp);
Vue.component("image-slider",imageSlider);
Vue.component("map-component", map);

new Vue({
  el: '#app',
  render: h => h(App)
})
