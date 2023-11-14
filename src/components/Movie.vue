<script>
import { store } from '/store.js'

export default {
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
            store,

        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href
        },
        changeNumToStar() {
            const starVote = this.vote.results
            param = starVote.vote_average
        }
    }
}
</script>

<template>
    <div class="bg-hover" @mouseover="$emit('showinfo', item)">
        <div class="content--movie">
            <figure class="bg-img">
                <img class="" :src="getImagePath(`https://image.tmdb.org/t/p/w342${item.poster_path}`)" alt="#">
                <div class="opacity"></div>
            </figure>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg-hover {
    .bg-img {
        position: relative;
        z-index: 20;

        &:hover {
            .opacity {
                background-color: rgba(0, 0, 0, 1);
                position: absolute;
                inset: 0;
                z-index: 300;
            }
        }
    }
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


.de {
    background-image: url(../img/de.svg);
    background-size: contain;
    width: 100%;
    background-repeat: no-repeat;
}
</style>