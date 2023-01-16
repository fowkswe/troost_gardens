import Vue from 'vue';
import { Swiper } from 'swiper';
// console.log("SWIPER IS", Swiper);
console.log('swiper inint ');
const swiper = {
    install(Vue, options) {
        Vue.prototype.$swiper = Swiper;
        // Vue.prototype.$swiperModules = {
        //     // Navigation,
        //     // Pagination,
        //     // Scrollbar
        // };
    }
};

Vue.use(swiper);
