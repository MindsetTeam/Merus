<template>
<div class="biggest-container">
  <div class="container">
    <div class="left-container">
      <h1>Find Any Talents Of Your Choice</h1>
      <ul class="list-container">
        <li>
          <i class="far fa-check-circle"></i>
          <span>The Right Choice</span>
         <p> User can Easily search for Talent</p>
        </li>
        <li>
          <i class="far fa-check-circle"></i>
          <span>Free To Use</span>
         <p> Anyone can use this platform to search and put themselve to the test</p>
        </li>
        <li>
          <i class="far fa-check-circle"></i>
          <span>We take no profit</span>
         <p> Every Pricing on the Platform is offered by the Performers Themselves</p>
        </li>
        <li>
          <i class="far fa-check-circle"></i>
          <span>What's not to like.</span>
         <p> It's free anyway, try to use and take advantages of it.</p>
        </li>
      </ul>
    </div>
    <div>
       <img
          style="height:400px;"
          src="https://www.1tv.am/images/video/6/27123/4.jpeg"
          alt
        />
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.biggest-container{
  display: flex;
  justify-content: center;
}
.far{
  color: #56baed;
  margin-right: 5px;
}
ul li{
  margin: 15px 0px;
}
.left-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.left-container h1{
  font-size: 30px;
  font-weight: 700;
}
.left-container span{
  font-size: 20px;
  font-weight: 700;
}
.list-container{
  
  
  
}
.container{
  justify-content: center;
  grid-gap: 30px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>