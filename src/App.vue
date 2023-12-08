<template>
  <div id="app" >
    <AppHeader /> <!-- Header pour toute l'application-->
    <router-view /> <!-- Point d'insertion pour les composants chargés par le routeur Vue -->
    <AppFooter /> <!-- Footer pour toute l'application -->
  </div>
</template>

<script>
import AppHeader from "./components/Common/AppHeader.vue";
import AppFooter from "./components/Common/AppFooter.vue"; 

export default {
  name: "App", 
  components: {
    AppHeader, 
    AppFooter, 
  },
};
</script>

<style > 
#app{
  min-height: 100vh;
  background-color: #f7f1f3;
  background-image: linear-gradient(0deg, #f7f1f3 0%, #ffffff 33%, #f7f1f3 66%, #ffffff 100%);
}
</style>