<template>
  <div class="container">
    <form class="searchform" @submit.prevent="send">
      <div class="form-group">
        <label for="titre">Nom de la recette :</label>
        <input
          type="text"
          id="titre"
          placeholder="Nom de la recette"
          v-model="recipe.titre"
          required
        />
      </div>

      <div class="form-group">
        <label for="description">Description :</label>
        <input
          type="text"
          id="description"
          placeholder="Présentez votre recette..."
          v-model="recipe.description"
          required
        />
      </div>

      <div class="form-group">
        <label for="niveau">Niveau :</label>
        <select name="niveau" id="niveau" v-model="recipe.niveau" required>
          <option disabled value></option>
          <option value="padawan">Padawan</option>
          <option value="jedi">Jedi</option>
          <option value="maitre">Maitre</option>
        </select>
      </div>

      <div class="form-group">
        <label for="personnes">Nombre de personnes :</label>
        <input
          type="number"
          min="1"
          max="20"
          id="personnes"
          placeholder="4"
          v-model="recipe.personnes"
          required
        />
      </div>

      <div class="form-group">
        <label for="tempsPreparation">Temps de préparation maximum :</label>
        <input
          type="number"
          min="10"
          max="500"
          step="5"
          id="tempsPreparation"
          placeholder="30 minutes"
          v-model="recipe.tempsPreparation"
          required
        />
      </div>

      <div class="form-group">
        <label for="ingredients">Ingrédients :</label>
        <div id="ingredients">
          <AddIngredient :ingredients="ingredients" v-if="ingredients" @add="addIngredient" />
        </div>
      </div>

      <div class="form-group">
        <label for="etapes">Étapes :</label>
        <textarea
          type="text"
          id="etapes"
          placeholder="Se laver les mains..."
          v-model="recipe.etapes"
          required
        />
      </div>

      <div class="form-group">
        <label for="photo">Photo :</label>
        <input type="url" id="photo" placeholder="http://" v-model="recipe.photo" />
      </div>

      <div class="actions centered">
        <input type="submit" id="btn" value="Valider" />
      </div>
    </form>
  </div>
</template>

<script>
import AddIngredient from "./AddIngredient.vue";

export default {
  name: "Form",
  data: function() {
    return {
      ingredients: [[""]]
    };
  },
  components: {
    AddIngredient
  },
  props: {
    recipe: {
      type: Object,
      default: function() {
        return {
          titre: "",
          description: "",
          niveau: "",
          personnes: null,
          tempsPreparation: null,
          ingredients: [[""]],
          etapes: ["lavage", "coupage"],
          photo: ""
        };
      }
    }
  },

  methods: {
    addIngredient: function() {
      this.recipe.ingredients.push();
    },
    send: function() {
      this.recipe.personnes = Number(this.recipe.personnes);
      this.recipe.tempsPreparation = Number(this.recipe.tempsPreparation);

      this.$emit("send", this.recipe);
    }
  }
};
</script>

<style>
.searchform {
  margin: auto;
  width: 95%;
  max-width: 520px;
  min-width: 320px;
  padding-bottom: 1em;
}

.searchform .form-group {
  margin-bottom: 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.searchform label {
  display: inline-block;
  min-width: 150px;
  line-height: 40px;
}

#titre,
#description,
#personnes,
#tempsPreparation,
#etapes,
#photo {
  min-width: 200px;
}

.searchform input {
  height: 40px;
  background-color: #f3f5f8;
  font-size: 14px;
  padding-right: 6px;
  padding-left: 10px;
  border: none;
}

/* .searchform input ~ span {
    display: block;
    font-size: 0.8em;
    color: red;
} */

.searchform .input-error {
  border: 1px solid red;
}

.searchform select {
  border: none;
  background-color: #f3f5f8;
  border-radius: 0;
  height: 40px;
  line-height: 40px;
  color: #2f2f2fba;
  cursor: pointer;
  padding-left: 10px;
  width: 216px;
}

.searchform textarea {
  height: 40px;
  background-color: #f3f5f8;
  font-size: 14px;
  padding-right: 6px;
  padding-left: 10px;
  border: none;
  resize: none;
}

#btn {
  border-radius: 3px;
  text-align: center;
  background-color: #74b5bb;
  padding: 24px;
  margin-top: 20px;
  box-shadow: 0px 8px 15px rgba(136, 156, 148, 0.4);
  transition: all 0.3s ease 0s;
  font-size: 20px;
  line-height: 2px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
}

#btn:hover {
  box-shadow: 0px 15px 20px rgba(136, 156, 148, 0.4);
  transform: translateY(-3px);
}

/********************RESPONSIVE******************************/

@media screen and (max-width: 889px) {
  .searchform .form-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .searchform select {
    width: 100%;
  }
}
</style>