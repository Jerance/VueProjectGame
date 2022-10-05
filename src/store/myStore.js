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
          alert("Vous vous êtes connectés avec succès !");
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
