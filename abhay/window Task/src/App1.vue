<template >
  <v-app id="inspire">
    <v-container id="main">
      <v-navigation-drawer v-model="drawer" app>
        <!--  -->
        <v-btn color="grey" text @click.stop="drawer = !drawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <!-- <template v-slot:prepend >
          <div     background-color="primary">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title >
                  Dropped content
                  <v-icon>mdi-dropbox</v-icon></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </div>
        </template>
        <v-divider></v-divider> -->

        <v-container id="drop1">
          <!-- <v-row>
            <v-col>
              <v-card>
                <v-img :src="imgUrl"> </v-img>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-card>
                <v-list>
                  <v-list-item v-for="(text, i) in filterData" :key="i">
                    <v-list-item-content>
                      <v-list-item-title>{{
                        text.objectType
                      }}</v-list-item-title>
                      <v-list-item-title>{{
                        text.displayName
                      }}</v-list-item-title>
                      <v-list-item-title>{{
                        text.displayType
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row> -->
        </v-container>
      </v-navigation-drawer>
    </v-container>
    <v-app-bar app height="200px">
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>mdi-chevron-left-box</v-icon></v-app-bar-nav-icon
      >
      <v-container id="drop1">
        <!-- <v-row>
          <v-col>
            <v-card>
              <v-img :src="imgUrl"> </v-img>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-card>
              <v-list>
                <v-list-item v-for="(text, i) in filterData" :key="i">
                  <v-list-item-content>
                    <v-list-item-title>{{ text.objectType }}</v-list-item-title>
                    <v-list-item-title>{{
                      text.displayName
                    }}</v-list-item-title>
                    <v-list-item-title>{{
                      text.displayType
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row> -->
      </v-container>
    </v-app-bar>
    <v-main>
      <!--  -->
      <v-card id="t4">
        <v-tabs
          v-model="tab"
          background-color="light blue"
          centered
          dark
          icons-and-text
          
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#tab-1">
            Table_1 <v-icon>mdi-file-table-box-multiple</v-icon>
          </v-tab>
          <v-tab href="#tab-2">
            Table_2
            <v-icon>mdi-table-plus</v-icon>
          </v-tab>
          <v-container id="b">
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <v-btn color="light green" dark @click.stop="drawer1 = !drawer1">
              ADD MORE
            </v-btn>
          </v-container>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item :value="'tab-1'" :transition="false"
          :reverse-transition="false">
            <v-card flat>
              <v-card-text>
                <v-container id="table1">
                  <v-data-table
                    dense
                    :headers="headers"
                    :items="desserts"
                    item-key="name"
                    class="elevation-1"
                    hide-default-footer
                  ></v-data-table>
                </v-container>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-2'" :transition="false"
          :reverse-transition="false">
            <v-card flat>
              <v-card-text>
                <v-container id="table1">
                  <v-data-table
                    dense
                    show-select
                    v-model="selected"
                    single-select="true"
                    :headers="topics"
                    :items="employees"
                    item-key="EMPID"
                    class="elevation-1"
                  >
                  </v-data-table>
                </v-container>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-main>
    <v-navigation-drawer v-model="drawer1" absolute right app>
      <v-btn color="grey" text @click.stop="drawer1 = !drawer1">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-text-field v-model="search" outlined label="Search" class="mx-4">
        <v-icon>mdi-search</v-icon></v-text-field
      >

      <v-tabs v-model="tab1" background-color="light blue">
        <v-tab href="#tab-3">
          <v-icon>mdi-account-box</v-icon>
        </v-tab>
      </v-tabs>
      <v-divider></v-divider>
      <v-tabs-items v-model="tab1">
        <v-tab-item :value="'tab-3'">
          <v-container id="a">
            <v-col>
              <v-text-field
                outlined
                v-model="editedItem.EMPID"
                label="e_id"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="editedItem.USERNAME"
                outlined
                label="USERNAME"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="editedItem.FIRSTNAME"
                outlined
                label="FIRSTNAME"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="editedItem.LASTNAME"
                outlined
                label="LASTNAME"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="editedItem.AGE"
                outlined
                label="AGE"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="editedItem.GENDER"
                outlined
                label="GENDER"
              ></v-text-field>
            </v-col>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" @click="save"> SAVE </v-btn>
      <!-- <v-btn color="grey" text @click="close"> CLEAR </v-btn>
      <v-btn color="orange darken-1" text @click="showData()"> SHOW DATA </v-btn>
      <v-btn color="green darken-1" text @click="update"> UPDATE </v-btn> -->
      <v-btn color="red darken-1" text @click="deleteData"> DELETE </v-btn>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      tab: null,
      imgUrl: null,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      headers: [
        { text: "GENDER", value: "GENDER" },
        { text: "username", value: "username" },
        { text: "Fname", value: "fname" },
        { text: "Lname", value: "lname" },
        { text: "Age", value: "age" },
        { text: "Name", value: "EMPID", sortable: false },
      ],
      topics: [
        { text: "GENDER", value: "GENDER" },
        { text: "USERNAME", value: "USERNAME" },
        { text: "FIRSTNAME", value: "FIRSTNAME" },
        { text: "LASTNAME", value: "LASTNAME" },
        { text: "AGE", value: "AGE" },
        { text: "EMPID", value: "EMPID", sortable: false },
      ],
      data2: [
        { text: "envId", value: "envId" },
        { text: "serviceId", value: "serviceId" },
        { text: "contextId", value: "contextId" },
        { text: "objectId", value: "objectId" },
        { text: "objectType", value: "objectType" },
        { text: "displayName", value: "displayName" },
        { text: "displayType", value: "displayType" },
      ],
      data3: [
        { text: "Ename", value: "Ename" },
        { text: "Fname", value: "Fname" },
        { text: "Lname", value: "Lname" },
        { text: "age", value: "age" },
      ],
      desserts: [
        {
          EMPID: "E001",
          username: "omeshA",
          fname: "omesh",
          lname: "attal",
          age: 25,
          GENDER: "MALE",
        },
        {
          EMPID: "E002",
          username: "dhanashriB",
          fname: "dhanashri",
          lname: "bhad",
          age: 24,
          GENDER: "FEMALE",
        },
        {
          EMPID: "E003",
          username: "darshitB",
          fname: "darshit",
          lname: "bhatt",
          age: 24,
          GENDER: "MALE",
        },
        {
          EMPID: "E004",
          username: "abhayT",
          fname: "abhay",
          lname: "thorat",
          age: 23,
          GENDER: "MALE",
        },
        {
          EMPID: "E005",
          username: "dibyakB",
          fname: "DB",
          lname: "sir",
          age: 40,
          GENDER: "MALE",
        },
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      editedIndex: -1,
      editedItem: {
        EMPID: "",
        GENDER: "",
        USERNAME: "",
        FIRSTNAME: "",
        LASTNAME: "",
        AGE: "",
      },
      defaultItem: {
        EMPID: "",
        GENDER: "",
        USERNAME: "",
        FIRSTNAME: "",
        LASTNAME: "",
        AGE: "",
      },
      dialog: false,
      dialogDelete: false,
      filterData: [],
      data1: [],
      search: "",
      showbutton: true,
      tab1: null,
      employees: [],
      drawer: false,
      drawer1: false,
      text2: "Hey Hiiii bro.....",
      search: "",
      selected: [],
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    showtable() {},
    save() {
      // if (this.editedIndex > -1) {
      //   Object.assign(this.desserts[this.editedIndex], this.editedItem);
      // } else {
      //   this.desserts.push(this.editedItem);
      // }
      // this.close();
      var _this = this;
      requirejs(["DS/WAFData/WAFData"], function (auth) {
        auth.authenticatedRequest(
          `/3dspace/TestSqlServices/services/postdata?EMPID=${_this.editedItem.EMPID}&USERNAME=${_this.editedItem.USERNAME}&FIRSTNAME=${_this.editedItem.FIRSTNAME}&LASTNAME=${_this.editedItem.LASTNAME}&AGE=${_this.editedItem.AGE}&GENDER=${_this.editedItem.GENDER}`,

          {
            method: "GET",
            accept: "application/json",
            onComplete: function () {
              //  var data = JSON.parse(dataResp);
              //   _this.employees.push(data);
              _this.employees.push(_this.editedItem);
              console.log(_this.employees);
              _this.close();
            },
            onFailure: function (error) {
              console.log(error);
            },
          
          }

        );
          
      });
    },
    // showData() {
    //   var _this = this;
    //   requirejs(["DS/WAFData/WAFData"], function (auth) {
    //     auth.authenticatedRequest(
    //       `/3dspace/hsqldbServices/services_emp/getdata_emp`,
    //       {
    //         method: "GET",
    //         accept: "application/json",
    //         onComplete: function (dataResp) {
    //           var data = JSON.parse(dataResp);
    //           _this.employees = data;
    //         },

    //         onFailure: function (error) {
    //           console.log(error);
    //         },
    //       }
    //     );
    //   });
    // },

    update() {
      var _this = this;
      requirejs(["DS/WAFData/WAFData"], function (auth) {
        auth.authenticatedRequest(
          `/3dspace/updateService/services/updatedata?USERNAME=${_this.editedItem.USERNAME}&FIRSTNAME=${_this.editedItem.FIRSTNAME}&LASTNAME=${_this.editedItem.LASTNAME}&AGE=${_this.editedItem.AGE}&GENDER=${_this.editedItem.GENDER}&EMPID=${_this.editedItem.EMPID}`,
          {
            method: "GET",
            accept: "application/json",
            onComplete: function (dataResp) {
              var data = JSON.parse(dataResp);
              _this.employees = data;
            },
            onFailure: function (error) {
              console.log(error);
            },
          }
        );
      });
    },
    deleteData() {
      var _this = this;
      
      console.log(_this.selected[0].EMPID);
      requirejs(["DS/WAFData/WAFData"], function (auth) {
        auth.authenticatedRequest(
          `/3dspace/updateService/services/deletedata?EMPID=${_this.selected[0].EMPID}`,
          {
            method: "GET",
            accept: "application/json",

            onComplete: function () {
              // var data = JSON.parse(dataResp);
              // _this.employees = data;
              console.log("COMPLETE");
              console.log("COMPLETE "+_this.selected[0].EMPID);
              //   _this.employees.filter(e => {
              //  return   e.EMPID !== _this.selected[0].EMPID
                //return e.employees; 
                
                _this.employees.splice(_this.employees.findIndex(e => e.EMPID === _this.selected[0].EMPID),1);
            
            //  })
              console.log("COMPLETE "+_this.employees);
             
           
              // b = _this.employees.filter(e => e.EMPID === _this.selected[0].EMPID);
              // b.forEach(f => _this.employees.splice(_this.employees.findIndex(e => e.EMPID === f.EMPID),1));
             
            },

            onFailure: function (error) {
              console.log(error);
            },
          }
        );
      });
    },
  },
  mounted() {
    var _this = this;
    var maindiv = document.querySelector("#main");
    requirejs(
      ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData"],
      function (drag, auth) {
        drag.droppable(maindiv, {
          drop(data) {
            var dropedObject = JSON.parse(data);
            var iconUrl = widget.getUrl();
            iconUrl = iconUrl.substring(0, iconUrl.lastIndexOf("/"));
            _this.imgUrl = iconUrl + "/images/img1.png";
            _this.filterData = dropedObject.data.items;
            console.log(_this.filterData);
          },
        });
        auth.authenticatedRequest(
          `/3dspace/hsqldbServices/services_emp/getdata_emp`,
          {
            method: "GET",
            accept: "application/json",
            onComplete: function (dataResp) {
              var data = JSON.parse(dataResp);
              _this.employees = data;
            },
            onFailure: function (error) {
              console.log(error);
            },
          }
        );
      }
    );
  },
};
</script>
<style>
#b {
  width: 50%;
  padding: 5px;
  margin-right: -500px;
  margin-left: 1175px;
}
#dropA {
  width: 30%;
  padding: auto;
  margin-left: 0%;
}
#dis1 {
  padding: auto;
  margin: right 200px;
}
#AAA {
/* //  background-color:rgba(rgb(0, 255, 247), rgb(0, 102, 128), rgb(0, 255, 225), alpha) ; */
}
.v-input input {
  max-height: 32px;
  width: auto;
}
</style>
