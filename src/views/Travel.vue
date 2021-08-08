<template>
  <div class="travel">
    <h1>Travel Journey</h1>
    <div class="list">
      <travel-list></travel-list>
    </div>
  </div>
  
</template>

<script>
import TravelList from '../components/TravelList.vue'

export default {
  name: 'Travel',
  components: {
    TravelList
  }
}
</script>