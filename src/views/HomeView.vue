<template>
  <div v-if="authToken" class="home">
    <h1>Jeu</h1>
    <button @click="newFactory">New factory</button>
    <Factory v-for="factory in myFactories" :key="factory" :data="factory" />
  </div>
  <h1 v-else>
    Please <router-link to="/login"> Login</router-link> or
    <router-link to="/signup"> SignUp</router-link>
  </h1>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useGameStore } from "../store/myStore";
import Factory from "@/components/Factory.vue";

export default {
  name: "HomeView",
  components: {
    Factory,
  },
  computed: {
    ...mapState(useGameStore, ["authToken", "myFactories"]),
  },
  methods: {
    ...mapActions(useGameStore, ["fetchMyFactories", "fetchInventory"]),
    newFactory() {
      this.$router.push("/new-factory");
    },
  },
  beforeUpdate() {
    if (this.authToken && this.myFactories.length == 0) {
      this.fetchMyFactories();
      this.fetchInventory();
    }
  },
};
</script>
