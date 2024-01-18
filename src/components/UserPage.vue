<template>
  <div>
    <h1>Welcome, {{ username }}!</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    // Retrieve user info from localStorage
    const userInfo = JSON.parse(localStorage.getItem("user"));
    this.username = userInfo ? userInfo.username : "";

    // Redirect to login if no user info found
    if (!userInfo) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    logout() {
      // Remove user info from localStorage
      localStorage.removeItem("user");

      // Redirect to login page
      this.$router.push({ name: "login" });
    },
  },
};
</script>
