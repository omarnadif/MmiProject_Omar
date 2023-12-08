<template>
  <div class="flex flex-col items-center justify-center p-4">
    <div class="flex flex-row items-start space-x-4">
      <!-- Composant Textarea pour la saisie de configuration JSON -->
      <textarea v-model="jsonConfig" placeholder="Entrez la configuration JSON ici" class="h-128 w-128 p-2 rounded border border-gray-300"></textarea>

      <!-- Div result -->
      <div class="border border-black rounded h-128 w-128 p-2">
        <div v-for="item in menuItems" :key="item.component">
          <component :is="getComponent(item.component)" :permission="item.permission" :value="articles" @input="updateArticles"/>
        </div>

        <!-- OtherButtonComponent -->
        <OtherButtonComponent @toggleHidden="toggleHidden" />

        <!-- Menu hidden -->
        <div v-if="showHidden">
          <div v-for="hiddenItem in hiddenItems" :key="hiddenItem.component">
            <component :is="getComponent(hiddenItem.component)" :permission="hiddenItem.permission" :link="hiddenItem.link" :articles="articles"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Buttons -->
  <div class="flex flex-row items-center justify-center space-x-2">
    <LoadButtonComponent @loadConfig="loadConfig" />
    <ClearButtonComponent @clear="clearConfig" />
  </div>
</template>

<script>
import HomeMenuItem from "@/components/UI/HomeMenuItem/HomeMenuItem.vue";
import Page1MenuItem from "@/components/UI/Page1MenuItem/Page1MenuItem.vue";
import NbArticlesField from "@/components/UI/NbArticlesField/NbArticlesField.vue";
import Page4MenuItem from "@/components/UI/Page4MenuItem/Page4MenuItem.vue";
import Page5MenuItem from "@/components/UI/Page5MenuItem/Page5MenuItem.vue";
import NbArticlesLabel from "@/components/UI/NbArticlesLabel/NbArticlesLabel.vue";
import LoadButtonComponent from "@/components/Items/LoadButtonComponent.vue";
import ClearButtonComponent from "@/components/Items/ClearButtonComponent.vue";
import OtherButtonComponent from "@/components/Items/OtherButtonComponent.vue";

export default {
  components: {
    //Apell des composants utilisés
    HomeMenuItem,
    ClearButtonComponent,
    Page1MenuItem,
    NbArticlesField,
    Page4MenuItem,
    Page5MenuItem,
    NbArticlesLabel,
    LoadButtonComponent,
    OtherButtonComponent,
  },
  data() {
    return {
      // Déclaration des variables
      jsonConfig: "",
      menuItems: [],
      hiddenItems: [],
      showHidden: false,
      articles: 0,
    };
  },
  methods: {
    // Méthode pour mettre à jour le nombre d'articles
    updateArticles(event) {
      if (event && typeof event === "number") {
        this.articles = event;
      } else if (
        event &&
        event.target &&
        typeof event.target.value === "string"
      ) {
        this.articles = Number(event.target.value);
      }
    },
    // Méthode pour charger la configuration
    loadConfig() {
        try {
          const config = JSON.parse(this.jsonConfig);
          this.menuItems = config.menuItems || [];
          this.hiddenItems = config.hiddenItems || [];
        } catch (e) {
          console.error("Erreur d'analyse JSON:", e);
          alert(
            "Erreur de format JSON. S'il vous plaît, vérifiez et essayez à nouveau."
          );
        }
      },
    // Méthode pour effacer la configuration
    clearConfig() {
      this.jsonConfig = "";
      this.menuItems = [];
      this.hiddenItems = [];
      this.articles = 0;
    },
    // Méthode pour afficher les éléments cachés
    toggleHidden() {
      this.showHidden = !this.showHidden;
    },
    // Méthode pour récupérer les composants
    getComponent(name) {
      const components = {
        homeMenuItem: HomeMenuItem,
        page1MenuItem: Page1MenuItem,
        nbArticlesField: NbArticlesField,
        page4MenuItem: Page4MenuItem,
        page5MenuItem: Page5MenuItem,
        nbArticlesLabel: NbArticlesLabel,
      };
      return components[name] || null;
    },
  },
};
</script>
