<template>
  <div class="container centered">
    <h2>Modifier la recette</h2>
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
      userService.editRecipe(recipe).then(data => {
            this.recipe = data;
      });
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
