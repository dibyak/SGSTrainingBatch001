define("omeshdraganddrop/scripts/main", ["DS/vue/vue", 'DS/DataDragAndDrop/DataDragAndDrop'],
  function (Vue, DataDragAndDrop) {
    var myWidget = {
      vueObject: "",
      onLoad: function () {
        myWidget.vueObject = new Vue({
          el: "#app",
          data: {
            name1: "Omesh",
            name2: "Dibyak",
            name3: "Abhay",
            imgUrl: '',
            dropData: [],
            omesh: {
              name: "omesha",
              firstName: "Omesh",
              lastName: "Attal",
              gender: "Male",
              age: "25",
              id: 1661344315522
            },
            dibyak: {
              name: "dibyak",
              firstName: "Dibyak",
              lastName: "Biswas",
              gender: "Male",
              age: "39",
              id: 1661344315523
            },
            abhay: {
              name: "abhayt",
              firstName: "Abhay",
              lastName: "Thorat",
              gender: "Male",
              age: "23",
              id: 1661344315524
            },
          },
        });

        var iconUrl = widget.getUrl();
        iconUrl = iconUrl.substring(0, iconUrl.lastIndexOf("/"));
        myWidget.vueObject.imgUrl = iconUrl + "/images/drop.png";
        var dropElement = document.querySelector("#dropElement");
        var dragElement1 = document.querySelector("#dragElement1");
        var dragElement2 = document.querySelector("#dragElement2");
        var dragElement3 = document.querySelector("#dragElement3");

        DataDragAndDrop.draggable(dragElement1, { data : `${JSON.stringify(myWidget.vueObject.omesh)}`});
        DataDragAndDrop.draggable(dragElement2, { data : `${JSON.stringify(myWidget.vueObject.dibyak)}`});
        DataDragAndDrop.draggable(dragElement3, { data : `${JSON.stringify(myWidget.vueObject.abhay)}`});

        DataDragAndDrop.droppable(dropElement, {
          drop: function (data) {
            var dropedObject = JSON.parse(data);
            const found = myWidget.vueObject.dropData.some(el => el.id === dropedObject.id);
            if(!found){
              myWidget.vueObject.dropData.push(dropedObject)
            }
          }
        });
      },
    };
    //widget.myWidget = myWidget;
    return myWidget;
  });
