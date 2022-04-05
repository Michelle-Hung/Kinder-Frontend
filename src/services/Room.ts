import axios from "axios";

type GetRoomsResponse = {
    id:string,
    name: string,
    status: number,
    type: number,
    createTime: Date
};

export async function GetRoomsAsync(userId: string) {
  try {
    const { data } = await axios.post<GetRoomsResponse>(
      "https://localhost:5001/chat/GetRooms",
      { userId: userId },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return { data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("error message: ", error.message);
    } else {
      console.error("unexpected error: ", error);
    }
  }
}
