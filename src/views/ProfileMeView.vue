<template>
  <h1>My Profile</h1>
  <div class="pageProfilePerso">
    <div class="blank"></div>
    <img
      src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
      alt="Lights"
    />
    <h2>Username: {{ username }}</h2>
    <h2 v-if="userrole == 0">Role: Player</h2>
    <h2 v-if="userrole == 1">Role: Admin</h2>
    <h2 v-if="userrole > 1">Role: Unknown</h2>
    <div>
      <button class="btn" @click="MyTrades">
        <img class="svg" src="../assets/img/trade.svg" />
        Trades
      </button>
      <button class="btn" @click="MyFactorys">
        <img class="svg" src="../assets/img/Factory.svg" />
        My Factory
      </button>
    </div>
    <button class="btn logout" @click="logout(), louf()">
      <img class="svg" src="../assets/img/logout-svgrepo-com.svg" />
      Logout
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "../store/myStore.js";

export default {
  name: "ProfileMeView",
  data() {},
  computed: {
    ...mapState(useGameStore, ["username"]),
    ...mapState(useGameStore, ["userrole"]),
  },
  methods: {
    ...mapActions(useGameStore, ["login"]),
    ...mapActions(useGameStore, ["logout"]),
    ...mapActions(useGameStore, ["FetchMyRole"]),

    MyTrades() {
      this.$router.push("/App");
    },
    MyFactorys() {
      this.$router.push("/");
    },
    louf() {
      this.$router.push("/home");
    },
  },
  mounted() {
    this.FetchMyRole();
  },
};
</script>

<style>
.svg {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.pageProfilePerso {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  border: black solid 1.5px;
  box-shadow: grey 0px 0px 10px;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  background-color: white;
}

.pageProfilePerso img {
  width: 20%;
}

button {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #4caf50;
  margin-left: 10px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.logout {
  background-color: #f44336;
  border-radius: 5px;
}
.blank {
  height: 20px;
}
</style>
