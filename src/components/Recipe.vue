<template>
    <div class="container">
        <h2>{{recipe.titre}}</h2>
        <section class="recipe-details container">
            <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" class="photo">
            <article class="recipe-introduction">
                <ul>
                    <li><img src="https://img.icons8.com/wired/64/000000/hourglass.png"/>Temps de préparation : {{recipe.tempsPreparation}} min.</li>
                    <li><img src="https://img.icons8.com/wired/64/000000/restaurant.png"/>Pour {{recipe.personnes}} personne(s).</li>
                    <li><img src="https://img.icons8.com/wired/64/000000/chef-hat.png"/>Difficulté : {{recipe.niveau}}.</li>
                </ul>
                <p class="description">{{recipe.description}}</p>
            </article>

            <article class="recipe-ingredients">
                <h3>Ingrédients : </h3>
                <ul>
                    <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">{{ingredient[0]}} {{ingredient[1]}}</li>
                </ul>
            </article>

            <article class="recipe-steps">
                <h3>Étapes : </h3>
                <ul>
                    <li v-for="etape in recipe.etapes" :key="etape.id">{{etape}}</li>
                </ul>
            </article>

            <div class="cta-edit">
                <router-link :to="`/edit/${recipe.id}`" title="Améliorer la recette"><img src="https://img.icons8.com/wired/64/000000/edit.png"/></router-link>
                <a href="" title="Supprimer la recette"><img src="https://img.icons8.com/wired/64/000000/trash.png" id="delete"/></a>
                <!-- <a href="#" class="btn btn-small" v-confirm="{ok: onClickRemove, cancel: null, message:'Voulez-vous vraiment supprimer cette recette ?'}">Supprimer</a> -->
            </div>      
        </section>
    </div>
</template>

<script>

import userService from '../services/userService.js'

export default {
    name: 'Recipe',
    data: function() {
        return {
            recipe: {},
        }
    },
           
    created: function(){
        userService.getOneRecipe(this.$route.params.id).then(recipe => {
            this.recipe = recipe;
        })
        
    },

    computed: {
        DEFAULT_PHOTO: function(){
            return "../assets/default.jpg";
        }
    },

    // methods: {
    //     onClickRemove: function(recipe) {
    //         this.$emit('remove', this.recipe)
    //     }
    // }
	
   
}
</script>

<style scoped>

.recipe-details {
    border: 10px solid #f9f679;
    box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.3); 
    width: 70%;
}

.recipe-details article {
    padding: 0 30px;
}


.photo {
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

.recipe-introduction li {
  font-style: italic;
  color: #595a5a;
}

.recipe-details li img {
  width: 18px;
  margin-right: 5px;
}

.recipe-steps li {
    list-style-type: decimal;
    margin-bottom: 10px;
}
.cta-edit {
    text-align: center;
}

.cta-edit img {
  width: 36px;
  padding: 4px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 24%;
}



</style>