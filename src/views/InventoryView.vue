<!-- fetch inventory -->
<template>
  <div class="inventory">
    <h1>Inventory</h1>
    <ul>
      <li v-for="resource in inventory.inventory_resources" :key="resource">
        <img :src="resource.resource.image_url" alt="resource" />
        <p>
          Quantity : {{ resource.quantity }}
          <br />
          Factory : {{ resource.resource.name }}
        </p>
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

<style>
.inventory {
  text-align: center;
}

.inventory ul {
  list-style: none;
  padding: 0;
}

.inventory li {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border: 2px solid #ccc;
  box-shadow: rgb(84, 84, 84) 0 0 10px;
  border-radius: 5px;
}

.inventory img {
  width: 100px;
  height: 100px;
}
</style>
