<template>
  <ul>
    <li>
      <ul>
        <li>Users</li>
        <li>Offres</li>
        <li>Prix</li>
      </ul>
    </li>
    <li v-for="trade in trades" :key="trade.id">
      <IdTradesComponent :trade="trade"></IdTradesComponent>
    </li>
  </ul>
  <p>{{ trades }}</p>
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
