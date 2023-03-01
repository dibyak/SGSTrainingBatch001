
<template>
 <div class="card">
    <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">
        <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" :styles="{width: '25%'}">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
            </template>
        </Column>
    </DataTable>
</div>

</template>

<script>
import FilterMatchMode from '../node_modules/primevue/api/FilterMatchMode';
import ProductService from '../service/ProductService';
import DataTable from '../node_modules/primevue/datatable';
import Column from '../node_modules/primevue/column';
import InputText from 'primevue/inputtext';

export default {
  components: {
    DataTable,
    Column,
    InputText
  
  },
    data() {
        return {
            editingRows: [],
            columns: null,
            products1: null,
            products2: null,
            products3: null,
            
            filters: {
                'EMPID': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
                'NAME': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
                'AGE': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
                'Working_Hours': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
                'GENDER':{value:null, matchMode:FilterMatchMode.STARTS_WITH}
            }
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();

        this.columns = [
            {field: 'EMPID', header: 'EMPID'},
            {field: 'NAME', header: 'NAME'},
            {field: 'AGE', header: 'AGE'},
            {field: 'Working_Hours', header: 'Working_Hours'},
            {field:'GENDER', header:'GENDER'}
        ];

        this.originalRows = {};
    },
    methods: {
        onCellEditComplete(event) {
            let { data, newValue, field } = event;

            switch (field) {
                case 'AGE':
                case 'Working_Hours':
                    if (this.isPositiveInteger(newValue))
                        data[field] = newValue;
                    else
                        event.preventDefault();
                break;

                default:
                    if (newValue.trim().length > 0)
                        data[field] = newValue;
                    else
                        event.preventDefault();
                break;
            }
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
    mounted() {
        this.productService.getProductsSmall().then(data => this.products1 = data);
        this.productService.getProductsSmall().then(data => this.products2 = data);
        this.productService.getProductsSmall().then(data => this.products3 = data);
    }
}

</script>
