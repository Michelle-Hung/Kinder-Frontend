<template>
  <v-col cols="12" sm="6">
    <v-card class="mx-auto" max-width="600">
      <v-container>
        <v-card-title>
          <v-card-avatar>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            John
          </v-card-avatar>
        </v-card-title>
        <v-item-group>
          <v-row v-for="(message, index) in messageContent" :key="index">
            <v-item>
              <v-col cols="12" sm="6">
                <v-avatar size="small">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
                <v-card class="d-inline-flex pa-2" height="100%" width="100%">
                  <v-card-text>
                    {{ message }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-item>
          </v-row>
          <v-item>
            <v-card-actions>
              <v-row>
                <v-text-field
                  v-model="newMessage"
                  label="Message"
                  placeholder="Type a message here"
                  :type="text"
                  append-icon="mdi-send"
                ></v-text-field>
                <v-btn icon @click="sendMessage">
                  <v-icon color="light-blue lighten-3">mdi-send</v-icon>
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-item>
        </v-item-group>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
import { HubConnectionState, HubConnectionBuilder } from "@microsoft/signalr";
import { ref } from "vue";
export default {
  name: "Chat",
  setup() {
    const messageContent = ref([]);
    let connection = null;
    if (connection === null) {
      connection = new HubConnectionBuilder()
        .withUrl("https://localhost:5001/ChatHub")
        .build();
    }
    connection
      .start()
      .then(() => {
        if (connection.state !== HubConnectionState.Connected) {
          // this.connect().finally(() => {
          // this.listen();
          // return;});
          console.log(connection.state);
        }
        connection.on("SendMessage", (res) => {
          messageContent.value.push(res);
          console.log(
            `receive message :: ${JSON.stringify(messageContent.value)}`
          );
        });
      })
      .catch((err) => {
        console.log(`Connection Error ${err}`);
      });
    connection.onclose(() => {
      console.log("Connection Destroy");
    });

    const newMessage = ref("");
    const sendMessage = () => {
      connection.invoke("sendMessageAsync", newMessage.value).catch((error) => {
        console.log(error);
      });
    };
    return { newMessage, messageContent, sendMessage };
  },
};
</script>

<style></style>
