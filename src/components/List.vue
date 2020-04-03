<template>
	<div class="container">
		<h2>Toutes nos recettes</h2>
  
		<form class="filterform" @submit.prevent>
			<label for="filter">Filtrer par :</label>
			<input type="search" placeholder="Nom de la recette..." v-model="searchTitle">

			<select name="filterBy" v-model="cookingLevel">
				<option value="" selected>Tous niveaux</option>
				<option value="padawan">Padawan</option>
				<option value="jedi">Jedi</option>
				<option value="maitre">Maitre</option>
			</select>

			<select name="filterBy" v-model="searchPax">
				<option value="" selected>Nombre de personnes</option>
				<option value="option 1">de 1 à 4 personnes</option>
				<option value="option 2">de 5 à 10 personnes</option>
				<option value="option 3">Plus de 10 personnes</option>
			</select>

			<input type="number" min="10" max="500" step="5" placeholder="Temps de préparation minimum (en minutes)" v-model="searchTime">

		</form>

		<div v-if="recipesList">
			<Recipecard class="recipe-card" v-for="recipe in filteredList" :recipe="recipe" :key="recipe.id" @remove='removeRecipe'/>		
		</div>
		<div v-else>
			<h3>Désolé, il n'y a pas de recette correspondant à ces critères...</h3>
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
			searchTitle: '',
			cookingLevel: '',
			searchPax: '',
			searchTime:''
		}
	},

		computed: {
			filteredList: function() {
			return this.recipesList.filter((recipe) => {
				let title = recipe.titre.toLowerCase();
				let difficulty = recipe.niveau
				let people = recipe.personnes
				let time = recipe.tempsPreparation

				if ((title.includes(this.searchTitle.toLowerCase()) == false)) {
					return false		
				}
				if (this.cookingLevel && this.cookingLevel !== 'Tous niveaux' && difficulty !== this.cookingLevel) {
					return false		
				} 
				console.log(this.searchPax)
				if (this.searchPax) {
					if (this.searchPax == "option 1") {
						if (people > 4) {
							return false		
						}
					}
					if (this.searchPax == "option 2") {
						if (people < 4 && people > 10) {
							return false		
						}
					}
					if (this.searchPax == "option 3") {
						if (people < 10) {
							return false		
						}
					}
				}
				if (this.searchTime && time > this.searchTime) {
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
			if (index > -1){
				const deleted_recipe = this.recipesList.splice(index, 1)
				userService.deleteRecipe(recipe.id)
				.then((res) => {
					if (res !== undefined){
						console.log(res)
						this.recipesList.splice(index, 0, deleted_recipe.pop())
						console.log(`La recette ${recipe.titre} a bien été supprimée.`)}
				}, () => console.log(`Ajax error : la recette n'a pas été trouvée.`));
				
			}
		},		
	}
	};
</script>

<style>
.filterform {
	margin: 2em auto;
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.filterform label {
	width: 18%;
	font-size: 12px;
	line-height: 40px;
}

.filterform input {
	width: 100%;
    height: 40px;
    background-color: #f3f5f8;
    font-size: 12px;
    padding-right: 6px;
	padding-left: 10px;
    border: none;
	margin-right: 10px;
}

.filterform input[type=number]{
	width: 100%;
}
.filterform select {
	border: none;
	background-color: #f3f5f8;
	border-radius: 0;
	width: 50%;
	height: 40px;
	line-height: 40px;
	color: #2f2f2f;
	cursor: pointer;
	margin-right: 10px;
	padding-left: 10px;
	font-size: 12px;
}

.filterform select option {
	font-size: 12px;
}

.hidden {
	display: none;
}
</style>
