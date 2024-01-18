<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required />
      <br />
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const userInfo = {
        username: this.username,
        password: this.password,
      };
      // Save user info to JSON (You may use a more secure method in a real application)
      localStorage.setItem("user", JSON.stringify(userInfo));

      // Redirect to user page
      this.$router.push({ name: "user" });
    },
  },
};
</script>
