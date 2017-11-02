<template>

  <div id="app">
  <div id="header">
    <h1>Emmenbrücke</h1>
    <div class="grid-container">
      <div class="grid-x">
        <div class="large-12 cell intro">
          <h2><a href="#map" class="click">Vom Bauerndorf zum Industriestandort</a></h2><br>
              <i class="fa fa-chevron-down" style="font-size:60px;color:red;"></i>
        </div>
      </div>
   </div>
  </div>

      
    <div id="map"><map-component></map-component></div>
    <div id="content-div" class="close" style="width:0px;overflow:hidden"></div> 
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


$('.click').click(function(e){
  // prevent default action
  e.preventDefault();
  
  // get id of target div (placed in href attribute of anchor element)
  // and pass it to the scrollToElement function
   // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)
  scrollToElement( $(this).attr('href'), 2000 );
});

var scrollToElement = function(el, ms){
   var speed = (ms) ? ms : 600;
   $('html,body').animate({
       scrollTop: $(el).offset().top
   }, speed);
}

$(function() {
    //caches a jQuery object containing the header element
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 900) {
           $("#header").remove();
        } 
    });

    
});
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