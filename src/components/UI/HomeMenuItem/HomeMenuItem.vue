<template>
  <!-- Utilisation du composant IconWithLabelMenuItem-->
  <IconWithLabelMenuItem :img="img" label="Home" :permission="permission" link="Home"/>
</template>

<script>
  import IconWithLabelMenuItem from "../IconWithLabelMenuItem/IconWithLabelMenuItem.vue";
  import iconimg from "@/assets/images/icons/icon_home.png";

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
