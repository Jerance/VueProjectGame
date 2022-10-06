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
        <button type="submit">Confirm</button>
      </div>
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
        .then((response) => {
          console.log(response);
          console.log("test");
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

form.sign-up-form {
  display: flex;
  flex-direction: column;
}
</style>
