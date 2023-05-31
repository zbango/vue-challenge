<template>
  <div class="card-container">
    <div class="card input-form">
      <div class="card-body">
        <div class="form-group">
          <label for="customer-type">Tipo de cliente:</label>
          <div class="radio-group" id="customer-type">
            <input type="radio" id="regular" value="regular" v-model="hotelStore.customerType" />
            <label for="regular">Regular</label>
            <input type="radio" id="rewards" value="rewards" v-model="hotelStore.customerType" />
            <label for="rewards">Rewards</label>
          </div>
        </div>

        <div class="form-group">
          <label class="tooltip" for="dates" id="date-section">
            Fechas:
            <i class="fas fa-question-circle"></i>
            <span class="tooltip-text">Ingrese las fechas en las que desea reservar</span>
          </label>
          <h4 v-if="!!hotelStore.error" class="error-message">
            <i class="fas fa-times"></i>
            {{ hotelStore.error }}
          </h4>
          <div v-for="(date, index) in hotelStore.dates" :key="index" class="date">
            <input
              type="date"
              :value="date"
              @input="hotelStore.updateDate($event.target.value, index)"
              placeholder="Ingrese una fecha"
              class="input-date"
            />
            <button
              v-if="hotelStore.dates.length > 1 && index !== 0"
              @click="hotelStore.removeDate(index)"
              class="remove-date-btn"
              aria-label="Eliminar fecha"
            >
              <i class="fas fa-trash-alt" alt="Icono de Eliminar"></i>
            </button>
          </div>
          <button
            @click="hotelStore.addDate"
            class="add-date-btn"
            aria-label="Agregar fecha"
            id="add-btn"
          >
            Agregar fecha
          </button>
        </div>
        <div class="form-group">
          <button
            id="search-btn"
            @click="hotelStore.calculateCheapestHotel()"
            class="calculate-btn"
            aria-label="Buscar"
          >
            Buscar
          </button>
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
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  padding: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.form-group {
  margin-bottom: 15px;
}

.radio-group {
  display: flex;
  gap: 10px;
}

label {
  font-weight: bold;
}

input[type='radio'] {
  margin-right: 5px;
}

button {
  padding: 8px 15px;
  border: none;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 36px;
}

button:hover {
  background-color: #0056b3;
}

.date {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.input-date {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
  font-size: 16px;
  outline: none;
}

.remove-date-btn {
  margin-left: 10px;
  padding: 4px 10px;
  background-color: #dc3545;
}

.remove-date-btn:hover {
  background-color: #c82333;
}

.add-date-btn {
  margin-top: 10px;
  padding: 4px 10px;
  background-color: #28a745;
  width: 100%;
}

.add-date-btn:hover {
  background-color: #218838;
}

.calculate-btn {
  padding: 8px 15px;
  background-color: #003b95;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.calculate-btn:hover {
  background-color: #0f4492;
}

.tooltip {
  display: flex;
  align-items: center;
  position: relative;
  cursor: help;
}

.tooltip i {
  margin-left: 5px;
}

.tooltip-text {
  visibility: hidden;
  width: 400px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.error-message {
  color: red;
  display: flex;
  align-items: center;
}

.error-message i {
  margin-right: 5px;
}
</style>
