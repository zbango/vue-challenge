<template>
  <div class="card-container">
    <div class="card input-form">
      <div class="card-body">
        <div class="form-group">
          <label for="customer-type">Tipo de cliente:</label>
          <div class="radio-group">
            <input type="radio" id="regular" value="regular" v-model="hotelStore.customerType" />
            <label for="regular">Regular</label>
            <input type="radio" id="rewards" value="rewards" v-model="hotelStore.customerType" />
            <label for="rewards">Rewards</label>
          </div>
        </div>

        <div class="form-group">
          <label for="dates">Fechas:</label>
          <div v-for="(date, index) in hotelStore.dates" :key="index" class="date-input">
            <input
              type="date"
              :value="date"
              @input="hotelStore.updateDate($event.target.value, index)"
              placeholder="Ingrese una fecha"
            />
            <button @click="hotelStore.removeDate(index)" class="remove-date-btn">Eliminar</button>
          </div>
          <button @click="hotelStore.addDate" class="add-date-btn">Agregar Fecha</button>
        </div>

        <div class="form-group">
          <button @click="hotelStore.calculateCheapestHotel()">Buscar opción más económica</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHotelStore } from '../stores/hotels'

const hotelStore = useHotelStore()
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.card-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.card-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 10px;
}

.radio-group {
  display: flex;
  gap: 10px;
}

button {
  padding: 5px 10px;
}

.date-input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.remove-date-btn {
  margin-left: 10px;
}

.add-date-btn {
  margin-top: 10px;
}
</style>
