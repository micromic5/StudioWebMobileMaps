<template>
     <div class="iw-container" style="width:500px" >
        <div class="iw-title">{{ title }}</div>
        <div class="iw-description">
            {{ desc }}
        </div>
        <div :id="'id'+id" class="iw-image-slider-container">
            <img :src="oldImage">
            <img :src="newImage">
        </div>
        <div class="iw-year">{{year}}</div>
    </div>
</template>
<script>
import Vue from "vue"; 

export default{
    name: 'info-window',
    props: ['title', 'desc', 'old-image', 'new-image', 'year'],
    data: function(){
        return {
            id: null
        }
    },
    mounted:function(){
        this.id = this._uid;
        console.log(this.id);
        Vue.nextTick(function(){$("#id"+this.id).twentytwenty()}.bind(this));
    }
}
</script>