<template>
  <div class="hotel-card" :class="{ 'cheaper-hotel': hotel.isCheaper }">
    <h2>{{ hotel.name }}</h2>
    <div class="star-rating">
      <span v-for="star in 5" :key="star" :class="star <= hotel.rating ? 'filled' : 'empty'"
        >&#9733;</span
      >
    </div>
    <p>Weekday Rate (Regular): ${{ hotel.weekdayRate.regular }}</p>
    <p>Weekday Rate (Rewards): ${{ hotel.weekdayRate.rewards }}</p>
    <p>Weekend Rate (Regular): ${{ hotel.weekendRate.regular }}</p>
    <p>Weekend Rate (Rewards): ${{ hotel.weekendRate.rewards }}</p>
  </div>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.hotel-card {
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .hotel-card {
    width: 100%;
    margin: 20px;
  }
}

.star-rating {
  display: flex;
  align-items: center;
}

.star-rating span {
  font-size: 28px;
  color: gold;
}

.star-rating span.empty {
  color: lightgray;
}

.cheaper-hotel {
  border: 2px solid #0048ff;
  animation: pulse-border 0.5s infinite alternate;
}

@keyframes pulse-border {
  from {
    border-color: #0048ff;
  }
  to {
    border-color: transparent;
  }
}
</style>
