<template>
  <!-- Crèation bouton Other  -->
  <button @click="toggleHidden" class="w-full mt-2">
    <!-- Icône -->
    <img src="@/assets/images/icons/icon_other.png" class="h-6 w-6" />
  </button>
</template>

<script>
export default {
  methods: {
    toggleHidden() {
      // Émet un événement 'toggleHidden'
      this.$emit('toggleHidden');
    }
  }
};
</script>
