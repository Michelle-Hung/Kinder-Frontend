import { HubConnectionState, HubConnectionBuilder } from "@microsoft/signalr";
import { reactive } from "vue";
const connection = new HubConnectionBuilder()
  .withUrl("https://localhost:5001/ChatHub")
  .withAutomaticReconnect()
  .build();
export function signalrInit() {
  const messageContent = reactive<Array<string>>([]);
  connection
    .start()
    .then(() => {
      if (connection.state !== HubConnectionState.Connected) {
        console.log(connection.state);
      }
      connection.on("ReceiveMessage", (res: string) => {
        messageContent.push(res);
        console.log(`receive message :: ${JSON.stringify(messageContent)}`);
      });
    })
    .catch((err) => {
      console.log(`Connection Error ${err}`);
    });
  connection.onclose(() => {
    console.log("Connection Destroy");
  });

  return { messageContent, connection };
}
