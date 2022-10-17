define("dhanshri-drag&drop/scripts/main", ["DS/vue/vue", 'DS/DataDragAndDrop/DataDragAndDrop'], 
function (Vue,DataDragAndDrop) {
  var myWidget = {
    myObject:"",
    onLoad: function () {
      myWidget.myObject = new Vue({
        el: "#app",
        data: {
          emp: [],
          wItems: [  {"username": "dhanshrib","fname": "Dhanshri","lname":"Bhad", "age": 24,"gender":"Female","empid": "E01"},
          {"username": "darshit","fname": "Darshit", "lname": "Bhatt", "age": 24,"gender":"Male","empid": "E02"} , 
          {"username": "abhayt","fname": "Abhay", "lname": "Thorat", "age": 23,"gender":"Male","empid": "E03"},
          {"username": "omesha","fname": "Omesh", "lname": "Attal", "age": 26,"gender":"Male","empid": "E04"}, 
          {"username": "dibyakb","fname": "Dibyak", "lname": "Biswas", "age": 39,"gender":"Male","empid": "E05"}]
        },
      });

      var dropdata = document.querySelector("#container");
      myWidget.onDropObject(dropdata);

      var dragdata = document.querySelector("#dragContainer");
      myWidget.onDragObject(dragdata);

    },
    onDragObject: function (theDragElt) {
      DataDragAndDrop.draggable(theDragElt,{
        data: `${JSON.stringify(myWidget.myObject.wItems)}`
        });
    },
    onDropObject: function (theDropElt) {
      DataDragAndDrop.droppable(theDropElt, {
        drop: function (data) {
          var d = JSON.parse(data);
          myWidget.myObject.emp = d;
        }
      });
    },
      
  };
  widget.myWidget = myWidget;
  return myWidget;
});
