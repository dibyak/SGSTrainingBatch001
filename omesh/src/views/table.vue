<template>
  <v-card class="pa-2">
    <v-card-title>
      Employee Data
      <v-spacer></v-spacer>
      <!-- <v-text-field
        v-model="globalSearch"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>-->
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
                  <v-text-field v-model="defaultItem.name" label="User Name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="defaultItem.firstName" label="First Name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="defaultItem.lastName" label="Last Name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="defaultItem.gender" label="Gender"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="defaultItem.age" label="Age"></v-text-field>
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
    <v-data-table :headers="headers" :items="employee" :search="globalSearch" hide-default-footer>
      <template v-slot:body.prepend>
        <tr>
          <td>
            <v-text-field
              append-icon="mdi-magnify"
              v-model="searchName"
              hide-details
              single-line
              label="Search Name"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              append-icon="mdi-magnify"
              v-model="searchFirstName"
              hide-details
              single-line
              label="Search First Name"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              append-icon="mdi-magnify"
              v-model="searchLastName"
              hide-details
              single-line
              label="Search Last Name"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              append-icon="mdi-magnify"
              v-model="searchGender"
              hide-details
              single-line
              label="Search Gender"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              append-icon="mdi-magnify"
              v-model="searchAge"
              hide-details
              single-line
              label="Age"
            ></v-text-field>
          </td>
        </tr>
      </template>
      <!-- <template v-slot:header.name="{ header }">
        {{ header.text }}
        <v-text-field
          v-model="searchName"
          append-icon="mdi-magnify"
          label="Search Name"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
      </template>
      <template v-slot:header.firstName="{ header }">
        {{ header.text }}
        <v-text-field
          v-model="searchFirstName"
          append-icon="mdi-magnify"
          label="Search First Name"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
      </template>
      <template v-slot:header.lastName="{ header }">
        {{ header.text }}
        <v-text-field
          v-model="searchLastName"
          append-icon="mdi-magnify"
          label="Search Last Name"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
      </template>-->
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "emplyeeData",
  data() {
    return {
      dialog: false,
      globalSearch: "",
      searchName: "",
      searchFirstName: "",
      searchLastName: "",
      searchGender: "",
      searchAge: "",
      defaultItem: {
        name: "",
        firstName: "",
        lastName: "",
        gender: "",
        age: 0
      },
      // url: "http://localhost:3000/employees",
      headers: [
        {
          text: "User Name",
          sortable: true,
          value: "name",
          align: "start",
          filter: f => {
            return (f + "")
              .toLowerCase()
              .includes(this["searchName"].toLowerCase());
          }
        },
        {
          text: "First Name",
          value: "firstName",
          sortable: true,
          filter: f => {
            return (f + "")
              .toLowerCase()
              .includes(this["searchFirstName"].toLowerCase());
          }
        },
        {
          text: "Last Name",
          value: "lastName",
          sortable: true,
          filter: f => {
            return (f + "")
              .toLowerCase()
              .includes(this["searchLastName"].toLowerCase());
          }
        },
        {
          text: "Gender",
          value: "gender",
          sortable: true,
          filter: f => {
            return (f + "")
              .toLowerCase()
              .includes(this["searchGender"].toLowerCase());
          }
        },
        {
          text: "Age",
          value: "age",
          sortable: true,
          filter: value => {
            if (!this.searchAge) return true;
            return value.includes(this.searchAge);
          }
        }
      ],
      employee: [
        {
          name: "omesha",
          firstName: "Omesh",
          lastName: "Attal",
          gender: "Male",
          age: "25",
          id: 1661344315522
        },
        {
          name: "dibyakb",
          firstName: "Dibyak",
          lastName: "Biswas",
          gender: "Male",
          age: "39",
          id: 1661344427922
        },
        {
          name: "darshitb",
          firstName: "Darshit",
          lastName: "Bhatt",
          gender: "Male",
          age: "24",
          id: 1661344471898
        },
        {
          name: "dhansrib",
          firstName: "Dhansri",
          lastName: "Bhad",
          gender: "Female",
          age: "24",
          id: 1661344534945
        },
        {
          name: "abhayt",
          firstName: "Abhay",
          lastName: "Thorat",
          gender: "Male",
          age: "23",
          id: 1661344555986
        },
        {
          name: "prasadr",
          firstName: "Prasad",
          lastName: "Raut",
          gender: "Male",
          age: "24",
          id: 1661344580345
        },
        {
          name: "abhayg",
          firstName: "Abhay",
          lastName: "Gor",
          gender: "Male",
          age: "26",
          id: 1661346934725
        },
        {
          name: "mayurw",
          firstName: "Mayur",
          lastName: "Waghe",
          gender: "Male",
          age: "24",
          id: 1661346934778
        }
      ]
    };
  },
  // mounted() {
  //   this.getData();
  // },
  methods: {
    // filterPerfectMatch(value, search) {
    //   debugger
    //   return value != null && value.toLowerCase() === search.toLowerCase()
    // },
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
      // axios.post(`${this.url}`, this.defaultItem).then(() => {
      //   this.getData();
      // });
      this.employee.push(this.defaultItem);
      this.close();
    },
    getData() {
      axios.get(`${this.url}`).then(emp => {
        this.employee = emp.data;
      });
    }
  }
  // computed: {
  //   resultQuery() {
  //     if (this.searchName && this.searchFirstName && this.searchLastName) {
  //       return this.employee.filter(item => {
  //         return (
  //           this.searchName
  //             .toLowerCase()
  //             .split(" ")
  //             .every(v => item.name.toLowerCase().includes(v)) &&
  //           this.searchFirstName
  //             .toLowerCase()
  //             .split(" ")
  //             .every(v => item.firstName.toLowerCase().includes(v)) &&
  //           this.searchLastName
  //             .toLowerCase()
  //             .split(" ")
  //             .every(v => item.lastName.toLowerCase().includes(v))
  //         );
  //       });
  //     } else if (this.searchName && this.searchFirstName) {
  //       return this.employee.filter(item => {
  //         return (
  //           this.searchName
  //             .toLowerCase()
  //             .split(" ")
  //             .every(v => item.name.toLowerCase().includes(v)) &&
  //           this.searchFirstName
  //             .toLowerCase()
  //             .split(" ")
  //             .every(v => item.firstName.toLowerCase().includes(v))
  //         );
  //       });
  //     } else if (this.searchName && this.searchLastName) {
  //       return this.employee.filter(item => {
  //         return (
  //           this.searchName
  //             .toLowerCase()
  //             .split(" ")
  //             .every(v => item.name.toLowerCase().includes(v)) &&
  //           this.searchLastName
  //             .toLowerCase()
  //             .split(" ")
  //             .every(v => item.lastName.toLowerCase().includes(v))
  //         );
  //       });
  //     } else if (this.searchLastName && this.searchFirstName) {
  //       return this.employee.filter(item => {
  //         return (
  //           this.searchLastName
  //             .toLowerCase()
  //             .split(" ")
  //             .every(v => item.lastName.toLowerCase().includes(v)) &&
  //           this.searchFirstName
  //             .toLowerCase()
  //             .split(" ")
  //             .every(v => item.firstName.toLowerCase().includes(v))
  //         );
  //       });
  //     } else if (this.searchName) {
  //       return this.employee.filter(item => {
  //         return this.searchName
  //           .toLowerCase()
  //           .split(" ")
  //           .every(v => item.name.toLowerCase().includes(v));
  //       });
  //     } else if (this.searchFirstName) {
  //       return this.employee.filter(item => {
  //         return this.searchFirstName
  //           .toLowerCase()
  //           .split(" ")
  //           .every(v => item.firstName.toLowerCase().includes(v));
  //       });
  //     } else if (this.searchLastName) {
  //       return this.employee.filter(item => {
  //         return this.searchLastName
  //           .toLowerCase()
  //           .split(" ")
  //           .every(v => item.lastName.toLowerCase().includes(v));
  //       });
  //     } else {
  //       return this.employee;
  //     }
  //   }
  // }
};
</script>

<style>
</style>