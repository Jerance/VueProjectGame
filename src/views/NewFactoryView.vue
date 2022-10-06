<template>
  <div class="home">
    <h2>New factory</h2>
    <p>You have {{ emptySpots }} empty factory spots</p>
    <select name="factoryType" id="factoryType">
      <option v-for="type in factoryModels" :key="type.id" :value="type.id">
        {{ type.resource.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "../store/myStore";

export default {
  name: "NewFactoryView",
  data() {
    return {
      selected: -1,
    };
  },
  computed: {
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
    ]),
  },
  created() {
    this.fetchMyFactories();
    this.getMaxFactories();
    this.fetchFactoryModels();
  },
};
</script>
