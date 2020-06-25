<template>
  <div class="search-container">
    <div>
      <div class="search-sm-container">
        <h1 style="font-size:30px;font-weight:700;">Find Talents That Fit Your Event</h1>
        <div class="search-bar-package">
          <form>
            <input
              type="search"
              autocomplete="off"
              placeholder="Try &quot;Pop Singer&quot;"
              value
            />
            <button class="submit-button btn-lrg-standard">Search</button>
          </form>
        </div>
      </div>
      <div class="popular-bar">
        <h4>Popular:</h4>
        <router-link class="router-link" :to="{name:'main'}">
          <p>Singer</p>
        </router-link>
        <router-link class="router-link" :to="{name:'main'}">
          <p>Dancer</p>
        </router-link>
        <router-link class="router-link" :to="{name:'main'}">
          <p>Magician</p>
        </router-link>
          <router-link class="router-link" :to="{name:'main'}">
          <p>Influencer</p>
        </router-link>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search-sm-container {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search-container {
  height: 600px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 4fr 5fr;
  grid-template-rows: 4fr 2fr;
}
.fa-search {
  margin: 0px 10px;
}
.search {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  max-width: 300px;
}
.popular-bar {
  display: flex;
  justify-content: space-evenly;
}
.search-bar-package {
  margin-top: 30px;
  position: relative;
}
.search-bar-package form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  flex-direction: row;
  height: 34px;
}
.search-bar-package form:after {
  font: 16px FontAwesome;
  content: "\f002";
  color: #999;
  position: absolute;
  z-index: 3;
  top: 20px;
  left: 8px;
}
.logged-out-homepage .hero .header .search-bar-package form:after {
  display: block;
  top: 16px;
  left: 16px;
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
}
form input {
  border: 1px black solid;
  width: 400px;
  height: 58px;
  padding-left: 44px;
  margin-bottom: 0;
  border-right: 1px solid #dadbdd;
}
.popular-bar .router-link p{
border: 1px solid black;
border-radius: 3px;
padding: 0px 8px;
}
</style>