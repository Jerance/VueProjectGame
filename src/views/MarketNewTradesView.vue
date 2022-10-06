<template>
  <h1>Market - New Offer</h1>
  <div>
    <div>
      <label for="quantity">Quantité</label>
      <input type="text" name="quantity" id="id_quantity" v-model="quantity" />
      <select name="ressources" id="id_ressources">
        <option value="Bois">Bois</option>
        <option value="Fer">Fer</option>
        <option value="Pierre">Pierre</option>
      </select>
    </div>
    <p>
      Récompenses :
      <input type="text" name="price" id="price" v-model="price" />
      <span>Pièces</span>
    </p>
  </div>
  <button v-on:click="createNewTrade(ressources, quantity, price)">
    CreateNewTrade
  </button>
  <button v-on:click="createNewRessource()">CreateRessource</button>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "../store/myStore.js";

export default {
  data() {
    return {
      ressources: 1,
      quantity: 3,
      price: 2,
    };
  },
  computed: {
    ...mapState(useGameStore, ["authToken"]),
  },
  methods: {
    ...mapActions(useGameStore, ["createNewTrade"]),
    ...mapActions(useGameStore, ["createNewRessource"]),
  },
};
</script>

<style></style>
