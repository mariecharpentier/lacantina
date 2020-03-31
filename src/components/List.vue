<template>
	<div class="container">
		<h2>Toutes nos recettes</h2>

		<form class="filterform centered" @submit.prevent>
			<input type="search" placeholder="Tapez un nom..." v-model="search">
			<label for="filter">Filtrer par :</label>
			<select name="filterBy" v-model="filterBy">
				<option value="titre">Nom de la recette</option>
				<option value="niveau">Difficulté</option>
			</select>
		</form>

		<div v-if="recipesList">
			<Recipecard class="recipe-card" v-for="recipe in filteredList" :recipe="recipe" :key="recipe.id" />		
		</div>
	</div>
</template>

<script>
import Recipecard from "./Recipecard";

import userService from '../services/userService.js';

export default {
	name: 'List',
	components: {
		Recipecard
	},
	data: function(){
		return {
			recipesList: null,
			search: '',
			filterBy: 'titre',
		}
	},
	computed: {
		filteredList: function() {
			return this.recipesList.filter((recipe) => {
				const on_search = 
				this.filterBy == 'titre' ? (recipe.titre) : (recipe.niveau)
				return on_search.includes(this.search);
			});
		}	
	},
	created: function() {
		userService.getAllRecipes().then((recipesList) => {
			this.recipesList = recipesList;
			console.log(recipesList)
		});
	},
	};
</script>

<style>
.filterform {
	margin: 2em 0;
}

</style>
