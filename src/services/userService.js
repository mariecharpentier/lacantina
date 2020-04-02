import axios from 'axios';

const API_ENDPOINT = 'http://localhost:9000/api';


export default {

    getAllRecipes: function() {
        return axios
			.get(`${API_ENDPOINT}/recipes`)
			.then((res) => res.data)
			.catch((error) => console.log(`Ajax error : ${error}`));
    },
	
	getOneRecipe: function(id) {
		return axios
			.get(`${API_ENDPOINT}/recipe/${id}`)
			.then((res) => res.data)
			.catch((error) => console.log(`Ajax error : ${error}`));
	},

    deleteRecipe: function(id) {
		return axios
			.delete(`${API_ENDPOINT}/recipe/${id}`)
			.then((res) => res.data)
			.catch((error) => console.log(`Ajax error : ${error}`))
	},

	createRecipe: function(recipe) {
		return axios
			.post(`${API_ENDPOINT}/recipe/`, recipe)
			.then((res) => res.data)
			.catch((error) => console.log(`Ajax error : ${error}`));
	},

	editRecipe: function(recipe) {
		return axios
		.put(`${API_ENDPOINT}/recipe/${recipe.id}`, recipe)
		.then((res) => res.data)
		.catch((error) => console.log(`Ajax error : ${error}`));
	}

}