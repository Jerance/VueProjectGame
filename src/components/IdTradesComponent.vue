<template>
  <ul>
    <li>Users</li>
    <li>{{ trade.quantity }} Ressources</li>
    <li>{{ trade.unitPrice }} Pièces</li>
  </ul>
</template>

<script>
export default {
  name: "idTrades",
  props: {
    trade: Object,
  },
};
</script>
