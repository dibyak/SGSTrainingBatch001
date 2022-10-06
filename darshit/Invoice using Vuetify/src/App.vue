<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
    </v-navigation-drawer>
  <v-app-bar
      absolute
      color="teal lighten-3"
      dark
      hide-on-scroll
      prominent
      scroll-target="#scrolling-techniques-4"
    >
 <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import Dynamic from "./components/dynamic.vue";
import Invoice from "./components/Invoice.vue";
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Invoice", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  components: { Dynamic, Invoice},
};
</script>
