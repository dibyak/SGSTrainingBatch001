<template>
  <v-app>
    <v-main>
      <v-card class="pa-2">
        <v-card-title>
          Employee Data
          <v-spacer></v-spacer>
          <v-text-field
            v-model="globalSearch"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            clearable
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">New Item</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.name" label="User Name" clearable></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.firstName" label="First Name" clearable></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.lastName" label="Last Name" clearable></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.gender" label="Gender" clearable></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="defaultItem.age" label="Age" clearable></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="filteredEmployees"
          :search="globalSearch"
          hide-default-footer
          :custom-filter="filterPerfectMatch"
        >
          <template v-slot:header.name="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon :color="searchName ? 'primary' : ''">mdi-magnify</v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="searchName"
                  class="pa-4"
                  type="text"
                  label="Enter to search user name"
                  clearable
                  :autofocus="true"
                ></v-text-field>
              </div>
            </v-menu>
          </template>
          <template v-slot:header.firstName="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon :color="searchFirstName ? 'primary' : ''">mdi-magnify</v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="searchFirstName"
                  class="pa-4"
                  type="text"
                  label="Enter to search user first name"
                  clearable
                  :autofocus="true"
                ></v-text-field>
              </div>
            </v-menu>
          </template>
          <template v-slot:header.lastName="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon :color="searchLastName ? 'primary' : ''">mdi-magnify</v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="searchLastName"
                  class="pa-4"
                  type="text"
                  label="Enter to search user last name"
                  clearable
                  :autofocus="true"
                ></v-text-field>
              </div>
            </v-menu>
          </template>
          <template v-slot:header.gender="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon :color="searchGender ? 'primary' : ''">mdi-magnify</v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="searchGender"
                  class="pa-4"
                  type="text"
                  label="Enter to search gender"
                  clearable
                  :autofocus="true"
                ></v-text-field>
              </div>
            </v-menu>
          </template>
          <template v-slot:header.age="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon :color="searchAge ? 'primary' : ''">mdi-magnify</v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="searchAge"
                  class="pa-4"
                  type="text"
                  label="Enter to search age"
                  clearable
                  :autofocus="true"
                ></v-text-field>
              </div>
            </v-menu>
          </template>
        </v-data-table>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      dialog: false,
      globalSearch: "",
      searchName: "",
      searchFirstName: "",
      searchLastName: "",
      searchGender: "",
      searchAge: "",
      abc: null,
      defaultItem: {
        name: "",
        firstName: "",
        lastName: "",
        gender: "",
        age: 0
      },
      headers: [
        {
          text: "User Name",
          sortable: true,
          value: "name",
          align: "start"
        },
        {
          text: "First Name",
          value: "firstName",
          sortable: true
        },
        {
          text: "Last Name",
          value: "lastName",
          sortable: true
        },
        {
          text: "Gender",
          value: "gender",
          sortable: true
        },
        {
          text: "Age",
          value: "age",
          sortable: true
        }
      ],
      employee: []
    };
  },
  mounted() {
    var _this = this
    requirejs(["DS/WAFData/WAFData"], function(auth) {
      auth.authenticatedRequest("/3dspace/omesh/someservices/getemployeedata", {
        method: "GET",
        accept: "application/json",
        onComplete: function(dataResp) {
          var data = JSON.parse(dataResp);
          _this.employee = data;
        },
        onFailure: function(error) {
          console.log(error);
        }
      });
    });
  },
  methods: {
    filterPerfectMatch(value, search) {
      if (
        search.charAt(0) === '"' &&
        search.slice(-1) === '"' &&
        search[search.length - 2] !== '"'
      ) {
        return (
          value != null &&
          value.toLowerCase() === search.replaceAll('"', "").toLowerCase()
        );
      }
      return value.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    },
    filterUserName(item) {
      if (
        this.searchName.charAt(0) === '"' &&
        this.searchName.slice(-1) === '"' &&
        this.searchName[this.searchName.length - 2] !== '"'
      ) {
        return (
          item.name.toLowerCase() ===
          this.searchName.replaceAll('"', "").toLocaleLowerCase()
        );
      }
      return item.name.toLowerCase().includes(this.searchName.toLowerCase());
    },
    filterFirstName(item) {
      if (
        this.searchFirstName.charAt(0) === '"' &&
        this.searchFirstName.slice(-1) === '"' &&
        this.searchFirstName[this.searchFirstName.length - 2] !== '"'
      ) {
        return (
          item.firstName.toLowerCase() ===
          this.searchFirstName.replaceAll('"', "").toLocaleLowerCase()
        );
      }
      return item.firstName
        .toLowerCase()
        .includes(this.searchFirstName.toLowerCase());
    },
    filterLastName(item) {
      if (
        this.searchLastName.charAt(0) === '"' &&
        this.searchLastName.slice(-1) === '"' &&
        this.searchLastName[this.searchLastName.length - 2] !== '"'
      ) {
        return (
          item.lastName.toLowerCase() ===
          this.searchLastName.replaceAll('"', "").toLocaleLowerCase()
        );
      }
      return item.lastName
        .toLowerCase()
        .includes(this.searchLastName.toLowerCase());
    },
    filterGender(item) {
      if (
        this.searchGender.charAt(0) === '"' &&
        this.searchGender.slice(-1) === '"' &&
        this.searchGender[this.searchGender.length - 2] !== '"'
      ) {
        return (
          item.gender.toLowerCase() ===
          this.searchGender.replaceAll('"', "").toLocaleLowerCase()
        );
      }
      return item.gender
        .toLowerCase()
        .includes(this.searchGender.toLowerCase());
    },
    filterAge(item) {
      if (
        this.searchAge.charAt(0) === '"' &&
        this.searchAge.slice(-1) === '"' &&
        this.searchAge[this.searchAge.length - 2] !== '"'
      ) {
        return item.age == this.searchAge.replaceAll('"', "");
      }
      return item.age.includes(this.searchAge);
    },
    close() {
      this.dialog = false;
      this.defaultItem = {
        name: "",
        firstName: "",
        lastName: "",
        gender: "",
        age: 0
      };
    },
    save() {
      this.defaultItem.id = Date.now();
      this.employee.push(this.defaultItem);
      this.close();
    },
  },
  computed: {
    filteredEmployees() {
      let conditions = [];
      if (this.searchName) {
        conditions.push(this.filterUserName);
      }

      if (this.searchFirstName) {
        conditions.push(this.filterFirstName);
      }

      if (this.searchLastName) {
        conditions.push(this.filterLastName);
      }

      if (this.searchGender) {
        conditions.push(this.filterGender);
      }

      if (this.searchAge) {
        conditions.push(this.filterAge);
      }

      if (conditions.length > 0) {
        return this.employee.filter(emp => {
          return conditions.every(cond => {
            return cond(emp);
          });
        });
      }
      return this.employee;
    }
  }
};
</script>

