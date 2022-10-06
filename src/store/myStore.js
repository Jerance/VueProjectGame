import { defineStore } from "pinia";
import axios from "axios";

export const useGameStore = defineStore("store", {
  state: () => ({
    authToken: "",
    myFactories: [],
    axiosHeader: {},
    username: "",
  }),
  actions: {
    fetchMyFactories() {
      console.log("fetching factories");

      this.myFactories = axios
        .get("http://apigame.co/factories", this.axiosHeader)
        .then(() => {
          console.log("factories fetched");
        })
        .catch(function verifErrorpw(error) {
          if (error.response) {
            // Request made and server responded
            alert("Error: unable to fetch factories");
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
    login(id, pw) {
      this.username = id;
      axios
        .post("http://apigame.co/auth/login", {
          username: this.username,
          password: pw,
        })
        .then((response) => {
          this.authToken = response.data.access_token;
          this.axiosHeader = {
            headers: { Authorization: "Bearer " + response.data.access_token },
          };
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