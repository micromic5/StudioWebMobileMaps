<template>
  <div id="map"></div>
</template>
<script>
export default {
  name: "map-comp",
  data: function() {
    return {
      greeting: "Hello"
    };
  },
  mounted: function() {
    this.setupMap();
    this.getMapContetn();
  },
   methods:{
    setupMap: function(){
      const element = document.getElementById("map");
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(47.071467, 8.277621)
      };
      this.map = new google.maps.Map(element, options);
    //  this.map.setOptions({styles:styles});
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

            // create infowindow
            let cs = 
              `<div class="infoWindow">
                <div class="infoWindowTitle">${item.fields.title}</div>
                <div class="infoWindowDescription">${item.fields.description}</div>
                <div class="infoWindowOldPicture"><image src="${item.fields.oldPicture.fields.file.url}"></div>
                <div class="infoWindowNewPicture"><image src="${item.fields.newPicture.fields.file.url}"></div>
                <div class="infoWindowYear">${item.fields.year}</div>
              </div>`;
              
            let cms_iw = new google.maps.InfoWindow({
                  content: cs
            });

            // Infowindow oeffenen bei Click auf Marker
            marker.addListener('click', event => { cms_iw.open(this.map, marker)});
            cms_markers.push(marker);
          });
        });
    }
  },
  props: ["character"]
};
</script>