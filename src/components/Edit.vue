<template>
  <div class="container">
    <h2>Améliorer une recette</h2>
    <Form :recipe="recipe" v-if="recipe" @send="send"/>
  </div>
</template>

<script>
import Form from './Form.vue';
import userService from '../services/userService.js';

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
      userService.editRecipe(recipe).then(() => {
        this.$router.replace("/recipes");
      }, () => console.log('La modification n\'a pas été prise en compte.'));
    }
  },
  created: function(){
    userService.getOneRecipe(this.$route.params.id).then(recipe => {
      this.recipe = recipe;
    })
  }  
};
</script>


<style>

</style>
