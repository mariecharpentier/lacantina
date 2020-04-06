<template>
  <div class="container home">
    <h2>La recette du jour</h2>
    <section class="container">
      <Recipecard :recipe="recipe_of_the_day" v-if="recipe_of_the_day" @remove="removeRecipe" />
    </section>
  </div>
</template>

<script>
import Recipecard from "./Recipecard";
import userService from "../services/userService.js";

export default {
  name: "Home",
  data: function() {
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
      this.recipe_of_the_day = this.recipesList[
        Math.floor(Math.random() * this.recipesList.length)
      ];
    },
    removeRecipe: function(recipe) {
      let index = this.recipesList.indexOf(recipe);
      if (index > -1) {
        const deleted_recipe = this.recipesList.splice(index, 1);
        userService.deleteRecipe(recipe.id).then(
          res => {
            if (res !== undefined) {
              this.recipesList.splice(index, 0, deleted_recipe.pop());
              console.log(`La recette ${recipe.titre} a bien été supprimée.`);
            }
          },
          () => console.log(`Ajax error : la recette n'a pas été trouvée.`)
        );
      }
      this.$router.replace("/recipes");

    }
  },
  created: function() {
    userService.getAllRecipes().then(recipesList => {
      this.recipesList = recipesList;
      this.setRandomRecipe();
    });
  }
};
</script>


<style scoped>
.home {
  width: 86%;
}

/********************RESPONSIVE******************************/

@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }
}
</style>