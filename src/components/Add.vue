<template>
    <div class="container centered">
		<h2>Ajouter une recette</h2>
    <Form @send='send' />
    </div>
</template>

<script>
import Form from './Form.vue';
import userService from '../services/userService.js';


export default {
  name: "Add",
  props: ['recipe'],
  components: {
    Form
  },
  data: function() {
    return {};
  },
  methods: {
    send: function(new_recipe) {
        userService
            .createRecipe(new_recipe)
            .then(res => {
                this.$router.replace("/recipes");
            })
            .catch(error => console.log(error));
    }
  },
};
</script>

<style scoped>

</style>