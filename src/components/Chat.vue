<template>
  <v-container sm="12" xs="6" fluid>
    <v-card class="mx-auto" color="grey-lighten-4" height="100%">
      <v-card-avatar>
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        {{ myNickName }}
      </v-card-avatar>
      <v-row
        v-for="(chatContent, index) in chatContentList"
        :key="index"
        class="mt-5 pl-3"
        :class="
          myNickName === chatContent.userName ? 'flex-row-reverse pr-3' : ''
        "
      >
        <v-card-avatar>
          <v-avatar size="small">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-card-avatar>
        <v-card>
          <v-card-text>
            {{ chatContent.message }}
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
            color="light-blue-accent-4"
            @click="sendMessage"
            variant="plain"
          />
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { signalrInit } from "../services/SignalR";
import store from "@/store";
export default {
  name: "Chat",
  setup() {
    const { connection, chatContentList } = signalrInit();

    const newMessage = ref("");
    const myNickName = store.getters.userName;
    const sendMessage = () => {
      if (newMessage.value !== "") {
        connection
          .invoke("sendMessageAsync", newMessage.value, myNickName)
          .catch((error) => {
            console.log(error);
          });
        newMessage.value = "";
      }
    };

    const clearMessage = () => {
      newMessage.value = "";
    };

    return {
      newMessage,
      chatContentList,
      myNickName,
      sendMessage,
      clearMessage,
    };
  },
};
</script>

<style></style>
