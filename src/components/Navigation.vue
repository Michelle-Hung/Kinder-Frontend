<template>
  <v-card max-width="auto">
    <v-navigation-drawer theme="dark" rail permanent :rail-width="73">
      <v-list-item prepend-icon="mdi:mdi-snapchat"></v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item
          prepend-icon="mdi:mdi-forum"
          value="messages"
          @click="openChatList"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi:mdi-account-multiple-plus-outline"
          value="create"
        ></v-list-item>
        <v-list-item prepend-icon="mdi:mdi-bell" value="notifactation" link>
          <template v-slot:append>
            <v-badge color="red" dot offset-x="20" offset-y="-15"></v-badge>
          </template>
        </v-list-item>
      </v-list>
      <v-list class="fixedBottom">
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
        ></v-list-item>
        <v-list-item prepend-icon="mdi:mdi-cog-outline"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>

  <v-card max-width="auto" v-if="isOpenChatList">
    <v-navigation-drawer theme="dark" :width="450">
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
        <v-list-item height="90" value="1">
          <v-list-item-avatar left>
            <v-avatar size="small">
              <v-img
                src="https://randomuser.me/api/portraits/women/75.jpg"
              ></v-img>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-header>
            <v-list-item-title>Britta</v-list-item-title>
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
        <v-divider />
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navigation",
  setup() {
    const searchText = ref("");
    const search = () => {
      console.log(`search text:: ${searchText.value}`);
    };
    const isOpenChatList = ref(false);
    const openChatList = () => {
      isOpenChatList.value = !isOpenChatList.value;
    };
    return { search, searchText, openChatList, isOpenChatList };
  },
});
</script>
<style>
.fixedBottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
