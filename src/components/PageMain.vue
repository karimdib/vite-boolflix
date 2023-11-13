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
            movies: store.movies,
            show: false,
            dataCard: {},
        }
    }, methods: {
        infoCard(item) {
            this.show = true
            this.dataCard = item

        },
        removeInfoCard() {
            this.show = false
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
                <div v-for="(movie, i) in store.movies" key="i" class="col-3 ciao">
                    <Movie @showinfo="infoCard" @mouseleave="removeInfoCard" :item="movie" />
                    <div class="info-card">
                        <div class="card__item">{{ dataCard.title }}{{ dataCard.name }}</div>
                        <div class="card__item">{{ dataCard.original_title }}{{ dataCard.original_name }}</div>
                        <div class="card__item">{{ dataCard.vote_average }}</div>
                        <div class="card__item" id="ciao"
                            :class="{ 'it': dataCard.original_language === 'it', 'en': dataCard.original_language === 'en' }">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" >
.ciao {
    position: relative;

    &:hover {

        .info-card {
            display: block;

        }
    }
}

.card__item {
    padding: 5px 0;
    text-align: center;
}

.info-card {
    display: none;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

.it {
    background-image: url(../img/it.svg);
    background-size: contain;
    width: 100%;
    background-repeat: no-repeat;
    height: 20px;
}


.en {
    background-image: url(../img/sh.svg);
    background-size: contain;
    width: 100%;
    height: 20px;
    background-repeat: no-repeat;
}

.blue {
    color: blue;
}
</style>