<template>
  <nav>
    <div>
      <router-link to="/">Jeu</router-link>
    </div>
    <div v-if="authToken != ''" class="container">
      <router-link to="/InventoryView">Inventory</router-link>
      <router-link to="/market">Market</router-link>
    </div>
    <div class="connection" v-if="authToken == ''">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">SignUp</router-link>
    </div>
    <div class="profilePerso" v-else>
      <div>
        <router-link to="/ProfileMeView">{{ username }}</router-link>
      </div>
      <p id="moneyNav">{{ inventory.money }} Coins</p>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        alt="avatar"
      />
    </div>
  </nav>
  <router-view />
  <footer>Made using {{ baseUrl }} api</footer>
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
    ...mapState(useGameStore, [
      "baseUrl",
      "authToken",
      "username",
      "inventory",
    ]),
  },
  methods: {
    ...mapActions(useGameStore, ["login"]),
    ...mapActions(useGameStore, ["fetchInventory"]),
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgba(220, 220, 220, 0.5);
  scroll-margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dfdfdf;
  color: white;
  padding: 0 1rem;
}

nav div {
  display: flex;
  align-items: center;
}

nav div a {
  color: #2c3e50;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

nav div a:hover {
  background-color: #42b983;
  color: white;
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

#moneyNav {
  color: #42b983;
}

footer {
  background-color: #dfdfdf;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 25px;
  height: 50px;
  border-top: #2c3e50 solid 1px;
}
</style>
