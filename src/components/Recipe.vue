<template>
  <div class="container">
    <h2>{{recipe.titre}}</h2>
    <section class="recipe-details container">
      <img :src="recipe.photo || DEFAULT_PHOTO" :alt="`Photo de ${recipe.titre}`" class="photo" />
      <article class="recipe-introduction">
        <ul>
          <li>
            <img src="https://img.icons8.com/wired/64/000000/hourglass.png" />
            Temps de préparation : {{timePrep}}
          </li>
          <li>
            <img src="https://img.icons8.com/wired/64/000000/restaurant.png" />
            Pour {{persNb}}
          </li>
          <li>
            <img src="https://img.icons8.com/wired/64/000000/chef-hat.png" />
            Difficulté : {{recipe.niveau}}.
          </li>
        </ul>
        <p class="description">{{recipe.description}}</p>
      </article>

      <article class="recipe-ingredients">
        <h3>Ingrédients :</h3>
        <ul>
          <li
            v-for="ingredient in recipe.ingredients"
            :key="ingredient.id"
          >{{ingredient[0]}} {{ingredient[1]}}</li>
        </ul>
      </article>

      <article class="recipe-steps">
        <h3>Étapes :</h3>
        <ul>
          <li v-for="etape in recipe.etapes" :key="etape.id">{{etape}}</li>
        </ul>
      </article>

      <div class="cta-edit">
        <router-link :to="`/edit/${recipe.id}`" title="Améliorer la recette">
          <img src="../assets/edit.png" />
        </router-link>
        <a
          href="#"
          title="Supprimer la recette"
          v-confirm="{ ok: onClickRemove, cancel: null, message: 'Voulez-vous vraiment supprimer cette recette ?' }"
        >
          <img src="../assets/delete.png" id="delete" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import userService from "../services/userService.js";

export default {
  name: "Recipe",
  data: function() {
    return {
      recipe: {},
      recipesList: []
    };
  },
  computed: {
    DEFAULT_PHOTO: function() {
      return "../assets/default.jpg";
    },
    timePrep: function() {
      var time = this.recipe.tempsPreparation;
      if (time >= 60) {
        var hour = Math.floor(time / 60);
        var minutes = time % 60;
        return hour + "h" + minutes;
      } else {
        return time + " min.";
      }
    },
    persNb: function() {
      var guestNb = this.recipe.personnes;
      if (guestNb <= 1) {
        return this.recipe.personnes + " personne.";
      } else {
        return this.recipe.personnes + " personnes.";
      }
    }
  },
  methods: {
    onClickRemove: function(recipe) {
      let index = this.recipesList.indexOf(this.recipe.id);
      if (index > -1) {
        const deleted_recipe = this.recipesList.splice(index, 1);
        userService.deleteRecipe(recipe.id).then(
          res => {
            if (res !== undefined) {
              this.recipesList.splice(index, 0, deleted_recipe.pop());
              console.log(`La recette ${recipe.titre} a bien été supprimée.`);
              this.$router.replace("/recipes");
            }
          },
          () => console.log(`Ajax error : la recette n'a pas été trouvée.`)
        );
      }
    }
  },
  created: function() {
    userService.getOneRecipe(this.$route.params.id).then(recipe => {
      this.recipe = recipe;
    });
    userService.getAllRecipes().then(recipesList => {
      this.recipesList = recipesList;
    });
  }
};
</script>

<style scoped>
.recipe-details {
  border: 1px solid #ffe91a;
  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.3);
  width: 70%;
  margin-bottom: 3em;
}

.recipe-details article {
  padding: 0 30px;
}

.photo {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 50% 50%;
}

.recipe-introduction li {
  font-style: italic;
  color: #595a5a;
}

.recipe-introduction p {
  font-weight: bold;
}

.recipe-details li img {
  width: 18px;
  margin-right: 5px;
}

.recipe-ingredients li {
  border-left: 3px solid #ffe91a;
  padding-left: 1em;
}

.recipe-steps li {
  list-style-type: decimal;
  margin: 0 0 1em 1em;
}

.cta-edit {
  text-align: center;
}

/********************RESPONSIVE******************************/

@media screen and (max-width: 700px) {
  .recipe-details {
    width: 90%;
  }

  .photo {
    height: 250px;
  }
}
</style>