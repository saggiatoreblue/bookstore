<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left"></th>
              <th class="text-left">ISBN</th>
              <th class="text-left">Title</th>
              <th class="text-left">Author</th>
              <th class="text-left">Status</th>
              <th class="text-left"></th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="book in books"
                :key="book.data.id"
            >
              <td><v-checkbox></v-checkbox></td>
              <td>{{ book.data.isbn }}</td>
              <td>{{ book.data.title }}</td>
              <td>{{ book.data.author }}</td>
              <td align="center"><span class="p-2 d-block w-100 text-light" :class="book.data.status ? 'bg-success' : 'bg-danger'">{{ bookStatus(book) }}</span></td>
              <td align="right">
                <v-btn plain>View</v-btn>
                <v-btn plain class="ml-2">Edit</v-btn>
                <v-btn plain class="ml-2">Delete</v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-pagination
            class="mt-5"
            :length="6"
        ></v-pagination>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "BookList",

  computed: {
    books() {
      return this.$store.getters.allBooks
    }
  },

  mounted() {
    this.$store.dispatch('getBooks')
  },

  methods: {
    bookStatus(book) {
      return book.status ? 'Available' : 'Unavailable'
    }
  }
}
</script>

<style scoped>

</style>
