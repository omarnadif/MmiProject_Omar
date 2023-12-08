<template>
    <!-- Crèation bouton Load  -->
    <button @click="loadConfig" class="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-500 transition ease-in duration-150">Load</button>
  </template>
  
  <script>
  export default {
    methods: {
      loadConfig() {
        // Émet un événement 'loadconfig'
        this.$emit('loadConfig');
      }
    }
  };
  </script>
  