<template>
    <div id="content-slider" >
    </div>
</template>
<script>
import Vue from "vue"; 

export default{
    name: 'content-slider',
    data: function(){
        return {
        }
    },
    mounted:function(){
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
            });
            // create infowindow
            let cs = 
              `<div content-slider-content id="content-${item.sys.id}">
                <content-slider-content title="${item.fields.title}" desc="${item.fields.description}"
                 old-image="${item.fields.oldPicture.fields.file.url}" new-image="${item.fields.newPicture.fields.file.url}"
                  year="${item.fields.year}"></content-slider-content>
              </div>`;
 
            $("#content-slider").append(cs);
            new Vue().$mount(`#content-${item.sys.id}`);
          });
        });
    }
}
</script>