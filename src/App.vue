<template>
  <div id="app">
    <header class="hero-image">
        <router-link to="/"></router-link>
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

/* General */
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#2E2E2E;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: #2E2E2E;
}

h2 {
  text-align: center;
  color: #ffe51a;
  font-size: 30px;
}

h3 {
  font-size: 30px;
  color: #595a5a;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
}

.centered {
  text-align: center;
}

/* Home */
header {
  padding-top: 12em;
}

.hero-image {
  background-image: url("./assets/header.jpg");
  height: 120%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Delete window */
.dg-content {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#7d7575;
  text-align: center;
  font-weight: bold;
}

.dg-btn--cancel {
  background-color: #71a9b4!important;
}

.dg-btn--ok {
  color: #71a9b4!important;
  background-color: #fefefe;
  border-color: #71a9b4!important;
}

/********************RESPONSIVE******************************/

@media screen and (max-width: 500px) {

  .dg-main-content {
    width: 85%!important;
  }

}

</style>
