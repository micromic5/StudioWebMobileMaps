<template>
  <div id="app">
    <div class="header">
      <h1>Die Emmenbrücke</h1>
      <h2>zu deiner Geschichte</h2>
   </div>
    <a href="#map-div" class="click"><img src="./assets/img/hero-1.png" style="width:100vw"></a>
    
 
    <div id="map-div"><map-component></map-component></div>
    <div id="content-div" class="close"></div> 

 </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "app",
  data() {
    return {
    };
  },
  mounted: function() {
    var scrollToElement = function(el, ms) {
      var speed = ms ? ms : 600;
      $("html,body").animate(
        {
          scrollTop: $(el).offset().top
        },
        speed
      );
    };
    $(".click").click(function(e) {
      // prevent default action
      e.preventDefault();

      // get id of target div (placed in href attribute of anchor element)
      // and pass it to the scrollToElement function
      // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)
      scrollToElement($(this).attr("href"), 2000);
    });
  },
  methods: {
  }
};
</script>
