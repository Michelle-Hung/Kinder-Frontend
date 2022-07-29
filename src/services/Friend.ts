import axios, { AxiosPromise } from "axios";

export default {
  GetContacts(userId: string){
    return axios.get(
      `${process.env.VUE_APP_API_URL}/chat/GetContacts`, {params: {userId: userId}}
    );
  }
}
  // try {
  //   const friendContacts = axios.get<GetContactsResponse>(
  //     `${process.env.VUE_APP_API_URL}/chat/GetContacts`, {params: {userId: userId}}
  //   ).then((response) => {
  //     return response.data.friends;
  //   });

  //   return { friendContacts };
  // } catch (error) {
  //   const friendContacts: GetContactsResponse = {
  //     friends:[],
  //   };
  //   if (axios.isAxiosError(error)) {
  //     console.error("error message: ", error.message);
  //   } else {
  //     console.error("unexpected error: ", error);
  //   }
  //   return { friendContacts };
  // }
