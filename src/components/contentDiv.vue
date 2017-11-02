<template>
   <div>
        <div class="title">{{ title }}</div>
        <div class="description">
            {{ desc }}
        </div>
        <div v-if="showSlider!==false" :id="'id'+id" class="image-slider-container">
            <img :src="oldImage" @load="imageLoaded">
            <img :src="newImage" @load="imageLoaded">
        </div>
        <div v-else  class="image-container">
            <img :src="oldImage">
            <img :src="newImage">
        </div>
        <div class="year">{{year}}</div>
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
            isImageLoaded: false
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
        this.showSlider = (this.slider==="true");
    }
}
</script>