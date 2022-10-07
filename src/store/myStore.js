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
    trades: [],
    mytrades: [],
    authStr: "",
    userrole: 9,
    inventory: {},
    Money: -1,
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
    async delete(url) {
      try {
        const response = await axios.delete(
          this.baseUrl + url,
          this.axiosHeader
        );
        console.log(url + " deleted");
        return response.data;
      } catch (error) {
        if (error.response) {
          // Request made and server responded
          alert("Error: unable to delete " + url);
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
    FetchMyRole() {
      console.log("fetching userrrole");
      this.fetch("auth/me").then((response) => {
        this.userrole = response.role;
      });
    },
    fetchInventory() {
      console.log("fetching inventory");
      return this.fetch("inventory/my").then((response) => {
        this.inventory = response;
      });
    },
    login(id, pw) {
      this.username = id;
      this.post("auth/login", {
        username: this.username,
        password: pw,
      }).then((resource) => {
        this.authStr = "Bearer " + resource.access_token;
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
    getAllTrades() {
      this.fetch("trades/all", {}).then((resource) => {
        this.trades = resource;
        console.log(resource);
      });
    },
    getAllMyTrades(mytrades) {
      this.fetch("trades/my", {}).then((response) => {
        this.mytrades = mytrades;
        mytrades = response;
        console.log(response);
        console.log(mytrades);
      });
    },
    createNewTrade(resourceId, quantity, unitPrice) {
      this.post("trades", {
        resourceId: resourceId,
        quantity: quantity,
        unitPrice: unitPrice,
      }).then((resource) => {
        console.log(resource);
        console.log(resource);
      });
    },
    createNewRessource() {
      this.postData("http://localhost:3000/resources", {
        name: "Fer",
        image_url:
          "https://d.wattpad.com/story_parts/737845095/images/15a2c96351dcd0a5170250432904.jpg",
        base_value: 1,
      }).then((data) => {
        console.log(data);
      });
    },

    async postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          Authorization: this.authStr,
        },
        body: JSON.stringify(data),
      });

      return response.json();
    },
  },
});
