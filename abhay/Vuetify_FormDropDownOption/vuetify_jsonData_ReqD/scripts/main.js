require.config({
  paths: {
    vue: "././vue/vue",
    vuetify: "././vuetify/vuetify",
    // jquery: "././jquery/jquery",
  },
});

define("vuetify_jsonData_ReqD/scripts/main", ["vue", "vuetify"], function (
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
                <template>
                  <v-card max-width="550px" min-height="850px" class="A">
                    <div>
                      <v-row
                        ><h2>Create New Component</h2>
                        <v-spacer></v-spacer><v-icon>mdi-close</v-icon></v-row
                      >
                    </div>
                    <v-spacer></v-spacer>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <h4>(* feilds are required to fill)</h4>
                      <v-select
                        v-model="name"
                        :items="mainG.subGroup"
                        @change="selectSubG(),selectType1(),selectAddress(), selectArea(),selectId(),selectTemp(),selectPrefClass(),selectDesResp()"
                        label="Main Group *"
                        required
                      ></v-select>
              
                      <v-select
                        v-model="name1"
                        :items="subGroup1" 
                        @change="selectType()"
                        label="subgroup"
                        required
                      >
                      </v-select>
              
                      <v-select
                        v-model="name2"
                        :items="subGroup2"
                        label="Type *"
                        required
                      ></v-select>
              
                      <v-select
                        v-model="name3"
                        :items="subType"
                        label="Product Handling Subtype *"
                        required
                      ></v-select>
                      <v-row>
                        <v-col cols="12" md="3">
                          <v-text-field
                            v-model="firstname"
                            label="Prefix                            /"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                          <v-select
                            v-model="select"
                            :items="items"
                            label="ABC Class Type"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="3">
                          <v-text-field
                            v-model="lastname"
                            label="Sequence Number "
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                          <v-text-field
                            v-model="email"
                            label="/ Suffix"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-checkbox
                          v-model="checkbox"
                          label="Version (R-State)"
                          required
                        ></v-checkbox>
              
                        <v-spacer></v-spacer>
                        <v-col cols="12" md="3">
                          <v-if></v-if>
                          <v-text-field
                            v-model="email"
                            label="R-State"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
              
                      <v-select
                        v-model="select2"
                        :items="AreaSelect"
                        label="STAKO Area *"
                        required
                      ></v-select>
              
                      <v-select
                        v-model="select3"
                        :items="Temperature"
                        label="Temperature class *"
                        required
                      ></v-select>
              
                      <v-select
                        v-model="select4"
                        :items="preferClass"
                        label="Preferece Class *"
                        required
                      ></v-select>
              
                      <v-text-field
                        label="Designation*"
                        required
                      ></v-text-field>
              
                      <v-select
                        v-model="selectresp"
                        :items="designResp"
                        label="Design Responsible *"
                        required
                      ></v-select>
              
                      <v-select
                        v-model="selectid"
                        :items="contact_id"
                        label="Contact ID *"
                        required
                      ></v-select>
              
                      <v-select
                        v-model="select1"
                        :items="AddressF"
                        label="Address Field"
                        item-value="id"
                        item-text="address_line1"
                       
                      >
                      </v-select>
                      <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                      >
                        Create
                      </v-btn>
                      <v-btn color="error" class="mr-4" @click="reset"> Cancel </v-btn>
                    </v-form>
                  </v-card>
              </template>    
            </v-app>
            </div>`,
        data: {
          valid: true,
          name:"",
          name1:"",
          name2:"",
          name3:"",
          select1:"",
          select2:"",
          select3:"",
          select4:"",
          selectid:"",
          selectresp:"",
          email:"",
          lastname:"",
          firstname:"",
          Temperature:"",
          preferClass:"",
          contact_id:"",
          category: null,
          purpose: null,
          subGroup1:null,
          subGroup2:null,
          subType:null,
          AddressF:null,
          AreaSelect:null,
          designResp:null,
          task:null,
          firstname:null,
          data11: [
            {
              id: "1",
              "SUb GROUP": "ABC",
              TYPE: "011",
              "Product HAndling Subtype": "",
            },
            {
              id: "2",
              "SUb GROUP": "EFG",
              TYPE: "012",
              "Product HAndling Subtype": "",
            },
            {
              id: "3",
              "SUb GROUP": "LMN",
              TYPE: "022",
              "Product HAndling Subtype": "",
            },
            {
              id: "4",
              "SUb GROUP": "OPQ",
              TYPE: "033",
              "Product HAndling Subtype": "",
            },
          ],
         
         mainG:{
          subGroup:["FE","SE","TE"]
         },  
         subG:{
            "FE":["FE-A","FE-B","FE-C"],
            "SE":["SE-A","SE-B","SE-C"],
            "TE":["TE-A","TE-B","TE-C"],
          },
           type:{
            "FE_A":["a-cs","a-mech"],
            "FE_B":["b-cs","b-IT"],
            "FE_C":["c-IT","c-mech"],
            "SE_A":["se_a-cs","se_a-mech"],
            "SE_B":["se_b-cs","se_b-IT"],
            "SE_C":["se_c-IT","se_c-mech"],
            "TE_A":["te_a-cs","te_a-mech"],
            "TE_B":["te_b-cs","te_b-IT"],
            "TE_C":["te_c-IT","te_c-mech"],
          },
          subtype:{
            
          "FE":["FE_EASY","FE_DIFF","FE_HARD"],
          "SE":["SE_EASY","SE_DIFF","SE_HARD"],
          "TE":["TE_EASY","TE_DIFF","FE_HARD"]
      
          },
      
          address:{
            "FE":["fe_mumbai","fe_pune","fe_nashik"],
            "SE":["se_mumbai","se_pune","se_nashik"],
            "TE":["te_mumbai","te_pune","te_nashik"]
      
      
          },
          area:{
            "FE":["FE_UG","FE_PG"],
            "SE":["SE_UG","SE_PG"],
            "TE":["TE_UG","tE_PG"]
      
          },
          temp:{
            "FE":["FE_Normal","FE_HIGH"],
            "SE":["SE_Normal","FE_HIGH"],
            "TE":["SE_Normal","FE_HIGH"]
          },
          prefClass:{
            "FE":["FE_CS_1","FE_IT_1"],
            "SE":["SE_CS_1","SE_IT_1"],
            "TE":["TE_CS_1","tE_IT_1"]
      
          },
          contactId:{
            "FE":["+912233FE","+912234FE"],
            "SE":["+912234SE","+912235SE"],
            "TE":["+912236TE","+912238TE"]
          },
         designRe:{
            "FE":["Designer","Trainer"],
            "SE":["Designer_1","+Trainer_1"],
            "TE":["Designer_2","+Trainer_2"]
         },
        
      
          item: [
            {
              id: 1,
              text: "Folder 1",
              state: {
                selected: false,
              },
              children: [
                {
                  id: 2,
                  text: "Sub Folder 1",
                  state: {
                    selected: false,
                  },
                },
                {
                  id: 3,
                  text: "Sub Folder 2",
                  state: {
                    selected: false,
                  },
                },
              ],
            },
            {
              id: 4,
              text: "Folder 2",
              state: {
                selected: true,
              },
              children: [],
            },
          ],
      
          select: null,
          items: ["Student", "Teacher", "Trainer", "Learner"],
          checkbox: false,
        },
        
        methods: {
          validate() {
            this.$refs.form.validate();
          },
          reset() {
            this.$refs.form.reset();
          },
          selectMainG(){
            this.name=widget.getValue(mainG)
          },
          selectSubG(){
            if(this.name=="FE")
            {
              this.subGroup1=this.subG.FE
            } else if(this.name=="SE"){
                this.subGroup1=this.subG.SE
            }else {
               this.subGroup1=this.subG.TE
            }
      
          },
          selectType(){
            if(this.name1== "FE-A"){
                this.subGroup2=this.type.FE_A
            }else if(this.name1=="FE-B"){
                this.subGroup2=this.type.FE_B
            }else if(this.name1== "FE-C"){
                this.subGroup2=this.type.FE_C
            }else if(this.name1== "SE-A"){
               this.subGroup2=this.type.SE_A
            }else if(this.name1== "SE-B"){
               this.subGroup2=this.type.SE_B
            }else if(this.name1== "SE-C"){
               this.subGroup2=this.type.SE_C
            }else if(this.name1== "TE-A"){
               this.subGroup2=this.type.TE_A
            }else if(this.name1== "TE-B"){
               this.subGroup2=this.type.TE_B
            }else{
              this.subGroup2=this.type.TE_C   
            }
          },
          selectType1(){
            if(this.name=="FE")
            {
              this.subType=this.subtype.FE
            } else if(this.name=="SE"){
                this.subType=this.subtype.SE
            }else {
               this.subType=this.subtype.TE
            }
          },
          selectAddress(){
              if(this.name=="FE")
            {
              this.AddressF=this.address.FE
            } else if(this.name=="SE"){
                this.AddressF=this.address.SE
            }else {
               this.AddressF=this.address.TE
            }
          },
          selectArea(){
             if(this.name=="FE")
            {
              this.AreaSelect=this.area.FE
            } else if(this.name=="SE"){
                this.AreaSelect=this.area.SE
            }else {
               this.AreaSelect=this.area.TE
            }
          },
          selectTemp(){
             if(this.name=="FE")
            {
              this.Temperature=this.temp.FE
            } else if(this.name=="SE"){
                this.Temperature=this.temp.SE
            }else {
               this.Temperature=this.temp.TE
            }
          },
          selectPrefClass(){
            if(this.name=="FE")
            {
              this.preferClass=this.prefClass.FE
            } else if(this.name=="SE"){
                this.preferClass=this.prefClass.SE
            }else {
               this.preferClass=this.prefClass.TE
            }
          },
          selectId(){
            if(this.name=="FE")
            {
              this.contact_id=this.contactId.FE
            } else if(this.name=="SE"){
                this.contact_id=this.contactId.SE
            }else {
               this.contact_id=this.contactId.TE
            }
          },
          selectDesResp(){
            if(this.name=="FE")
            {
              this.designResp=this.designRe.FE
            } else if(this.name=="SE"){
                this.designResp=this.designRe.SE
            }else {
               this.designResp=this.designRe.TE
            }
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
