<template>
  <header class="header">
    <div class="left-content">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="48" height="48" />
      <div class="header-text">tipti-vue-challenge</div>
    </div>

    <div class="right-content">
      <router-link to="/" class="link">Inicio</router-link>
      <router-link to="/about" class="link">Acerca</router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #003b95;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-content {
  display: flex;
  align-items: center;
}

.right-content {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 10px;
}

.header-text {
  color: #fff;
  font-size: large;
}

.link {
  color: #fff;
  text-decoration: none;
  margin-left: 12px;
  margin-right: 12px;
  font-size: large;
}

@media (max-width: 600px) {
  .header-text {
    display: none;
  }
}
</style>
