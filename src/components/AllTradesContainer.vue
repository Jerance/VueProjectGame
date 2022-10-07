<template>
  <table class="all-trades-container">
    <thead class="trades-thead">
      <tr>
        <td>Users</td>
        <td>Offres</td>
        <td>Prix</td>
        <td>Actions</td>
      </tr>
    </thead>
    <tbody class="trades-body">
      <tr v-for="trade in trades" :key="trade.id">
        <IdTradesComponent :trade="trade"></IdTradesComponent>
      </tr>
    </tbody>
  </table>
</template>

<script>
import IdTradesComponent from "./IdTradesComponent.vue";
import { mapState } from "pinia";
import { useGameStore } from "../store/myStore.js";

export default {
  name: "AllTradesContainer",
  components: {
    IdTradesComponent,
  },
  computed: {
    ...mapState(useGameStore, ["trades"]),
  },
};
</script>

<style>
.all-trades-container {
  margin: auto;
  width: 800px;
  height: 200px;
  text-align: center;
  padding: 10px;
}
thead.trades-thead {
  font-weight: bold;
  text-align: center;
  padding: 20px;
  background-color: lightblue;
  color: white;
}

tbody.trades-body {
  background-color: lightgrey;
  color: white;
}
</style>
