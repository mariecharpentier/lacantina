<template>
	<div class="container centered">
		<h2>Toutes nos recettes</h2>

		<div class="recipe-list">
			<figure>
				<!-- <img :src='recette.photo' :alt='`Photo de ${titre}`'> -->
			</figure>
			<div>
				<h1>{{ recette.titre }}</h1>
				
				<i class="fa"></i>
				<!-- <p>Temps de préparation : {{ recette.tempsPreparation }} minutes.</p> -->
				
				<i class="fa"></i>
				<!-- <p>Pour {{ recette.personnes }} personne(s).</p> -->
				
				<i class="fa"></i>
				<!-- <p>{{ recette.description }}</p> -->
				
				<i class="fa"></i>
				<!-- <p>Niveau : {{ recette.niveau }}</p> -->

			</div>
		</div>
	</div>
</template>

<script>
import recipeService from '../services/recipeService.js';

export default {
	name: 'List',
	// data: function() {
	// 	return {
	// 		// recipes: null
	// 	};
	// },	
	created: function() {
		recipeService.getAllRecipes().then((list) => {
			this.recipes = list;
		});
	}
};
</script>

<style>

</style>
