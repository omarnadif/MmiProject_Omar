<template>
    <!-- Utilisation du composant IconWithLabelMenuItem-->
    <IconWithLabelMenuItem :img="img" label="Page 4" :permission="permission" link="Page 4"/>
  </template>
  
  <script>
  import IconWithLabelMenuItem from '../IconWithLabelMenuItem/IconWithLabelMenuItem.vue';
  import iconimg from "@/assets/images/icons/icon_contact.png";
  
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