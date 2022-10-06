<template>
  <h1>LoginPage</h1>
  <div class="form-container">
    <form
      @submit.prevent="login(username, password), routerHomeConfirm()"
      class="login-form"
    >
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
    routerHomeConfirm() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: #737373 0px 0px 5px;
  font-size: 1.4rem;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  margin: 0 auto;
  background-color: #dfdfdf;
}

form.sign-up-form {
  display: flex;
  flex-direction: column;
}

.form-container input {
  margin-bottom: 10px;
}

.form-container button {
  margin-top: 10px;
}

.form-container button:disabled {
  background-color: grey;
}

.form-container button:hover {
  background-color: #a7a7a7;
}
</style>
