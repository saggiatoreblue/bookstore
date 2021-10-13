<template>
  <v-app id="inspire">
    <Drawer :drawer="drawer" />
    <AppBar @toggle-drawer="toggleDrawer"/>

    <v-main>
      <BreadCrumbs />
      <div class="containe-fluid">
        <div class="row align-items-start p-4">
          <router-view></router-view>
        </div>

      </div>

    </v-main>
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer'
import AppBar from "@/components/AppBar";
import BreadCrumbs from "@/components/BreadCrumbs";
export default {
  components: {
    BreadCrumbs,
    AppBar,
    Drawer,

  },
  data: () => ({
    drawer: true,
  }),

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }

}
</script>
<style lang="scss">
</style>
