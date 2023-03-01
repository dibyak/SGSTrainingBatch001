<template>
    <TreeTable  :value="products1" :editTable="true" @row-edit="onRowEdit" class="editable-cells-table">
      <Column field="name" header="Name" :expander="true" :editable="true" :edit-mode="'input'">
        <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
          </template>
      </Column>
      <Column field="size" header="Size"></Column>
      <Column field="type" header="Type"></Column>
      <Column headerStyle="width: 8em" bodyStyle="text-align: center">
          <template #body="slotProps">
              <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
              <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
          </template>
      </Column>
  </TreeTable>
  </template>
  
  <script>
  import TreeTable from "primevue/treetable";
  import Column from "primevue/column";
  import NodeService from "../service/NodeService";
  import treetablenodes from "../service/treetablenodes.json";
  import Button from "../node_modules/primevue/button";
  import InputText from 'primevue/inputtext';
  //import RowEditor from 'primevue/row/roweditor'
  
  
  export default {
    name: "app",
    editingRows: [],
    components: {
      TreeTable,
      Column,
      Button,
      InputText,
     // RowEditor 
    },
    data() {
      return {
        nodes: null,
        products1: null
      };
    },
    nodeService: null,
    created() {
      this.nodeService = new NodeService();
      this.columns = [
              {field: 'name', header: 'Name'},
              {field: 'type', header: 'Type'},
              {field: 'size', header: 'Size'},
              
          ];
    },
    mounted() {
      this.getTreeTableNodes();
  
      // requirejs(["DS/WAFData/WAFData"], function (auth) {
      //   auth.authenticatedRequest(
      //     `3dspace/dhanshri/services/getNodes?objectId=11621.54682.55348.44128`,
      //     {
      //       method: "GET",
      //       accept: "application/json",
      //       onComplete: function (dataResp) {
      //         //this.getTreeTableNodes = dataResp;
  
      //         var root1 = {};
      //         var partInfo= [];
      //         root1.partInfo= dataResp;
      //         console.log(root1);
  
              
      //         var partInfo1  = {
      //            "name": partInfo[0],
      //             "size":partInfo[1],
      //             "type": partInfo[2]
      //         };
      //         root1.partInfo.push(partInfo1);
      //         console.log(root1);
      //         console.log(JSON.stringify(root1));
      //         return getTreeTableNodes.root.push(root1);
      //       },
      //       onFailure: function (error) {
      //         console.log(error);
      //       },
      //     }
      //   );
      // });
    },
    methods: {
      getTreeTableNodes() {
        this.products1 = treetablenodes.root;
      },
      onRowEdit(event) {
             const updateData=event.data;
          },
          isPositiveInteger(val) {
              let str = String(val);
              str = str.trim();
              if (!str) {
                  return false;
              }
              str = str.replace(/^0+/, "") || "0";
              var n = Math.floor(Number(str));
              return n !== Infinity && String(n) === str && n >= 0;
          },
          onRowEditSave(event) {
              let { newData, index } = event;
  
              this.products2[index] = newData;
          },
        
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  .p-button.p-button-warning, .p-buttonset.p-button-warning > .p-button, .p-splitbutton.p-button-warning > .p-button {
      color: #ffffff;
      background: #0b55f575;
      border: 1px solid #0bf5e5;
  }
  </style>