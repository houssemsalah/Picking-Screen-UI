<template>
  <div class="alert_tab severity-hidden">
    <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="material"
      selection="multiple"
      v-model:selected="selected"
      @selection="handleSelection"
      :rows-per-page-options="[16]"
      class="frozen-column"
    >
      <template v-slot:header-cell="props">
        <q-th :props="props">
          {{ props.col.label }}
          <span class="material-symbols-rounded fill-1 " style="font-size: 1.2em; ">filter_alt</span>
        </q-th>
      </template>

      <template v-slot:body-cell="props">
        <q-td :props="props" :class="getBadgeColor(props.row.severity)">
          {{props.value}}
        </q-td>
      </template>

      <template v-slot:body-cell-action="{ row }">
        <q-td :props="props">
          <q-btn flat padding="2px 2px" @click="showRowData(row)" :disable='!selected'>
            <span class="material-symbols-rounded text-primary" style="font-size: 1.75em">info</span>
          </q-btn>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="showDetails">
      <q-card>
        <q-card-section>
          <div class="row-details">
            <div>
              <ul class="q-pl-none">
                <li v-for="(value, key) in rowData" :key="key">
                  <span><strong>{{ key }}:</strong> {{ value }}</span>
                </li>
              </ul>
            </div>
          </div>
          <q-card-actions align="right">
            <q-btn outline label="Close" color="primary" v-close-popup />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  props: {
    isRowSelected: Boolean,
    rowDetail: Object,
  },
  data() {
    return {
      showDetails: null,
      columns : [
                {
                  name: 'severity',
                  required: true,
                  label: 'Severity',
                  align: 'left',
                  hidden: true,
                },
                { name: 'action', align: 'center', label: '', field: 'action'},
                { name: 'material', align: 'center', label: 'Material', field: row => row.material, format: val => `${val}`},
                { name: 'shop_order', label: 'Shop order', field: 'shop_order' },
                { name: 'sebango', align: 'center', label: 'Sebango', field: 'sebango'  },
                { name: 'source_location', align: 'center', label: 'Source location', field: 'source_location' },
                { name: 'work_center', label: 'Work center', field: 'work_center' },
                { name: 'seq_Number', label: 'Seq_Number', field: 'seq_Number' },
                { name: 'w_center_desc', label: 'Work center description', field: 'w_center_desc', },
                { name: 'dest_loc', label: 'Destination location', field: 'dest_loc' },
                { name: 'outbound', label: 'Outbound Delivery', field: 'outbound' },
                { name: 'custom', label: 'Custom', field: 'custom' },
                { name: 'custom_status', label: 'Custom status', field: 'custom_status' },
                { name: 'tpa_num', label: 'TPA number', field: 'tpa_num' },
                { name: 'tpa_code', label: 'TPA code', field: 'tpa_code' },
                { name: 'hu_number', label: 'HU number', field: 'hu_number' },
                { name: 'pik_number', label: 'PIK Number', field: 'pik_number' },
                { name: 'rpt', label: 'Real product time', field: 'rpt' },
                { name: 'pick_time', label: 'Picking time', field: 'pick_time' },
                { name: 'dep_time', label: 'Departure time', field: 'dep_time' },
              ],
            rows : [
                {
                  severity: 'Error',
                  material: 2010101247,
                  shop_order: 'MWK_135507112023792373',
                  sebango: 'TNG',
                  source_location: 'JA10',
                  work_center: 'WC135513',
                  seq_Number: '',
                  w_center_desc: '--',
                  dest_loc: 'PR10',
                  outbound: '',
                  custom: '',
                  custom_status: 'PIK_CLOSED',
                  tpa_num: '',
                  tpa_code: '',
                  hu_number: '1355100001253',
                  pik_number:'PWK_071123181401.453_TNG_001',
                  rpt: '2023-11-07T18:17:06',
                  pick_time: '15/02/2023 10:40:53',
                  dep_time: '15/02/2023 10:45:53',

                },
                {
                    severity: 'Error',
                    material: 201103013131,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Error',
                    material: 201031207,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Error',
                    material: 201033486,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Error',
                    material: 2301521207,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Error',
                    material: 2301523507,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Error',
                    material: 2305891207,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Warning',
                    material: 2010521247,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Warning',
                    material: 206843247,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Warning',
                    material: 5896121247,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Warning',
                    material: 5896102147,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Warning',
                    material: 526121247,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Alert info',
                    material: 2010101301,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
  
                  },
                  {
                    severity: 'Alert info',
                    material: 2024311301,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
                  },
                  {
                    severity: 'Alert info',
                    material: 2024254301,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
                  },
                  {
                    severity: 'Alert info',
                    material: 2068421301,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
                  },
                  {
                    severity: 'Alert info',
                    material: 2068421596,
                    shop_order: 'MWK_135507112023792373',
                    sebango: 'TNG',
                    source_location: 'JA10',
                    work_center: 'WC135513',
                    seq_Number: '',
                    w_center_desc: '--',
                    dest_loc: 'PR10',
                    outbound: '',
                    custom: '',
                    custom_status: 'PIK_CLOSED',
                    tpa_num: '',
                    tpa_code: '',
                    hu_number: '1355100001253',
                    pik_number:'PWK_071123181401.453_TNG_001',
                    rpt: '2023-11-07T18:17:06',
                    pick_time: '15/02/2023 10:40:53',
                    dep_time: '15/02/2023 10:45:53',
                  },
            ],
      selected: [],
      rowData: null,
      iCounter: 0,
    };
  },
 methods: {
    getBadgeColor(severity: string) {
      if (severity === 'Error') {
        return 'bg-danger';
      } else if (severity === 'Warning') {
        return 'bg-warning';
      } else if (severity === 'Alert info') {
        return 'yellow-alert';
      }
    },
    getIconName(severity: string) {
      if (severity === 'Error') {
        return 'report';
      } else if (severity === 'Warning') {
        return 'warning';
      } else if (severity === 'Alert info') {
        return 'emergency_home';
      }
    },
    showRowData(row: any) {
      this.rowData = row;
      this.showDetails = true;
    },
  },
  watch: {
    selected: function () {
      this.$emit('update:isRowSelected', this.selected.length > 0);
    },

    selected: function (newSelected: any[]) {
      if (newSelected.length > 0) {
        const rowDetail = newSelected[0];
        this.$emit('row-selected', rowDetail);
      } else {
        const rowDetail = "";
        this.$emit('row-selected', rowDetail);
      }
    },
  },
  setup() {
    return {};
  },
};
</script>
