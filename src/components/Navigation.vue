<template>
  <v-card>
    <v-navigation-drawer
      color="light-blue-accent-4 text-white"
      permanent="100%"
    >
      <v-list nav color="transparent">
        <v-list-item
          prepend-icon="mdi:mdi-email"
          title="Inbox"
          value="inbox"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi:mdi-account-supervisor-circle"
          title="Supervisors"
          value="supervisors"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi:mdi-clock-start"
          title="Clock-in"
          value="clockin"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Navigation",
};
</script>
<style></style>
