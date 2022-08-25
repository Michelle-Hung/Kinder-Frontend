import { UserInfo } from "@/models/UserInfo";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserInfoStore = defineStore("userInfo", () => {
  const userInfo = ref<UserInfo>({
    id: "0",
    name: "anonymous",
    isLogin: false,
  });
  function setUserInfo(data: UserInfo) {
    userInfo.value = data;
  }

  return { userInfo, setUserInfo };
});
