<template>
  <div class="addIngredient">
    <li class="form-group" v-for="(ingredient, index) in ingredientsTab" :key="index">
      <input type="number" min="1" placeholder="1" v-model="ingredient.quantity" required/>
      <select name="mesure" v-model="ingredient.unit" required>
          <option value="unite" disabled>unité</option>
          <option value="gr">gr</option>
          <option value="dl">dl</option>
          <option value="cl">cl</option>
      </select>        
      <input type="text" placeholder="de lait" v-model="ingredient.name" required/>
      <img @click="deleteIngredientForm(index)" src="../assets/close.svg" alt="close" class="close">
    </li>
    <li class="addBtn">
    <span>Ajouter un ingrédient</span>
    <img src="../assets/add.svg" class="addInput" title="Ajouter un ingrédient" @click="addIngredientForm"/>
    </li>
  </div>
</template>

<script>
export default {
  name: "addIngredient",
  data: function() {
    return {
      ingredientsTab: [
        {
          quantity: '',
          unit: '',
          name: ''
        }
      ],
      ingredients: ['']
    }
  },
  methods: {  
    addIngredientForm: function() {
      this.ingredientsTab.push({
        quantity: '',
        unit: '',
        name: ''
      })
      console.log(this.ingredientsTab)
    },
    deleteIngredientForm: function(index) {
      this.ingredientsTab.splice(index, 1)
    }
 
  }
}
</script>
<style>
.addIngredient .form-group{
  margin-top: 10px;
  margin-bottom: 0!important;
  position: relative;
}

.form-group #ingredients input:first-of-type {
    width: 35px;
    margin-right: 5px;
}
.form-group #ingredients select {
    width: 50px;
    height: 42px;
    margin-right: 5px;
}
.form-group #ingredients input:last-of-type {
    width: 200px;
}

.addBtn {
  position: relative;
  margin-top: 10px;
  height: 40px;
}
.addIngredient .addBtn span {
  font-size: 14px;
  font-style: italic;
  position: absolute;
  top: 0;
  right: 50px;
  color: #74b5bb;
}
.addIngredient .addInput {
  width: 30px;
  position: absolute;
  top: -7px;
  right: 5px;
}


.addIngredient .close {
  position: absolute;
  top: calc(50% - 12px);
  right: 10px;
  color: #3c70bf;
  width: 24px;
}
</style>