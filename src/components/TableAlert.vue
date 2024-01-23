<template>
    <div class="alert_tab hide-col">
      <q-table
        flat
        bordered
        :rows="rows"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[10]"
      >
        <template v-slot:body-cell="props">
          <q-td :props="props" :class="getBadgeColor(props.row.severity)">
            {{ props.value }}
          </q-td>
        </template>
        <template v-slot:body-cell-tools="props">
          <q-td :props="props">
            <q-btn flat padding="5px 5px">
              <span class="material-symbols-rounded text-primary" style="font-size: 2em">expand_less</span>
            </q-btn>
            <q-checkbox v-model="check" val="teal" color="teal" />
            <q-badge rounded color="blue" />
          </q-td>
        </template>
        <template #no-data>
          <div class="center">no alert Kanbans available!</div>
        </template>
      </q-table>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    data() {
      return {
        columns: [
          {
            name: 'severity',
            required: true,
            label: 'Severity',
            align: 'left',
            field: (row) => row.severity,
            format: (val) => `${val}`,
          },
          { name: 'from', label: 'From', align: 'center', field: 'from' },
          { name: 'to', align: 'center', label: 'To', field: 'to', sortable: true },
          { name: 'reference', align: 'center', label: 'Reference', field: 'reference', sortable: true },
          { name: 'order', label: 'Order', field: 'order', sortable: true },
          { name: 'pick_time', label: 'Picking time', field: 'pick_time' },
          { name: 'time_cofm', label: 'Time confirmed', field: 'time_cofm' },
          { name: 'line', label: 'Line', field: 'line' },
          { name: 'tools', label: 'Tools', field: 'tools' },
        ],
        rows: [
                {
                    severity: 'Error',
                    from: 'PR10',
                    to: 'OU11',
                    reference: '316446201x',
                    order: 'W231018000144',
                    pick_time: '06.11.2023 16:18',
                    time_cofm: '',
                    line: 'Daimler L3',
                },
                {
                    severity: 'Error',
                    from: 'PR10',
                    to: 'OU11',
                    reference: '316446201x',
                    order: 'W231018000144',
                    pick_time: '06.11.2023 16:18',
                    time_cofm: '',
                    line: 'Daimler L3',
                },
                {
                    severity: 'Error',
                    from: 'PR10',
                    to: 'OU11',
                    reference: '316446201x',
                    order: 'W231018000144',
                    pick_time: '06.11.2023 16:18',
                    time_cofm: '',
                    line: 'Daimler L3',
                },
                {
                    severity: 'Error',
                    from: 'PR10',
                    to: 'OU11',
                    reference: '316446201x',
                    order: 'W231018000144',
                    pick_time: '06.11.2023 17:07',
                    time_cofm: '',
                    line: 'Daimler L3',
                },
                {
                    severity: 'Error',
                    from: 'PR10',
                    to: 'OU11',
                    reference: '316446201x',
                    order: 'W231018000144',
                    pick_time: '06.11.2023 17:57',
                    time_cofm: '',
                    line: 'Daimler L3',
                },
                {
                    severity: 'Warning',
                    from: 'PR10',
                    to: 'OU11',
                    reference: '316446201x',
                    order: 'W231018000144',
                    pick_time: '06.11.2023 19:17',
                    time_cofm: '',
                    line: 'Daimler L3',
                },
                {
                    severity: 'Warning',
                    from: 'PR10',
                    to: 'OU11',
                    reference: '316446201x',
                    order: 'W231018000144',
                    pick_time: '06.11.2023 19:17',
                    time_cofm: '',
                    line: 'Daimler L3',
                },
                {
                    severity: 'Warning',
                    from: 'PR10',
                    to: 'OU11',
                    reference: '316446201x',
                    order: 'W231018000144',
                    pick_time: '06.11.2023 19:17',
                    time_cofm: '',
                    line: 'Daimler L3',
                },
                {
                    severity: 'Alert info',
                    from: 'PR10',
                    to: 'OU11',
                    reference: '316446201x',
                    order: 'W231018000144',
                    pick_time: '06.11.2023 20:56',
                    time_cofm: '',
                    line: 'Daimler L3',
                },
                {
                    severity: 'Alert info',
                    from: 'PR10',
                    to: 'OU11',
                    reference: '316446201x',
                    order: 'W231018000144',
                    pick_time: '06.11.2023 20:56',
                    time_cofm: '',
                    line: 'Daimler L3',
                },
            ],
      };
    },
    methods: {
      getBadgeColor(severity) {
        if (severity === 'Error') {
          return 'bg-danger';
        } else if (severity === 'Warning') {
          return 'bg-warning';
        } else if (severity === 'Alert info') {
          return 'yellow-alert';
        }
      },
      getIconName(severity) {
        if (severity === 'Error') {
          return 'report';
        } else if (severity === 'Warning') {
          return 'warning';
        } else if (severity === 'Alert info') {
          return 'emergency_home';
        }
      },
    },
    setup() {
      return {
        check: ref(),
      };
    },
  };
  </script>
  
  <style>
    /* Add your custom styles here */
  </style>
  