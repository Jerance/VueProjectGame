<template>
  <h1>Market - New Offer</h1>
  <router-link class="router-link" to="/market">Community</router-link>
  <router-link class="router-link" to="/market/mytrades">
    My Trades
  </router-link>
  <router-link class="router-link" to="/market/newtrades">
    New Trade +
  </router-link>
  <div class="containe-new-offer">
    <div>
      <label for="quantity">Quantité</label>
      <input type="text" name="quantity" id="id_quantity" v-model="quantity" />
      <select v-model="selected" name="name_ressource" id="name_ressource">
        <option
          v-for="resource in allResources"
          :key="resource"
          :value="resource"
        >
          {{ resource.id }} {{ resource.name }}
        </option>
      </select>
    </div>
    <input type="text" v-model="ressources_id" />
    <p>Write your ressource id here : {{ ressources_id }}</p>
    <p>
      Récompenses :
      <input type="text" name="price" id="price" v-model="price" />
      <span>Pièces</span>
    </p>
  </div>

  <button v-on:click="createNewTrade(ressources_id, quantity, price)">
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
      selected: false,
      ressources_name: "",
      ressources_id: 0,
      img_URL: "",
      base_value: 0,
      ressources: 0,
      quantity: 0,
      price: 0,
    };
  },
  computed: {
    ...mapState(useGameStore, ["authToken", "allResources"]),
  },
  methods: {
    ...mapActions(useGameStore, [
      "createNewTrade",
      "createNewRessource2",
      "getResources",
    ]),
  },
  created() {
    this.getResources();
  },
};
</script>

<style>
.containe-new-offer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
}
</style>
