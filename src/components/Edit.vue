<template>
  <div class="container edit-view">
    <h2>Améliorer la recette</h2>
    <Form :recipe="recipe" v-if="recipe" @send="send" />
  </div>
</template>

<script>
import Form from "./Form.vue";
import userService from "../services/userService.js";

export default {
  name: "Edit",
  data: function() {
    return {
      recipe: null
    };
  },
  components: {
    Form
  },
  methods: {
    send: function(recipe) {
      // Edit new recipe
      userService.editRecipe(recipe).then(
        () => {
          this.$router.replace("/recipes");
        },
        () => console.log("La modification n'a pas été prise en compte.")
      );
    }
  },
  created: function() {
    // Fetch a single recipe
    userService.getOneRecipe(this.$route.params.id).then(recipe => {
      this.recipe = recipe;
    });
  }
};
</script>


<style>
.edit-view {
  border: 1px solid #82bcbe;
  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.3);
  width: 60%;
  margin-bottom: 3em;
}

.edit-view h2 {
  color: #82bcbe;
}

/********************RESPONSIVE******************************/

@media screen and (max-width: 850px) {
  .edit-view {
    width: 80%;
  }
}

@media screen and (max-width: 550px) {
  .edit-view {
    width: 95%;
  }
}
</style>
