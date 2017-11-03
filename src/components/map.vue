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
      markersArray:[],      
      activIcon: contentfulClient.getAsset("QayoeFwEQSYOMaUigSW46")
        .then(entry => {return entry.fields.file}),
      passivIcon:contentfulClient.getAsset("4Q18909usM8WkQyy4GI2MI")
        .then(entry => {return entry.fields.file}),
      activMarker: null
    }
  },
  mounted: function() {
    this.setupMap();
   // this.insertFirstContent();
    this.getMapContetn();
  },
   methods:{
    setupMap: function(){
      const element = document.getElementById("map");
      const options = {
        zoom: 16,
        center: new google.maps.LatLng(47.07,8.2895),
        disableDefaultUI: true,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        scrollwheel: false,
      };
      this.map = new google.maps.Map(element, options);
      this.map.setOptions({styles:mapStyleModule});
      //this.map.setOptions({draggable: false});
      this.map.addListener('click', function(){
       // this.passivIcon.then(function(k){console.log(k)});
       if(this.activMarker != null){
        this.passivIcon.then(newIcon =>{this.activMarker.setIcon(newIcon)});
       }
       /* if($("#content-div").attr("class") != "close"){
          $("#content-div").css({"overflow": "visible"});
        }*/
        $("#content-div").attr('class', 'close');
       
      }.bind(this));
    },
    
    getMapContetn: function(){
      const cms_markers = [];
      this.passivIcon.then(iconPassiv => {
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
                icon: iconPassiv,
                map: this.map
              });
              this.markersArray.push(marker);
              // Beim Klick auf den Marker wird der Inhalt des content-div mit dem Content ersetzt
              marker.addListener('click', event => {
                if(this.activMarker != null){
                  this.passivIcon.then(newIcon =>{
                    this.activMarker.setIcon(newIcon);
                    this.activMarker = marker;
                  });
                }else{
                  this.activMarker = marker;
                }
                this.activIcon.then(newIcon =>{marker.setIcon(newIcon)});
                //this.map.panTo({lat:marker.position.lat(),lng:marker.position.lng()-.014});
                $("#content-div").html(`<content-replace-div id="content-replace" title="${item.fields.title}" desc="${item.fields.description}"
                  old-image="${item.fields.oldPicture.fields.file.url}" new-image="${item.fields.newPicture.fields.file.url}"
                  year="${item.fields.year}" slider="${item.fields.slider}"></content-replace-div>`);
                  if($("#content-div").attr('class')!="open"){
                    new Vue().$mount(`#content-replace`);
                    $("#content-div").attr('class', 'open');
                  }else{
                    new Vue().$mount(`#content-replace`);
                  }
              });
              cms_markers.push(marker);
            });
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