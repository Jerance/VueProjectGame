<template>
  <nav>
    <div>
      <router-link to="/">Jeu</router-link>
    </div>
    <div v-if="authToken != ''" class="container">
      <router-link to="/">Inventory</router-link>
      <router-link to="/">Market</router-link>
    </div>
    <div class="connection" v-if="authToken == ''">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">SignUp</router-link>
    </div>
    <div class="profilePerso" v-else>
      <router-link to="/ProfileMeView">{{ username }}</router-link>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        alt="avatar"
      />
    </div>
  </nav>
  <router-view />
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "./store/myStore.js";

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapState(useGameStore, ["authToken"]),
    ...mapState(useGameStore, ["username"]),
  },
  methods: {
    ...mapActions(useGameStore, ["login"]),
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgba(220, 220, 220, 0.5);
}
.container {
  display: flex;
  justify-content: space-around;
  width: 50%;
}

.profilePerso {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profilePerso img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
}

.connection {
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #dfdfdf;
  height: 100%;
  border-radius: 5px;
  border-bottom: #2c3e50 solid 1px;
  padding: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
