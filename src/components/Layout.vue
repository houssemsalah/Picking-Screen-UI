<template>
 <div class="alerts-container">
        <div
        class="row items-center justify-between"
        style="padding:0 15px;"
        >
        <div class="q-gutter-sm row items-center">
            <q-btn outline color="primary"    @click="switchSelect" >
                <q-icon left name="done_all" v-if="!this.selectAll"/><q-icon left  name="remove_done" v-if="this.selectAll"/>
                <div><span v-if="!this.selectAll">Select All</span><span v-if="this.selectAll">Deselect All</span></div>
            </q-btn>
            <q-btn class="bg-red text-white" :disable='!select'  icon="close" ><span>Close SO</span><span style="padding-left:5px;" v-if="select">(1)</span></q-btn>
            
        </div>
        <div class="flex items-center " style="margin-top: 0px">
        <div class="alert-box bg-yellow-14">
            <span class="material-symbols-rounded fill-1 text-white alert-icon" style="font-size: 1.5em; ">emergency_home</span>
            <div class="alert-text">
                <span class="text-bold" style="font-size:1.5em">103</span>
                <span>Alert info</span>
            </div>
        </div>
        <div class="alert-box bg-orange">
            <span class="material-symbols-rounded fill-1 text-white alert-icon" style="font-size: 1.5em; ">warning</span>
            <div class="alert-text" >
                <span class="text-bold" style="font-size:1.5em">78</span>
                <span>Warning</span>
            </div>
        </div>
        <div class="alert-box bg-red">
            <span class="material-symbols-rounded fill-1 text-white alert-icon" style="font-size: 1.5em; ">report</span>
            <div class="alert-text">
                <span class="text-bold" style="font-size:1.5em">2200</span>
                <span>Error</span>
            </div>
        </div>
            
        </div>
        <div class="flex items-center justify-end q-gutter-sm header-icons">
            
            <q-btn  flat square padding="10px 10px" ><span class="material-symbols-rounded text-primary" style="font-size: 2em">swap_vert</span></q-btn>
            <q-btn  flat square padding="10px 10px" @click="filterOn" :class="{'filter-open' : !displayFilter, 'filter-close' : displayFilter}"><span class="material-symbols-rounded text-primary" style="font-size: 2em">filter_alt</span></q-btn>
            
        </div>
            
            
        
            
        </div>

        <q-separator />

        <div class="advanced_search-container" v-if="displayFilter">
            <advancedsearch-Component></advancedsearch-Component>
            <q-separator />
        </div>

        

        <q-tabs
        v-model="tab"
        align="left"
        active-color="primary"
        >
        <div class="row items-center justify-between" style="width: 100%">
            <div class="row items-center">
                <q-tab name="pik_tab" label="Picking Table (1000)" />
                <q-tab name="alert" label="Alert Table" />
            </div>
            <span style="padding-right:15px"><q-btn flat padding="3px 3px" @click=""><span class="material-symbols-rounded text-primary" style="font-size: 2em">manufacturing</span></q-btn></span>
        </div>
           
        </q-tabs>

        <q-separator/>

        <q-tab-panels v-model="tab" animated >

            <q-tab-panel name="pik_tab">
                <tablepick-Component />
                
            </q-tab-panel>

            <q-tab-panel name="alert">
                <tablealert-Component></tablealert-Component>
            </q-tab-panel>

        </q-tab-panels>
  </div>

</template>

<script lang="ts">
import { ref } from 'vue';
import PickTableComponent from './PickTable.vue';
import TableAlertComponent from './TableAlert.vue';
import AdvancedSearchComponent from './AdvacedSearch.vue';

export default {
  components: {
    'tablepickComponent': PickTableComponent,
    'tablealertComponent': TableAlertComponent,
    'advancedsearchComponent': AdvancedSearchComponent,
  },
  setup() {
    const displayFilter = ref<boolean>(false);
    const select = ref<null | any>(null);
    const details = ref<boolean>(false);
    const showDetails = ref<boolean>(false);
    const rowCount = ref<number>(0);
    const selectAll = ref<boolean>(false);

    const selected = ref<any[]>([]);
    const rowDetail = ref<any[]>([]);
    const tab = ref<string>('pik_tab');
    const tabpanel = ref<string>('');
    const date = ref<string>('2023/11/22');
    const dateTo = ref<string>('2023/12/20');
    const proxyDate = ref<string>('2023/12/22');

    const selectedRowsCount = (count: number) => {
      rowCount.value = count;
    };

    const filterOn = () => {
      displayFilter.value = !displayFilter.value;
    };

    const onRowSelected = (selectedRow: any) => {
      selected.value = [...selected.value, selectedRow];
    };

    const handleRowSelection = (rowDetail: any) => {
      select.value = rowDetail;
      console.log('Selected Row:', rowDetail);
    };

    const getIconName = (value: string) => {
      if (value === 'Error') {
        return 'report';
      } else if (value === 'Warning') {
        return 'warning';
      } else if (value === 'Alert info') {
        return 'emergency_home';
      }
    };

    const getBadgeColor = (value: string) => {
      if (value === 'Error') {
        return 'bg-danger';
      } else if (value === 'Warning') {
        return 'bg-warning';
      } else if (value === 'Alert info') {
        return 'yellow-alert';
      }
    };

    const switchSelect = () => {
      selectAll.value = !selectAll.value;
    };

    const updateProxy = () => {
      proxyDate.value = date.value;
    };

    const save = () => {
      date.value = proxyDate.value;
    };

    return {
      displayFilter,
      select,
      details,
      showDetails,
      rowCount,
      selectAll,
      selected,
      rowDetail,
      tab,
      tabpanel,
      date,
      dateTo,
      proxyDate,
      selectedRowsCount,
      filterOn,
      onRowSelected,
      handleRowSelection,
      getIconName,
      getBadgeColor,
      switchSelect,
      updateProxy,
      save,
    };
  },
};
</script>

