<template>
  <div>
    <header>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="/slides">Google Slides</b-navbar-brand>
          <b-navbar-nav class="ml-auto">
            <button class="btn btn-warning" @click="logoutUser">Déconnexion</button>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </header>

    <Nuxt />
  </div>
</template>

<script>
import { logout } from "../firebase/firebase";

export default {
  name: "nav",

  methods: {
    async logoutUser(){
      logout();
    }
  }
}
</script>
