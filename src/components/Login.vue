<template>
  <v-container sm="12" xs="6" fluid>
    <v-card height="100%">
      <v-card-header>
        <v-card-header-text>
          <v-card-title class="justify-center"> Welcom </v-card-title>
        </v-card-header-text>
      </v-card-header>
      <v-card-text>
        <v-form @submit="submit">
          <v-text-field v-model="userName" label="Name" required></v-text-field>
          <v-card-actions class="justify-center">
            <v-btn color="light-blue-accent-4 text-white" type="submit"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { defineComponent, ref } from "vue";
import store from "@/store";
export default defineComponent({
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
});
</script>
<style></style>
