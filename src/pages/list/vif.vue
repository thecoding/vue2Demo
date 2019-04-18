<template>
  <div style="text-align: center">
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <button @click="loginTypeClick">Toggle login type</button>

    <div>
      <template v-if="loginType2 === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username">
      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
      </template>
      <button @click="loginTypeClick2">Toggle login type</button>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      loginType: "username",
      loginType2: "username"
    };
  },
  methods: {
    loginTypeClick: function() {
      this.loginType = this.loginType === "username" ? "email" : "username";
    },
    loginTypeClick2: function() {
      this.loginType2 = this.loginType2 === "username" ? "email" : "username";
    }
  }
};
</script>
