<template>
<div class="container">
    <div class="recipecard">
        <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" class="photo">
        <section>
            <h3>{{recipe.titre}}</h3>
             <ul>
                <li><img src="https://img.icons8.com/wired/64/000000/hourglass.png"/>Temps de préparation : {{recipe.tempsPreparation}} min.</li>
                <li><img src="https://img.icons8.com/wired/64/000000/restaurant.png"/>Pour {{recipe.personnes}} personne(s).</li>
                <li><img src="https://img.icons8.com/wired/64/000000/chef-hat.png"/>Difficulté : {{recipe.niveau}}.</li>
            </ul>
            <p class="description">{{recipe.description}}</p>
            
            <div class="cta-read">
              <router-link :to="`/recipe/${recipe.id}`">Découvrir la recette</router-link>
            </div>

            <div class="cta-edit">
                <router-link :to="`/edit/${recipe.id}`" title="Améliorer la recette"><img src="https://img.icons8.com/wired/64/000000/edit.png"/></router-link>
                <a href="" title="Supprimer la recette"><img src="https://img.icons8.com/wired/64/000000/trash.png" id="delete"/></a>
            </div>
        </section>
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
    }
  },
  
}
</script>
<style>

.recipecard {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    margin-bottom: 3px;
}
.recipecard section {
    padding-left: 20px;
    background-color: #f9f679;
    width: 66%;
}
.photo {
    width: 27%;
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
  border: 1px solid black;
  border-radius: 15px;
  text-align: center;
  background-color: #fff;
  padding: 2px;
  margin: 10px 0;
  width: 30%;
}

.cta-edit img {
  width: 36px;
  padding: 4px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 24%;
}


</style>