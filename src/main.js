import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faStar,
    faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons'


library.add(
    faStar,
    faStarHalfStroke,
)

createApp(App).component('awesome-icon', FontAwesomeIcon).mount('#app')
