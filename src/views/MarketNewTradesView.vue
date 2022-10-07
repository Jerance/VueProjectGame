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
  <p>{{ ressources }}</p>
  <p>{{ quantity }}</p>
  <p>{{ price }}</p>

  <button v-on:click="createNewTrade(ressources, quantity, price)">
    CreateNewTrade
  </button>
  <!--
  <div>
    <div>
      <select
        name="ressources"
        @change="onChangeRessource"
        v-model="ressources_name"
      >
        <option disabled="true">Choose one of ressources</option>
        <option name="Bois">Bois</option>
        <option name="Fer">Fer</option>
        <option name="Pierre">Pierre</option>
      </select>
    </div>
    <p>
      ImageUrl<input
        type="text"
        name="img_url"
        id="img_url"
        v-model="img_URL"
      />
    </p>
    <input type="text" name="basevalue" id="basevalue" v-model="base_value" />
  </div>
  -->
  <button v-on:click="createNewRessource2()">CreateRessource</button>
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
      ressources_name: "",
      img_URL: "",
      base_value: 0,
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
    ...mapActions(useGameStore, ["createNewRessource2"]),
    onChange(event) {
      console.log(event.target.value, this.ressources);
    },
    onChangeRessource(eventRessource) {
      console.log(eventRessource.target.text, this.ressources_name);
    },
  },
};
</script>

<style></style>
