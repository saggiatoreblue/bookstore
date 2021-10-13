import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const api = 'https://us-central1-bookstore-f295f.cloudfunctions.net/webApi/api/v1'
const headers = {
  'Accept' : 'application/json'
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books
    }
  },
  actions: {
    getBooks({ commit }) {
      const config = {
        method: 'get',
        url: api + '/books',
        headers
      }
      axios(config)
          .then(res => {
            if(res.status === 200) {
              commit('SET_BOOKS', res.data)
            }

          })
          .catch((error) => {
            console.error(error)
          })
    }
  },
  modules: {
  },
  getters: {
    allBooks: (state) => state.books

  }
})
