<template>
  <h1>Market - My Trades</h1>
  <router-link class="router-link" to="/market">Community</router-link>
  <router-link class="router-link" to="/market/mytrades">
    My Trades
  </router-link>
  <router-link class="router-link" to="/market/newtrades">
    New Trade +
  </router-link>
  <AllTradesContainer></AllTradesContainer>
</template>

<script>
import { mapActions } from "pinia";
import { useGameStore } from "../store/myStore.js";
import AllTradesContainer from "@/components/AllTradesContainer.vue";

export default {
  name: "MarketMyTradesView",
  components: {
    AllTradesContainer,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useGameStore, ["getAllMyTrades"]),
  },
  beforeMount() {
    this.getAllMyTrades(this.trade);
  },
};
</script>

<style></style>
