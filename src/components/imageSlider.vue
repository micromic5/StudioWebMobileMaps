<template>
  <div>
      {{greeting}}
  </div>
</template>
<script>
export default{
    name: "image-slider",
    data: function(){
        return {
            greeting:"ImageSlider aaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa"
        }
    },
    props: ['image1','image2'],
}
</script>