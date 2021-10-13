<template>
  <div class="d-flex p-4 align-items-center">
    Home > <v-breadcrumbs
      :items="crumbs"
      divider=">"
      class="p-2 text-capitalize"
  ></v-breadcrumbs>
  </div>

</template>

<script>
export default {
  name: "BreadCrumbs",

  computed: {
    crumbs() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
              ? "/" + breadcrumbArray[idx - 1].path + "/" + path
              : "/" + path,
          text: this.$route.matched[idx].meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, [])
      return breadcrumbs;

    }
  }

}
</script>

<style scoped>

</style>
