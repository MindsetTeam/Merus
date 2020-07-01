
<template>
<div>
    <h1>Popular Talents</h1>
  <swiper style="height:450px;width:1200px;" class="swiper" :options="swiperOption">
    <swiper-slide v-for="(user,i) in users" :key="i" class="swiper-slide">
      <router-link class="router-link" :to="{name:'main'}">
       <img
          style="height:250px;"
          :src="user.coverBackground"
          alt
        />
        <div class="corousel-profile">
          <img
            style="width:40px;height:40px;"
            :src="user.imageUrl"
            alt
          />
          <div>
            <p style="font-weight:700;">{{user.username}}</p>
            <p>{{user.skill[0].toUpperCase()}}</p>
            

          </div>
        </div>
        <div class="profile-des">
          <p>{{user.description}}</p>
          <div>
            <i style="color:gold;" class="fas fa-star"></i>
            <p>4.8</p>
            <p>{{user.reviewCount}}</p>
          </div>
        </div>
        <div class="profile-price">
          <i class="fas fa-heart"></i>
          <p>Starting At: ${{user.price}}</p>
        </div>
      </router-link>
    </swiper-slide>
    


    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import axios from "axios"
export default {
  name: "swiper-example-multiple-slides-per-biew",
  title: "Multiple slides per view",
  components: {
    Swiper,
    SwiperSlide
  },
  methods:{
    async getAllUsers(){
      const users = await axios("http://localhost:5000/api/v1/users?limit=6")
      console.log(users.data.data);
      this.users=users.data.data;
      
    },
  },
 data() {
      return {
        users:[],
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    created(){
      this.getAllUsers();
    }
};
</script>

<style  scoped>
.swiper-button-prev{
    color:#56baed;
left: 4px;
top: 45%;
background: white;
border-radius: 50%;
padding: 30px;
box-shadow: 0 2px 5px 0 rgba(0,0,0,.15);
    border: 0;
}
.swiper-button-next{
 color:#56baed;
right: 4px;
top: 45%;
background: white;
border-radius: 50%;
padding: 30px;
box-shadow: 0 2px 5px 0 rgba(0,0,0,.15);
    border: 0;
    
    
}
h1{
    font-size: 40px;
    font-weight: 700;
}
.profile-price{
    font-size: 1.5rem;
    height: 60px;
    border-top: 1px solid rgba(0, 0, 0, 0.404);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.profile-des {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
}
.corousel-profile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.corousel-profile img {
  margin: 0px 10px;
  width: 15px;
  height: 15px;
  border: 2px solid #56baed;
  border-radius: 50%;
}
.router-link img {
  width: 500px;
}
.swiper-slide {
  border: 1px solid rgba(0, 0, 0, 0.404);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  transition: 0.5s ease all;
}
.swiper-slide:hover{
  opacity: 0.7;
  

}
</style>