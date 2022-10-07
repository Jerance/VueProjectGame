<template>
  <h1>Community Official Market</h1>
  <div id="tradeLinks">
    <router-link class="router-link" to="/market">Community</router-link>
    <router-link class="router-link" to="/market/mytrades">
      My Trades
    </router-link>
    <router-link class="router-link" to="/market/newtrades">
      New Trade +
    </router-link>
    <AllTradesContainer></AllTradesContainer>
  </div>
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

<style>
.router-link {
  color: #2c3e50;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0 0.5rem;
  box-shadow: #2c3e50 2px;
  background-color: #cccccc;
}
</style>
