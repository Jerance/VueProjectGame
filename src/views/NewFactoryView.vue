<template>
  <div class="home">
    <h2>New factory</h2>
    <p>You have {{ emptySpots }} empty factory spots</p>
    <label for="factoryType">Type of factory you want to make : </label>
    <select v-model="selected" name="factoryType" id="factoryType">
      <option v-for="type in factoryModels" :key="type.id" :value="type">
        {{ type.resource.name }}
      </option>
    </select>
    <div v-if="show">
      <p>
        You already have {{ factoriesOfType }}
        {{ selected.resource.name }} factories
      </p>
      <p>
        {{ price }} coins
        <button @click="create">Create factory</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "../store/myStore";

export default {
  name: "NewFactoryView",
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    show() {
      return this.emptySpots > 0 && this.selected != false;
    },
    price() {
      let prix = Math.pow(8, this.myFactories.length + 1);
      if (this.myFactories.length == 0) {
        return 40;
      } else {
        return prix;
      }
    },
    factoriesOfType() {
      let count = 0;
      this.myFactories.forEach((factory) => {
        console.log(this.selected.id);
        if (factory.model.id == this.selected.id) {
          count++;
        }
      });
      return count;
    },
    ...mapState(useGameStore, [
      "nbMaxFactories",
      "myFactories",
      "factoryModels",
    ]),
    emptySpots() {
      return this.nbMaxFactories - this.myFactories.length;
    },
  },
  methods: {
    ...mapActions(useGameStore, [
      "fetchMyFactories",
      "fetchFactoryModels",
      "getMaxFactories",
      "post",
    ]),
    create() {
      this.post("factories", { factory_model: this.selected.resource.id });
      this.fetchMyFactories();
    },
  },
  created() {
    this.fetchMyFactories();
    this.getMaxFactories();
    this.fetchFactoryModels();
  },
};
</script>
