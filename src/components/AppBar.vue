<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>

    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="w-auto h-auto p-4" tile light icon text v-bind="attrs" v-on="on">
          <v-icon class="pr-3">mdi-account</v-icon>
          <small>saggiatoreblue</small>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="editProfile">
          <v-list-item-title>
            <v-icon class="pr-3">mdi-account-outline</v-icon>
            <small>Edit Profile</small>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title>
            <v-icon class="pr-3">mdi-logout</v-icon>

            <small>Log Out</small>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    editProfile() {
      this.$router.push({name: 'EditProfileView'})
    },
    logout() {

    }
  }
}
</script>

<style scoped>

</style>
