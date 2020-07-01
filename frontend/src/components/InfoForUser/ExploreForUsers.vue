<template>
  <div style="display:flex;justify-content:center;margin-top:30px;">
    <div style="width:60%;">
      <h1>Explore Our Vasts Performers</h1>
      <div class="class-container">
        <router-link class="router-link each-item" :to="{name:'main'}">
          <i class="fas fa-microphone"></i>
          <p>Singers</p>
        </router-link>
        <router-link class="router-link each-item" :to="{name:'main'}">
          <i class="fas fa-chess-queen"></i>
          <p>Dancers</p>
        </router-link>
        <router-link class="router-link each-item" :to="{name:'main'}">
          <i class="fas fa-chess-king"></i>
          <p>Magicians</p>
        </router-link>

        <router-link class="router-link each-item" :to="{name:'main'}">
          <i class="fas fa-microphone"></i>
          <p>MC</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-weight: 700;
}
p{
    font-size: 20px;
}


i {
 
  font-size: 50px;
}
.each-item {
  transition: 0.5s ease all;
}
.each-item:hover {
    color: #56baed;
  cursor: pointer;
  transform: scale(1.1);
}
.class-container {
  margin-top: 20px;
  grid-gap: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>