<template>
    <div class="container centered">

      <h2>La recette du jour</h2>
      <section class="container">
        <article>
          <img src="" alt="">
          <h3>La recette</h3>
          <p>La description sera ici et blablbla</p>
          <a href="">pour en savoir plus...</a>
        </article>
      </section>
    </div>

</template>

<script>
// import userService from '../services/userService.js';

export default {
  name: 'Home' 
};
</script>


<style scoped>

section {
  background-color: #f9f679;
  width: 60%;
  padding-bottom: 30px;
}

article {
  background: url(../assets/circle.png);
  background-size: 100%;
}

</style>