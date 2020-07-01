<template>
  <div>
      <Search></Search>
      <MultiSlide></MultiSlide>
      <ExploreForUsers></ExploreForUsers>
      <ExplainUsers></ExplainUsers>
      <MultiSlidesCategories></MultiSlidesCategories>
      <GetStarted></GetStarted>
  </div>
</template>

<script>
import Search from "./MainSearch/Search"
import MultiSlide from "./MainSearch/MultiSlide"
import ExplainUsers from "./InfoForUser/ExplainUsers"
import ExploreForUsers from "./InfoForUser/ExploreForUsers"
import MultiSlidesCategories from "./MainSearch/MultiSlidesCategories"
import GetStarted from "./InfoForUser/GetStarted"
export default {
components:{
    Search,
    MultiSlide,
    ExplainUsers,
    ExploreForUsers,
    MultiSlidesCategories,
    GetStarted
}
}
</script>

<style>

</style>