<template>
  <div>
      {{greeting}} {{character}}
  </div>
</template>
<script>
export default{
    name: "my-comp",
    data: function(){
        return {
            greeting:"Hello"
        }
    },
    props: ['character'],
}
</script>