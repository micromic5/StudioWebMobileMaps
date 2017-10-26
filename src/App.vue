<template>
  <div id="app">
    <h1 id="header" v-if="showTitle">{{ message }}</h1>
    <map-component></map-component>    
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
    
  },
  methods:{
    increment: function(){
      this.counter++;
    },
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
