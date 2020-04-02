<template>
    <div class="container">

        <form class="userform" @submit.prevent="send">

            <div class="form-group">
                <label for="titre">Nom de la recette :</label>
                <input type="text" id="titre" placeholder="Nom de la recette" v-model="recipe.titre" required>
            </div>

            <div class="form-group">
                <label for="description">Description :</label>
                <input type="text" id="description" placeholder="Présentez votre recette..." v-model="recipe.description" required>
            </div>

            <div class="form-group">
                <label for="niveau">Niveau :</label>
                <select name="niveau" v-model="recipe.niveau" required>
                    <option disabled value=""></option>
                    <option value="padawan">Padawan</option>
                    <option value="jedi">Jedi</option>
                    <option value="maitre">Maitre</option>
                </select>
            </div>

            <div class="form-group">
                <label for="personnes">Nombre de personnes :</label>
                <input type="number" min="1" max="20" id="personnes" placeholder="4" v-model="recipe.personnes" required>
            </div>

            <div class="form-group">
                <label for="tempsPreparation">Temps de préparation maximum :</label>
                <input type="number" min="10" max="500" step="5" id="tempsPreparation" placeholder="30 minutes" v-model="recipe.tempsPreparation" required>
            </div>

            <div class="form-group">
                <label for="ingredients">Ingrédients :</label>
                <input type="text" id="ingredients" placeholder="Sel" v-model="recipe.ingredients" required>
                <!-- <a href="#" class="add" title="Ajouter un ingrédient" @click.prevent="addIngredient">+</a> -->
            </div>

            <div class="form-group">
                <label for="etapes">Etapes :</label>
                <input type="text" id="etapes" placeholder="Se laver les mains..." v-model="recipe.etapes" required>
            </div>

            <div class="form-group">
                <label for="photo">Photo :</label>
                <input type="url" id="photo" placeholder="http://" v-model="recipe.photo">
            </div>

            <div class="actions centered">
                <input type="submit" id="btn" value="Valider"/>
            </div>

        </form>

    </div>
</template>

<script>

export default {
    name: 'Form',  
    props: {
        recipe: {
            type: Object,
            default: function() {
                return {
                    id: null,
                    titre: '',
                    description: '',
                    niveau: '',
                    personnes: '',
                    tempsPreparation: '',
                    ingredients: ['sel', 'poivre'],
                    etapes: ['lavage', 'coupage'],
                    photo: ''
                    };
                }
        }
    },
    methods: {
        // addIngredient: function(){
        //     this.recipe.ingredients.push(["",""]);
        // },
        send: function() {
            this.$emit("send", this.recipe);
        },
        
  }
};
</script>

<style>
.userform {
    margin: 2em auto;
    width: 50%;
    max-width: 520px;
    min-width: 390px;
}

.userform .form-group {
    margin-bottom: 1.2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.userform input {
    height: 40px;
    background-color: #f3f5f8;
    font-size: 14px;
    padding-right: 6px;
    padding-left: 10px;
    border: none;
}
.userform label {
    display: inline-block;
    min-width: 150px;
    line-height: 40px;
}

.userform input {
    min-width: 200px;
}

.userform input ~ span {
    display: block;
    font-size: 0.8em;
    color: red;
}

.userform .input-error {
    border: 1px solid red;
}

.userform select {
	border: none;
	background-color: #f3f5f8;
	border-radius: 0;
	width: 216px;
	height: 40px;
	line-height: 40px;
	color: #2f2f2fba;
	cursor: pointer;
	padding-left: 10px;
}

#btn {
    border-radius: 3px;
    text-align: center;
    background-color: #74b5bb;
    padding: 12px;
    margin-top: 20px;
    box-shadow: 0px 8px 15px rgba(136, 156, 148, 0.4);
    transition: all 0.3s ease 0s;
    font-size: 20px;
    line-height: 17px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
}
#btn:hover {
    box-shadow: 0px 15px 20px rgba(136, 156, 148, 0.4);
    transform: translateY(-3px);
}

/* .add {
    width: 30px;
    height: 30px;
    margin-left: 15px;
    border-radius: 50%;
    background-color: ;
    color: #fff;
    font-size: 30px;
    text-align: center;
    line-height: 30px;
    font-style: bold;
    text-transform: uppercase;
} */

</style>