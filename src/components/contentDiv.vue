<template>
<div class="grid-container">
   
<div class="grid-x title">
  <div class="large-4 cell"></div>
  <div class="large-9 cell"><h1>{{ title }}</h1></div>
</div>

<div class="grid-x text">
           <div class="large-4 cell"></div>
            <div class="large-9 cell">
                <p> {{ desc }}</p>
            </div>
</div>

    <div class="grid-x grid-padding-x">
        <div class="large-4 cell"></div>
            <div class="large-9 cell">
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

    <div class="grid-x comments">
         <div class="large-4 cell"></div>
            <div class="large-9 cell">
          <h3>Persönliche Geschichten</h3>
        </div>
          <div class="large-2 cell"></div>
            <div class="large-8 cell">
	         <h4>Ramon Rieser</h4>
			   <p class="kommentar">Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet.</p>  
                  <hr>
                  <h4>Max Muster</h4>
			   <p class="kommentar">Ich könnte jetzt nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen Augenblicken. Wenn das liebe Tal um mich dampft, und die hohe Sonne an der Oberfläche der undurchdringlichen Finsternis meines Waldes ruht, und nur einzelne Strahlen sich in das innere Heiligtum stehlen, ich dann im hohen Grase am fallenden Bache liege, und näher an der Erde tausend mannigfaltige Gräschen mir merkwürdig. <br><br> Wenn ich das Wimmeln der kleinen Welt zwischen Halmen, die unzähligen, unergründlichen Gestalten der Würmchen, der Mückchen näher an meinem Herzen fühle, und fühle die Gegenwart des Allmächtigen, der uns nach seinem Bilde schuf, das Wehen des Alliebenden, der uns in ewiger Wonne schwebend trägt und erhält; mein Freund! </p> 
        </div>
  </div> 

<div class="grid-x formular">
         <div class="large-4 cell"></div>
            <div class="large-9 cell">
	      <h3>Haben auch Sie eine Geschichte auf Lager?</h3>
         </div>
</div>



<div class="grid-x upload">
        <div class="large-3 cell">
           </div>
        <div class="large-8 cell">
             <h2>Name</h2><input type="text">
             <h2>Geschichte</h2><textarea rows="10" type="text"></textarea><br>
              <button>Versenden</button>
        </div>
</div>


      

   
        <div v-if="yearDisabled" class="year">{{year}}</div>

        </div>
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