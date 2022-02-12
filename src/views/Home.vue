<template>
  <!-- <hello-world /> -->
  <Chat/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '../components/HelloWorld.vue';
import Chat from "../components/Chat.vue";

export default defineComponent({
  name: 'Home',

  components: {
    // HelloWorld,
    Chat
  },
});
</script>
