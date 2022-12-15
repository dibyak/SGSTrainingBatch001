<template app>
  <v-app>
    <v-navigation-drawer v-model="drawer" app id="main">
      <v-list-item>
        <v-list-item-title>Dropped Container</v-list-item-title>
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>
      <v-text-field
        v-model="search"
        outlined
        color="blue"
        single-line
        placeholder="Search"
        clearable
        @click:clear="clear()"
      >
        <template v-slot:append>
          <v-btn icon type="button" id="searchbtn" @click="searchTable">
            <v-icon> mdi-magnify </v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <v-container class="dropcontainer">
        <v-div v-on:click="show" id="content">
          <v-row>
            <v-col>
              <v-img class="img" :src="box"> </v-img>
            </v-col>
            <v-list>
              <v-list-item v-for="(text, i) in workData" :key="i">
                <v-list-item-content>
                  <v-list-item-title>{{ text.displayName }}</v-list-item-title>
                  <v-list-item-title>{{ text.displayType }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-row>
        </v-div>
      </v-container>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-container class="container">
        <v-div v-if="show" id="title-con">
          <p>show data</p>
        </v-div>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-tabs
        v-model="model"
        background-color="deep-purple accent-4"
        centered
        dark
        icons-and-text
      >
        <v-tab :href="`#tab-11`">
          Work Info
          <v-icon>mdi-briefcase-account</v-icon>
        </v-tab>

        <v-tab :href="`#tab-22`">
          Personal Info
          <v-icon>mdi-home-account</v-icon>
        </v-tab>
        <v-spacer></v-spacer>
        <v-container justify="space-around">
          <v-btn icon @click.stop="drawers = !drawers" permanent dark
            ><v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn icon @click="deleteData"> <v-icon>mdi-delete</v-icon> </v-btn>
          <v-btn icon @click="stardata" dark><v-icon>mdi-star</v-icon> </v-btn>
        </v-container>
      </v-tabs>
      <v-tabs-items v-model="model">
        <v-tab-item :value="`tab-11`">
          <v-card>
            <v-card-text>
              <v-container>
                <v-data-table
                  v-model="selected"
                  :headers="workData2"
                  :items="workData"
                  hide-default-footer
                  item-key="envId"
                  show-select
                >
                </v-data-table> </v-container
            ></v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="`tab-22`">
          <v-card>
            <v-card-text>
              <v-container>
                <v-btn icon @click="deleteData1">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>

                <v-data-table
                  v-model="selected"
                  :headers="headers"
                  :items="employees"
                  hide-default-footer
                  show-select
                >
                </v-data-table> </v-container
            ></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
    <v-navigation-drawer v-model="drawers" absolute right app>
      <v-tabs v-model="tab" background-color="primary" dark icons-and-text>
        <v-btn icon @click.stop="drawers = !drawers" permanent dark
          ><v-icon>mdi-arrow-right</v-icon>
        </v-btn>
        <v-tab href="#tab-1">
          Info
          <v-icon>mdi-account-box-outline</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" background-color="primary">
        <v-tab-item :value="'tab-1'" background-color="primary">
          <v-container>
            <v-col>
              <v-text-field
                v-model="editedItem.Username"
                label="username"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="editedItem.FirstName"
                label="firstname"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="editedItem.LastName"
                label="lastname"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="editedItem.Gender"
                label="gender"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="editedItem.Age" label="age"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="editedItem.EmpID"
                label="empId"
              ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>

            <v-btn color="primary" dark @click="save"> Save </v-btn>
            <v-btn color="primary" dark @click="close"> Cancel </v-btn>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-navigation-drawer>
  </v-app>
</template>
      
      <script>
export default {
  name: "app",
  data() {
    return {
      tab: null,
      show: false,
      drawer: false,
      drawers: false,
      model: " ",
      filterData: [],
      workData: [],
      search: "",
      employees: [],
      selected: [],
      box: null,
      selectedItem: 0,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],

      headers: [
        {
          text: "Username",
          align: "start",
          sortable: true,
          value: "USERNAME",
        },
        { text: "First name", value: "FIRSTNAME" },
        { text: "Last name", value: "LASTNAME" },
        { text: "Gender", value: "GENDER" },
        { text: "Age", value: "AGE" },
        { text: "EmpId", value: "EMPID" },
      ],
      workData2: [
        { text: "EnvId", value: "envId" },
        { text: "ServiceId", value: "serviceId" },
        { text: "ContextId", value: "contextId" },
        { text: "ObjectId", value: "objectId" },
        { text: "ObjectType", value: "objectType" },
        { text: "DisplayName", value: "displayName" },
        { text: "DisplayType", value: "displayType" },
      ],

      editedIndex: -1,
      editedItem: {
        Username: "",
        FirstName: "",
        LastName: "",
        Gender: "",
        Age: "",
        EmpID: "",
      },
      defaultItem: {
        Username: "",
        FirstName: "",
        LastName: "",
        Gender: "",
        Age: "",
        EmpID: "",
      },
    };
  },
  methods: {
    deleteData() {
      if (confirm("Are you sure you want to delete this item?")) {
        for (var i = 0; i < this.selected.length; i++) {
          const index = this.workData.indexOf(this.selected[i]);
          this.workData.splice(index, 1);
        }
      }
    },
    deleteData1() {
      if (confirm("Are you sure you want to delete this item?")) {
        for (var i = 0; i < this.selected.length; i++) {
          const index = this.employees.indexOf(this.selected[i]);
          this.employees.splice(index, 1);
        }
      }
    },
    stardata() {
      alert("Starred messages");
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
          `/3dspace/dhanshri/dservices/dpostdata?EMPID=${_this.editedItem.EmpID}&USERNAME=${_this.editedItem.Username}&FIRSTNAME=${_this.editedItem.FirstName}&LASTNAME=${_this.editedItem.LastName}&AGE=${_this.editedItem.Age}&GENDER=${_this.editedItem.Gender}`,
          {
            method: "GET",
            accept: "application/json",
            onComplete: function (dataResp) {
              var data = JSON.parse(dataResp);
              _this.employees = data;
              if (this.editedIndex > -1) {
        Object.assign(_this.employees, this.editedItem);
      } else {
        _this.employees.push(this.editedItem);
      }
      this.close();
            },

            onFailure: function (error) {
              console.log(error);
            },
          }
        );
      });
     
    },
    // clear() {
    //   this.employees;
    // },
  },
  mounted() {
    var _this = this;
    _this.employees;
    var maindiv = document.querySelector("#main");
    requirejs(
      ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData"],
      function (drag, auth) {
        drag.droppable(maindiv, {
          drop(data) {
            var dropedObject = JSON.parse(data);
            _this.workData = dropedObject.data.items;
            console.log(data);
            var iconUrl = widget.getUrl();
            iconUrl = iconUrl.substring(0, iconUrl.lastIndexOf("/"));
            _this.box = iconUrl + "/images/box.png";

            auth.authenticatedRequest("/3dspace/dhanshri/dservices/dgetdata", {
              method: "GET",
              accept: "application/json",
              onComplete: function (dataResp) {
                var data = JSON.parse(dataResp);
                _this.employees = data;
                // console.log(_this.employees);
              },

              onFailure: function (error) {
                console.log(error);
              },
            });
          },
        });
      }
    );
  },
};
</script>
    <style>
.v-application--is-ltr
  .v-tabs--centered
  > .v-tabs-bar
  .v-tabs-bar__content
  > :last-child,
.v-application--is-ltr
  .v-tabs--fixed-tabs
  > .v-tabs-bar
  .v-tabs-bar__content
  > :last-child {
  margin-right: 0px;
  text-align: right;
}
element.style {
  padding: 17px 0px 0px;
}
.v-list-item {
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  letter-spacing: normal;
  min-height: 48px;
  outline: none;
  padding: 0 16px;
  position: relative;
  text-decoration: none;
  background-color: #edf1f3;
}
.dropcontainer {
  padding: 0%;
  border: 2px solid blacks;
}
.img {
  width: 30px;
  height: 30px;
}
#drop {
  width: 10px;
}
#title-con {
  margin: 2px;
  padding: 1px;
}
</style>