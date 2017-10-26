<template>
     <div class="iw-container">
        <div class="iw-title">{{ title }}</div>
        <div class="iw-description">
            {{ desc }}
        </div>
        <div class="iw-oldImage"><img :src="oldImage"></div>
        <div class="iw-newImage"><img :src="newImage"></div>
        <div class="infoWindowYear">{{year}}</div>
    </div>
</template>
<script>
export default{
    name: 'info-window',
    props: ['title', 'desc', 'old-image', 'new-image', 'year'],
    data: function(){
        return {
        }
    },
}
</script>