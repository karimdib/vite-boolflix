<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import Movie from './components/Movie.vue'
import { store } from '/store.js'
import axios from 'axios'


export default {
  components: {
    Movie,
    PageHeader,
    PageMain,
  },
  data() {
    return {
      store,
      API_KEY: '38adda09313ed2e9d5538e04c3720fa5',
      query: store.searchText,
    }
  },
  methods: {
    callAPi() {
      axios
        .get('https://api.themoviedb.org/3/search/multi', {
          params: {
            api_key: this.API_KEY,
            query: this.store.searchText,
            language: 'it_IT',
          }
        })
        .then(reply => {
          const movie = reply.data.results
          store.movies = movie

        })
      console.log(this.store.searchText)
    }
  },
  created() {
    this.callAPi
  }
}

</script>

<template>
  <div>
    <PageHeader @button-clicked="callAPi" />
    <PageMain />
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
