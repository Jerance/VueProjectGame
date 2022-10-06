import { defineStore } from "pinia";
import axios from "axios";

export const useGameStore = defineStore("store", {
  state: () => ({
    baseUrl: "http://apigame.co/",
    //baseUrl: "http://localhost:3000/",
    authToken: "",
    myFactories: [],
    axiosHeader: {},
    username: "",
  }),
  actions: {
    async fetch(url) {
      try {
        const response = await axios.get(this.baseUrl + url, this.axiosHeader);
        console.log(url + " reached");
        return response.data;
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
          this.baseUrl + url,
          input,
          this.axiosHeader
        );
        console.log("reached " + url);
        return response.data;
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
      console.log("fetching user factories");
      return this.fetch("factories").then((response) => {
        this.myFactories = response;
      });
    },
    fetchFactoryModels() {
      console.log("fetching factory models");
      return this.fetch("factories/models").then((response) => {
        this.factoryModels = response;
      });
    },
    getMaxFactories() {
      return this.fetch("users/factory-limit").then((response) => {
        this.nbMaxFactories = response.factory_limit;
      }).factory_limit;
    },
    login(id, pw) {
      this.username = id;
      this.post("auth/login", {
        username: this.username,
        password: pw,
      }).then((resource) => {
        this.authToken = resource.access_token;
        this.axiosHeader = {
          headers: { Authorization: "Bearer " + resource.access_token },
        };
      });
    },
    logout() {
      this.authToken = "";
      this.axiosHeader = {};
      this.username = "";
    },
  },
});
