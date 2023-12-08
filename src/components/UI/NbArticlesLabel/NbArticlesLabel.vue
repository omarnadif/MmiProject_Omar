<template>
   <!-- Si permission est true, montre le labal -->
  <div v-if="permission" class="text text-lg font-bold" >Articles: {{ articles }}</div>
   <!-- Si permission est false, le label est désactivé -->
  <div v-else class="textdisabled text-lg">Articles: {{ articles }}</div>
</template>

<script>
export default {
  props: {
    permission: Boolean,
    articles: Number, //Reçoit les éléments de type numérique
  },
};
</script>

<style src="../NbArticlesLabel/NbArticlesLabel_style.css"></style>