define('flowers-publish1/scripts/main',["DS/vue/vue","DS/i3DXCompassServices/i3DXCompassPubSub"], function (Vue, i3DXCompassPubSub) {
  var myWidget = {
    onLoad: function () {
      var n = new Vue({
        el: "#app",
        data: {
          message:"Hello Darshit!",
          rose : null,
          marigold : null,
          lotus : null,
          sunflower : null
        },
        mounted() {
          var iconUrl = widget.getUrl();
          iconUrl = iconUrl.substring(0, iconUrl.lastIndexOf("/"));
          this.rose = iconUrl + "/images/Rose.jpg";
          this.marigold = iconUrl + "/images/Marigold.jpg";
          this.lotus = iconUrl + "/images/Lotus.jpg";
          this.sunflower = iconUrl + "/images/Sunflower.jpg";
        },
        methods: {
          msg: function(){
            i3DXCompassPubSub.publish('messagePublish', this.message );
          },
          showRose: function() {
          i3DXCompassPubSub.publish('rosePublish', this.rose );
          document.getElementsByClassName("center")[0].style.display = "block";
          document.getElementsByClassName("center")[0].style.width= "800px";
          document.getElementsByClassName("center")[0].style.height= "800px";
      },
      showMarigold: function() {
          i3DXCompassPubSub.publish('marigoldPublish', this.marigold );
          document.getElementsByClassName("center")[1].style.display = "block";
          document.getElementsByClassName("center")[0].style.width= "400px";
          document.getElementsByClassName("center")[0].style.height= "800px";
          document.getElementsByClassName("center")[1].style.width= "400px";
          document.getElementsByClassName("center")[1].style.height= "800px";
      },
      showLotus: function() {
        i3DXCompassPubSub.publish('lotusPublish', this.lotus );
        document.getElementsByClassName("center")[2].style.display = "block";
              document.getElementsByClassName("center")[0].style.width= "400px";
              document.getElementsByClassName("center")[0].style.height= "400px";
              document.getElementsByClassName("center")[1].style.width= "400px";
              document.getElementsByClassName("center")[1].style.height= "400px";
              document.getElementsByClassName("center")[2].style.width= "800px";
              document.getElementsByClassName("center")[2].style.height= "400px";
      },
      showSunflower: function() {
        i3DXCompassPubSub.publish('sunflowerPublish', this.sunflower );
        document.getElementsByClassName("center")[3].style.display = "block";
              document.getElementsByClassName("center")[0].style.width= "400px";
              document.getElementsByClassName("center")[0].style.height= "400px";
              document.getElementsByClassName("center")[1].style.width= "400px";
              document.getElementsByClassName("center")[1].style.height= "400px";
              document.getElementsByClassName("center")[2].style.width= "400px";
              document.getElementsByClassName("center")[2].style.height= "400px";
              document.getElementsByClassName("center")[3].style.width= "400px";
              document.getElementsByClassName("center")[3].style.height= "400px";
      }
        }
      });

    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
