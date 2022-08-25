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

<script lang="ts" setup>
import { computed } from "vue";
import Navigation from "./components/Navigation.vue";
import { useUserInfoStore } from "./store/UserInfo";
import { storeToRefs } from "pinia";

const userInfoStore = useUserInfoStore();
const { userInfo } = storeToRefs(userInfoStore);
const isLogin = computed(() => {
  return userInfo.value?.isLogin;
});
</script>
