<template>
    <div class="form-group">
      <q-form @submit.prevent="onSubmit" @reset="onReset">
        <div class="row items-center justify-center">
          <div class="q-gutter-xs col-sm-2">
            <q-input outlined dense class="q-pa-xs" v-model="wkCtr" label="Work center" />
            <q-input outlined dense class="q-pa-xs" v-model="srcLoc" label="Source location" />
          </div>
          <div class="q-gutter-xs col-sm-2">
            <q-input outlined dense class="q-pa-xs" v-model="destLoc" label="Destination location" />
            <q-input outlined dense class="q-pa-xs" v-model="CstStu" label="Custom status" />
          </div>
          <div class="q-gutter-xs col-sm-2">
            <q-input outlined dense class="q-pa-xs" v-model="cstr" label="Customer" />
            <q-input outlined dense class="q-pa-xs" v-model="otbDlr" label="Outbound delivery" />
          </div>
          <div class="q-gutter-xs col-sm-2">
            <q-input outlined dense class="q-pa-xs" v-model="tpaNum" label="TPA number" />
            <q-input outlined dense class="q-pa-xs" v-model="tpaCde" label="TPA code" />
          </div>
          <div class="q-gutter-xs col-sm-2">
            <q-input outlined dense class="q-pa-xs" v-model="pckTime" label="Picking time" />
            <q-select outlined dense class="q-pa-xs" v-model="stdout" :options="options" label="Standout" />
          </div>
          <div class="q-gutter-xs col-sm-2 row justify-center items-center">
            <q-btn label="Search" class="q-py-sm col-sm-10" type="submit" color="primary"></q-btn>
            <q-btn label="Reset" outline class="q-py-sm col-sm-10" type="reset" color="primary"></q-btn>
          </div>
        </div>
      </q-form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const wkCtr = ref('');
      const srcLoc = ref('');
      const destLoc = ref('');
      const CstStu = ref('');
      const cstr = ref('');
      const otbDlr = ref('');
      const tpaNum = ref('');
      const tpaCde = ref('');
      const pckTime = ref('');
      const stdout = ref(null);
      const options = ['All', 'Past', 'Specific', 'Future'];
  
      const onReset = () => {
        wkCtr.value = null;
        srcLoc.value = null;
        destLoc.value = null;
        CstStu.value = null;
        cstr.value = null;
        otbDlr.value = null;
        tpaNum.value = null;
        tpaCde.value = null;
        pckTime.value = null;
        stdout.value = null;
      };
  
      const onSubmit = () => {
        // Add your form submission logic here
        console.log('Form submitted');
      };
  
      return {
        wkCtr,
        srcLoc,
        destLoc,
        CstStu,
        cstr,
        otbDlr,
        tpaNum,
        tpaCde,
        pckTime,
        stdout,
        options,
        onReset,
        onSubmit,
      };
    },
  };
  </script>
  