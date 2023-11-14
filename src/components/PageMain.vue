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
        },

    },
    computed: {
        title() {
            if (this.dataCard.title) {
                return this.dataCard.title
            } else {
                return this.dataCard.name
            }
        },
        original() {
            if (this.dataCard.original_title) {
                return this.dataCard.original_title
            } else {
                this.dataCard.original_name
            }
        },
        vote() {
            return Math.ceil(this.dataCard.vote_average / 2)
        }
    }
}
</script>

<template>
    <div class="body">
        <div class="container">
            <div class="row">
                <div v-for="(movie, i) in store.movies" key="i" class="col-3 col-hover">
                    <Movie @showinfo="infoCard" @mouseleave="removeInfoCard" :item="movie" />
                    <div class="info-card">
                        <div class="card__item">{{ title }}</div>
                        <!--<div class="card__item">{{ dataCard.original_title || dataCard.original_name }}</div>-->
                        <div class="card__item">
                            <span>
                                Voto:
                                <template v-for="n in 5" :key="n">
                                    <awesome-icon class="icon" v-if="n <= vote" icon="star" />
                                </template>
                            </span>
                        </div>
                        <span>
                            Overview:
                            <div class=" card__item">{{ dataCard.overview }}</div>
                        </span>
                        <div class="card__item" id="language">
                            <span>Language:
                                <div
                                    :class="{ 'it': dataCard.original_language === 'it', 'en': dataCard.original_language === 'en' }">
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" >
.col-hover {
    position: relative;

    &:hover {

        .info-card {
            display: block;
            z-index: 100;
            padding: 10px 0;
        }
    }
}

.card__item {
    padding: 4px 0;
    font-size: 12px;
}

.info-card {
    padding: 20px 0;
    display: none;
    position: absolute;
    top: 50%;
    left: 40%;
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


.icon {
    color: yellow;
}
</style>