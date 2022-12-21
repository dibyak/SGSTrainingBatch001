<template app>
    <v-app>
      <v-navigation-drawer v-model="drawer" app id="main">
        <v-list-item>
          <v-list-item-title>Dropped Container</v-list-item-title>
          <v-btn icon dark @click="drawer = !drawer">
            <v-icon dark>mdi-close</v-icon>
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
          <div @click="show" id="content">
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
          </div>
        </v-container>
  
        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon dark>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      </v-app-bar>
  
      <v-main>
        <v-tabs
          v-model="model"
          background-color="primary"
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
            <v-btn icon @click="deleteData">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon @click="stardata" dark><v-icon>mdi-star</v-icon> </v-btn>
          </v-container>
        </v-tabs>
  
        <v-tabs-items v-model="model">
          <v-tab-item :value="`tab-11`">
            <v-container>
              <v-card height="800" class="overflow-y-auto">
                <v-card-text>
                  <v-data-table
                    v-model="selected"
                    :headers="workData2"
                    :items="workData"
                    hide-default-footer
                    item-key="envId"
                    show-select
                  >
                  </v-data-table>
                </v-card-text>
              </v-card>
            </v-container>
          </v-tab-item>
          <v-tab-item :value="`tab-22`">
            <v-container>
              <v-card height="800" class="overflow-y-auto">
                <v-card-text>
                  <v-btn icon @click="deleteData1">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="employees"
                    item-key="EMPID"
                    show-select
                    hide-default-footer
                    :single-select="singleSelect"
                  >
                  </v-data-table>
                </v-card-text>
              </v-card>
            </v-container>
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
                  v-model="editedItem.EMPID"
                  label="EmpId"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="editedItem.USERNAME"
                  label="Username"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="editedItem.FIRSTNAME"
                  label="Firstname"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="editedItem.LASTNAME"
                  label="Lastname"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="editedItem.GENDER"
                  label="Gender"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field v-model="editedItem.AGE" label="Age"></v-text-field>
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
        singleSelect: true,
        tab: null,
        model: "",
        show: false,
        drawer: false,
        drawers: false,
        filterData: [],
        workData: [],
        search: "",
        employees: [],
        selected: [],
        box: null,
  
        items: [
          { title: "Home", icon: "mdi-home-city" },
          { title: "My Account", icon: "mdi-account" },
          { title: "Users", icon: "mdi-account-group-outline" },
        ],
  
        headers: [
          {
            text: "EMPID",
            align: "start",
            sortable: false,
            value: "EMPID",
          },
          { text: "USERNAME", value: "USERNAME" },
          { text: "FIRSTNAME", value: "FIRSTNAME" },
          { text: "LASTNAME", value: "LASTNAME" },
          { text: "GENDER", value: "GENDER" },
          { text: "AGE", value: "AGE" },
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
          EMPID: "",
          USERNAME: "",
          FIRSTNAME: "",
          LASTNAME: "",
          GENDER: "",
          AGE: "",
        },
        defaultItem: {
          EMPID: "",
          USERNAME: "",
          FIRSTNAME: "",
          LASTNAME: "",
          GENDER: "",
          AGE: "",
        },
      };
    },
    methods: {
      deleteData() {
        alert("deleted");
      },
      deleteData1() {
        var _this = this;
        requirejs(["DS/WAFData/WAFData"], function (auth) {
          auth.authenticatedRequest(
            `/3dspace/dhanshri/dservices/deletedata?EMPID=${_this.selected[0].EMPID}`,
  
            {
              method: "GET",
              accept: "application/json",
              onComplete: function () {
                _this.employees.splice(
                  _this.employees.findIndex(
                    (e) => e.EMPID === _this.selected[0].EMPID
                  ),
                  1
                );
              },
  
              onFailure: function (error) {
                console.log(error);
              },
            }
          );
        });
      },
      stardata() {
        var _this = this;
        requirejs(["DS/WAFData/WAFData"], function (auth) {
          auth.authenticatedRequest(
            "/3dspace/dhanshri/dservices/dgetdata",
  
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
            `/3dspace/dhanshri/dservices/dpostdata?EMPID=${_this.editedItem.EMPID}&USERNAME=${_this.editedItem.USERNAME}&FIRSTNAME=${_this.editedItem.FIRSTNAME}&LASTNAME=${_this.editedItem.LASTNAME}&AGE=${_this.editedItem.AGE}&GENDER=${_this.editedItem.GENDER}`,
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
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgba(0, 0, 0, 0.87);
    background-color: #1976d2;
  }
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
  .v-list-item .v-list-item__subtitle,
  .v-list-item .v-list-item__title {
    line-height: 1.2;
    color: white;
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
  .v-window__container {
    display: flex;
    flex-direction: column;
    height: inherit;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }
  
  .container {
    max-width: 1351px;
  }
  
  #drop {
    width: 10px;
  }
  #title-con {
    margin: 2px;
    padding: 1px;
  }
  </style>