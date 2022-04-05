<template>
  <v-app>
    <v-layout full-height>
      <Navigation v-if="isLogin" />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import store from "./store";
import Navigation from "./components/Navigation.vue";

export default defineComponent({
  name: "App",
  components: {
    Navigation,
  },
  setup() {
    const isLogin = computed(() => {
      return store.getters.userInfo.isLogin;
    });
    return { isLogin };
  },
});
</script>
