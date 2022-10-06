<template>
  <nav>
    <div>
      <router-link to="/">Jeu</router-link>
    </div>
    <div v-if="user != ''" class="container">
      <router-link to="/">Inventory</router-link>
      <router-link to="/">Market</router-link>
    </div>
    <div class="connection" v-if="user == ''">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">SignUp</router-link>
    </div>
    <div class="profilePerso" v-else>
      <router-link to="/home">{{ user }}</router-link>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        alt="avatar"
      />
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: "",
    };
  },
};
</script>

<style>
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
  background-color: rgb(123, 123, 123);
  color: white;
  height: 50px;
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
