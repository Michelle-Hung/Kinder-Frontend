import { HubConnectionState, HubConnectionBuilder, HubConnection } from "@microsoft/signalr";
import { ref } from "vue";
const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:5001/ChatHub")
        .withAutomaticReconnect()
        .build();
export function signalrInit() {
    // const connection = new HubConnectionBuilder()
    //     .withUrl("https://localhost:5001/ChatHub")
    //     .withAutomaticReconnect()
    //     .build();
    const messageContent = ref<Array<string>>([]);
    connection
      .start()
      .then(() => {
        if (connection.state !== HubConnectionState.Connected) {
          // this.connect().finally(() => {
          // this.listen();
          // return;});
          console.log(connection.state);
        }
        connection.on("ReceiveMessage", (res: string) => {
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
    
    return { messageContent, connection }
}