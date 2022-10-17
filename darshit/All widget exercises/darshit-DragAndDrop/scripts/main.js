
define("darshit-DragAndDrop/scripts/main", ["DS/vue/vue", 'DS/DataDragAndDrop/DataDragAndDrop'], 
function (Vue,DataDragAndDrop) {
  var myWidget = {
    myObject:"",
    onLoad: function () {
      myWidget.myObject = new Vue({
        el: "#app",
        data: {
          widgetItems: []
        },
      });

      var dropdata = document.querySelector("#container");
      myWidget.onDropObject(dropdata);

      var dragdata = document.querySelector("#dragContainer");
      myWidget.onDragObject(dragdata);
    },
    onDragObject: function (theDragElt) {
      DataDragAndDrop.draggable(theDragElt,{
        data: '{"username": "darshitb", "fname": "Darshit", "lname": "Bhatt", "age": 24,"gender":"Male","empid": "E01"}'
      });
    },
    onDropObject: function (theDropElt) {
      DataDragAndDrop.droppable(theDropElt, {
        drop: function (data) {
          var x = JSON.parse(data)
          myWidget.myObject.widgetItems =x;
        }
      });
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
