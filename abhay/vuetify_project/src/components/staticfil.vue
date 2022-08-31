<template>
  
  <v-card>
    <v-card-title>
      Staic Table
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="filtereddetails"
      item-key="userName"
      class="elevation-1"
      :search="search"
      :custom-filter="filterPerfectMatch"
      hide-default-footer
    >
    
      <!-- <template v-slot:body.prepend>
        <tr>
          <td>
            <v-text-field
              v-model="userName"
              type="text"
              label="userName"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="fname"
              type="text"
              label="Fname"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="lname"
              type="text"
              label="Lname"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="gender"
              type="text"
              label="Gender"
            ></v-text-field>
          </td>
          <td>
            <v-text-field v-model="age" type="number" label="age"></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="e_id"
              type="text"
              label="E_Id"
            ></v-text-field>
          </td>
        </tr>
      </template> -->
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
                  label="Enter the userName search "
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
          
          <template v-slot:[`header.fname`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="fname ? 'primary' : ''">
                    mdi-magnify
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="fname"
                  class="pa-4"
                  type="text"
                  label="Enter the Fname for search "
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
          
          <template v-slot:[`header.lname`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="lname ? 'primary': ''">
                    mdi-magnify
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-text-field
                  v-model="lname"
                  class="pa-4"
                  type="text"
                  label="Enter the lname foe search "
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
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      userName: "",
      fname: "",
      lname: "",
      age: "",
      headers: [
        {
          text: "userName",
          align: "start",
          sortable: false,
          value: "userName",
        },
        { text: "Fname", value: "fname" },
        { text: "Lname", value: "lname" },
        { text: "Gender", value: "gender" },
        { text: "Age", value: "age" },
        { text: "E_id", value: "e_id" },
      ],
      details: [
        {
          userName: "abhayt",
          fname: "abhay",
          lname: "thorat",
          gender: "male",
          age: 23,
          e_id: " at@gmail.com",
        },
        {
          userName: "darshitb",
          fname: "daarshit",
          lname: "bhatt",
          gender: "male",
          age: 24,
          e_id: " db@gmail.com",
        },
        {
          userName: "dhanashrib",
          fname: "dhanashri",
          lname: "bhad",
          gender: "female",
          age: 24,
          e_id: " ddb@gmail.com",
        },
        {
          userName: "omeshA",
          fname: "omesh",
          lname: "attal",
          gender: "male",
          age: 25,
          e_id: " oa@gmail.com",
        },
      ],
    };
  },
    computed: {
    filtereddetails() {
      
      let conditions = [];
      
      if (this.userName) {
        conditions.push(this.filteruserName);
      }
      
      if (this.fname) {
        conditions.push(this.filterfname);
      }
      
      if (this.lname) {
        conditions.push(this.filterlname);
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
     filteruserName(item) {
       return item.userName.toLowerCase().includes(this.userName.toLowerCase());
     },
     filterfname(item) {
       return item.fname.toString().includes(this.fname);
     },
     filterlname(item) {
       return item.lname.toString().includes(this.lname);
     },
      filterPerfectMatch(value, search) {
      return value != null && value == search
    },

   }
  
//   methods: {

// filtereddetails(item) {

// return item.name.toLowerCase(). includes (this.dessertName.toLowerCase());

// }

// }
};
</script>