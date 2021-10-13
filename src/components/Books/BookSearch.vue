<template>
  <form action="" class="container-fluid">
    <div class="row">
      <div class="col-6">
        <label for="isbn">ISBN</label>
        <input type="text" id="isbn" class="form-control">
      </div>
      <div class="col-6">
        <label for="title">Title</label>
        <input type="text" id="title" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <label for="author">Author</label>
        <input type="text" id="author" class="form-control">
      </div>
      <div class="col-6">
        <label for="status">Status</label>
        <input type="text" id="status" class="form-control">
      </div>
    </div>
    <div class="row just">
      <div class="col-12 justify-content-end d-flex">
        <v-btn color="primary">
          <v-icon left dark>mdi-magnify</v-icon>
          Search
        </v-btn>
        <v-btn class="ml-2" >
          <v-icon left dark>mdi-refresh</v-icon>
          Reset
        </v-btn>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "BookSearch"
}
</script>

<style scoped>

</style>
