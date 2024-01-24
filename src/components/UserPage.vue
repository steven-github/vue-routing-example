<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto"
  >
    <h1
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Welcome, {{ username }}!
    </h1>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      @click="logout"
    >
      Logout
    </button>

    <pre v-html="JSON.stringify(userInfo, null, 2)"></pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  setup() {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    return {
      userInfo,
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
