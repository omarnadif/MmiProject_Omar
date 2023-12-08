<template>
  <!-- Crèation bouton Clear  -->
  <button @click="clearContent" class="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-500 transition ease-in duration-150">Clear</button>
</template>

<script>
export default {
  name: "ClearButtonComponent", 
  methods: {
    clearContent() {
      // Émet un événement 'clear'
      this.$emit("clear");
    },
  },
};
</script>
