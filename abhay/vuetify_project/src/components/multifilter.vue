<template>
       <v-app>
      <v-main>
        <v-data-table
          :headers="headers"
          :items="filtereddetails"
          :items-per-page="5"
          class="elevation-1"
          hide-default-footer
        >
          <template v-slot:[`header.userName`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="userName ? 'primary' : ''">
                    mdi-magnify
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="userName"
                  class="pa-4"
                  type="text"
                  label="Enter the search term"
                  :autofocus="true"
                ></v-text-field>
                <v-btn
                  @click="userName = ''"
                  small
                  text
                  color="primary"
                  class="ml-2 mb-2"
                >Clean</v-btn>
              </div>
            </v-menu>
          </template>
          
          <template v-slot:[`header.Fname`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="Fname ? 'primary' : ''">
                    mdi-magnify
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="Fname"
                  class="pa-4"
                  type="text"
                  label="Enter the search term"
                  :autofocus="true"
                ></v-text-field>
                <v-btn
                  @click="Fname = ''"
                  small
                  text
                  color="primary"
                  class="ml-2 mb-2"
                >Clean</v-btn>
              </div>
            </v-menu>
          </template>
          
          <template v-slot:[`header.Lname`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="Lname ? 'primary': ''">
                    mdi-magnify
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="Lname"
                  class="pa-4"
                  type="text"
                  label="Enter the search term"
                  :autofocus="true"
                ></v-text-field>
                <v-btn
                  @click="Lname = ''"
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
                    mdi-magnify
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
          
        </v-data-table>
      </v-main>
    </v-app>
</template>
<script>
  export default {
     data () {
      return {
        userName: '',
        Fname: '',
        Lname: '',
        age:'',
        headers: [
          {
            text: 'userName',
            align: 'start',
            sortable: false,
            value: 'userName',
          },
          { text: 'Fname', value: 'Fname' },
          { text: 'Lname ', value: 'Lname' },
          { text: 'age ', value: 'age' },
          { text: 'gender', value: 'gender' },
          { text: 'e_mail', value: 'e_mail' },
        ],
        details: [
          {
            userName: 'abhayt',
            Fname: 'abhay',
            Lname: 'thorat',
            age: 23,
            gender: 'male',
            e_mail: 'at@',
          },
          {
            userName: 'darshit',
            Fname: 'darshit',
            Lname: 'bhatt',
            age: 24,
            gender: "male",
            e_mail: 'db@',
          },
          {
            userName: 'dhanashri',
            Fname: "dhanashri",
            Lname: "bhad",
            age: 24,
            gender: "fmale",
            e_mail: 'bd@',
          },
          {
            userName: 'omesha',
            Fname: 'omesh',
            Lname: 'attal',
            age: 26,
            gender: 'male',
            e_mail: 'oa@',
          },
          
        ],
      }
    },
   computed: {
    filtereddetails() {
      
     let conditions = [];
      
      if (this.userName) {
        conditions.push(this.filterUserName);
      }
      
      if (this.Fname) {
        conditions.push(this.filterFname);
      }
      
      if (this.Lname) {
        conditions.push(this.filterLname);
      }
      
      if (this.age) {
        conditions.push(this.filterAge);
      }
      if (conditions.length > 0) {
        return this.details.filter((dessert) => {
          return conditions.every((condition) => {
            return condition(dessert);
          })
        })
      }
      
      return this.details;
    }
  },
   methods: {
     filterUserName(item) {
       return item.userName.toLowerCase().includes(this.userName.toLowerCase());
     },
     filterFname(item) {
       return item.Fname.toString().includes(this.Fname);
     },
     filterLname(item) {
       return item.Lname.toString().includes(this.Lname);
     },
     filterAge(item) {
       return item.age.toString().includes(this.age);
     }
   }
  }
</script>