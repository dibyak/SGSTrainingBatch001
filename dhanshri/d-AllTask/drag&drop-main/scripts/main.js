define("drag&drop-main/scripts/main", [
  "DS/vue/vue",
  "DS/DataDragAndDrop/DataDragAndDrop",
], function (Vue, DataDragAndDrop) {
  var myWidget = {
    myObject: "",
    onLoad: function () {
      myWidget.myObject = new Vue({
        el: "#app",
        data: {
          emp: [],
          dhanshri: {
            username: "dhanshrib",
            fname: "Dhanshri",
            lname: "Bhad",
            age: 24,
            gender: "Female",
            empid: "E01",
          },
          darshit: {
            username: "darshitb",
            fname: "Darshit",
            lname: "Bhatt",
            age: 24,
            gender: "Male",
            empid: "E02",
          },
          abhay: {
            username: "abhayt",
            fname: "Abhay",
            lname: "Thorat",
            age: 23,
            gender: "Male",
            empid: "E03",
          },
          omesh: {
            username: "omesha",
            fname: "Omesh",
            lname: "Attal",
            age: 26,
            gender: "Male",
            empid: "E04",
          },
          dibyak: {
            username: "dibyakb",
            fname: "Dibyak",
            lname: "Biswas",
            age: 39,
            gender: "Male",
            empid: "E05",
          },
        },
      });
      
      var dragdata1 = document.querySelector("#dhanshri");
      DataDragAndDrop.draggable(dragdata1, {
        data:`${JSON.stringify(myWidget.myObject.dhanshri)}`,
      });
      var dragdata2 = document.querySelector("#darshit");
      DataDragAndDrop.draggable(dragdata2, {
        data:`${JSON.stringify(myWidget.myObject.darshit)}`,
      });
      var dragdata3 = document.querySelector("#abhay");
      DataDragAndDrop.draggable(dragdata3, {
        data:`${JSON.stringify(myWidget.myObject.abhay)}`,
      });
      var dragdata4 = document.querySelector("#omesh");
      DataDragAndDrop.draggable(dragdata4, {
        data:`${JSON.stringify(myWidget.myObject.omesh)}`,
      });
      var dragdata5 = document.querySelector("#dibyak");
      DataDragAndDrop.draggable(dragdata5, {
        data:`${JSON.stringify(myWidget.myObject.dibyak)}`,
       });
      var dropdata = document.querySelector("#dropcontainer");
      myWidget.onDropObject(dropdata);
    },
    // onDragObject: function (dragdata1,dragdata2,dragdata3,dragdata4,dragdata5) {
    //   debugger
    //   DataDragAndDrop.draggable(dragdata1, {
    //     data:`${JSON.stringify(myWidget.myObject.dhanshri)}`,
    //   });
    //  debugger
    //   DataDragAndDrop.draggable(dragdata2, {
    //     data:`${JSON.stringify(myWidget.myObject.darshit)}`,
    //   });
    // debugger
    //   DataDragAndDrop.draggable(dragdata3, {
    //     data:`${JSON.stringify(myWidget.myObject.abhay)}`,
    //   });
    // debugger
    //   DataDragAndDrop.draggable(dragdata4, {
    //     data:`${JSON.stringify(myWidget.myObject.omesh)}`,
    //   });
    // debugger
    //   DataDragAndDrop.draggable(dragdata5, {
    //    data:`${JSON.stringify(myWidget.myObject.dibyak)}`,
    //   });
    // },
    
    onDropObject: function (theDropElt) {
      DataDragAndDrop.droppable(theDropElt, {
        drop: function (data) {
          debugger
          var d = JSON.parse(data);
          myWidget.myObject.emp.push(d);
        },
      });
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
