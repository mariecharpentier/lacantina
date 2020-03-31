<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1 class="main-title">La Cantina</h1>
      </router-link>
      <img alt="line" src="./assets/line.svg" class="line" >
    </header>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

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
  color: #000;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: #000;
}

h2 {
  text-align: center;
  color: #ffe51a;
  font-size: 30px;
}

ul {
  padding: 0;
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
  font-size: 4em;
  margin-block-start: 0;
  margin-block-end: 0.1em;
  text-align: center;
}

.line {
  width: 95%;
}


</style>
