<template>
  <h1>Login Page</h1>

  <form class="max-w-sm mx-auto text-left" @submit.prevent="login">
    <div class="mb-5">
      <label
        for="username"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Username:</label
      >
      <input
        type="text"
        id="username"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="name@flowbite.com"
        v-model="username"
        required
      />
    </div>
    <div class="mb-5">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Password</label
      >
      <input
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        v-model="password"
        required
      />
    </div>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </form>
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
