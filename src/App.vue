<template>
  <div id="app">
    
    <div id="header">
      <h1 class="title">Emmenbrücke</h1>
        <div class="grid-container">
          <div class="grid-x grid-margin-x">
            <div class="large-10 large-2-offset cell intro">
              <div class="start-text"><a href="#map-div">Vom Bauerndorf zum Industriestandort</a></div>
            </div>
          </div>
        </div>

    <div id="map-div"><map-component></map-component></div>
    <div id="content-div" class="close" style="left:100vw;"></div> 

    </div>

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
