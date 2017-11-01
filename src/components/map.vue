<template>
  <div id="map"></div>
</template>
<script>
import Vue from 'vue'
import mapStyleModule from '../modules/mapStyle.js'

export default {
  name: "map-comp",
  data: function() {
    return {
      markersArray:[]
    }
  },
  mounted: function() {
    this.setupMap();
    this.insertFirstContent();
    this.getMapContetn();
  },
   methods:{
    setupMap: function(){
      const element = document.getElementById("map");
      const options = {
        zoom: 16,
        center: new google.maps.LatLng(47.071467, 8.277621),
        disableDefaultUI: true
      };
      this.map = new google.maps.Map(element, options);
      this.map.setOptions({styles:mapStyleModule});
      //this.map.setOptions({draggable: false});
      this. map.addListener('click', function(){
        if($("#content-div").attr("class") != "close"){
          $("#content-div").css({"overflow": "visible"});
        }
        $("#content-div").attr('class', 'close');
        $("#content-div").css({"width": "0vw"});
        setTimeout(function(){
          $("#content-div").css({"overflow": "hidden"});
        },2600);
      });
    },
    
    getMapContetn: function(){
      const cms_markers = [];
      contentfulClient
        .getEntries({
          content_type: "timeSpots"
        })
        .then(entries => {
          // fuer jeden Eintrag einen Marker und ein Infowindow erstellen
          entries.items.forEach((item, index) => {
            // wenn kein Icon definiert ist, den Default verwenden
            let icon = item.fields.icon ? item.fields.icon.fields.file : "";
            //create marker
            let marker = new google.maps.Marker({
              position: { lat: item.fields.location.lat, lng: item.fields.location.lon },
              icon: icon,
              map: this.map
            });
            this.markersArray.push(marker);
            // Beim Klick auf den Marker wird der Inhalt des content-div mit dem Content ersetzt
            marker.addListener('click', event => {
              this.map.panTo({lat:marker.position.lat(),lng:marker.position.lng()-.017});
              $("#content-div").html(`<content-replace-div id="content-replace" title="${item.fields.title}" desc="${item.fields.description}"
                old-image="${item.fields.oldPicture.fields.file.url}" new-image="${item.fields.newPicture.fields.file.url}"
                year="${item.fields.year}"></content-replace-div>`);
                if($("#content-div").attr('class')!="open"){
                  setTimeout(function(){new Vue().$mount(`#content-replace`)},3001);
                  $("#content-div").css({"overflow": "visible"});
                  $("#content-div").attr('class', 'open');
                  $("#content-div").css({"width": "83vw"});
                }else{
                  new Vue().$mount(`#content-replace`);
                }
            });
            cms_markers.push(marker);
          });
        });
    },

    insertFirstContent: function(){
       contentfulClient.getAsset("5wutUrRRPUC8wg6CiMOW0W")
      .then(entry => {
           $("#content-div").html(`<content-replace-div id="content-replace" title="first" desc="firstdesc"
          old-image="`+entry.fields.file.url+`" new-image="`+entry.fields.file.url+`"
          year="17"></content-replace-div>`);
          new Vue().$mount(`#content-replace`);
      });     
  //    $("#content-div").attr('class', 'open');
  //    $("#content-div").css({"width": "0vw"});
    }
  }
};
</script>