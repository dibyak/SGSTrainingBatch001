<template app>
  <v-app>
    <v-container id="main">
      <v-navigation-drawer v-model="drawer" app>
        <v-row>
          <v-app-bar absolute color="light blue" dark>
            <v-btn color="black" text @click.stop="drawer = !drawer">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>EMP_INFO</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-app-bar>
          <v-spacer></v-spacer>
          <v-row id="C">
           
            <!-- <v-spacer></v-spacer> -->
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">Employee</div>
                  <v-list-item-title class="text-h5 mb-1">
                    EMPLOYEE DATA
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Greyhound divisely hello coldly
                    fonwderfully</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-btn outlined rounded text>ADD EMPLOYEE </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-row>
      </v-navigation-drawer>
    </v-container>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>mdi-chevron-left-box</v-icon></v-app-bar-nav-icon
      >
      <v-app-bar-title>EMPLOYEES DATA TABLE</v-app-bar-title>
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
            EMPLOYEE <v-icon>mdi-file-table-box-multiple</v-icon>
          </v-tab>
          <v-tab href="#tab-2">
            NEW EMPLOYEES
            <v-icon>mdi-table-plus</v-icon>
          </v-tab>
          <v-container id="b">
            <v-row>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>

              <v-btn icon id="D">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
              <v-btn color="light green" dark @click="drawer1 = !drawer1">
                ADD MORE
              </v-btn>
            </v-row>
          </v-container>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            :value="'tab-1'"
            :transition="false"
            :reverse-transition="false"
          >
            <v-card flat>
              <v-card-text>
                <v-container id="table1">
                  <v-data-table
                    dense
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                    item-key="name"
                    class="elevation-1"
                    hide-default-footer
                  ></v-data-table>
                </v-container>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item
            :value="'tab-2'"
            :transition="false"
            :reverse-transition="false"
          >
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
                    :search="search"
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
      <v-btn color="black" text @click="drawer1 = !drawer1">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-tabs v-model="tab1" background-color="light blue">
        <v-tab href="#tab-3">
          <v-icon color="black">mdi-account-box</v-icon>
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
      <v-row class="E">
        <v-btn color="blue " @click="save"> SAVE </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" @click="deleteData"> DELETE </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="green" @click="update"> UPDATE </v-btn>
      </v-row>
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
        { text: "USERNAME", value: "USERNAME" },
        { text: "FIRSTNAME", value: "FIRSTNAME" },
        { text: "LASTNAME", value: "LASTNAME" },
        { text: "AGE", value: "AGE" },
        { text: "EMPID", value: "EMPID", sortable: false },
      ],
      topics: [
        { text: "GENDER", value: "GENDER" },
        { text: "USERNAME", value: "USERNAME" },
        { text: "FIRSTNAME", value: "FIRSTNAME" },
        { text: "LASTNAME", value: "LASTNAME" },
        { text: "AGE", value: "AGE" },
        { text: "EMPID", value: "EMPID", sortable: false },
      ],
      desserts: [
        {
          EMPID: "E001",
          USERNAME: "omeshA",
          FIRSTNAME: "omesh",
          LASTNAME: "attal",
          AGE: 25,
          GENDER: "MALE",
        },
        {
          EMPID: "E002",
          USERNAME: "dhanashriB",
          FIRSTNAME: "dhanashri",
          LASTNAME: "bhad",
          AGE: 24,
          GENDER: "FEMALE",
        },
        {
          EMPID: "E003",
          USERNAME: "darshitB",
          FIRSTNAME: "darshit",
          LASTNAME: "bhatt",
          AGE: 24,
          GENDER: "MALE",
        },
        {
          EMPID: "E004",
          USERNAME: "abhayT",
          FIRSTNAME: "abhay",
          LASTNAME: "thorat",
          AGE: 23,
          GENDER: "MALE",
        },
        {
          EMPID: "E005",
          USERNAME: "dibyakB",
          FIRSTNAME: "DB",
          LASTNAME: "sir",
          AGE: 40,
          GENDER: "MALE",
        },
      ],

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

    save() {
      var _this = this;
      requirejs(["DS/WAFData/WAFData"], function (auth) {
        auth.authenticatedRequest(
          `/3dspace/TestSqlServices/services/postdata?EMPID=${_this.editedItem.EMPID}&USERNAME=${_this.editedItem.USERNAME}&FIRSTNAME=${_this.editedItem.FIRSTNAME}&LASTNAME=${_this.editedItem.LASTNAME}&AGE=${_this.editedItem.AGE}&GENDER=${_this.editedItem.GENDER}`,

          {
            method: "GET",
            accept: "application/json",
            onComplete: function () {
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
              console.log("COMPLETE");
              console.log("COMPLETE " + _this.selected[0].EMPID);
              _this.employees.splice(
                _this.employees.findIndex(
                  (e) => e.EMPID === _this.selected[0].EMPID
                ),
                1
              );
              console.log("COMPLETE " + _this.employees);
            },

            onFailure: function (error) {
              console.log(error);
            },
          }
        );
      });
    },
    update() {
      var _this = this;
      requirejs(["DS/WAFData/WAFData"], function (auth) {
        auth.authenticatedRequest(
          `/3dspace/updateService/services/updatedata?USERNAME=${_this.editedItem.USERNAME}&FIRSTNAME=${_this.editedItem.FIRSTNAME}&LASTNAME=${_this.editedItem.LASTNAME}&AGE=${_this.editedItem.AGE}&GENDER=${_this.editedItem.GENDER}&EMPID=${_this.editedItem.EMPID}`,
          {
            method: "GET",
            accept: "application/json",
            onComplete: function () {
             // var data = JSON.parse(dataResp);
             // _this.employees;
             _this.employees.map(e => {
                if(e.EMPID===_this.editedItem.EMPID)
                {
                    e.USERNAME=_this.editedItem.USERNAME;
                    e.FIRSTNAME=_this.editedItem.FIRSTNAME;
                    e.LASTNAME=_this.editedItem.LASTNAME;
                    e.AGE=_this.editedItem.AGE;
                    e.GENDER=_this.editedItem.GENDER;
                }
             })
              _this.close()
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
#A {
  text-align: center;
  margin-left: 15px;
}
#b {
  width: 50%;
  padding: 15px;
  margin-right: 5%;
  margin-top: 0%;
}
#C {
  margin: 0%;
  margin-top: 10%;
}

.E {
  margin-left: 0%;
  
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

.v-input input {
  max-height: 32px;
  width: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: 0px;
}
</style>
