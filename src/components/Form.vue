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
        <textarea
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
        <label for="ingredients" class="labelforIngredient">Ingrédients :</label>
        <div id="ingredients">
          <AddIngredient :ingredients="ingredients" v-if="ingredients" @add="addIngredient" />
        </div>
      </div>

      <div class="form-group addStep">
        <label for="etapes" class="labelforEtapes">Étapes :</label>
        <ul>
          <li v-for="(step, index) in recipe.etapes" :key="step.id">
            <textarea
              type="text"
              id="etapes"
              placeholder="Se laver les mains..."
              v-model="recipe.etapes[index]"
              required
            />
            <img @click="deleteStep(index)" src="../assets/close.svg" alt="close" class="close" />
          </li>
          <li class="addBtn">
            <span>Ajouter une étape</span>
            <img
              src="../assets/add.svg"
              class="addInput"
              title="Ajouter une étape"
              @click="addStep"
            />
          </li>
        </ul>
      </div>

      <div class="form-group">
        <label for="photo" class="labelforPhoto">Photo :</label>
        <input type="url" id="photo" placeholder="http://" v-model="recipe.photo" />
      </div>

      <div class="actions centered">
        <input type="submit" id="btn" value="Valider" @click="addIngredient" />
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
      ingredients: [[""]],
      newIngredient: [""]
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
          etapes: [""],
          photo: ""
        };
      }
    }
  },
  methods: {
    addIngredient: function() {
      this.recipe.ingredients.push();
    },

    addStep() {
      this.recipe.etapes.push("");
    },
    deleteStep(index) {
      this.recipe.etapes.splice(index, 1);
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
  width: 80%;
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
  min-width: 250px;
  line-height: 40px;
}

.searchform .labelforIngredient,
.searchform .labelforEtapes,
.searchform .labelforPhoto {
  min-width: 180px;
}

#titre,
#description,
#personnes,
#tempsPreparation,
#etapes,
#photo,
#niveau {
  min-width: 200px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background-color: #f3f5f8;
  border: none;
}

#niveau {
  width: 62%;
}

.searchform input {
  height: 40px;
  width: 60%;
  padding-right: 6px;
  padding-left: 10px;
}

.searchform select {
  border-radius: 0;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  padding-left: 10px;
  width: 60%;
}

.searchform textarea {
  height: 40px;
  width: 60%;
  padding: 8px 6px 30px 10px;
  resize: none;
}

.addStep ul {
  width: 62%;
}

.addStep li {
  margin-top: 10px;
  position: relative;
}

.addStep textarea {
  width: 97%;
}
/**********************BTN ADD*****************************/
.addBtn {
  position: relative;
  margin-top: 10px;
  height: 40px;
}
.addBtn span {
  font-size: 14px;
  font-style: italic;
  position: absolute;
  top: 0;
  right: 50px;
  color: #74b5bb;
}
.addInput {
  width: 30px;
  position: absolute;
  top: -7px;
  right: 5px;
}

.addStep .close {
  top: calc(27% - 12px);
}

.close {
  position: absolute;
  top: calc(50% - 12px);
  right: 10px;
  color: #3c70bf;
  width: 24px;
}

/**********************BTN SUBMIT*****************************/

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
  width: 40%;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
}

#btn:hover {
  box-shadow: 0px 15px 20px rgba(136, 156, 148, 0.4);
  transform: translateY(-3px);
}

/********************RESPONSIVE******************************/

@media screen and (max-width: 950px) {
  .searchform .form-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .searchform select,
  #niveau {
    width: 100%;
  }

  .searchform input,
  .searchform textarea,
  .addStep textarea {
    width: 97%;
  }

  .addStep ul {
    width: 100%;
  }
}
</style>