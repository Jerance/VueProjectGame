<template>
  <td>Users</td>
  <td>{{ trade.quantity }} Ressources</td>
  <td>{{ trade.unitPrice }} Pièces</td>
  <td class="btn-containers-trade">
    <button class="btn-buy">Acheter</button
    ><button class="btn-delete">Supprimer</button>
  </td>
</template>

<script>
export default {
  name: "idTrades",
  props: {
    trade: Object,
  },
};
</script>

<style>
td.btn-containers-trade {
  display: flex;
  justify-content: space-evenly;
  margin-top: 7px;
  align-items: center;
}

button.btn-buy {
  background-color: green;
  color: white;
  border-radius: 5px;
  font-weight: bold;
}

button.btn-delete {
  background-color: firebrick;
  color: white;
  border-radius: 5px;
  font-weight: bold;
}
</style>
