<template>
  <v-container>
    <v-col cols="12" sm="12" xs="6">
      <v-card class="mx-auto" color="#F5F5F5">
        <v-card-avatar>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          John
        </v-card-avatar>
        <v-row
          v-for="(message, index) in messageContent"
          :key="index"
          class="mt-5 pl-3"
        >
          <v-card-avatar>
            <v-avatar size="small">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-card-avatar>
          <v-card>
            <v-card-text>
              {{ message }}
            </v-card-text>
          </v-card>
        </v-row>
        <v-card-actions>
          <v-row class="mt-5 px-2">
            <v-text-field
              v-model="newMessage"
              variant="filled"
              label="Message"
              placeholder="Type a message here"
              type="text"
              append-icon="mdi:mdi-send"
              clearable
              @click:clear="clearMessage"
            ></v-text-field>
            <v-btn
              icon="mdi:mdi-send"
              color="light-blue lighten-3"
              @click="sendMessage"
              variant="plain"
            />
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { signalrInit } from "../services/SignalR";
export default {
  name: "Chat",
  setup() {
    const { connection, messageContent } = signalrInit();

    const newMessage = ref("");
    const sendMessage = () => {
      connection.invoke("sendMessageAsync", newMessage.value).catch((error) => {
        console.log(error);
      });
      newMessage.value = "";
    };

    const clearMessage = () => {
      newMessage.value = "";
    };
    return { newMessage, messageContent, sendMessage, clearMessage };
  },
};
</script>

<style></style>
