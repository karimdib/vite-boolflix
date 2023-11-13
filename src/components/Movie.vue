<script>
export default {
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {

        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="">
        <div class="content--movie">
            <figure>
                <img :src="getImagePath(`https://image.tmdb.org/t/p/w342${item.poster_path}`)" alt="#">
            </figure>
            <div>{{ item.title }}{{ item.name }}</div>
            <div>{{ item.original_title }}{{ item.original_name }}</div>
            <div class="flag" :class="{ 'it': item.original_language === 'it', 'en': item.original_language === 'en' }">
            </div>
            <div>{{ item.vote_average }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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