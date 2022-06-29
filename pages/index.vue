<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Google Slides</b-navbar-brand>
      </b-navbar>
    </div>
     <form v-on:submit.prevent="handleRegister">
        <input type="email" />
        <input type="password" />
        <button type="submit">Register</button>
      </form>
  </div>
</template>

<script src="./index.js"></script>
