<template>
  <div id="app">
    <TreeTable :value="nodes" :editingRows.sync="editingRows" editMode="cell">
      <Column field="name" header="Name" :expander="true" :rowEditor="true"
        ><template #editor="slotProps">
          <InputText
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          /> </template
      ></Column>
      <Column field="size" header="Size"></Column>
      <Column field="type" header="Type"></Column>
    </TreeTable>
  </div>
</template>

<script>
import TreeTable from "primevue/treetable";
import Column from "primevue/column";
import NodeService from "../service/NodeService";
import treetablenodes from "../service/treetablenodes.json";
export default {
  name: "app",
  editingRows: [],
  components: {
    TreeTable,
    Column,
  },
  data() {
    return {
      nodes: null,
    };
  },
  nodeService: null,
  created() {
    this.nodeService = new NodeService();
  },
  mounted() {
    this.getTreeTableNodes();

    requirejs(["DS/WAFData/WAFData"], function (auth) {
      auth.authenticatedRequest(
        `3dspace/dhanshri/services/getNodes?objectId=11621.54682.55348.44128`,
        {
          method: "GET",
          accept: "application/json",
          onComplete: function (dataResp) {
            //this.getTreeTableNodes = dataResp;

            var root1 = {};
            var partInfo= [];
            root1.partInfo= dataResp;
            console.log(root1);

            
            var partInfo1  = {
               "name": partInfo[0],
                "size":partInfo[1],
                "type": partInfo[2]
            };
            root1.partInfo.push(partInfo1);
            console.log(root1);
            console.log(JSON.stringify(root1));
            return getTreeTableNodes.root.push(root1);
          },
          onFailure: function (error) {
            console.log(error);
          },
        }
      );
    });
  },
  methods: {
    getTreeTableNodes() {
      this.nodes = treetablenodes.root;
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
</style>
