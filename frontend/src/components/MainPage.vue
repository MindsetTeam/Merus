<template>
<div class="biggest-container">
  <div class="container">
      <Search></Search>
      <MultiSlide></MultiSlide>
      <ExploreForUsers></ExploreForUsers>
      <ExplainUsers></ExplainUsers>
      <MultiSlidesCategories></MultiSlidesCategories>
      <GetStarted></GetStarted>
      <Footer></Footer>
  </div>
  </div>
</template>

<script>
import Search from "./MainSearch/Search"
import MultiSlide from "./MainSearch/MultiSlide"
import ExplainUsers from "./InfoForUser/ExplainUsers"
import ExploreForUsers from "./InfoForUser/ExploreForUsers"
import MultiSlidesCategories from "./MainSearch/MultiSlidesCategories"
import GetStarted from "./InfoForUser/GetStarted"
import Footer from "./Header/Footer"
export default {
components:{
    Search,
    MultiSlide,
    ExplainUsers,
    ExploreForUsers,
    MultiSlidesCategories,
    GetStarted,
    Footer
}
}
</script>

<style scoped>
.container{
  width: 80%;
   margin-left: auto;
  margin-right: auto;
}
.biggest-container{
  margin-left: auto;
  margin-right: auto;
}

</style>