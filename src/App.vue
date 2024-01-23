<template>
  <div id="app">
    <header-Component></header-Component>
    <div class="flex main">
      <div class="main_content">
        <div>
          <layout-Component></layout-Component>
        </div>
      </div>
      <sidebar-Component></sidebar-Component>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import {Quasar} from 'quasar';
//import {QGrid} from 'quasar-app-extension-qgrid';
import layoutComponent from './components/Layout.vue';
import headerComponent from './components/Header.vue';
//import sidebarComponent from './components/sideBar.vue';

export default {
  components: {
    'layoutComponent': layoutComponent,
    'headerComponent': headerComponent,
    //'sidebarComponent':sidebarComponent,
  },
  setup() {
    const currentDatetime = new Date();
    const value = ref('test input');
    const datetime24h = ref(currentDatetime);
    const tabExp = ref(false);
    const ntrsVisible = ref(true);

    const products = ref([
      // Your product data here
    ]);

    const loading = ref([false, false, false]);

    const load = (index) => {
      loading.value[index] = true;
      setTimeout(() => (loading.value[index] = false), 1000);
    };

    const tabExpand = () => {
      tabExp.value = !tabExp.value;
    };

    const hideNtrs = () => {
      ntrsVisible.value = !ntrsVisible.value;
    };

    onMounted(() => {
      // Any code you want to run after the component is mounted
    });

    return {
      value,
      datetime24h,
      tabExp,
      ntrsVisible,
      products,
      loading,
      load,
      tabExpand,
      hideNtrs,
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>
