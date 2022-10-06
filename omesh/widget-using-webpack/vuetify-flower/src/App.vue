<template>
  <div id="app">
    <h2 class>App</h2>
    <h3>Flower task to</h3>
    <v-toolbar>
      <v-btn id="btnID" class="btn" v-on:click="showRose">Rose</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="btn" v-on:click="showMarigold">Marigold</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="btn" v-on:click="showLotus">Lotus</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="btn" v-on:click="showSunflower">Sunflower</v-btn>
    </v-toolbar>
    <div class="container">
      <img class="center" id="rose" :src="rose" />
      <img class="center" id="mari" :src="marigold" />
      <img class="center" id="lotus" :src="lotus" />
      <img class="center" id="sunflower" :src="sunflower" />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      rose: '',
      marigold: '',
      lotus: '',
      sunflower: '',
    };
  },
  mounted() {
    var iconUrl = widget.getUrl();
    iconUrl = iconUrl.substring(0, iconUrl.lastIndexOf("/"));
    this.rose = iconUrl + "/images/Rose.png";
    this.marigold = iconUrl + "/images/Marigold.png";
    this.lotus = iconUrl + "/images/Lotus.png";
    this.sunflower = iconUrl + "/images/Sunflower.png";
  },
  methods: {
    showRose: function() {
      document.getElementsByClassName("center")[0].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "800px";
      document.getElementsByClassName("center")[0].style.height = "800px";
    },
    showMarigold: function() {
      document.getElementsByClassName("center")[1].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "400px";
      document.getElementsByClassName("center")[0].style.height = "800px";
      document.getElementsByClassName("center")[1].style.width = "400px";
      document.getElementsByClassName("center")[1].style.height = "800px";
    },
    showLotus: function() {
      document.getElementsByClassName("center")[2].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "400px";
      document.getElementsByClassName("center")[0].style.height = "400px";
      document.getElementsByClassName("center")[1].style.width = "400px";
      document.getElementsByClassName("center")[1].style.height = "400px";
      document.getElementsByClassName("center")[2].style.width = "800px";
      document.getElementsByClassName("center")[2].style.height = "400px";
    },
    showSunflower: function() {
      document.getElementsByClassName("center")[3].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "400px";
      document.getElementsByClassName("center")[0].style.height = "400px";
      document.getElementsByClassName("center")[1].style.width = "400px";
      document.getElementsByClassName("center")[1].style.height = "400px";
      document.getElementsByClassName("center")[2].style.width = "400px";
      document.getElementsByClassName("center")[2].style.height = "400px";
      document.getElementsByClassName("center")[3].style.width = "400px";
      document.getElementsByClassName("center")[3].style.height = "400px";
    }
  }
};
</script>

<style>
.container {
  display: grid;
  /* 
 height: auto; */

  grid-template-columns: 400px 400px;

  grid-template-rows: 400px 400px;
}
#rose,
#lotus,
#mari,
#sunflower {
  display: none;
}
.container img {
  width: 100%;
}
</style>
