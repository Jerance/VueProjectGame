<template>
  <h1>Community Official Market</h1>
  <router-link to="/market">Community</router-link>
  <router-link to="/market/mytrades">My Trades</router-link>
  <router-link to="/market/newtrades">New Trade +</router-link>
  <AllTradesContainer></AllTradesContainer>
</template>

<script>
import { mapActions } from "pinia";
import { useGameStore } from "../store/myStore.js";
import AllTradesContainer from "@/components/AllTradesContainer.vue";

export default {
  name: "MarketView",
  components: {
    AllTradesContainer,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useGameStore, ["getAllTrades"]),
  },
  beforeMount() {
    this.getAllTrades();
  },
};
</script>

<style></style>
