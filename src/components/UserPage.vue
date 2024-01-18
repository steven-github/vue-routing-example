<template>
  <div>
    <h1>Welcome, {{ username }}!</h1>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      @click="logout"
    >
      Logout
    </button>
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
