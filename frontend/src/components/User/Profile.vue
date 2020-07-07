<template>
<div class="biggest-container">
    <div :style="backgroundImg">
    </div>
  <div class="container">
    <UserInfo class="UserInfo" v-bind:userInfo="user"></UserInfo>
    <div></div>
  </div>
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
      user: {
        coverBackground:"https://picsum.photos/640/480"
      }
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
  computed:{
    backgroundImg(){
      return `background-color: #efeff0;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 250px;
    position: relative;
    background-image: url(${this.user.coverBackground});
}
`
    }
  },
  created() {
    this.getUserInfo();
  }
};
</script>

<style scoped>
.biggest-container{
  position: relative;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.UserInfo{

  position: absolute;
  top: 70%;
  left: 10%;
}
</style>