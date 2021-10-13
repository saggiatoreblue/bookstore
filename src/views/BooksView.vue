<template>
  <div class="books-view">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12"><h5 class="display-5">Books</h5></div>
      </div>
    </div>

    <BookSearch />
    <BookList />
  </div>
</template>

<script>
  import BookSearch from "@/components/Books/BookSearch";
  import BookList from "@/components/Books/BookList";
  export default {
    name: "BooksView",
    components: {BookList, BookSearch}
  }
</script>

<style scoped>

</style>
