<template>
<div class="container">
    <div class="recipecard">
        <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`">
        <section>
            <h3>{{recipe.titre}}</h3>
             <ul>
                <li>Temps de préparation : {{recipe.tempsPreparation}} min.</li>
                <li>Pour {{recipe.personnes}} personne(s).</li>
                <li>Difficulté : {{recipe.niveau}}.</li>
            </ul>
            <p class="description">{{recipe.description}}</p>
            <div class="cta">
                <router-link :to="`/recipe/${recipe.id}`">Découvrir la recette</router-link>
                <router-link :to="`/edit/${recipe.id}`">Améliorer la recette</router-link>
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
}
.recipecard img {
    width: 27%;
}
.recipecard h3 {
    font-size: 30px;
}
.recipecard li {
    font-style: italic;
}


</style>