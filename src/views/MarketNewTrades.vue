<template>
  <h1>Market - New Offer</h1>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "../store/myStore.js";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapState(useGameStore, ["authToken"]),
  },
  methods: {
    ...mapActions(useGameStore, ["login"]),
  },
};
</script>

<style></style>
