<template>
  <h1>LoginPage</h1>
  <div class="form-container">
    <form @submit.prevent="sendPostRequest()" class="login-form">
      <div class="username-form">
        <label for="username">UserName</label
        ><input type="text" name="username" id="username" v-model="username" />
      </div>
      <div class="password-form">
        <label class="username-label" for="password">Password</label
        ><input type="text" name="password" id="password" v-model="password" />
      </div>
      <button type="submit">Confirm</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    sendPostRequest() {
      axios
        .post("http://apigame.co/auth/login", {
          username: this.username,
          password: this.password,
        })
        //
        .then((response) => {
          console.log(response);
          console.log(response.data);
        });
    },
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
