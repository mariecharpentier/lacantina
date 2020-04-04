<template>
  <div class="container" id="add-view">
    <h2>Ajouter une recette</h2>
    <Form @send="send" />
  </div>
</template>

<script>
import userService from "../services/userService.js";
import Form from "./Form.vue";

export default {
  name: "Add",
  components: {
    Form
  },
  methods: {
    send: function(recipe) {
      userService.createRecipe(recipe).then(
        () => {
          this.$router.replace("/recipes");
          console.log(recipe);
        },
        () => console.log("test")
      );
    }
  }
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

/********************RESPONSIVE******************************/

@media screen and (max-width: 850px) {
  #add-view {
    width: 80%;
  }
}

@media screen and (max-width: 550px) {
  #add-view {
    width: 95%;
  }
}
</style>