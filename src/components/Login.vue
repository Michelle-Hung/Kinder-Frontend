<template>
  <v-form>
    <v-text-field v-model="userName" label="Name" required></v-text-field>
    <v-btn color="light-blue lighten-3" @click="submit">Submit</v-btn>
  </v-form>
</template>

<script>
import { ref } from "vue";
import store from "@/store";
export default {
  name: "Login",
  setup() {
    const userName = ref("");

    const submit = () => {
      if (userName.value.length >= 1) {
        store.dispatch("setUserName", userName.value);
      }
    };
    return { userName, submit };
  },
};
</script>

<style>
</style>