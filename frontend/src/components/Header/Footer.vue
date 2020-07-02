<template>
  <div class="biggest-container">
    <div class="container">
      <div class="inner-container">
        <h1>Categories</h1>
        <router-link class="router-link" :to="{name:'main'}">Singers</router-link>
        <router-link class="router-link" :to="{name:'main'}">Dancers</router-link>
        <router-link class="router-link" :to="{name:'main'}">Influencer</router-link>
        <router-link class="router-link" :to="{name:'main'}">Magicians</router-link>
        <router-link class="router-link" :to="{name:'main'}">MC</router-link>
        <router-link class="router-link" :to="{name:'main'}">Traditional Dance</router-link>
      </div>
      <div class="inner-container">
        <h1>About</h1>
        <router-link class="router-link" :to="{name:'main'}">Careers</router-link>
        <router-link class="router-link" :to="{name:'main'}">Press & News</router-link>
        <router-link class="router-link" :to="{name:'main'}">Partnerships</router-link>
        <router-link class="router-link" :to="{name:'main'}">Privacy Policy</router-link>
        <router-link class="router-link" :to="{name:'main'}">Terms of Service</router-link>
      </div>
      <div class="inner-container">
        <h1>Support</h1>
        <router-link class="router-link" :to="{name:'main'}">Help & Support</router-link>
        <router-link class="router-link" :to="{name:'main'}">Trust & Safety</router-link>
        <router-link class="router-link" :to="{name:'main'}">Performers</router-link>
        <router-link class="router-link" :to="{name:'main'}">Clients</router-link>
      </div>
    </div>
    <div class="bottom-footer">
        <h1>MeRus <span class="copyright">© MeRus</span></h1>
        <div>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>

        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fab{
    font-size: 20px;
    margin-right: 30px;
    border-radius: 50%;
    padding: 10px;
    transition: 0.5s ease all;
}
.fab:hover{
    cursor: pointer;
    background-color: #56baed;
    border-radius: 50%;
}
.bottom-footer{
    margin-top: 20px;
    padding-top:20px ;
    border-top: 1px solid rgba(0, 0, 0, 0.096);
    display: flex;
    justify-content: space-between;
}
.biggest-container{
    border-top: 1px solid rgba(0, 0, 0, 0.096);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
}
.container{
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
}
h1{
    font-size: 30px;
    font-weight: 700;
}
.inner-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.router-link{
    font-size: 18px;
    margin: 14px 0px;
    color: rgba(0, 0, 0, 0.651);
}
.router-link:hover{
    cursor: pointer;
    text-decoration: underline;
}
</style>