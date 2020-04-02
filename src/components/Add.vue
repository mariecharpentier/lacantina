<template>
    <div class="container" id="add-view">
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
#add-view {
  border: 1px solid #82bcbe;
  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.3); 
  width: 60%;
  margin-bottom: 3em;
}

#add-view h2 {
  color: #82bcbe;
}
</style>