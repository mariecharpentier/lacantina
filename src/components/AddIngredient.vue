<template>
  <div class="addIngredient">
    <div class="form-group" v-for="(ingredient, index) in ingredientsTab" :key="index">
        <input type="number" min="1" placeholder="1" v-model="ingredient[0]" required/>
        <select name="mesure" v-model="ingredient[1]" required>
            <option value="unite" disabled>unité</option>
            <option value="gr">gr</option>
            <option value="dl">dl</option>
            <option value="cl">cl</option>
        </select>        
        <input type="text" placeholder="de lait" v-model="ingredient[2]" required v-on="getFullIngredient(ingredientsTab)"/>
        <a class="removeInput" :key="index" @click.prevent="removeInputIngredient" title="Enlever cet ingrédient"><img src="https://img.icons8.com/flat_round/64/000000/delete-sign.png"/></a>
    </div>
    <a class="addInput" @click.prevent="addInputIngredient" title="Ajouter un ingrédient"><img src="https://img.icons8.com/flat_round/64/000000/plus.png"/></a>
  </div>
</template>

<script>
export default {
    name: "addIngredient",
    data: function() {
      return {
        ingredients: [''],
        ingredientsTab: [['']]
      }
    },
    props: {
      recipe: {
        type: Object,
        default: function(){
          return {
            ingredientsTab: ['']
          };  
        }
      },
 
  },
  methods: {
    getFullIngredient: function (ingredientsTab) {
      this.ingredientsTab.push()
      ingredientsTab = this.ingredientsTab.join().replace(',', '')
      ingredientsTab = ingredientsTab.replace(',', ' ')
      console.log(ingredientsTab)
    },
    removeInputIngredient: function(index) {
      if (index > 1) {
        this.recipe.ingredients.splice(index, 1);
      }
      console.log(index)
    },
    addInputIngredient: function() {
      this.recipe.ingredients.push();
    }
 
  }
}
</script>
<style>
.addIngredient .form-group{
  margin-top: 10px;
  margin-bottom: 0!important;
}


.addInput img {
  width: 30px;
  margin: 3px;
  line-height: 40px;
}

.removeInput img{
  width: 30px;
  margin: 3px;
  line-height: 40px;
}
</style>