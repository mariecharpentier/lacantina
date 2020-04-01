<template>
    <div class="container centered">

        <form class="userform" @submit.prevent="send">

            <div class="form-group">
                <label for="titre">Nom de la recette :</label>
                <input type="text" id="titre" placeholder="Nom de la recette" v-model="recipe.titre">
            </div>

            <div class="form-group">
                <label for="description">Description :</label>
                <input type="text" id="description" placeholder="Présentez votre recette..." v-model="recipe.description">
            </div>

            <div class="form-group">
                <input type="radio" name="level" id="padawan" value="padawan" v-model="recipe.niveau">
                <label for="padawan">Padawan</label>

                <input type="radio" name="level" id="jedi" value="jedi" v-model="recipe.niveau">
                <label for="jedi">Jedi</label>

                <input type="radio" name="level" id="maitre" value="maitre" v-model="recipe.niveau">
                <label for="maitre">Maitre</label>
            </div>

            <div class="form-group">
                <label for="personnes">Nombre de personnes :</label>
                <input type="text" id="personnes" placeholder="4" v-model="recipe.personnes">
            </div>

            <div class="form-group">
                <label for="tempsPreparation">Temps de préparation :</label>
                <input type="text" id="tempsPreparation" placeholder="30" v-model="recipe.tempsPreparation">
            </div>

            <div class="form-group">
                <label for="ingredients">Ingrédients :</label>
                <input type="text" id="ingredients" placeholder="Sel" v-model="recipe.ingredients">
            </div>

            <div class="form-group">
                <label for="etapes">Etapes :</label>
                <input type="text" id="etapes" placeholder="Se laver les mains..." v-model="recipe.etapes">
            </div>

            <div class="form-group">
                <label for="photo">Photo :</label>
                <input type="url" id="photo" placeholder="http://" v-model="recipe.photo">
            </div>

            <div class="actions">
                <button type="submit" class="btn">Envoyer</button>
            </div>

        </form>

    </div>
</template>

<script>

export default {
    name: 'Form',  
    props: {
        user: {
            type: Object,
            default: function() {
            return {
                id: null,
                titre: '',
                description: '',
                niveau: '',
                personnes: '',
                tempsPreparation: '',
                ingredients: '',
                etapes: '',
                photo: ''
                };
            }
        }
    },
    methods: {
        send: function() {
        this.$emit("send", this.recipe);
    }
  }
};
</script>

<style>
.userform {
    margin: 2em 0;
}

.userform .form-group {
    margin-bottom: 1.2em;
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
    vertical-align: middle;
    min-width: 150px;
    text-align: right;
}

.userform input[type='radio'] + label {
    min-width: 0;
    text-align: left;
    cursor: pointer;
}

.userform input:not([type=radio]) {
    min-width: 200px;
    vertical-align: middle;
}

.userform input ~ span {
    display: block;
    font-size: 0.8em;
    color: red;
}

.userform .input-error {
    border: 1px solid red;
}

.btn {
    position: relative;
    min-width: 80px;
    padding: 6px 20px;
    border-radius: 4px;
    outline: 0;
    color: #0096D9;
    background-color: #fefefe;
    border-color: #0096D9;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 16px;
    font-weight: 700;
}

</style>