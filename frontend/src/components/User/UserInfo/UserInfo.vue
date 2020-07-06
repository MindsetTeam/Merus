<template>
<div>
  <div class="upper-container-profile">
    <div>
      <img :src="userInfo.imageUrl" alt />
     <router-link class="router-link" :to="{name:'main'}">
         {{userInfo.username}}</router-link>
      <p>{{userInfo.description}}</p>
      <p>{{userInfo.averageRate}}</p>
      <p>{{userInfo.reviewCount}}</p>
      <button>Request To Perform (${{userInfo.price}})</button>
    </div>
    <div class="below-profile">
      <div class="below-profile-container">
        <div>
          <i class="fas fa-map-marker-alt"></i>
          <span>From</span>
        </div>
        <div><p>{{userInfo.location}}</p></div>
      </div>
      <div class="below-profile-container">
        <div>
          <i class="fas fa-user"></i>
          <span>Since</span>
        </div>
        <div><p>{{userInfo.createdAt}}</p></div>
      </div>
    </div>
  </div>
  <div class="lower-container-profile">

  </div>
  </div>
</template>

<script>
export default {
  props: ["userInfo"]
};
</script>

<style scoped>
.upper-container-profile {
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.404);
  display: flex;
  justify-content: center;
  flex-direction: column;
}
img {
    border-radius: 50%;
    border: 3px solid #56baed;
  margin-right: auto;
  margin-left: auto;
}
button {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1rem;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;

  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  margin-left: auto;
  margin-right: auto;
  height: 58px;
  height: 58px;
  margin-top: 20px;
}
.below-profile-container {
  display: flex;
  justify-content: space-between;
}
.fas {
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.397);
}
.router-link{
    font-weight: 700;
    font-size: 25px;
}
.router-link:hover{
    text-decoration: underline;
    cursor: pointer;
}
p{
    font-weight: 700;
}
</style>