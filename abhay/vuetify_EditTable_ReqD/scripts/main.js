require.config({
  paths: {
    vue: "././vue/vue",
    vuetify: "././vuetify/vuetify",
    // jquery: "././jquery/jquery",
  },
});

define("Vuetify_EditTable_ReqD/scripts/main", ["vue", "vuetify"], function (
  Vue,
  Vuetify
) {
  Vue.use(Vuetify, {});
  var myWidget = {
    onLoad: function () {
      debugger;
      console.log("On Load call!!");
      // myWidget.setVueTemplate();
      myWidget.loadData();
    },
    loadData: function () {
      var vueapp = new Vue({
        el: "#app",
        vuetify: new Vuetify(),

        template: `<div id='app'>
            <v-app>
                <v-main>
                    <template>
                    <v-card
                          color="grey lighten-4"
                          flat
                          height="200px"
                          tile
                        >
                          <v-toolbar extended>
                            <v-app-bar-nav-icon></v-app-bar-nav-icon>

                            <v-toolbar-title>EMPLOYEE DATA</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon>
                              <v-icon>mdi-magnify</v-icon>
                            </v-btn>

                           
                            <v-btn icon @click="open = !open">
                              <v-icon>mdi-square-edit-outline</v-icon>
                            </v-btn>

                            <v-btn class="navBtn" @click="toggleEditMode()">{{
                              editBtnLabel
                            }}</v-btn>
                          </v-toolbar>
                       
                    <v-data-table
                    :headers="headers"
                    :items="employee"
                    sort-by="USERNAME"
                    class="elevation-1"
                  >
                    <template v-slot:top>
                      <v-toolbar
                        flat
                      >
                        <v-toolbar-title>MY PORTAL</v-toolbar-title>
                        
                        <v-divider
                          class="mx-4"
                          inset
                          vertical
                        ></v-divider>

                        <v-spacer></v-spacer>
                        <v-dialog
                          v-model="dialog"
                          max-width="500px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              color="primary"
                              dark
                              class="mb-2"
                              v-bind="attrs"
                              v-on="on"
                            >
                              Add New Employee
                            </v-btn>
                           
                          </template>
                          <v-card>
                            <v-card-title>
                              <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>
                
                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                  >
                                    <v-text-field
                                      v-model="editedItem.USERNAME"
                                      label="USERNAME"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                  >
                                    <v-text-field
                                      v-model="editedItem.FIRSTNAME"
                                      label="FIRSTNAME"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                  >
                                    <v-text-field
                                      v-model="editedItem.LASTNAME"
                                      label="LASTNAME"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                  >
                                    <v-text-field
                                      v-model="editedItem.EMPID"
                                      label="EMPID"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                  >
                                    <v-text-field
                                      v-model="editedItem.GENDER"
                                      label="GENDER"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                              </v-container>
                            </v-card-text>
                
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="blue darken-1"
                                text
                                @click="close"
                              >
                                Cancel
                              </v-btn>
                              <v-btn
                                color="blue darken-1"
                                text
                                @click="save"
                              >
                                Save
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                          <v-card>
                            <v-card-title class="text-h5">Are you sure you want to delete this Employee ?</v-card-title>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                              <v-spacer></v-spacer>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                      <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                      >
                        mdi-pencil
                      </v-icon>
                      <v-icon
                        small
                        @click="deleteItem(item)"
                      >
                        mdi-delete
                      </v-icon>
                    </template>
                    <template v-slot:no-data>
                      <v-btn
                        color="primary"
                        @click="initialize"
                      >
                        Reset
                      </v-btn>
                    </template>

                    <template v-if="editMode" v-slot:item.USERNAME="props">
                      <v-edit-dialog 
                      @open="open1(props.item, 'USERNAME')"
                      @save="save1(props.item, 'USERNAME')">
                    <span class="getOld">
                     {{ getOld(props.item, "USERNAME") + " " }}
                     </span>
                     {{ getNew(props.item, "USERNAME") }}
      
                        <template v-slot:input>
                          <v-text-field
                            v-model="newValue"
                            single-line
                          ></v-text-field>
                        </template>
                      </v-edit-dialog>
                    </template>

                    <template v-if="editMode" v-slot:item.FIRSTNAME="props">
                      <v-edit-dialog 
                      @open="open1(props.item, 'FIRSTNAME')"
                      @save="save1(props.item, 'FIRSTNAME')">

                      <span class="getOld">
                     {{ getOld(props.item, "FIRSTNAME") + " " }}
                     </span>
                     {{ getNew(props.item, "FIRSTNAME") }}
      
                         <template v-slot:input>
                          <v-text-field
                            v-model="newValue"
                            single-line
                          ></v-text-field>
                        </template>
                      </v-edit-dialog>
                    </template>

                    <template v-if="editMode" v-slot:item.LASTNAME="props">
                      <v-edit-dialog 
                      @open="open1(props.item, 'LASTNAME')"
                      @save="save1(props.item, 'LASTNAME')">

                      <span class="getOld">
                      {{ getOld(props.item, "LASTNAME") + " " }}
                      </span>
                      {{ getNew(props.item, "LASTNAME") }}
                        <template v-slot:input>
                          <v-text-field
                            v-model="newValue"
                            single-line
                          ></v-text-field>
                        </template>
                      </v-edit-dialog>
                    </template>
                  
                    <template v-if="editMode" v-slot:item.GENDER="props">
                      <v-edit-dialog 
                      @open="open1(props.item, 'GENDER')"
                      @save="save1(props.item, 'GENDER')">

                      <span class="getOld">
                      {{ getOld(props.item, "GENDER") + " " }}
                      </span>
                      {{ getNew(props.item, "GENDER") }}
                        <template v-slot:input>
                          <v-text-field
                            v-model="newValue"
                            single-line
                          ></v-text-field>
                        </template>
                      </v-edit-dialog>
                    </template>
                  </v-data-table>
                  </v-card>
                      </template>
                 </v-main>
                 
            </v-app>
            </div>`,
        data: {
          dialog: false,
          dialogDelete: false,
          open:false,
          editBtnLabel: "Edit Mode",
          editMode: false,
          newValue:[],
          inlineEditOldData: [],
          inlineEditNewData: [],
          headers: [
            {
              text: "USERNAME",
              align: "start",
              sortable: false,
              value: "USERNAME",
            },
            { text: "FIRSTNAME", value: "FIRSTNAME" },
            { text: "LASTNAME", value: "LASTNAME" },
            { text: "EMPID", value: "EMPID" },
            { text: "GENDER", value: "GENDER" },
            { text: "Actions", value: "actions", sortable: false },
          ],
          employee: [],
          editedIndex: -1,
          editedItem: {
            USERNAME: "",
            FIRSTNAME: "",
            LASTNAME: "",
            EMPID: "",
            GENDER: "",
          },
          defaultItem: {
            USERNAME: "",
            FIRSTNAME: "",
            LASTNAME: "",
            EMPID: "",
            GENDER: "",
          },
        },
        computed: {
          formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
          },
        },

        watch: {
          dialog(val) {
            val || this.close();
          },
          dialogDelete(val) {
            val || this.closeDelete();
          },
        },

        created() {
          this.initialize();
        },

        methods: {
          initialize() {
            this.employee = [
              {
                USERNAME: "omeshA",
                FIRSTNAME: "omesh",
                LASTNAME: "attal",
                EMPID: "E001",
                GENDER: "male",
              },
              {
                USERNAME: "dhanashriB",
                FIRSTNAME: "dhanashri",
                LASTNAME: "bhad",
                EMPID: "E002",
                GENDER: "female",
              },
              {
                USERNAME: "DarshitB",
                FIRSTNAME: "darshit",
                LASTNAME: "bhatt",
                EMPID: "E003",
                GENDER: "male",
              },
              {
                USERNAME: "DibyakB",
                FIRSTNAME: "DB",
                LASTNAME: "Sir",
                EMPID: "E004",
                GENDER: "male",
              },
              {
                USERNAME: "mayurW",
                FIRSTNAME: "mayur",
                LASTNAME: "waghe ",
                EMPID: "E005",
                GENDER: "male",
              },
              {
                USERNAME: "abhayT",
                FIRSTNAME: "abhay",
                LASTNAME: "thorat",
                EMPID: "E006",
                GENDER: "male",
              },
              
            ];
          },

          editItem(item) {
            this.editedIndex = this.employee.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
          },

          deleteItem(item) {
            this.editedIndex = this.employee.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
          },

          deleteItemConfirm() {
            this.employee.splice(this.editedIndex, 1);
            this.closeDelete();
          },

          close() {
            this.dialog = false;
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem);
              this.editedIndex = -1;
            });
          },

          closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem);
              this.editedIndex = -1;
            });
          },

          save() {
            if (this.editedIndex > -1) {
              Object.assign(this.employee[this.editedIndex], this.editedItem);
            } else {
              this.employee.push(this.editedItem);
            }
            this.close();
          },
          save1(item, val) {
            if (this.newValue !== item[val]) {
              this.saveInlineEditOldData(item, val);
              item[val] = this.newValue;
              this.saveInlineEditNewData(item, val);
            }
          },
          open1(item, val) {
            this.newValue = item[val];
          },
          getOld(item, val) {
            let empidIndex = this.inlineEditOldData.findIndex(
              em => em.EMPID === item.EMPID
            );
            if (empidIndex !== -1 && this.inlineEditOldData[empidIndex][val]) {
              return this.inlineEditOldData[empidIndex][val];
            } else {
              return "";
            }
          },
          toggleEditMode() {
            if (!this.editMode) {
              this.editMode = true;
              this.editBtnLabel = "Save";
            } else {
              this.editMode = false;
              this.editBtnLabel = "Edit Mode";
              this.snackbar = true;
              this.snackbarText = "All changes saved";
              this.inlineEditOldData = [];
              this.inlineEditOldData.forEach(e =>
                console.log("inlineEditOldData: " + Object.values(e))
              );
              this.inlineEditNewData.forEach(e =>
                console.log("inlineEditNewData: " + Object.values(e))
              );
            }
          },
          getNew(item, val) {
            return item[val];
          },
          saveInlineEditOldData(item, val) {
            let empidIndex = this.inlineEditOldData.findIndex(
              em => em.EMPID == item.EMPID
            );
            let oldItemData = {
              USERNAME: "",
              FIRSTNAME: "",
              LASTNAME: "",
              EMPID: "",
              GENDER: "",
            };
            if (empidIndex !== -1) {
              oldItemData = Object.assign({}, this.inlineEditOldData[empidIndex]);
              this.inlineEditOldData.splice(empidIndex, 1);
            }
            oldItemData.EMPID = item.EMPID;
            if (!oldItemData[val]) {
              oldItemData[val] = item[val];
            }
            this.inlineEditOldData.push(oldItemData);
          },
          saveInlineEditNewData(item, val) {
            let newItemData = {
              USERNAME: "",
              FIRSTNAME: "",
              LASTNAME: "",
              EMPID: "",
              GENDER: "",
            };
            let empidIndex = this.inlineEditNewData.findIndex(
              em => em.EMPID == item.EMPID
            );
            if (empidIndex !== -1) {
              newItemData = Object.assign({}, this.inlineEditNewData[empidIndex]);
              this.inlineEditNewData.splice(empidIndex, 1);
            }
            newItemData.EMPID = item.EMPID;
            newItemData[val] = item[val];
            this.inlineEditNewData.push(newItemData);
          }
        },
      });
      myWidget.vueapp = vueapp;
    },

    onRefresh: function () {
      myWidget.onLoad();
    },
  };
  return myWidget;
});
