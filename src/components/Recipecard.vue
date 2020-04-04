<template>
  <div class="container">
    <div class="recipecard">
      <img
        :src="recipe.photo || DEFAULT_PHOTO"
        :alt="`Photo de ${recipe.titre}`"
        class="photo"
        v-on:click="goToRecipe"
      />
      <section>
        <article v-on:click="goToRecipe">
          <h3>{{recipe.titre}}</h3>
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

          <div class="cta-read">Découvrir la recette</div>
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
  </div>
</template>
<script>
export default {
  name: "Recipecard",
  props: {
    recipe: {
      type: Object
    }
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
    onClickRemove: function() {
      this.$emit("remove", this.recipe);
      this.$router.replace("/recipes");
    },
    goToRecipe: function() {
      this.$router.replace(`/recipe/${this.recipe.id}`);
    }
  }
};
</script>
<style>
.recipecard {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: flex-start;
  margin-bottom: 20px;
  border: 1px solid #ffe91a;
  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.recipecard section {
  padding-left: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.recipecard article {
  width: 60%;
  margin-bottom: 2em;
}
.photo {
  width: 36%;
  height: 350px;
  object-fit: cover;
  object-position: 50% 50%;
}

.recipecard li {
  font-style: italic;
  color: #595a5a;
}

.recipecard li img {
  width: 18px;
  margin-right: 5px;
}

.cta-read {
  border-radius: 3px;
  text-align: center;
  background-color: #ffe91a;
  padding: 12px;
  margin-top: 20px;
  box-shadow: 0px 8px 15px rgba(136, 156, 148, 0.4);
  transition: all 0.3s ease 0s;
  font-size: 19px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
}

.cta-read a {
  font-size: 19px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
}

.cta-read:hover {
  box-shadow: 0px 15px 20px rgba(136, 156, 148, 0.4);
  transform: translateY(-3px);
}

.cta-edit {
  margin-right: 1em;
  align-self: flex-end;
}

.cta-edit img {
  width: 30px;
  padding: 7px;
  margin: 0 5px;
  border-radius: 24%;
  background-color: #c4ddda;
}

#delete {
  padding: 5px 7px;
}

/********************RESPONSIVE******************************/

@media screen and (max-width: 850px) {
  .recipecard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 80%;
    margin: 0 auto 20px auto;
  }

  .recipecard section {
    width: 90%;
    align-items: center;
    padding-left: 0;
  }

  .recipecard article {
    width: 100%;
  }

  .photo {
    width: 100%;
  }

  .cta-edit {
    margin-right: 0;
    align-self: unset;
  }
}

@media screen and (max-width: 500px) {
  .recipecard {
    width: 90%;
    margin: 0 auto 20px auto;
  }
}
</style>