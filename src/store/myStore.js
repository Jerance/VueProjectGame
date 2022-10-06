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
        const response = await axios.get(
          "http://apigame.co/" + url,
          this.axiosHeader
        );
        console.log(url + " reached");
        return response;
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
    async post(url, input) {
      try {
        const response = await axios.post(
          "http://apigame.co/" + url,
          input,
          this.axiosHeader
        );
        console.log("reached " + url);
        return response;
      } catch (error) {
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
      }
    },
    fetchMyFactories() {
      console.log("fetching factories");
      this.fetch("factories").then((response) => {
        this.myFactories = response;
      });
    },
    login(id, pw) {
      this.username = id;
      this.post("auth/login", {
        username: this.username,
        password: pw,
      }).then((resource) => {
        this.authToken = resource.data.access_token;
        this.axiosHeader = {
          headers: { Authorization: "Bearer " + resource.data.access_token },
        };
      });
    },
  },
});
