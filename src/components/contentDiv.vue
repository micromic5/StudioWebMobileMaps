<template>
   
   <div class="grid-container">

      <div class="grid-x grid-padding-x">
        <div class="large11 cell">
          <h1>{{ title }}</h1>
          <!-- Grid Example -->
        </div>
      </div>

       <div class="grid-x grid-padding-x text">
            <div class="large-10 large-offset-2 cell">
                <p> {{ desc }}</p>
            </div>
       </div>

         <div class="grid-x grid-padding-x">
            <div class="large-offset-2 large-10 cell">
              <div class="border-image">
                

                  


              </div>
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