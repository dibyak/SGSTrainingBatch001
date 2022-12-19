<template>
  <v-app>
    <v-form v-model="valid" ref="form">
      <v-card>
        <v-container class="ml-4 mr-4">
          <v-row>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field
                v-model="age"
                :rules="ageRules"
                :counter="2"
                label="Age"
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-radio-group v-model="gender" row label="Gender">
                <v-radio
                  v-for="n in genders"
                  :key="n"
                  :label="`${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row v-if="addNew">
            <v-col cols="12" md="3">
              <v-text-field
                v-model="new1"
                :rules="newRules"
                :counter="10"
                label="New1"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="new2"
                :rules="newRules"
                :counter="10"
                label="New2"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="new3"
                :rules="newRules"
                :counter="10"
                label="New3"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="new4"
                :rules="newRules"
                :counter="10"
                label="New4"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="1">
              <v-btn
                class="mx-4"
                @click="
                  () => {
                    addNew = true;
                  }
                "
                :disabled="addNew || submitted"
              >
                Add New
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn
                class="mx-4"
                type="submit"
                :disabled="!valid"
                @click="handleSubmit"
              >
                Submit
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn class="mx-4" @click="downloadCsv" :disabled="!submitted">
                Save CSV
              </v-btn>
            </v-col>
          </v-row>

          <v-card-title>
            Persons
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <v-select
              v-model="searchType"
              :items="searchTypes"
              label="Search Type"
              class="v-select"
            ></v-select>

            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-data-table
            :headers="header"
            :items="filteredRows"
            :items-per-page="5"
            :search="search"
            :custom-filter="globalSearch"
            class="elevation-1"
          >
            <template v-slot:header.FirstName="{ header }">
              {{ header.text }}
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon small :color="searchFirstName ? 'primary' : ''">
                      mdi-filter
                    </v-icon>
                  </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                  <v-text-field
                    v-model="searchFirstName"
                    class="pa-4"
                    type="text"
                    label="Enter the search term"
                    :autofocus="true"
                  ></v-text-field>
                  <v-btn
                    @click="searchFirstName = ''"
                    small
                    text
                    color="primary"
                    class="ml-2 mb-2"
                    >Clean</v-btn
                  >
                </div>
              </v-menu>
            </template>

            <template v-slot:header.LastName="{ header }">
              {{ header.text }}
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon small :color="searchLastName ? 'primary' : ''">
                      mdi-filter
                    </v-icon>
                  </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                  <v-text-field
                    v-model="searchLastName"
                    class="pa-4"
                    type="text"
                    label="Enter the search term"
                    :autofocus="true"
                  ></v-text-field>
                  <v-btn
                    @click="searchLastName = ''"
                    small
                    text
                    color="primary"
                    class="ml-2 mb-2"
                    >Clean</v-btn
                  >
                </div>
              </v-menu>
            </template>

            <template v-slot:header.Age="{ header }">
              {{ header.text }}
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon small :color="searchAge ? 'primary' : ''">
                      mdi-filter
                    </v-icon>
                  </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                  <v-text-field
                    v-model="searchAge"
                    class="pa-4"
                    type="text"
                    label="Enter the search term"
                    :autofocus="true"
                  ></v-text-field>
                  <v-btn
                    @click="searchAge = ''"
                    small
                    text
                    color="primary"
                    class="ml-2 mb-2"
                    >Clean</v-btn
                  >
                </div>
              </v-menu>
            </template>

            <template v-slot:header.Gender="{ header }">
              {{ header.text }}
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon small :color="searchGender ? 'primary' : ''">
                      mdi-filter
                    </v-icon>
                  </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                  <v-text-field
                    v-model="searchGender"
                    class="pa-4"
                    type="text"
                    label="Enter the search term"
                    :autofocus="true"
                  ></v-text-field>
                  <v-btn
                    @click="searchGender = ''"
                    small
                    text
                    color="primary"
                    class="ml-2 mb-2"
                    >Clean</v-btn
                  >
                </div>
              </v-menu>
            </template>

            <template v-slot:header.New1="{ header }">
              {{ header.text }}
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon small :color="searchNew1 ? 'primary' : ''">
                      mdi-filter
                    </v-icon>
                  </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                  <v-text-field
                    v-model="searchNew1"
                    class="pa-4"
                    type="text"
                    label="Enter the search term"
                    :autofocus="true"
                  ></v-text-field>
                  <v-btn
                    @click="searchNew1 = ''"
                    small
                    text
                    color="primary"
                    class="ml-2 mb-2"
                    >Clean</v-btn
                  >
                </div>
              </v-menu>
            </template>

            <template v-slot:header.New2="{ header }">
              {{ header.text }}
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon small :color="searchNew2 ? 'primary' : ''">
                      mdi-filter
                    </v-icon>
                  </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                  <v-text-field
                    v-model="searchNew2"
                    class="pa-4"
                    type="text"
                    label="Enter the search term"
                    :autofocus="true"
                  ></v-text-field>
                  <v-btn
                    @click="searchNew2 = ''"
                    small
                    text
                    color="primary"
                    class="ml-2 mb-2"
                    >Clean</v-btn
                  >
                </div>
              </v-menu>
            </template>

            <template v-slot:header.New3="{ header }">
              {{ header.text }}
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon small :color="searchNew3 ? 'primary' : ''">
                      mdi-filter
                    </v-icon>
                  </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                  <v-text-field
                    v-model="searchNew3"
                    class="pa-4"
                    type="text"
                    label="Enter the search term"
                    :autofocus="true"
                  ></v-text-field>
                  <v-btn
                    @click="searchNew3 = ''"
                    small
                    text
                    color="primary"
                    class="ml-2 mb-2"
                    >Clean</v-btn
                  >
                </div>
              </v-menu>
            </template>

            <template v-slot:header.New4="{ header }">
              {{ header.text }}
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon small :color="searchNew4 ? 'primary' : ''">
                      mdi-filter
                    </v-icon>
                  </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                  <v-text-field
                    v-model="searchNew4"
                    class="pa-4"
                    type="text"
                    label="Enter the search term"
                    :autofocus="true"
                  ></v-text-field>
                  <v-btn
                    @click="searchNew4 = ''"
                    small
                    text
                    color="primary"
                    class="ml-2 mb-2"
                    >Clean</v-btn
                  >
                </div>
              </v-menu>
            </template>
          </v-data-table>
        </v-container>
      </v-card>
    </v-form>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      valid: false,
      search: "",
      firstname: "",
      lastname: "",
      age: "",
      gender: "Male",
      new1: "",
      new2: "",
      new3: "",
      new4: "",
      searchFirstName: "",
      searchLastName: "",
      searchAge: "",
      searchGender: "",
      searchNew1: "",
      searchNew2: "",
      searchNew3: "",
      searchNew4: "",
      nameRules: [
        v => !!v || "Name is required",
        v =>
          v.length <= 10 || "Name must be less than or equal to 10 characters"
      ],
      ageRules: [
        v => !!v || "Age is required",
        v => /^\d{1,2}$/.test(v) || "Age must be valid & digits"
      ],
      genders: ["Male", "Female", "Other"],
      addNew: false,
      submitted: false,
      newRules: [
        v => !!v || "Required",
        v =>
          v.length <= 10 || "Name must be less than or equal to 10 characters"
      ],
      header: [],
      rows: [],
      searchTypes: ["Wildcard", "Exact Match"],
      searchType: "Wildcard"
    };
  },
  computed: {
    filteredRows() {
      let conditions = [];

      if (this.searchFirstName) {
        conditions.push(this.filterFirstName);
      }
      if (this.searchLastName) {
        conditions.push(this.filterLastName);
      }
      if (this.searchAge) {
        conditions.push(this.filterAge);
      }
      if (this.searchGender) {
        conditions.push(this.filterGender);
      }
      if (this.searchNew1) {
        conditions.push(this.filterNew1);
      }
      if (this.searchNew2) {
        conditions.push(this.filterNew2);
      }
      if (this.searchNew3) {
        conditions.push(this.filterNew3);
      }
      if (this.searchNew4) {
        conditions.push(this.filterNew4);
      }

      if (conditions.length > 0) {
        return this.rows.filter(row => {
          return conditions.every(condition => {
            return condition(row);
          });
        });
      }
      return this.rows;
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (!this.submitted) {
        if (this.addNew) {
          this.header = [
            { text: "First Name", value: "FirstName" },
            { text: "Last Name", value: "LastName" },
            { text: "Age", value: "Age" },
            { text: "Gender", value: "Gender" },
            { text: "New1", value: "New1" },
            { text: "New2", value: "New2" },
            { text: "New3", value: "New3" },
            { text: "New4", value: "New4" }
          ];
        } else {
          this.header = [
            { text: "First Name", value: "FirstName" },
            { text: "Last Name", value: "LastName" },
            { text: "Age", value: "Age" },
            { text: "Gender", value: "Gender" }
          ];
        }
        this.submitted = true;
      }
      if (this.addNew) {
        this.rows.push({
          FirstName: this.firstname,
          LastName: this.lastname,
          Age: this.age,
          Gender: this.gender,
          New1: this.new1,
          New2: this.new2,
          New3: this.new3,
          New4: this.new4
        });
        this.firstname = "";
        this.lastname = "";
        this.age = "";
        this.gender = "Male";
        this.new1 = "";
        this.new2 = "";
        this.new3 = "";
        this.new4 = "";
      } else {
        this.rows.push({
          FirstName: this.firstname,
          LastName: this.lastname,
          Age: this.age,
          Gender: this.gender
        });
        this.firstname = "";
        this.lastname = "";
        this.age = "";
        this.gender = "Male";
      }
      this.$refs.form.resetValidation();
    },
    globalSearch(value, search, item) {
      return this.searchType === "Wildcard"
        ? value != null &&
            search != null &&
            typeof value === "string" &&
            value
              .toString()
              .toLocaleUpperCase()
              .includes(search.toLocaleUpperCase())
        : value != null &&
            search != null &&
            typeof value === "string" &&
            value.toString().toLocaleUpperCase() === search.toLocaleUpperCase();
    },
    filterFirstName(item) {
      return this.searchType === "Wildcard"
        ? item.FirstName.toLowerCase().includes(
            this.searchFirstName.toLowerCase()
          )
        : item.FirstName.toLowerCase() === this.searchFirstName.toLowerCase();
    },
    filterLastName(item) {
      return this.searchType === "Wildcard"
        ? item.LastName.toLowerCase().includes(
            this.searchLastName.toLowerCase()
          )
        : item.LastName.toLowerCase() === this.searchLastName.toLowerCase();
    },
    filterAge(item) {
      return this.searchType === "Wildcard"
        ? item.Age.toLowerCase().includes(this.searchAge.toLowerCase())
        : item.Age.toLowerCase() === this.searchAge.toLowerCase();
    },
    filterGender(item) {
      return this.searchType === "Wildcard"
        ? item.Gender.toLowerCase().includes(this.searchGender.toLowerCase())
        : item.Gender.toLowerCase() === this.searchGender.toLowerCase();
    },
    filterNew1(item) {
      return this.searchType === "Wildcard"
        ? item.New1.toLowerCase().includes(this.searchNew1.toLowerCase())
        : item.New1.toLowerCase() === this.searchNew1.toLowerCase();
    },
    filterNew2(item) {
      return this.searchType === "Wildcard"
        ? item.New2.toLowerCase().includes(this.searchNew2.toLowerCase())
        : item.New2.toLowerCase() === this.searchNew2.toLowerCase();
    },
    filterNew3(item) {
      return this.searchType === "Wildcard"
        ? item.New3.toLowerCase().includes(this.searchNew3.toLowerCase())
        : item.New3.toLowerCase() === this.searchNew3.toLowerCase();
    },
    filterNew4(item) {
      return this.searchType === "Wildcard"
        ? item.New4.toLowerCase().includes(this.searchNew4.toLowerCase())
        : item.New4.toLowerCase() === this.searchNew4.toLowerCase();
    },
    downloadCsv() {
      let headerData = [];
      let rowsData = [];

      this.header.forEach(obj => headerData.push(obj.value));
      this.rows.forEach(obj => rowsData.push(Object.values(obj)));

      console.log(headerData);
      console.log(rowsData);

      this.exportCsv(headerData, rowsData, ",", "vueVuetifyFormData");
    },
    exportCsv(arrayHeader, arrayData, delimiter, fileName) {
      let header = arrayHeader.join(delimiter) + "\n";
      let csv = header;
      arrayData.forEach(array => {
        csv += array.join(delimiter) + "\n";
      });

      let csvData = new Blob([csv], { type: "text/csv" });
      let csvUrl = URL.createObjectURL(csvData);

      let hiddenElement = document.createElement("a");
      hiddenElement.href = csvUrl;
      hiddenElement.target = "_blank";
      hiddenElement.download = fileName + ".csv";
      hiddenElement.click();
    }
  }
};
</script>

<style>
.v-select {
  max-width: 10%;
  margin-right: 50px;
  margin-top: 25px;
}
</style>
