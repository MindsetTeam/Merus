
<template>
<div>
    <h1>Popular Talents</h1>
  <swiper style="height:450px;width:1200px;" class="swiper" :options="swiperOption">
    <swiper-slide class="swiper-slide">
      <router-link class="router-link" :to="{name:'main'}">
       <img
          style="height:250px;"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Shure_mikrofon_55S.jpg"
          alt
        />
        <div class="corousel-profile">
          <img
            style="width:40px;height:40px;"
            src="https://scontent.fsyd3-1.fna.fbcdn.net/v/t1.0-9/105562021_3129106260485044_7564906823146291360_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=OyN9ij_tNagAX8Z98R_&_nc_ht=scontent.fsyd3-1.fna&oh=edbe1a1abfa46f8895d4d304348bb685&oe=5F17E6BF"
            alt
          />
          <div>
            <p>Socheat Chhun</p>
            <p>Singer</p>
          </div>
        </div>
        <div class="profile-des">
          <p>I will Sing about 4 to 5 songs according to your needs</p>
          <div>
            <i style="color:gold;" class="fas fa-star"></i>
            <p>4.8</p>
            <p>(1.2k+)</p>
          </div>
        </div>
        <div class="profile-price">
          <i class="fas fa-heart"></i>
          <p>Starting At: $30</p>
        </div>
      </router-link>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <router-link class="router-link" :to="{name:'main'}">
       <img
          style="height:250px;"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Shure_mikrofon_55S.jpg"
          alt
        />
        <div class="corousel-profile">
          <img
            style="width:40px;height:40px;"
            src="https://scontent.fsyd3-1.fna.fbcdn.net/v/t1.0-9/105562021_3129106260485044_7564906823146291360_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=OyN9ij_tNagAX8Z98R_&_nc_ht=scontent.fsyd3-1.fna&oh=edbe1a1abfa46f8895d4d304348bb685&oe=5F17E6BF"
            alt
          />
          <div>
            <p>Socheat Chhun</p>
            <p>Singer</p>
          </div>
        </div>
        <div class="profile-des">
          <p>I will Sing about 4 to 5 songs according to your needs</p>
          <div>
            <i style="color:gold;" class="fas fa-star"></i>
            <p>4.8</p>
            <p>(1.2k+)</p>
          </div>
        </div>
        <div class="profile-price">
          <i class="fas fa-heart"></i>
          <p>Starting At: $30</p>
        </div>
      </router-link>
    </swiper-slide>
  <swiper-slide class="swiper-slide">
      <router-link class="router-link" :to="{name:'main'}">
       <img
          style="height:250px;"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Shure_mikrofon_55S.jpg"
          alt
        />
        <div class="corousel-profile">
          <img
            style="width:40px;height:40px;"
            src="https://scontent.fsyd3-1.fna.fbcdn.net/v/t1.0-9/105562021_3129106260485044_7564906823146291360_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=OyN9ij_tNagAX8Z98R_&_nc_ht=scontent.fsyd3-1.fna&oh=edbe1a1abfa46f8895d4d304348bb685&oe=5F17E6BF"
            alt
          />
          <div>
            <p>Socheat Chhun</p>
            <p>Singer</p>
          </div>
        </div>
        <div class="profile-des">
          <p>I will Sing about 4 to 5 songs according to your needs</p>
          <div>
            <i style="color:gold;" class="fas fa-star"></i>
            <p>4.8</p>
            <p>(1.2k+)</p>
          </div>
        </div>
        <div class="profile-price">
          <i class="fas fa-heart"></i>
          <p>Starting At: $30</p>
        </div>
      </router-link>
      
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <router-link class="router-link" :to="{name:'main'}">
       <img
          style="height:250px;"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Shure_mikrofon_55S.jpg"
          alt
        />
        <div class="corousel-profile">
          <img
            style="width:40px;height:40px;"
            src="https://scontent.fsyd3-1.fna.fbcdn.net/v/t1.0-9/105562021_3129106260485044_7564906823146291360_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=OyN9ij_tNagAX8Z98R_&_nc_ht=scontent.fsyd3-1.fna&oh=edbe1a1abfa46f8895d4d304348bb685&oe=5F17E6BF"
            alt
          />
          <div>
            <p>Socheat Chhun</p>
            <p>Singer</p>
          </div>
        </div>
        <div class="profile-des">
          <p>I will Sing about 4 to 5 songs according to your needs</p>
          <div>
            <i style="color:gold;" class="fas fa-star"></i>
            <p>4.8</p>
            <p>(1.2k+)</p>
          </div>
        </div>
        <div class="profile-price">
          <i class="fas fa-heart"></i>
          <p>Starting At: $30</p>
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
      console.log(users);
      
    },
  },
 data() {
      return {
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