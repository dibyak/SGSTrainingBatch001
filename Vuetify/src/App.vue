<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#6A76AB"
      dark
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>INFORMATION</v-app-bar-title>

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

      <template v-slot:extension>
        <!-- <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>/
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs> -->
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
  export default {
    data: () => ({ 
      drawer: null, 
      items: [
          // { title: 'Todo', icon: 'mdi-format-list-checks' , to:"/" },
          { title: 'AbouView ', icon: 'mdi-help-box' , to:"/AboutView"},
          { title: 'HelloWorld', icon: 'mdi-help-box' , to:"/HelloWorld"},
          { title: 'search', icon: 'mdi-help-box' , to:"/search"},
          { title: 'column', icon: 'mdi-help-box' , to:"/column"},
          // { title: 'ColumnFilter', icon: 'mdi-help-box' , to:"/ColumnFilter"}
        ]
    }),
   
      }
</script>