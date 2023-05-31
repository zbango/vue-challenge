<script setup lang="ts">
import { ref } from 'vue'
import InputForm from '../components/InputForm.vue'
import HotelGrid from '../components/HotelGrid.vue'

const tour = ref(null)

const steps = [
  {
    target: '#customer-type',
    content: 'Selecciona el tipo de cliente',
    placement: 'right-end'
  },
  {
    target: '#date-section',
    content: 'Selecciona o ingresa una fecha',
    placement: 'left-start'
  },
  {
    target: '#add-btn',
    content: 'Puedes agregar hasta 10 fechas',
    placement: 'right-end'
  },
  {
    target: '#search-btn',
    content:
      'La búsqueda de reserva se realizará solamente si las fechas que ingresaste son válidas. La opción más barata empezará a parpadear.',
    placement: 'right-end'
  }
]

const handleClick = () => {
  localStorage.removeItem('vjt-tour')
  tour.value.startTour()
}
</script>

<template>
  <main>
    <div class="help-container">
      <h1>Bienvenid@, si necesitas ayuda te recomendamos activar nuestra guía</h1>
    </div>
    <div class="help-container">
      <button @click="handleClick" class="help-button">Activar guía</button>
    </div>

    <InputForm />
    <HotelGrid />
    <VTour ref="tour" :steps="steps" />
  </main>
</template>

<style scoped>
.help-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
}

@media (max-width: 600px) {
  .help-container {
    display: none;
  }
}

.help-button {
  margin-left: 10px;
  padding: 8px 15px;
  background-color: #003b95;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.help-button:hover {
  background-color: #0f4492;
}
</style>
