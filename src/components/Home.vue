<template>
    <div class="container">
      <h2>La recette du jour</h2>
      <section class="container">
          <Recipecard :recipe="recipe_of_the_day" v-if="recipe_of_the_day" />		
      </section>
    </div>

</template>

<script>
import Recipecard from "./Recipecard";
import userService from '../services/userService.js';

export default {
  name: 'Home' ,
  data: function(){
    return {
      recipesList: null,
      recipe_of_the_day: null
    };
  },
  components: {
    Recipecard
  },
  methods: {
    setRandomRecipe: function() {
      this.recipe_of_the_day = this.recipesList[Math.floor(Math.random() * this.recipesList.length)];
    },
  },
   created: function() {
      userService.getAllRecipes().then((recipesList) => {
      this.recipesList = recipesList;
      this.setRandomRecipe();
    });    
  }
};
</script>


<style scoped>


</style>