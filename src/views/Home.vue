<template>
  <Login v-if="!isLogin" />
  <Chat v-else-if="isLogin" />
</template>

<script lang="ts" setup>
import { computed, defineComponent } from "vue";
import Chat from "../components/Chat.vue";
import Login from "../components/Login.vue";
import { useUserInfoStore } from "@/store/UserInfo";
import { storeToRefs } from "pinia";

// @Options({
//   components: {
//     HelloWorld,
//     Chat,
//     Login,
//   },
// })
// export default class Home extends Vue {
//   setup() {

//     const isLogin = computed(() => {
//       return store.getters.isLogin});
//     return { isLogin }
//   }
// }
const userInfoStore = useUserInfoStore();
const { userInfo } = storeToRefs(userInfoStore);

const isLogin = computed(() => {
  return userInfo.value?.isLogin;
});
</script>
