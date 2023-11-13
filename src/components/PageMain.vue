<script>
import Movie from './Movie.vue';
import { store } from '/store';
export default {
    components: {
        Movie,
    },
    data() {
        return {
            store,
            movies: store.movies
        }
    },
    mounted() {
        console.log(this.movies)
    }
}
</script>

<template>
    <div>
        <div class="container">
            <div class="row">
                <div v-for="(movie, i) in store.movies" key="i" class="col-3">
                    <Movie :item="movie" />
                </div>
                <div class=" it "><img src="" alt=""></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" >
.it {
    background-image: url(../img/it.svg);
    background-size: contain;
    width: 100%;
    background-repeat: no-repeat;
}

.blue {
    color: blue;
}
</style>