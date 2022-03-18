<template>
  <v-container sm="12" xs="6">
    <v-card height="100%">
      <v-card-header>
        <v-card-header-text>
          <v-card-title class="justify-center"> Login </v-card-title>
        </v-card-header-text>
      </v-card-header>
      <v-card-text>
        <v-form>
          <v-text-field v-model="userName" label="Name" required></v-text-field>
          <v-card-actions class="justify-center">
            <v-btn color="light-blue-accent-4 text-white" @click="submit"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
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
<style></style>
