<template>
  <v-card>
    <v-navigation-drawer theme="dark" rail permanent>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi:mdi-view-dashboard"
          value="dashboard"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi:mdi-forum"
          value="messages"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer theme="dark" permanent :width="450">
      <v-list nav>
        <v-list-item>
          <v-list-item-header>
            <v-card>
              <v-row>
                <v-card-title>Chats</v-card-title>
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
              v-model="searchText"
              @keypress.enter="search"
            ></v-text-field>
          </v-list-item-header>
        </v-list-item>
        <v-list-item height="90" border value="1">
          <v-list-item-avatar left>
            <v-avatar size="small">
              <v-img
                src="https://randomuser.me/api/portraits/women/75.jpg"
              ></v-img>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-header>
            <v-list-item-title>Michelle</v-list-item-title>
            <v-list-item-subtitle>Hi</v-list-item-subtitle>
          </v-list-item-header>
        </v-list-item>
        <v-list-item height="90" border>
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
        <v-list-item height="90" border>
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
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Navigation",
  setup() {
    const searchText = ref("");
    const search = () => {
      console.log(`search text:: ${searchText.value}`);
    };
    return { search, searchText };
  },
};
</script>
<style></style>
