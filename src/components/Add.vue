<template>
    <div class="container">
      <h2>Ajouter une recette</h2>
      <Form @send="send" />
    </div>
</template>

<script>
import Form from './Form.vue';
import userService from '../services/userService.js';


export default {
  name: "Add",
  components: {
    Form
  },
  methods: {
    send: function(new_recipe) {
      userService
          .createRecipe(new_recipe)
          .then(() => {
              // this.$router.replace("/recipes");
              console.log(new_recipe)
          }, () => console.log('test'));
    }
  },
};
</script>

<style>

</style>