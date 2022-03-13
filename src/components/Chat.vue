<template>
  <v-container>
    <v-col cols="12" sm="12" xs="6">
      <v-card class="mx-auto" color="#F5F5F5">
        <v-card-avatar>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          {{myNickName}}
        </v-card-avatar>
        <v-row
          v-for="(chatContent, index) in chatContentList"
          :key="index"
          class="mt-5 pl-3"
          :class="myNickName === chatContent.userName ? 'flex-row-reverse pr-3' : ''"
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
import store from '@/store';
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

    return { newMessage, chatContentList, myNickName, sendMessage, clearMessage };
  },
};
</script>

<style></style>
