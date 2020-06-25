<template>
  <div>
    <div class="header-container">
      <div style="width:50px">
        <Slide>
          <div class="btn-div">
            <a id="home" href="#">
              <button>Join MeRus</button>
            </a>
          </div>
          <div>
            <a id="home" href="#">Sign in</a>
          </div>
          <a class="browse-div" id="home" href="#">
            <div>Browse Talents</div>
            <div class="right-arrow">
              <span class="fit-icon fit-collapsible-chevron" style="width: 14px; height: 14px;">
                <svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"
                  />
                </svg>
              </span>
            </div>
          </a>

          <h3
            style="color:black;margin-top:30px;margin-bottom:20px;width:80%;height:80%;"
            class="other"
          >Other</h3>
          <div>
            <a href="#">
              <div class="other-content">Home</div>
            </a>
          </div>
          <div>
            <a href="#">
              <div class="other-content">About</div>
            </a>
          </div>
        </Slide>
      </div>
      <div style="margin-top:auto;margin-bottom:auto;">MeRus</div>
      <div class="search">
        <i class="fa fa-search"></i>
        <form action method="POST">
          <input type="text" class="searchTerm" placeholder="Find Talents" />
        </form>
      </div>
      <div class="header-right">
        <h3>I Can Perform</h3>
        <h3>Sign In</h3>
        <button class="joinus-btn">Join Us</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide // Register your component
  }
};
</script>
<style>

.bm-burger-bars {
  background-color: #0000009c;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 400; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #ffffff !important; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}
input:focus {
  outline: none;
}
</style>
<style scoped>
.fa-search {
  margin: 0px 10px;
}
input:focus {
  outline: none;
}
.search {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  max-width: 300px;
}
.header-right {
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.header-right h3:hover {
  transition: 0.1s ease all;
  color: #56baed;
  cursor: pointer;
}
.header-right h3{
  font-size: 1.7vw ;
}
.header-container {
    margin-left: auto;
    margin-right: auto;
  width: 70%;
  
  display: grid;
  grid-template-columns: 50px 1fr 3fr 3fr;
}
.other-content {
  color: #00000080;
}
.other {
  border-bottom: 1px rgba(0, 0, 0, 0.521) solid;
}
.browse-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* Button */
.joinus-btn {
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
  margin: 0px 10px;
}
.btn-div {
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
}
</style>
