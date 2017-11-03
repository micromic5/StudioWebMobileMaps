<template>
   <div class="grid-container">
   
      <div class="grid-x title">
  <div class="medium-6 large-4 cell"></div>
  <div class="medium-6 large-8 cell"><h1>{{ title }}</h1></div>
</div>
        

       <div class="grid-x grid-padding-x text">
            <div class="large-4  cell"></div>
            <div class="large-8  cell">
                <p> {{ desc }}</p>
            </div>
       </div>

    <div class="grid-x grid-padding-x">
        <div class="large-offset-2 large-10 cell">
            <div class="border-image">
            <div v-if="showSlider!==false" :id="'id'+id" class="image-slider-container">
                <img :src="oldImage" @load="imageLoaded">
                <img :src="newImage" @load="imageLoaded">
            </div>
            <div v-else  class="image-container">
                <img :src="oldImage">
                <img :src="newImage">
            </div>
            </div>
        </div>
    </div>

    <div class="grid-x grid-padding-x kommentar">
        <div class="large-offset-3 large-9 medium-12 cell">
          <h3>Persönliche Geschichten</h3>
        </div>
         <div class="large-9 large-offset-3 cell">
	         <h5>Ramon Rieser</h5>
			    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum facilis tenetur a voluptatibus quia
			      deserunt.
			    </p>

                
        </div>
  </div> 

<div class="grid-x grid-padding-x">
	<div class="large-4 large-offset-3 cell">
	</div>
      <div class="large-6 large-offset-3 cell">
	      <h3>Haben auch Sie eine Geschichte auf Lager?</h3>
        <label>Name
          <input type="text">
        </label>
        <label>E-Mail
          <input type="text">
        </label>
        <label>Geschichte
          <textarea rows="10" type="text"></textarea>
        </label>
        <button class="button expanded">Versenden</button>
</div>

</div>

   
        <div v-if="yearDisabled" class="year">{{year}}</div>
    </div>
</template>
<script>
import Vue from "vue";
export default{
    name: 'content-replace-div',
    props: ['title', 'desc', 'old-image', 'new-image', 'year', 'slider'],
    data: function(){
        return {
            id: null,
            showSlider: false,
            isImageLoaded: false,
            yearDisabled: false
        }
    },
    methods:{
        imageLoaded:function(){
            if(this.isImageLoaded){
                if(this.showSlider == true){
                    this.id = this._uid;
                 Vue.nextTick(function(){$("#id"+this.id).twentytwenty();}.bind(this));
                }
            }else{
                this.isImageLoaded = true;
            }
        }
    },
    mounted:function(){
        this.yearDisabled = (this.year != 'undefined');
        this.showSlider = (this.slider==="true");
    }
}
</script>