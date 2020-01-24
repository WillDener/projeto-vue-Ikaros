<template>
  <div id="app" class="fullscreen" :style="{'background-image':'url(https://i.picsum.photos/id/901/2000/1200.jpg)'}">
    <!--:style="{'background-image':'url(https://i.picsum.photos/id/29/2000/1100.jpg)'}" para colocar imagem no background -->
    <div id="nav">

      <router-link to="/">Home </router-link>|
      <router-link to="/about">About </router-link>|
      <router-link to="/teste">Teste </router-link>|
      <router-link to="/form">Form</router-link>
      
    </div>
    <router-view />      
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafafa;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fcfcfc;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fullscreen {
  position: fixed; 
  top: 0;
  left: 0;
  min-width: 100%; 
  min-height: 100%;
  z-index: -1;
}
</style>
