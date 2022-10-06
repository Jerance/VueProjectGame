<template>
  <h1>LoginPage</h1>
  <div class="form-container">
    <form @submit.prevent="login(username, password)" class="login-form">
      <div class="username-form">
        <label for="username">UserName</label
        ><input
          type="text"
          name="username"
          id="username"
          v-model="username"
          required
        />
      </div>
      <div class="password-form">
        <label class="username-label" for="password">Password</label
        ><input
          type="password"
          name="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button type="submit">Confirm</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "../store/myStore.js";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapState(useGameStore, ["authToken"]),
  },
  methods: {
    ...mapActions(useGameStore, ["login"]),
  },
};
</script>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form.login-form {
  display: flex;
  flex-direction: column;
}
</style>
