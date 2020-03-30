<template>
   <nav class="navbar">
        <div class="container">
            <router-link to="/">Home</router-link>
            <div class="nav-recipes">
                <router-link to="/recipes">Les Recettes</router-link>
                <router-link to="/add">Ajouter une recette</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>


<style>
.navbar {
    margin-bottom: 3em;
    font-family: 'Roboto Slab', serif;
    color: #000000;
    font-size: 18px;
    width: 95%;
    margin: 0 auto;
}

.navbar>.container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
}

.navbar a:hover,
.navbar-recipes a:hover {
    color: #ffe51a;
    transform: scale(1.05);
}


.navbar a:active,
.navbar-recipes a:active {
    transition: none;
    color: #ffe51a;
}



</style>