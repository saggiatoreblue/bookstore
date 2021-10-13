<template>
  <v-navigation-drawer v-model="drawerState" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Vuejs Library
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list dense nav>
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
      >
        <router-link :to="item.path" class="d-flex w-100 text-decoration-none text-dark">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </router-link>

      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
name: "Drawer",
  props: ['drawer'],
  data: () => ({
    items: [
      {title: 'Audit Logs', icon: 'mdi-history', path: '/audit'},
      {title: 'Settings', icon: 'mdi-cog', path: '/settings'},
      {title: 'Users', icon: 'mdi-account-plus', path: '/users'},
      {title: 'Loans', icon: 'mdi-card-account-details-outline', path: '/loans'},
      {title: 'Books', icon: 'mdi-bookshelf', path: '/books'},
    ],

  }),
  computed : {
    drawerState : {
      get() {
        return this.drawer
      },
      set(newValue) {
        return newValue
      }
    }
  }
}
</script>

<style scoped>

</style>
