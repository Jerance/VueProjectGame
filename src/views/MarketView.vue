<template>
  <h1>Market</h1>
  <router-link to="/market">Communuty Offers</router-link>
  <router-link to="/market/mytrades">My Trades</router-link>
  <router-link to="/market/newtrades">New Trade +</router-link>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "../store/myStore.js";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapState(useGameStore, ["authToken"]),
  },
  methods: {
    ...mapActions(useGameStore, ["login"]),
  },
};
</script>

<style></style>
