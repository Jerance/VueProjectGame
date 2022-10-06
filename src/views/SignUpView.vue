<template>
  <h1>SignUpPage</h1>
  <div class="form-container">
    <form @submit.prevent="createPostRequest()" class="sign-up-form">
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
      <div class="re-password-form" v-if="re_password != password">
        <label class="username-label" for="password">Confirm Password</label
        ><input
          type="password"
          name="re-password"
          id="re-password"
          v-model="re_password"
          required
        />
        <button :disabled="isActive">Confirm</button>
      </div>
      <div class="password-form" v-else>
        <label class="username-label" for="password">Confirm Password</label
        ><input
          type="password"
          name="re-password"
          id="re-password"
          v-model="re_password"
          required
        />
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
      re_password: "",
      isActive: true,
    };
  },
  methods: {
    createPostRequest() {
      axios
        .post("http://apigame.co/auth/signup", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          alert("Account successfully created");
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
