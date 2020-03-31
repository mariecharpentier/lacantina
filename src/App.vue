<template>
  <div id="app">
    <header>
      <h1 class="main-title">La Cantina</h1>
      <img alt="line" src="./assets/line.svg" class="line" >
    </header>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import recipeService from '../services/recipeService.js';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,400i,900|Liu+Jian+Mao+Cao|Roboto+Slab:400,700,800&display=swap');


#app {
  font-family: 'Lato', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: #000;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
}

.centered {
  text-align: center;
}

header {
  background: url(./assets/lemons.jpg) no-repeat;
  background-size: cover;
  padding-top: 6em;
}

.main-title {
  font-family: 'Liu Jian Mao Cao', cursive;
  font-size: 5em;
  margin-block-start: 0;
  margin-block-end: 0.1em;
}

.line {
  width: 95%;
}


</style>
