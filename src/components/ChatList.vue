<template>
  <v-navigation-drawer theme="dark" :width="400">
    <v-list nav>
      <v-list-item>
        <v-list-item-header>
          <v-card>
            <v-row>
              <v-card-title>Recent</v-card-title>
              <v-card-actions class="d-flex justify-end">
                <v-btn icon>
                  <v-icon>mdi:mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-card-actions>
            </v-row>
          </v-card>
          <v-text-field
            label="Search for people or group"
            prepend-inner-icon="mdi:mdi-magnify"
            clearable
            :model="searchText"
            @keypress.enter="search"
            hide-details="auto"
          ></v-text-field>
        </v-list-item-header>
      </v-list-item>
      <v-list-item
        height="90"
        :value="index + 1"
        v-for="(recentChatInfo, index) in recentChatInfos"
        v-bind:key="recentChatInfo.channelId"
      >
        <v-list-item-avatar left>
          <v-avatar size="small">
            <v-img
              src="https://randomuser.me/api/portraits/women/75.jpg"
            ></v-img>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>{{
            recentChatInfo.channelType === "Direct"
              ? recentChatInfo.chatInfo.sendTo.displayName
              : recentChatInfo.channelName
          }}</v-list-item-title>
          <v-list-item-subtitle>{{
            recentChatInfo.chatInfo.message
          }}</v-list-item-subtitle>
        </v-list-item-header>
      </v-list-item>
      <v-divider />
      <!-- <v-list-item height="90" value="2">
        <v-list-item-avatar left>
          <v-avatar size="small">
            <v-img
              src="https://randomuser.me/api/portraits/women/75.jpg"
            ></v-img>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>Nancy</v-list-item-title>
          <v-list-item-subtitle>Hi</v-list-item-subtitle>
        </v-list-item-header>
      </v-list-item>
      <v-divider />
      <v-list-item height="90">
        <v-list-item-avatar left>
          <v-avatar size="small">
            <v-img
              src="https://randomuser.me/api/portraits/women/75.jpg"
            ></v-img>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>Maggie</v-list-item-title>
          <v-list-item-subtitle>Hi</v-list-item-subtitle>
        </v-list-item-header>
      </v-list-item>
      <v-divider /> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { RecentChatListInfo } from "@/models/ChatInfo";
import { useUserInfoStore } from "@/store/UserInfo";
import chatApi from "@/services/Chat";
import { ref } from "@vue/reactivity";
const searchText = ref("");
const search = () => {
  console.log(`search text:: ${searchText.value}`);
};
const userInfoStore = useUserInfoStore();
let recentChatInfos = ref<Array<RecentChatListInfo>>([]);
chatApi.GrtRecentChatList(userInfoStore.$state.userInfo.id).then((response) => {
  recentChatInfos.value = response.data;
});
</script>
<style></style>
