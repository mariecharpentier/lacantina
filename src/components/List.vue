<template>
	<div class="container">
		<h2>Toutes nos recettes</h2>

		<!-- <form class="filterform centered" @submit.prevent>
			<label for="filter">Filtrer par :</label>
			<select name="filterBy" v-model="filterBy">
				<option value="titre">Nom de la recette</option>
				<option value="niveau">Difficulté</option>
			</select>
			<input type="search" placeholder="Tapez un nom..." v-model="search">
		</form> -->
  
		<form class="filterform" @submit.prevent>
			<label for="filter">Filtrer par :</label>
			<input type="search" placeholder="Nom de la recette..." v-model="searchTitle">

			<select name="filterBy" v-model="cookingLevel">
				<option disabled value="">Niveau</option>
				<option value="padawan">Padawan</option>
				<option value="jedi">Jedi</option>
				<option value="maitre">Maitre</option>
			</select>

			<input type="number" min="1" max="15" placeholder="Nombre de personnes" v-model="searchPax">
			<input type="number" min="10" max="500" step="5" placeholder="Temps de préparation (en minutes)" v-model="searchTime">

			<input type="submit" value="Rechercher" />
		</form>

		<div v-if="recipesList">
			<Recipecard class="recipe-card" v-for="recipe in filteredList" :recipe="recipe" :key="recipe.id" @remove='removeRecipe'/>		
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
			filterBy: '',
			searchTitle: '',
			cookingLevel: '',
			searchPax: '',
			searchTime:''
		}
	},

	// computed: {
	// 	filteredList: function() {
	// 		return this.recipesList.filter((recipe) => {
	// 			const on_search = 
	// 			this.filterBy == 'titre' ? (recipe.titre) : (recipe.niveau) 
	// 			return on_search.includes(this.search);
	// 		});
	// 	}	
	// },
		computed: {
			filteredList: function() {
			return this.recipesList.filter((recipe) => {
				let searchTitle = this.searchTitle;
				let cookingLevel = this.cookingLevel;
				let searchPax = this.searchPax;
				let searchTime = this.searchTime;
				if (recipe.titre != searchTitle || searchTitle !== "") {
					return false		
				}
				if (recipe.niveau != cookingLevel || cookingLevel !== "") {
					return false		
				}
				if (recipe.personnes != searchPax || searchPax  !== "") {
					return false		
				}
				if (recipe.tempsPreparation != searchTime || searchTime !== "") {
					return false		
				} 
				return true
				
			});
		}
  },                       
	created: function() {
		userService.getAllRecipes().then((recipesList) => {
			this.recipesList = recipesList;
			console.log(recipesList)
		});
	},
	methods: {
		removeRecipe: function(recipe) {
			let index = this.recipesList.indexOf(recipe);
			const deleted_recipe = this.recipesList.splice(index, 1)
			let key = this.recipe.id;
			console.log('teest')
			userService.deleteRecipe(key)
			.then((res) => {
				if (res.error && res.error == 1){
					this.alert('Erreur serveur : veuillez refaire l\'opération ultérieurement.').then(function() {
						console.log('Closed');
					});
					console.log('Error: rollback')
					this.recipesList.splice(index, 0, deleted_recipe.pop)
				}
			})   
			.catch((error) => console.log(`Ajax error : ${error}`));
		}
	}
	};
</script>

<style>
.filterform {
	margin: 2em auto;
	width: 700px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.filterform label {
	width: 18%;
	font-size: 14px;
	line-height: 40px;
}

.filterform input {
	width: 100%;
    height: 40px;
    background-color: #f3f5f8;
    font-size: 14px;
    padding-right: 6px;
	padding-left: 10px;
    border: none;
}

.filterform select {
	border: none;
	background-color: #f3f5f8;
	border-radius: 0;
	width: 30%;
	height: 40px;
	line-height: 40px;
	color: #2f2f2f;
	cursor: pointer;
	margin-right: 10px;
	padding-left: 10px;
}
</style>
