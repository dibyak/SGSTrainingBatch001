<template>
  <v-app>
    <v-container class="row">
      <v-row>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions @click="show = !show">
              <v-row>
                <v-btn color="blue" v-if="show" id="plus">
                  <v-icon> mdi-plus</v-icon>
                </v-btn>
                <v-text-field
                  v-model="message"
                  placeholder="Text"
                  outlined
                  clearable
                  color="blue"
                ></v-text-field>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-btn class="ma-2" color="cyan lighten-1" :disabled="!message">
                ADD
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          outlined
          color="blue"
          single-line
          placeholder="Search"
        ></v-text-field>
      </v-row>

      <v-container>
        <v-btn color="cyan lighten-1" @click.stop="drawer = !drawer">
          Form
        </v-btn>
      </v-container>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="details"
          hide-default-footer
          :custom-filter="customSearch"
          :search="search"
        >
        </v-data-table>
      </v-container>
      <v-container class="fill-height">
        <v-row align-center="center" justify="center"> </v-row>
      </v-container>

      <v-navigation-drawer v-model="drawer" absolute right>
        <v-tabs
          v-model="tab"
          background-color="teal lighten-1"
          centered
          dark
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Recents
            <v-icon>mdi-phone</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Favorites
            <v-icon>mdi-heart</v-icon>
          </v-tab>

          <v-tab href="#tab-3">
            Nearby
            <v-icon>mdi-account-box</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item :value="'tab-1'">
            <v-container>
              <v-col>
                <v-text-field
                  v-model="editedItem.username"
                  label="username"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="editedItem.firstname"
                  label="firstname"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="editedItem.lastname"
                  label="lastname"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="editedItem.gender"
                  label="gender"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="editedItem.age"
                  label="age"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="editedItem.empId"
                  label="empId"
                ></v-text-field>
              </v-col>
              <v-spacer></v-spacer>

              <v-btn color="cyan lighten-1" @click="save"> Save </v-btn>
              <v-btn color="cyan lighten-1" @click="close"> Cancel </v-btn>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-navigation-drawer>
    </v-container>
  </v-app>
</template>
  <script>
export default {
  name: "app",
  data() {
    return {
      message: "",
      show: true,
      drawer: null,
      dialog: false,
      dialogDelete: false,
      search: " ",
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      headers: [
        {
          text: "Username",
          align: "start",
          sortable: true,
          value: "username",
        },
        { text: "First name", value: "firstname" },
        { text: "Last name", value: "lastname" },
        { text: "Gender", value: "gender" },
        { text: "Age", value: "age" },
        { text: "EmpId", value: "empId" },
      ],
      details: [],
      editedIndex: -1,
      editedItem: {
        username: "",
        firstname: "",
        lastname: "",
        gender: "",
        age: "",
        empId: "",
      },
      defaultItem: {
        username: "",
        firstname: "",
        lastname: "",
        gender: "",
        age: "",
        empId: "",
      },
    };
  },
  methods: {
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.details[this.editedIndex], this.editedItem);
      } else {
        this.details.push(this.editedItem);
      }
      this.close();
    },

    customSearch(search, item) {
      return Object.values(item).some(
        (v) => v && v.toString().toLowerCase().includes(search)
      );
    },
  },
};
</script>
<style>
.row {
  margin: 10px;
}
.v-expansion-panel-header {
  padding: 6px 12px;
}
.v-expansion-panels {
  width: 50%;
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  font-size: 1em;
  background-color: rgb(80, 175, 170) !important;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-size: 1em;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  background-color: white;
}
#plus {
  height: 55px;
  min-width: 58px;
  padding: 0px;
  border-right: 0px;
  margin: 0px;
  width: 60px;
  border-radius: 0px;
}
.v-text-field.v-text-field--enclosed {
  margin: 7px;
  padding: 0px;
  border-radius: 0px;
}

.v-expansion-panel-header {
  min-height: 40px;
}
.v-application .ma-2 {
  margin: 0px !important;
}
.v-text-field.v-text-field--enclosed {
  margin: 0px;
  padding: 0px;
}
</style>