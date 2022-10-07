<template>
  <div v-if="authToken" class="home">
    <router-link to="/new-factory">New Factory</router-link>
    <HelloWorld msg="A retirer" />
  </div>
  <h1 v-else>Please login or signup</h1>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "pinia";
import { useGameStore } from "../store/myStore";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(useGameStore, ["authToken"]),
  },
};
</script>
