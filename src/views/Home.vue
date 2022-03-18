<template>
  <Login v-if="!isLogin" />
  <Chat v-else-if="isLogin" />
</template>

<script lang="ts">
import { computed } from "vue";
import store from "@/store";
import Chat from "../components/Chat.vue";
import Login from "../components/Login.vue";

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
export default {
  name: "Home",
  components: {
    Chat,
    Login,
  },
  setup() {
    const isLogin = computed(() => {
      return store.getters.isLogin;
    });
    return { isLogin };
  },
};
</script>
