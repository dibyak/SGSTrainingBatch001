<template>
  <div id="app">
    <h2 id="head">GridView</h2>

    <div class="btnn">
      <v-btn outlined color="indigo" v-on:click="marie">Marigold</v-btn>
      <v-btn class="ma-2" outlined color="indigo" v-on:click="rosef">Rose</v-btn>
      <v-btn class="ma-2" outlined color="indigo" v-on:click="sunf"
        >Sunflower</v-btn
      >
      <v-btn class="ma-2" outlined color="indigo" v-on:click="lotusf"
        >Lotus</v-btn
      >
    </div>
    <v-container class="container">
      <img :src="marigold" class="center" id="m" />
      <img :src="rose" class="center" id="r" />
      <img :src="sunflower" class="center" id="s" />
      <img :src="lotus" class="center" id="l" />
    </v-container>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      marigold: null,
      rose: null,
      sunflower: null,
      lotus: null
    };
  },
  mounted(){
    var iconUrl = widget.getUrl();
    iconUrl = iconUrl.substring(0, iconUrl.lastIndexOf("/"));
    this.marigold = iconUrl +"/images/marigold.jpg";
    this.rose = iconUrl+"/images/rose.jpg";
    this.sunflower = iconUrl +"/images/sunflower.jpg";
    this.lotus = iconUrl + "/images/lotus.jpg";
  },
  methods: {
    marie: function () {
      document.getElementsByClassName("center")[0].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "800px";
      document.getElementsByClassName("center")[0].style.height = "800px";
    },
    rosef: function () {
      document.getElementsByClassName("center")[1].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "400px";
      document.getElementsByClassName("center")[0].style.height = "800px";
      document.getElementsByClassName("center")[1].style.width = "400px";
      document.getElementsByClassName("center")[1].style.height = "800px";
    },
    sunf: function () {
      document.getElementsByClassName("center")[2].style.display = "block";
      document.getElementsByClassName("center")[0].style.width = "400px";
      document.getElementsByClassName("center")[0].style.height = "400px";
      document.getElementsByClassName("center")[1].style.width = "400px";
      document.getElementsByClassName("center")[1].style.height = "400px";
      document.getElementsByClassName("center")[2].style.width = "800px";
      document.getElementsByClassName("center")[2].style.height = "400px";
    },
    lotusf: function () {
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
#m,
#l,
#r,
#s {
  display: none;
  /* margin-bottom: 2px; */
}
.btnn {
  position: unset;
  /* top:50%; */
  background-color: rgb(105, 210, 218);
  color: rgb(224, 234, 240);
}

#head {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: larger;
}

.container {
  width: 800px;
  height: 800px;
  display: grid;
  grid-template-rows: 400px 400px;
  grid-template-columns: 400px 400px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

h1,
h2 {
  font-weight: normal;
}
</style>
