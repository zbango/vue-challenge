<template>
  <div class="hotel-grid" id="hotel-grid">
    <HotelCard v-for="hotel in hotelStore.hotels" :key="hotel.id" :hotel="hotel" />
  </div>
</template>

<script setup lang="ts">
import { useHotelStore } from '../stores/hotels'
import HotelCard from './HotelCard.vue'

const hotelStore = useHotelStore()
</script>

<style scoped>
.hotel-grid {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hotel-grid {
    justify-content: flex-start;
  }
}
</style>
