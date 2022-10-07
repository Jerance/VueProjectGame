<template>
  <div v-if="data">
    {{ data.model.resource.name }} factory lvl. {{ data.level }}
    <br />
    <button @click="upgrade">Upgrade</button>
    <button @click="suppr">delete</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useGameStore } from "../store/myStore.js";

export default {
  name: "FactoryComponent",
  props: {
    data: Object,
  },
  computed: {
    ...mapState(useGameStore, ["myFactories"]),
  },
  methods: {
    ...mapActions(useGameStore, ["post", "delete", "fetchMyFactories"]),
    suppr() {
      this.delete("factories/" + this.data.id);
      console.log("suppr " + this.data.id);
      this.fetchMyFactories();
    },
    upgrade() {
      this.post("factories/" + this.data.id + "/levelup")
        .then((response) => {
          console.log(response);
        })
        .then(() => {
          this.fetchMyFactories();
        });
      console.log("upgrade " + this.data.id);
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 5px;
  margin: 5px;
}
</style>
