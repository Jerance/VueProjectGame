import { defineStore } from "pinia";
import axios from "axios";

export const useGameStore = defineStore("store", {
  state: () => ({
    authToken: "",
    myFactories: [],
    axiosHeader: {},
    username: "",
    trades: [],
    mytrades: [],
    authStr: "",
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
        this.authStr = "Bearer " + resource.data.access_token;
        this.axiosHeader = {
          headers: { Authorization: "Bearer " + resource.data.access_token },
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
        this.trades = resource.data;
        console.log(resource.data);
      });
    },
    getAllMyTrades(mytrades) {
      this.fetch("trades/my", {}).then((response) => {
        this.mytrades = mytrades;
        mytrades = response.data;
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
        console.log(resource.data);
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
