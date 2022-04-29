import axios from "axios";

type GetRoomsResponse = {
  id: string;
  name: string;
  roomStatus: number;
  roomType: number;
  createTime: Date;
};

export async function GetRoomsAsync(userId: string) {
  try {
    const { data } = await axios.post<GetRoomsResponse>(
      `${process.env.VUE_APP_API_URL}/chat/GetRooms`,
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
    const data: GetRoomsResponse = {
      id: "0",
      name: "",
      roomStatus: 0,
      roomType: 0,
      createTime: new Date(),
    };
    if (axios.isAxiosError(error)) {
      console.error("error message: ", error.message);
    } else {
      console.error("unexpected error: ", error);
    }
    return { data };
  }
}
