import axios from 'axios';

const API_ENDPOINT = 'http://localhost:9000';

export default {

    getAllRecipes: function() {
        return axios
			.get(`${API_ENDPOINT}/recettes`)
			.then((res) => res.data)
			.catch((error) => console.log(`Ajax error : ${error}`));
    },
	
	getOneRecipe: function(id) {
		return axios
			.get(`${API_ENDPOINT}/recette/${id}`)
			.then((res) => res.data)
			.catch((error) => console.log(`Ajax error : ${error}`));
	},

    deleteRecipe: function(id) {
		return axios
			.delete(`${API_ENDPOINT}/recette/${id}`)
			.then((res) => res.data);
	},

	createRecipe: function(recette) {
		return axios
			.post(`${API_ENDPOINT}/recette`, recipe)
			.then((res) => res.data)
			.catch((error) => console.log(`Ajax error : ${error}`));
	},

	editRecipe: function(recette) {
		return axios
		.put(`${API_ENDPOINT}/recette/${id}`, recipe)
		.then((res) => res.data)
		.catch((error) => console.log(`Ajax error : ${error}`));
	}



}