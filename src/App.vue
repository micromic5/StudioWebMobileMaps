<template>
  <div id="app">
    
    <div id="header">
      <a href="#map-div"><img src="./assets/img/TitleScreen.png" style="width:100vw"></a>
   </div>
   
    <div id="map-div"><map-component></map-component></div>
    <div id="content-div" class="close"></div> 

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
