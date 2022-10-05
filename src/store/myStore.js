import { defineStore } from "pinia";
import axios from "axios";

export const useGameStore = defineStore("store", {
  state: () => ({
    authToken: "",
  }),
  actions: {
    login(id, pw) {
      axios
        .post("http://apigame.co/auth/login", {
          username: id,
          password: pw,
        })
        .then((response) => {
          console.log(response);
          this.authToken = response.data;
          console.log(this.authToken);
        });
    },
  },
});
