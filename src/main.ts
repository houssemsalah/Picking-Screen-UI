import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
//import {QGrid} from 'quasar-app-extension-qgrid';
//import quasarUserOptions from './quasar-user-options

const app = createApp(App)
app.use(Quasar, { config: {} });
//app.use(QGrid);
app.mount('#app');
