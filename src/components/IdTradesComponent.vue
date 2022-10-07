<template>
  <td>{{ trade.owner.username }}</td>
  <td>{{ trade.quantity }} {{ trade.resource.name }}</td>
  <td>{{ trade.unitPrice }}</td>
  <td class="btn-containers-trade">
    <button v-on:click="buyTrade(trade.id, trade.quantity)" class="btn-buy">
      Acheter</button
    ><button class="btn-delete">Supprimer</button>
  </td>
  <p>{{ trade }}</p>
</template>

<script>
import { mapActions } from "pinia";
import { useGameStore } from "../store/myStore.js";

export default {
  name: "idTrades",
  props: {
    trade: Object,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useGameStore, ["buyTrade"]),
  },
};
</script>

<style>
td.btn-containers-trade {
  display: flex;
  justify-content: space-evenly;
  margin-top: 7px;
  align-items: center;
}

button.btn-buy {
  background-color: green;
  color: white;
  border-radius: 5px;
  font-weight: bold;
}

button.btn-delete {
  background-color: firebrick;
  color: white;
  border-radius: 5px;
  font-weight: bold;
}
</style>
