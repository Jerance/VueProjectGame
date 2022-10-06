<template>
  <div class="home">
    <h2>New factory</h2>
    <p>You have {{ emptySpots }} empty factory spots</p>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useGameStore } from "../store/myStore";

export default {
  name: "NewFactoryView",
  data() {
    return {
      factories: ["", "", "", ""],
      totalSpots: 7,
    };
  },
  computed: {
    emptySpots() {
      return this.totalSpots - this.factories.length;
    },
  },
  methods: {
    ...mapActions(useGameStore, ["fetchMyFactories"]),
  },
  mounted() {
    this.fetchMyFactories();
  },
};
</script>
