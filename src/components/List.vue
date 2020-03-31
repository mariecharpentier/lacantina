<template>
	<div class="container">
		<h2>Toutes nos recettes</h2>

		<Recipecard class="recipe-card" v-for="recipe in filteredList" :recipe="recipe" :key="recipe.id" />		

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
			recipesList: null
		}
	},
	created: function() {
		userService.getAllRecipes().then((recipesList) => {
			this.recipesList = recipesList;
			console.log(recipesList)
		});
	},
	computed: {
		filteredList: function() {
			return this.recipesList	
		
		}
	},
	};
</script>

<style>
	li {
		list-style-type: none;
	}

</style>
