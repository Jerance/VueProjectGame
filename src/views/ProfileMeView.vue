<template>
  <h1>My Profile View</h1>
  <div class="pageProfilePerso">
    <img
      src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
      alt="Lights"
    />
    <h2>Username: {{ username }}</h2>
  </div>
  <div>
    <button class="btn" @click="MyTrades">My Trades</button>
    <button class="btn" @click="MyFactorys">My Factory</button>
  </div>
  <button class="btn" @click="logout(), louf()">Logout</button>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "../store/myStore.js";

export default {
  name: "ProfileMeView",
  data() {
    return {};
  },
  computed: {
    ...mapState(useGameStore, ["username"]),
  },
  methods: {
    ...mapActions(useGameStore, ["login"]),
    ...mapActions(useGameStore, ["logout"]),
    MyTrades() {
      this.$router.push("/market/mytrades");
    },
    MyFactorys() {
      this.$router.push("/");
    },
    louf() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
.pageProfilePerso {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pageProfilePerso img {
  width: 13%;
}
</style>
