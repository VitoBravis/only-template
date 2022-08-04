import { getComponent, getComponents } from './../../app/js/helpers/helpers';
import Spoiler from '@/components/blocks/spoiler/spoiler';
import { ITransitionData } from '@barba/core/dist/core/src/defs';
import CounterContainer from '@/components/blocks/counter-container/counter-container';
import Swiper, { Navigation, Pagination } from 'swiper';
import Modal from '@/components/blocks/modal/modal';



export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {  

            // Инициализация компонентов
            if (getComponent('spoiler', next.container).component) {
                getComponents('spoiler', next.container).map((item) => new Spoiler(item));
            }
            if (getComponent('counter-container', next.container).component) {
                getComponents('counter-container', next.container).map((item) => new CounterContainer(item));
            }
            if (getComponent('modal', next.container).component) {
                getComponents('modal', next.container).map((item) => new Modal(item));
            }
            
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],    
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            renderBullet: function (index, className) {
                 return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    })  
    
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};