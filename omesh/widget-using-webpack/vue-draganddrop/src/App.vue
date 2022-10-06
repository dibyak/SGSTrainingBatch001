<template>
  <div id="main">
    <h2>Drag and Drop using webpack</h2>
    <img :src="imgUrl"/>
    {{dropObject}}
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      dropObject: null,
      imgUrl : null
    };
  },
  mounted() {
    var _this = this;
    var iconUrl = widget.getUrl();
    iconUrl = iconUrl.substring(0, iconUrl.lastIndexOf("/"));
    _this.imgUrl = iconUrl + "/images/drop.png";
    var maindiv = document.querySelector("#main");
    requirejs(
      ["DS/DataDragAndDrop/DataDragAndDrop"],
      function(drag) {
        drag.droppable(maindiv, {
          drop(data) {
            var dropedObject = JSON.parse(data);
            _this.dropObject = dropedObject.data.items;
          }
        });
      }
    );
  }
  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
