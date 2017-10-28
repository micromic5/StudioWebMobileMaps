<template>
   <div>
        <div class="title">{{ title }}</div>
        <div class="description">
            {{ desc }}
        </div>
        <div :id="'id'+id" class="image-slider-container">
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
    props: ['title', 'desc', 'old-image', 'new-image', 'year'],
    data: function(){
        return {
            id: null
        }
    },
    mounted:function(){
        this.id = this._uid;
        Vue.nextTick(function(){$("#id"+this.id).twentytwenty()}.bind(this));
    }
}
</script>