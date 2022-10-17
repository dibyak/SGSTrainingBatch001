define("DragAndDrop-demo/scripts/main", ["DS/vue/vue", 'DS/DataDragAndDrop/DataDragAndDrop'], 
function (Vue,DataDragAndDrop) {
  var myWidget = {
    myObject:"",
    onLoad: function () {
      myWidget.myObject = new Vue({
        el: "#app",
        data: {
          emp: [],
          wItems: []
        },
      });

      var dropdata = document.querySelector("#container");
      myWidget.onDropObject(dropdata);

      var dragdata = document.querySelector("#dragContainer");
      myWidget.onDragObject(dragdata);

    },
    onDragObject: function (theDragElt) {
      DataDragAndDrop.draggable(theDragElt,{
        data:'{"username": "dhanshrib","fname": "Dhanshri", "lname": "Bhad", "age": 24,"gender":"Female","empid": "E01" }'
      });
    },
    onDropObject: function (theDropElt) {
      DataDragAndDrop.droppable(theDropElt, {
        drop: function (data) {
          var dropedObject = JSON.parse(data);
          myWidget.myObject.wItems = dropedObject;
        }
      });
    },
      
  };
  widget.myWidget = myWidget;
  return myWidget;
});
