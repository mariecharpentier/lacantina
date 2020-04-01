<template>
   <nav class="navbar">
        <ul>
            <li><router-link to="/"><h1 class="site-title">La Cantina</h1></router-link></li>
            <li class="nav s-nav"><router-link to="/recipes">Les Recettes</router-link></li>
            <li class="nav m-nav"><router-link to="/add">Ajouter une recette</router-link></li>
        </ul>
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
    width: 80%;
    margin: -85px auto 0 auto;
    position: sticky;
    top: 0;
    padding: 10px 40px;
    background: rgba(255, 255, 255, 0.89);
}

.navbar ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.navbar li:nth-of-type(2) {
    margin-left: auto;
}

.navbar .nav a {
    font-size: 16px;
    text-transform: uppercase;
    margin: 0 10px;
}

.site-title {
  font-family: 'Liu Jian Mao Cao', cursive;
  font-size: 3em;
  font-weight: 500;
  margin-block-start: 0;
  margin-block-end: 0.1em;
}

.navbar .nav .router-link-active {
    border-bottom: 2px solid #ffe51a;
}

</style>