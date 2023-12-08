<template>
    <!-- Utilisation du composant IconWithLabelMenuItem-->
    <IconWithLabelMenuItem :img="img" label="Page 1" :permission="permission" link="Page 1" />
</template>
  
  <script>
  import IconWithLabelMenuItem from '../IconWithLabelMenuItem/IconWithLabelMenuItem.vue';
  import iconimg from "@/assets/images/icons/icon_policy.png";
  
  export default {
    data() {
      return {
        // Définition de l'image à utiliser
        img: iconimg,
      };
    },
    components: {
      // Déclaration du composant IconWithLabelMenuItem pour utilisation
      IconWithLabelMenuItem,
    },
    props: {
      permission: Boolean,
    },
  };
  </script>