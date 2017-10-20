<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="row">
      <div class="large-4 columns">content</div>
      <div class="large-8 columns">content</div>
    </div>

    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted: function() {
    const element = document.getElementById("map");
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(47.071467, 8.277621)
    };
    this.map = new google.maps.Map(element, options);
   
  //Contentful Implementation
 /*   contentfulClient.getAsset("6wxHkxEs6Ia2uECKquaQgg")
    .then(entry => {
        // Show a marker with an icon from CMS
        let marker = new google.maps.Marker({
            position: {lat: 47.070978, lng: 8.282165},
            icon: "https:" +entry.fields.file.url,
            map: this.map
        });
    })*/
    const cms_markers = [];
    contentfulClient
    // alle Eintrage vom Typ bikespot holen
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

    // const locations = [
    //   {lat:  47.071978, lng: 8.262165 },
    //   {lat:  47.072978, lng: 8.292165 },
    //   {lat:  47.073978, lng: 8.292165 },
    //   {lat:  47.074978, lng: 8.282165 }
    // ];
    // let markers = [];

    // locations.map(loc => {
    //   markers.push(new google.maps.Marker({
    //     position: {lat: loc.lat, lng: loc.lng},
    //     map: this.map
    //   }));
    // });
    // const styles =;
   // this.map.setOptions({ styles: styles });

  }
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
