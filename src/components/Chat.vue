<template>
  <textarea v-model="messageContent"></textarea>
  <br>
  <input type="text" v-model="newMessage">
  <button @click="sendMessage">send message</button>
</template>

<script>
import { HubConnectionState, HubConnectionBuilder } from "@microsoft/signalr";
import { ref } from "vue";
export default {
  name: "Chat",
  setup() {
    const messageContent = ref("");
    let connection = null;
    if (connection === null) {
      connection = new HubConnectionBuilder()
        .withUrl("https://localhost:5001/ChatHub")
        .build();
    }
    connection.start()
      .then(() => {
        console.log("Connection Success");
        console.log("Listen Started");
        if (connection.state !== HubConnectionState.Connected) {
            // this.connect().finally(() => {
            // this.listen();
            // return;});
            console.log(connection.state);
        }
        connection.on("SendMessage",(res) => {
            console.log(res);
            messageContent.value = res
            
        })
      })
      .catch((err) => {
        console.log(`Connection Error ${err}`);
      });
    connection.onclose(() => {
      console.log("Connection Destroy");
    });

    const newMessage = ref("");
    const sendMessage = () => {
        console.log("click send message button");
        console.log(`newMessage:: ${newMessage.value}` );
        connection.invoke("sendMessageAsync",newMessage.value).catch((error) => {
            console.log(error)
        });
    }
    return { newMessage, messageContent,  sendMessage };
  },
};
</script>

<style></style>
