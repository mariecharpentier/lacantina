<template>
    <div class="recipeDetails container">
        <h2>{{recipe.titre}}</h2>
        <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" class="photo">
        <ul>
            <li><img src="https://img.icons8.com/wired/64/000000/hourglass.png"/>Temps de préparation : {{recipe.tempsPreparation}} min.</li>
            <li><img src="https://img.icons8.com/wired/64/000000/restaurant.png"/>Pour {{recipe.personnes}} personne(s).</li>
            <li><img src="https://img.icons8.com/wired/64/000000/chef-hat.png"/>Difficulté : {{recipe.niveau}}.</li>
        </ul>
        <p class="description">{{recipe.description}}</p>

        <h3>Ingrédients : </h3>
        <ul>
            <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">{{ingredient[0]}} {{ingredient[1]}}</li>
        </ul>

        <h3>Étapes : </h3>
        <ul>
            <li v-for="etape in recipe.etapes" :key="etape.id">{{etape}}</li>
        </ul>

        <div class="cta-edit">
            <router-link :to="`/edit/${recipe.id}`" title="Améliorer la recette"><img src="https://img.icons8.com/wired/64/000000/edit.png"/></router-link>
            <a href="" title="Supprimer la recette"><img src="https://img.icons8.com/wired/64/000000/trash.png" id="delete"/></a>
            <!-- <a href="#" class="btn btn-small" v-confirm="{ok: onClickRemove, cancel: null, message:'Voulez-vous vraiment supprimer cette recette ?'}">Supprimer</a> -->
        </div>
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

<style>


</style>