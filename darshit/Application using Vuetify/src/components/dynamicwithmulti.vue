<template>

  <v-app>
      <v-main class="pa-5">
        
        <v-data-table
          :headers="headers"
          :items="filteredData"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:[`header.username`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="username ? 'primary' : ''">
                    mdi-filter
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="username"
                  class="pa-4"
                  type="text"
                  label="Enter the search term"
                  :autofocus="true"
                ></v-text-field>
                <v-btn
                  @click="username = ''"
                  small
                  text
                  color="primary"
                  class="ml-2 mb-2"
                >Clean</v-btn>
              </div>
            </v-menu>
          </template>
          
          <template v-slot:[`header.fname`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="fname ? 'primary' : ''">
                    mdi-filter
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="fname"
                  class="pa-4"
                  type="text"
                  label="Enter the search term"
                  :autofocus="true"

                ></v-text-field>
                <v-btn
                  @click="fname = ''"
                  small
                  text
                  color="primary"
                  class="ml-2 mb-2"
                >Clean</v-btn>
              </div>
            </v-menu>
          </template>

          <template v-slot:[`header.lname`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="lname ? 'primary' : ''">
                    mdi-filter
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="lname"
                  class="pa-4"
                  type="text"
                  label="Enter the search term"
                  :autofocus="true"
                ></v-text-field>
                <v-btn
                  @click="lname = ''"
                  small
                  text
                  color="primary"
                  class="ml-2 mb-2"
                >Clean</v-btn>
              </div>
            </v-menu>
          </template>

          <template v-slot:[`header.age`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="age ? 'primary': ''">
                    mdi-filter
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="age"
                  class="pa-4"
                  type="number"
                  label="Enter the search term"
                  :autofocus="true"
                ></v-text-field>
                <v-btn
                  @click="age = ''"
                  small
                  text
                  color="primary"
                  class="ml-2 mb-2"
                >Clean</v-btn>
              </div>
            </v-menu>
          </template>

          <template v-slot:[`header.gender`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="gender ? 'primary': ''">
                    mdi-filter
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="gender"
                  class="pa-4"
                  type="text"
                  label="Enter the search term"
                  :autofocus="true"
                ></v-text-field>
                <v-btn
                  @click="gender = ''"
                  small
                  text
                  color="primary"
                  class="ml-2 mb-2"
                >Clean</v-btn>
              </div>
            </v-menu>
          </template>
          
        </v-data-table>
      </v-main>
    </v-app>
</template>
<script>
export default {
  data () {
      return {
        username: '',
        fname: '',
        lname: '',
        age: '',
        gender: '',
        headers: [
          {
            text: 'Username',
            align: 'start',
            sortable: false,
            value: 'username',
          },
          { text: 'Fname', value: 'fname' },
          { text: 'Lname', value: 'lname' },
          { text: 'Age', value: 'age' },
          { text: 'Gender', value: 'gender' },
          { text: 'Empid', value: 'empid' },
        ],
        details: [
          {
            username: 'darshitb',
            fname: "Darshit",
            lname: "Bhatt",
            age: 24,
            gender:'Male',
            empid: 'E01'
          },
          {
            username: 'dhanshrib',
            fname: "Dhanshri",
            lname: "Bhad",
            age: 24,
            gender:'Female',
            empid: 'E02'
          },
          {
            username: 'abhayt',
            fname: "Abhay",
            lname: "Thorat",
            age: 23,
            gender:'Male',
            empid: 'E03'
          }
        ]
      }
    },
   computed: {
    filteredData() {
      let conditions = [];
      if (this.username) {
        conditions.push(this.filterUserName);
      }
      if (this.fname) {
        conditions.push(this.filterFname);
      }
      if (this.lname) {
        conditions.push(this.filterLname);
      }
      if (this.age) {
        conditions.push(this.filterAge);
      }
      if (this.gender) {
        conditions.push(this.filterGender);
      }
      if (conditions.length > 0) {
        return this.details.filter((name) => {
          return conditions.every((condition) => {
            return condition(name);
          })
        })
      }
      return this.details;
    }
  },
   methods: {
     filterUserName(item) {
       return item.username.toLowerCase().includes(this.username.toLowerCase());
     },
     filterFname(item) {
       return item.fname.toLowerCase().includes(this.fname.toLowerCase());
     },
     filterLname(item) {
       return item.lname.toLowerCase().includes(this.lname.toLowerCase());
     },
     filterAge(item) {
       return item.age.toString().includes(this.age);
     },
     filterGender(item) {
       return item.gender.toLowerCase().includes(this.gender.toLowerCase());
        }
   }
};
</script>
