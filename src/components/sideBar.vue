<template>
   <div class="side_bar" >



<div class="topsidebar-icon ">
      
      <q-btn  flat round padding="2px" icon="settings" size="1.7em" color="primary" @click="prompt = true" />

      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Setting</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-toggle v-model="valueQ" label="Quality" top-label  /><br>
            <q-toggle v-model="valueE" label="Non efficiency" top-label  />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="SET" v-close-popup @click="validSetting()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div> 



        <a class="arrow_btn" ><span class="icon_menu material-symbols-rounded" @click="scrollUp">expand_less</span></a>        
<div id="sidbar-menu-container" ref="mainScrollableContent">
  <div class="center  sidebar-item"><a @click='hideNtrs'><img src="" class="svg_icon_menu"></a></div>
  <div class="center  sidebar-item"><a ><img src="" class="svg_icon_menu"></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">query_stats</span></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">pending_actions</span></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">inventory</span></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">construction</span></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">download</span></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">package_2</span></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">polyline</span></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">home_pin</span></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">barcode_scanner</span></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">print</span></a></div>
  <div class="center  sidebar-item"><a ><span class="icon_menu material-symbols-rounded">settings</span></a></div>
</div>
<a class="arrow_btn" ><span class="icon_menu material-symbols-rounded" @click="scrollDown">expand_more</span></a>

  

</div>

</template>

<script>
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar'; // If necessary
import { setValueQ, setValueE, getValueE, getValueQ } from '../service/store.js';

export default {
  data() {
    return {
      isSidebarHide: false,
      mainScrollableContent: null,
      visible: false,
    };
  },
  mounted() {
    this.mainScrollableContent = this.$refs.mainScrollableContent;
  },
  methods: {
    hideSidebar() {
      this.isSidebarHide = !this.isSidebarHide;
    },
    scrollDown() {
      this.scrollWithOffset(200);
    },
    scrollUp() {
      this.scrollWithOffset(-200);
    },
    scrollWithOffset(offset) {
      const currentScrollTop = this.mainScrollableContent.scrollTop;
      const targetScrollTop = currentScrollTop + offset;

      this.animateScroll(currentScrollTop, targetScrollTop, 500);
    },
    animateScroll(start, end, duration) {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < duration) {
          const easing = Math.sin((elapsedTime / duration) * (Math.PI / 2));
          this.mainScrollableContent.scrollTop = start + (end - start) * easing;
          requestAnimationFrame(animate);
        } else {
          this.mainScrollableContent.scrollTop = end;
        }
      };

      requestAnimationFrame(animate);
    },
    validSetting() {
      setValueQ(this.valueQ);
      setValueE(this.valueE);
    },
  },
  setup() {
    const quasar = useQuasar();
    const mainScrollableContent = ref(null);
    const prompt = ref(false);
    const valueQ = ref(true);
    const valueE = ref(true);

    // Attach the onMounted lifecycle hook to access the DOM element after rendering
    onMounted(() => {
      mainScrollableContent.value = quasar.$refs.mainScrollableContent;
    });

    return {
      mainScrollableContent,
      prompt,
      valueQ,
      valueE,
      sidebarItems: [
        { img: 'stop.png', href: '#' },
        { img: 'nq.png', href: '#' },
        { icon: 'query_stats', href: '#' },
        { icon: 'pending_actions', href: '#' },
        { icon: 'inventory', href: '#' },
        // Add other sidebar items as needed
      ],
    };
  },
};
</script>