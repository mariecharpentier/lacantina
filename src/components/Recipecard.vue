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
            <div class="cta-section">
                <router-link :to="`/recipe/${recipe.id}`" class="cta">Découvrir la recette</router-link>
                <router-link :to="`/edit/${recipe.id}`" class="cta">Améliorer la recette</router-link>
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
      type: Object,
      required: true
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
.cta-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 50px auto 10px auto;
}

.cta {
  border: 3px solid #fff;
  border-radius: 15px;
  text-align: center;
  color: #ffe51a;
  background-color: #fff;
  padding: 2px 3px;
}

#delete {
  width: 46px;
}


</style>