<template>
  <div id="app">
    <h1 v-if="showTitle">{{ message }}</h1>
    <button :disabled="buttonDisabled" v-on:click="increment">My Buttom</button>
    <div>{{counter}}</div>
    <ul>
      <li v-for="item in items">
        {{item.ort+", "+item.kanton}}
      </li>
    </ul>
    <my-comp character="wild"></my-comp>
    <image-slider></image-slider>
    <div id="map"></div>    
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
    this.setupMap();
    this.getMapContetn();
  },
  methods:{
    increment: function(){
      this.counter++;
    },
    setupMap: function(){
      const element = document.getElementById("map");
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(47.071467, 8.277621)
      };
      this.map = new google.maps.Map(element, options);
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
