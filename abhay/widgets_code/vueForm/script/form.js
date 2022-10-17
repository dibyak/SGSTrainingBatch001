define(["DS/Vue/Vue"], function (Vue) {
    var myWidget = {
      onLoad: function () {
        new Vue({
            el: '#app',
            data(){
              return {
                enterValue: '',
                tasks: [],
                invalidTask: false,
                message: " ----------- tasks -----------",
                Header1: 'Learn',
                Header2: 'Vue',
                styleObject: {
                  color: 'red'
                },
                styleObject2: {
                  backgroundColor: 'yellow'
                },
                isClassActive: true,
              }
            },
            computed:{
              Header() {
                return this.Header1 + ' ' + this.Header2;
              }
            },
            methods: {
              addTask() {
                this.invalidTask = false;
                if( this.enterValue.trim() != "" && this.enterValue.trim() != undefined){
                  this.tasks.push(this.enterValue);
                  this.enterValue = "";
                }
                else{
                  this.invalidTask = true;
                  this.enterValue = "";
                }
              }
            },
            beforeCreate() {
              console.log('beforeCreate()');
            },
            created() {
              console.log('created()');
            },
            beforeMount() {
              console.log('beforeMount()');
            },
            mounted() {
              console.log('mounted()');
            },
            beforeUpdate() {
              console.log('beforeUpdate()');
            },
            updated() {
              console.log('updated()');
            },
            beforeUnmount() {
              console.log('beforeUnmount()');
            },
            unmounted() {
              console.log('unmounted()');
            }
        });
      },
    };
    widget.myWidget = myWidget;
    return myWidget;
  });