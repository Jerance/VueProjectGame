import { defineStore } from "pinia";
import axios from "axios";

export const useGameStore = defineStore("store", {
  state: () => ({
    authToken: "",
    username: "",
  }),
  actions: {
    login(id, pw) {
      this.username = id;
      axios
        .post("http://apigame.co/auth/login", {
          username: this.username,
          password: pw,
        })
        .then((response) => {
          console.log(response);
          this.authToken = response.data;
          console.log(this.authToken);
        })
        .catch(function verifErrorpw(error) {
          if (error.response) {
            // Request made and server responded
            alert("Erreur : Vous vous êtes trompés dans votre mot de passe");
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    },
  },
});