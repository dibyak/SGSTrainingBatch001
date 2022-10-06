<template>
  <div id="app">
    <!-- <v-app > -->
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
      <img class="center" id="rose" src="./assets/rose.png" />
      <img class="center" id="mari" src="./assets/mari.png" />
      <img class="center" id="lotus" src="./assets/lotus.png" />
      <img class="center" id="sunflower" src="./assets/sunflower.png" />
    </div>

    <!-- </v-app> -->
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      // items: [
      //   {
      //     id: 1,
      //     src: require("./assets/img1.png")
      //   },
      //   {
      //     id: 2,
      //     src: require("./assets/img2.png")
      //   },
      //   {
      //     id: 3,
      //     src: require("./assets/img3.png")
      //   },
      //   {
      //     id: 4,
      //     src: require("./assets/img4.png")
      //   }
      // ],
    };
  },
  methods: {
    showRose: function () {
      document.getElementsByClassName("center")[0].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "800px";
      document.getElementsByClassName("center")[0].style.height = "800px";
    },
    showMarigold: function () {
      document.getElementsByClassName("center")[1].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "400px";
      document.getElementsByClassName("center")[0].style.height = "800px";
      document.getElementsByClassName("center")[1].style.width = "400px";
      document.getElementsByClassName("center")[1].style.height = "800px";
    },
    showLotus: function () {
      document.getElementsByClassName("center")[2].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "400px";
      document.getElementsByClassName("center")[0].style.height = "400px";
      document.getElementsByClassName("center")[1].style.width = "400px";
      document.getElementsByClassName("center")[1].style.height = "400px";
      document.getElementsByClassName("center")[2].style.width = "800px";
      document.getElementsByClassName("center")[2].style.height = "400px";
    },
    showSunflower: function () {
      document.getElementsByClassName("center")[3].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "400px";
      document.getElementsByClassName("center")[0].style.height = "400px";
      document.getElementsByClassName("center")[1].style.width = "400px";
      document.getElementsByClassName("center")[1].style.height = "400px";
      document.getElementsByClassName("center")[2].style.width = "400px";
      document.getElementsByClassName("center")[2].style.height = "400px";
      document.getElementsByClassName("center")[3].style.width = "400px";
      document.getElementsByClassName("center")[3].style.height = "400px";
    },
  },
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
/* .A{
  text-align: center;
  color: darkolivegreen;
  width: 25%;
}
* {
    padding: 10px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    margin: 2px;
} */


.container img {
  width: 100%;
}
</style>
