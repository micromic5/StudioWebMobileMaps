<template>
  <div id="app">
    
    <div id="header">
      <h1>Emmenbrücke</h1>
        <div class="grid-container">
          <div class="grid-x grid-padding-x">
            <div class="large-12 cell intro">
              <h2><a href="#map-div">Vom Bauerndorf zum Industriestandort</a></h2>
            </div>
          </div>
          </div>
        <div id="i-button"><a href="index.html#map-div">ddfd</a></div>
    </div>

    <div id="map-div"><map-component></map-component></div>
    <div id="content-div" class="close" style="right:-50vw;"></div> 

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
