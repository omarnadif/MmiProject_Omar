<template>
  <!-- Si permission est true, montre l'input numérique actif -->
  <input v-if="permission" type="number" :value="value" @input="onInput" class="form-input border border-gray-300 rounded-lg shadow-sm p-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-150 ease-in-out mt-2"/>
  <!-- Si permission est false, montre l'input numérique désactivé -->
  <input v-else type="number" :value="value" disabled class="form-input border border-gray-300 rounded-lg shadow-sm p-1 bg-gray-100 cursor-not-allowed mt-2"/>
</template>

<script>
export default {
  props: {
    permission: Boolean, 
    value: Number, // Définit la valeur de l'input 
  },
  methods: {
    onInput(event) {
      // Émet l'événement 'input' avec la valeur numérique de l'input et trasformation de objet en nombre
      this.$emit("input", Number(event.target.value));
    },
  },
};
</script>
