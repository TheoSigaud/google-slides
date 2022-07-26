<template>
  <div id="app">
    <button @click="remove">Test</button>
    <div class="reveal">
      <div class="slides">
        <section v-html="slide.value.data" v-for="(slide, index) in slides" :key="slide.key">
          {{slide.value.data}}
        </section>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 90vh;
}
</style>
