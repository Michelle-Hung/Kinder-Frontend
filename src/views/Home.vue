<template>
  <Chat />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "../components/HelloWorld.vue";
import Chat from "../components/Chat.vue";

@Options({
  components: {
    HelloWorld,
    Chat,
  },
})
export default class Home extends Vue {}
</script>
