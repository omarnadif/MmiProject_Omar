<template>
  <!-- Si permission est true, montre le menu avec l'image et le label  -->
  <div v-if="permission" class="menuitem flex items-center cursor-pointer">
    <img :src="img" class="h-9 w-9 mr-1" />
    <span class="text-lg font-bold" @click="methodLink()">{{ label }}</span>
  </div>

  <!-- Si permission est false, montre le menu avec l'image en gris -->
  <div v-else class="menuitemdisabled flex items-center opacity-30">
    <img :src="img" class="h-9 w-9 mr-1 grayscale" />
    <span class="text-lg font-bold">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    img: String,  
    label: String,  
    permission: Boolean,  
    link: String,  
  },
  methods: {
    methodLink() {
      // Popup avec le nom de la page
      alert(`J'ouvre la page: ${this.link}`);
    },
  },
};
</script>

<style src="../IconWithLabelMenuItem/IconWithLabelMenuItem_style.css"></style>
