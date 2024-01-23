<template>
  <div class="topbar standard-header row items-center justify-between md-no-wrap" style="width: 100% !important;">
    <div class="col-auto flex items-center" style="max-width: 250px;">
      <div class="left-menu  center">
        <menu-Component></menu-Component>
      </div>

      <div>
        <img alt="Logo" src="../Forvia_Logo.png" class="topbar-logo"/>
      </div>
    </div>
    <div class='title-board col-auto center' style="max-width: 350px;">
      <p>{{titleBoard}}</p>
    </div>

    <div class="col-xs-12 col-auto datepicker" style="max-width: 210px;">
      <div class="user-profil">
        <div class="cursor-pointer non-selectable btn-profil flex justify-end items-center">
          <div>{{ profile }}</div>
          <q-icon right size="1.7rem" color="grey" name="account_circle" />
          
          <q-menu>
            <q-list dense style="min-width: 200px">
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-icon name="person" />
                </q-item-section>
                <q-item-section>Profil</q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-icon name="power_settings_new" />
                </q-item-section>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
      </div>
      <div class="date_Time">{{date}} {{time}} </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import menuComponent from './mainMenu.vue';

interface Option {
  id: string;
  label: string;
  children?: Option[];
}

export default {
  setup() {
    const titleBoard = ref<string>('Picking Screen');
    const date = ref<string>('');
    const time = ref<string>('');
    const profile = ref<string>('Antoine Desroches');

    // define treeselect options
    const options = ref<Option[]>([
      {
        id: 'a',
        label: 'a',
        children: [
          {
            id: 'aa',
            label: 'aa',
          },

          {
            id: 'ab',
            label: 'ab',
          },
        ],
      },
      {
        id: 'b',
        label: 'b',
      },
      {
        id: 'c',
        label: 'c',
      },
    ]);

    const getTime = () => {
      const today = new Date();
      const hours = today.getHours().toString().padStart(2, '0');
      const minutes = today.getMinutes().toString().padStart(2, '0');
      const seconds = today.getSeconds().toString().padStart(2, '0');

      const theMonth = today.getMonth() + 1;
      const month = theMonth.toString().padStart(2, '0');

      date.value = today.getFullYear() + '/' + month + '/' + today.getDate();
      time.value = hours + ':' + minutes + ':' + seconds;
    };

    onMounted(() => {
      getTime();
      setInterval(getTime, 1000);
    });

    return {
      titleBoard,
      date,
      time,
      profile,
      options,
    };
  },

  components: {
    'menuComponent': menuComponent,
  },
};
</script>
