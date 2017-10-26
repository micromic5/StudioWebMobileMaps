<template>
  <div id="app">
    <h1 v-if="showTitle">{{ message }}</h1>
    <button :disabled="buttonDisabled" v-on:click="increment">My Buttom</button>
    <div>{{counter}}</div>
    <div class="grid-x">
      <div class="cell auto"><span>test</span></div>
      <div class="cell auto"><span>test</span></div>
      <div class="cell auto"><span>test</span></div>
    </div>
    <ul>
      <li v-for="item in items">
        {{item.ort+", "+item.kanton}}
      </li>
    </ul>
    <my-comp character="wild"></my-comp>
    <image-slider></image-slider>
    <map-component></map-component>    
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return{
      message:"Welcome to Vue.js",
      items: [{ort: "emmenbrücke", kanton: "LU"},{ort:"Rotkreuz",kanton:"ZG"}],
      buttonDisabled:false,
      showTitle:true,
      counter:0,
    }
  },
  mounted: function() {
    
  },
  methods:{
    increment: function(){
      this.counter++;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>