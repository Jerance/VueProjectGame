<template>
  <h1>Market - New Offer</h1>
  <router-link to="/market">Community</router-link>
  <router-link to="/market/mytrades">My Trades</router-link>
  <router-link to="/market/newtrades">New Trade +</router-link>
  <div>
    <div>
      <label for="quantity">Quantité</label>
      <input type="text" name="quantity" id="id_quantity" v-model="quantity" />
      <select name="ressources" @change="onChange" v-model="ressources">
        <option disabled="true">Choose one of ressources</option>
        <option value="1">Bois</option>
        <option value="2">Fer</option>
        <option value="3">Pierre</option>
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
      selected: null,
      options: [
        { value: null, text: "Please select one ressources" },
        { value: 1, text: "Wood" },
        { value: 2, text: "Iron" },
        { value: 3, text: "Stone" },
      ],
      ressources: 0,
      quantity: 0,
      price: 0,
    };
  },
  computed: {
    ...mapState(useGameStore, ["authToken"]),
  },
  methods: {
    ...mapActions(useGameStore, ["createNewTrade"]),
    ...mapActions(useGameStore, ["createNewRessource"]),
    onChange(event) {
      console.log(event.target.value, this.ressources);
    },
  },
};
</script>

<style></style>
