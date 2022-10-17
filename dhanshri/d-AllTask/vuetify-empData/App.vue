<template>
  <v-app>
     <v-main>
           <v-data-table
   :headers="headers"
   :items="details"
   :search="search"
   :custom-filter="filterPerfectMatch"
   hide-default-footer
 >
   <template v-slot:top>
     <v-toolbar flat>
       <v-toolbar-title class="cyan lighten-3"
         >EMPLOYEE'S DETAILS</v-toolbar-title
       >
       <v-spacer></v-spacer>
       <v-text-field
         v-model="search"
         append-icon="mdi-magnify"
         label="Search"
         single-line
         hide-details
       ></v-text-field>
       <v-divider class="mx-4" inset vertical></v-divider>
       <v-spacer></v-spacer>
       <v-dialog v-model="dialog" max-width="500px">
         <template v-slot:activator="{ on, attrs }">
           <v-btn
             color="cyan darken-2"
             dark
             class="mb-2"
             v-bind="attrs"
             v-on="on"
           >
             New Item
           </v-btn>
         </template>
         <v-card>
           <v-card-title>
             <span class="text-h5">{{ formTitle }}</span>
           </v-card-title>

           <v-card-text>
             <v-container>
               <v-row class="">
                 <v-col cols="12" sm="6" md="4">
                   <v-text-field
                     v-model="editedItem.username"
                     label="username"
                   ></v-text-field>
                 </v-col>
                 <v-col cols="12" sm="6" md="4">
                   <v-text-field
                     v-model="editedItem.firstname"
                     label="firstname"
                   ></v-text-field>
                 </v-col>
                 <v-col cols="12" sm="6" md="4">
                   <v-text-field
                     v-model="editedItem.lastname"
                     label="lastname"
                   ></v-text-field>
                 </v-col>
                 <v-col cols="12" sm="6" md="4">
                   <v-text-field
                     v-model="editedItem.gender"
                     label="gender"
                   ></v-text-field>
                 </v-col>
                 <v-col cols="12" sm="6" md="4">
                   <v-text-field
                     v-model="editedItem.age"
                     label="age"
                   ></v-text-field>
                 </v-col>
                 <v-col cols="12" sm="6" md="4">
                   <v-text-field
                     v-model="editedItem.empId"
                     label="empId"
                   ></v-text-field>
                 </v-col>
               </v-row>
             </v-container>
           </v-card-text>

           <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn color="cyan lighten-1" text @click="close"> Cancel </v-btn>
             <v-btn color="cyan lighten-1" text @click="save"> Save </v-btn>
           </v-card-actions>
         </v-card>
       </v-dialog>
     </v-toolbar>
   </template>
 </v-data-table>
     </v-main>
  </v-app>   
</template>

<script>
export default {
 name: "app",
 data: () => ({
   dialog: false,
   dialogDelete: false,
   search: "",
   headers: [
     {
       text: "Username",
       align: "start",
       sortable: false,
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
 }),

 computed: {
   formTitle() {
     return this.editedIndex === -1 ? "New Item" : "Edit Item";
   },
 },

 watch: {},
 

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
   filterPerfectMatch(value, search) {
     return value != null && value == search;
   },
 },
};

</script>
<style>
</style>
