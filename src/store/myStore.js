import { defineStore } from "pinia";
import axios from "axios";

export const useGameStore = defineStore("store", {
    state: () => ({
        authToken: "",
    }),
    actions: {
    }
});