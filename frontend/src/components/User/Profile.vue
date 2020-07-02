<template>
  <div class="container">
    <UserInfo v-bind:userInfo="user"></UserInfo>
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
import UserInfo from "./UserInfo/UserInfo";
export default {
  components: {
    UserInfo
  },
  data() {
    return {
      user: null
    };
  },
  methods: {
    async getUserInfo() {
      let user = await axios(
        "http://localhost:5000/api/v1/users?search=Elwin Kerluke"
      );
      console.log(user.data.data[0]);
      this.user = user.data.data[0];
    }
  },
  created() {
    this.getUserInfo();
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>