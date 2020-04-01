<template>
<div class="container">
    <div class="recipecard">
        <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" class="photo">
        <section>
            <h3>{{recipe.titre}}</h3>
             <ul>
                <li><img src="https://img.icons8.com/wired/64/000000/hourglass.png"/>Temps de préparation : {{timePrep}}</li>
                <li><img src="https://img.icons8.com/wired/64/000000/restaurant.png"/>Pour {{persNb}}</li>
                <li><img src="https://img.icons8.com/wired/64/000000/chef-hat.png"/>Difficulté : {{recipe.niveau}}.</li>
            </ul>
            <p class="description">{{recipe.description}}</p>
            
            <div class="cta-read">
              <router-link :to="`/recipe/${recipe.id}`">Découvrir la recette</router-link>
            </div>
        </section>
        <div class="cta-edit">
            <router-link :to="`/edit/${recipe.id}`" title="Améliorer la recette"><img src="https://img.icons8.com/wired/64/000000/edit.png"/></router-link>
            <a href="#" title="Supprimer la recette" v-confirm="{ ok: onClickRemove, cancel: null, message: 'Voulez-vous vraiment supprimer cette recette ?' }">
              <img src="https://img.icons8.com/wired/64/000000/trash.png" id="delete"/>
            </a>
        </div>
    </div>
</div>
</template>
<script>

export default {
  name: "Recipecard",
  props: {
      recipe: {
        type: Object
      }
  },
  computed : {
    DEFAULT_PHOTO: function(){
      return "../assets/default.jpg";
    },
    timePrep: function() {
      var time = this.recipe.tempsPreparation;
      if (time >= 60){
        var hour = Math.floor(time / 60);
        var minutes = (time % 60);
        return  hour + "h" + minutes ;
      } else {
          return (time  + ' min.')
      }
    },
    persNb: function() {
      var guestNb = this.recipe.personnes;
      if (guestNb <= 1) {
        return (this.recipe.personnes + ' personne.')
      } else {
        return (this.recipe.personnes + ' personnes.')
      }
    }
  },
  methods: {
    onClickRemove: function() {
      this.$emit("remove", this.recipe);
    }
  }
  
}
</script>
<style>

.recipecard {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: flex-start;
  margin-bottom: 20px;
  border: 10px solid #f9f679;
  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.3); 
}

.recipecard section {
  padding-left: 30px;
}

.photo {
  width: 36%;
  height: 350px;
  object-fit: cover;
  object-position: 50% 50%;
}

.recipecard li {
  font-style: italic;
  color: #595a5a;
}

.recipecard li img {
  width: 18px;
  margin-right: 5px;
}

.cta-read {
  border-radius: 35px;
  text-align: center;
  background-color: #f9f679;
  padding: 12px;
  margin-top: 20px;
}

.cta-read a {
  font-size: 19px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
}

.cta-edit {
  margin-left: auto;
  margin-right: 5px;
  align-self: flex-end;
}
.cta-edit img {
  width: 36px;
  padding: 4px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 24%;
}


</style>