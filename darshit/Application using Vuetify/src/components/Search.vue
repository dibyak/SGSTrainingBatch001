<template>
  <div id="app pa-5">
    <v-data-table
        :headers="headers"
        :items="words"
        item-key="name"
        :search="search"
        :custom-filter="filterPerfectMatch"
      >
</v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: null,
      resources: [
        { id: 1, title: "javascript for dummies" },
        { id: 2, title: "vue for dummies" },
        { id: 3, title: "dos for dummies" },
        { id: 4, title: "windows for dummies" },
        { id: 5, title: "html for dummies" }
      ]
    };
  },
  methods: {
    filterPerfectMatch(value, search) {
      return value != null && value === search
    },
},
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    }
  }
};
</script>