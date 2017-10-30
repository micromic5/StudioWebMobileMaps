<template>
  <div id="app">
    <h1 id="header">{{ message }}</h1>    
    <div id="intro"></div>
    <div id="map-div"><map-component></map-component></div>
    <div id="content-div" style="width:0px;overflow:hidden"></div> 
  </div>
</template>

<script>
import Vue from "vue"; 

export default {
  name: "app",
  data(){
    return{
      message:"Welcome to Vue.js",
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