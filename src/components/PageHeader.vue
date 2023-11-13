<script>
import { store } from '/store.js'
export default {
    data() {
        return {
            store,
        }
    }, mounted() {
    }
}
</script>

<template>
    <div>
        <header>
            <div class="input-container">
                <input v-model="store.searchText" class="input__bar" type="text" placeholder="Cerca un film">
                <button class="input__button" @click="$emit('button-clicked')"> Cerca </button>
            </div>
        </header>
    </div>
</template>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: center;
    background-color: #27292b;
    color: white;
    padding: 20px;

    .input-container {
        display: flex;
        flex-wrap: nowrap;

        .input__bar {
            padding: 5px 3px;
        }

        button {
            margin-left: 10px;
            padding: 3px;
        }
    }
}
</style>