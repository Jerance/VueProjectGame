<!-- fetch inventory -->
<template>
  <div class="inventory">
    <h1>Inventory</h1>
    <p>{{ inventory }}</p>
    <ul>
      <li v-for="resource in inventory.inventory_resources" :key="resource">
        {{ resource }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "../store/myStore.js";
export default {
  name: "InventoryView",
  computed: {
    ...mapState(useGameStore, ["inventory"]),
  },
  methods: {
    ...mapActions(useGameStore, ["fetchInventory"]),
  },
  created() {
    this.fetchInventory();
  },
  mounted() {
    console.log(this.inventory.money);
  },
};
</script>
