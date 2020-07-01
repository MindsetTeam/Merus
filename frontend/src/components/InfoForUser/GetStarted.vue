<template>
  <div class="container">
    <div class="img-container">
      <img
        alt="A notebook and a cellular phone"
        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/general_assets/logged_out_homepage/assets/signup/1440-cta2x.jpg"
        loading="lazy"
      />
    <div class="info">
      <h1>You can get contacted.</h1>
      <h1>Just upload your skill to youtube.</h1>
      <p>Copy the url of your youtube video to our platform.</p>
      <button>Get Started</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
margin-left: auto;
margin-right: auto;
  position: relative;
  margin-bottom: 30px;
}
.img-container {
  
}
h1{
    font-size: 30px;
    font-weight: 700;
}
.info {
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
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
  margin-top: 20px;
}
</style>