
define("darshit-DragAndDrop/scripts/main", ["DS/vue/vue", 'DS/DataDragAndDrop/DataDragAndDrop'], 
function (Vue,DataDragAndDrop) {
  var myWidget = {
    myObject:"",
    onLoad: function () {
      myWidget.myObject = new Vue({
        el: "#app",
        data: {
          employees: [],
          data: [{
            "username": "darshitb",
            "fname": "Darshit",
            "lname": "Bhatt",
            "age": 24,
            "gender":"Male",
            "empid": "E01"
          },
          {
            "username": "dhanshrib",
           "fname": "Dhanshri",
            "lname": "Bhad",
            "age": 24,
            "gender":"Female",
            "empid": "E02"
          },
          {
            "username": "abhayt",
            "fname": "Abhay",
            "lname": "Thorat",
            "age": 23,
            "gender":"Male",
            "empid": "E03"
          },
          {
            "username": "omesha",
            "fname": "Omesh",
            "lname": "Attal",
            "age": 25,
            "gender":"Male",
            "empid": "E04"
          },
          {
            "username": "dibyakb",
            "fname": "Dibyak",
            "lname": "Biswas",
            "age": 39,
            "gender":"Male",
            "empid": "E05"
          }]
        },
      });

      var dropdata = document.querySelector("#container");
      myWidget.onDropObject(dropdata);

      var dragdata = document.querySelector("#dragContainer");
      myWidget.onDragObject(dragdata);
    },
    onDragObject: function (theDragElt) {
      DataDragAndDrop.draggable(theDragElt,{
        data:`${JSON.stringify(myWidget.myObject.data)}`
      });
    },
    onDropObject: function (theDropElt) {
      DataDragAndDrop.droppable(theDropElt, {
        drop: function (data) {
          debugger
          var x = JSON.parse(data)
          myWidget.myObject.employees =x;
        }
      });
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
