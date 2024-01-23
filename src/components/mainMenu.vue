<template>
  <q-btn  icon="menu" padding="5px" style="color: #fff; background: #0024d4!important;" @click="clickPannel()">


<q-menu class="menu-container" v-scroll="onScroll"> 
  
  <q-input  filled v-model="search" debounce="500" placeholder="Search" id="search" dense>
      <template v-slot:append>
        <q-icon  name="search" />
      </template>
    </q-input>  

<q-list style="min-width: 380px" class="panel-menu q-mt-md" :class="{'isOpen' : panelClass}" >

  
  
    <q-expansion-item v-model="expanded" expand-separator label="Technical" class="panel-submenu"  dense>
    <q-btn   @click="expanded = !expanded" label="back"  icon="keyboard_arrow_left" color="primary" padding="0.25rem 0.75rem" class="q-mb-md q-ml-sm"/>
         
    

        <q-item clickable >
            <q-item-section>Alert WatchList</q-item-section>
        </q-item>
        <q-item clickable >
            <q-item-section>Error Log</q-item-section>
        </q-item>
        <q-item clickable >
            <q-item-section>KPI Monitor</q-item-section>
        </q-item>
        <q-item clickable >
            <q-item-section>Plant information catalogue</q-item-section>
        </q-item>
    </q-expansion-item>

    <q-expansion-item v-model="expanded1" expand-separator label="9MII Maintenance" class="panel-submenu" dense >
    <q-btn  @click="expanded1 = !expanded1" label="back"  icon="keyboard_arrow_left" color="primary" padding="0.25rem 0.75rem" class="q-mb-md q-ml-sm"/>
      <q-item clickable :class="{'isOpen' : subPanelClass}">
        <q-item-section>Alert WatchList</q-item-section>
      </q-item>
      <q-item clickable :class="{'isOpen' : subPanelClass}">
        <q-item-section>Check printing</q-item-section>
      </q-item>
      <q-item clickable :class="{'isOpen' : subPanelClass}">
        <q-item-section>Patch version</q-item-section>
      </q-item>
    </q-expansion-item>

    <q-expansion-item v-model="expanded2" expand-separator label="Administration" class="panel-submenu" dense>
    <q-btn  @click="expanded2 = !expanded2" label="back"  icon="keyboard_arrow_left" color="primary" padding="0.25rem 0.75rem" class="q-mb-md q-ml-sm"/>

      <q-expansion-item v-model="expanded5" expand-separator label="Initialisation" class="panel-submenu" dense>
      <q-btn  @click="expanded5 = !expanded5" label="back"  icon="keyboard_arrow_left" color="primary" padding="0.25rem 0.75rem" class="q-mb-md q-ml-sm"/>
      
        <q-item clickable :class="{'isOpen' : subPanelClass}">
          <q-item-section>Mass Upload</q-item-section>
        </q-item>
        <q-item clickable :class="{'isOpen' : subPanelClass}">
          <q-item-section>Picture Management</q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item v-model="expanded3" expand-separator label="Log Menu" class="panel-submenu" dense>
      <q-btn  @click="expanded3 = !expanded3" label="back"  icon="keyboard_arrow_left" color="primary" padding="0.25rem 0.75rem" class="q-mb-md q-ml-sm"/>
        <q-item clickable :class="{'isOpen' : subPanelClass}">
          <q-item-section>Error Log</q-item-section>
        </q-item>
        <q-item clickable :class="{'isOpen' : subPanelClass}">
          <q-item-section>Printer Log</q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item v-model="expanded4" expand-separator label="Server" class="panel-submenu" dense>
      <q-btn  @click="expanded4 = !expanded4" label="back"  icon="keyboard_arrow_left" color="primary" padding="0.25rem 0.75rem" class="q-mb-md q-ml-sm"/>
        <q-item clickable :class="{'isOpen' : subPanelClass}">
          <q-item-section>Admin - Custom Attributes Management</q-item-section>
        </q-item>
        <q-item clickable :class="{'isOpen' : subPanelClass}">
          <q-item-section>Line Status Configuration</q-item-section>
        </q-item>
        <q-item clickable :class="{'isOpen' : subPanelClass}">
          <q-item-section>Calendar</q-item-section>
        </q-item>
      </q-expansion-item>
    </q-expansion-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Common</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Reception</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Production</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Transfer</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Shipment</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Quality</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Report</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Dashboard</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Plant maintenance</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Inventory</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Inventory</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Inventory</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Common</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Reception</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Production</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Transfer</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Shipment</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Quality</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Report</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Dashboard</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Plant maintenance</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Inventory</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Inventory</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Inventory</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Common</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Reception</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Production</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Transfer</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Shipment</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Quality</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Report</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Dashboard</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Plant maintenance</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Inventory</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Inventory</q-item-section>
  </q-item>

  <q-item clickable v-close-popup dense>
    <q-item-section>Inventory</q-item-section>
  </q-item>

  <q-expansion-item v-model="expanded6" expand-separator label="9MII Maintenance" class="panel-submenu" dense position="top" @click="scrollTop">
    <q-btn  @click="expanded6 = !expanded6" label="back"  icon="keyboard_arrow_left" color="primary" padding="0.25rem 0.75rem" class="q-mb-md q-ml-sm"/>
      <q-item clickable :class="{'isOpen' : subPanelClass}">
        <q-item-section>Alert WatchList</q-item-section>
      </q-item>
      <q-item clickable :class="{'isOpen' : subPanelClass}">
        <q-item-section>Check printing</q-item-section>
      </q-item>
      <q-item clickable :class="{'isOpen' : subPanelClass}">
        <q-item-section>Patch version</q-item-section>
      </q-item>
    </q-expansion-item>

</q-list>

<div class="inner-menu-btn flex justify-between items-center">
      <q-btn  color="primary" icon="house" size=".7rem" padding=".25rem" v-if="isVisible" @click="scrollWin"/>
      <div>
        <q-btn color="primary" icon="close" size=".7rem" padding=".25rem .75rem" label="close" v-close-popup/>
        <q-btn color="red" icon="power_settings_new" size=".7rem" class="mx-1" label="logout" padding=".25rem  .75rem"/>
      </div>
  </div>
</q-menu>

</q-btn>
</template>



<script lang="ts">
import { ref } from 'vue';

export default {
  data() {
    return {
      panelClass: false,
      subPanelClass: true,
      isVisible: true,
      expanded: false,
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false,
    };
  },
  methods: {
    clickPanel() {
      this.panelClass = true;
      console.log(this.panelClass);
    },
  },
  setup() {
    const scrollTop = () => {
      const mainScrollableContent = document.querySelector('.menu-container') as HTMLElement | null;
      if (mainScrollableContent) {
        mainScrollableContent.scrollTop = 0;
      }
    };

    return { scrollTop };
  },
};
</script>