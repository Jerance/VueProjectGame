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
    async fetch(url) {
      try {
        await axios.get("http://apigame.co/" + url, this.axiosHeader);
        console.log(url + "fetched");
      } catch (error) {
        if (error.response) {
          // Request made and server responded
          alert("Error: unable to fetch " + url);
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
      }
    },
    post(url, input) {
      let res = false;
      axios
        .post("http://apigame.co/" + url, input, this.axiosHeader)
        .then((response) => {
          res = response;
          console.log("reached" + url);
        })
        .catch(function verifErrorpw(error) {
          if (error.response) {
            // Request made and server responded
            alert("Error: unable to reach " + url);
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
      return res;
    },
    fetchMyFactories() {
      console.log("fetching factories");
      this.myFactories = this.fetch("factories");
    },
    login(id, pw) {
      this.username = id;
      let resource = this.post("auth/login", {
        username: this.username,
        password: pw,
      });
      this.authToken = resource.data.access_token;
      this.axiosHeader = {
        headers: { Authorization: "Bearer " + resource.data.access_token },
      };
    },
  },
});
