<template>
  <v-navigation-drawer theme="dark" :width="400">
    <v-list nav>
      <v-list-item>
        <v-list-item-header>
          <v-card>
            <v-row>
              <v-card-title>Friends</v-card-title>
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
      <v-list-item height="60" value="1">
        <v-list-item-avatar left>
          <v-avatar size="small">
            <v-img
              src="https://randomuser.me/api/portraits/women/75.jpg"
            ></v-img>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>Britta</v-list-item-title>
        </v-list-item-header>
      </v-list-item>
      <v-divider />
      <v-list-item height="60" value="2">
        <v-list-item-avatar left>
          <v-avatar size="small">
            <v-img
              src="https://randomuser.me/api/portraits/women/75.jpg"
            ></v-img>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>Nancy</v-list-item-title>
        </v-list-item-header>
      </v-list-item>
      <v-divider />
      <v-list-item height="60">
        <v-list-item-avatar left>
          <v-avatar size="small">
            <v-img
              src="https://randomuser.me/api/portraits/women/75.jpg"
            ></v-img>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>Maggie</v-list-item-title>
        </v-list-item-header>
      </v-list-item>
      <v-divider />
    </v-list>
  </v-navigation-drawer>
</template>
