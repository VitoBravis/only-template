import { getComponents, getComponent } from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Swiper, { Navigation } from 'swiper';
import onChange from 'on-change';

import Spoiler from '@/components/ui/spoiler/spoiler';
import MainCounter from '@/components/ui/main-counter/main-counter';
import CarouselItem from '@/components/blocks/carousel-item/carousel-item';

const counterState = {
    value: 0,
};

const mainCounter = new MainCounter(getComponent('main-counter'));

export const watchedCounter = onChange(counterState, (_, value) => {
    mainCounter.value = value as number;
});

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            const spoilers = getComponents('spoiler');

            if (spoilers.length) {
                for (const spoiler of spoilers) {
                    new Spoiler(spoiler);
                }
            }

            new Swiper(".swiper", {
                modules: [Navigation],
                navigation: {
                    nextEl: '.carousel__btn_next',
                    prevEl: '.carousel__btn_prev',
                },
                on: {
                    slideChange: function (swiper) {
                        const counterValue = swiper
                            .$wrapperEl
                            .children()[swiper.activeIndex]
                            .querySelector('.counter__value')
                            ?.textContent;

                        watchedCounter.value = parseInt(counterValue as string);
                    }
                }
            });

            const carouselItems = getComponents('carousel-item');

            if (carouselItems.length) {
                for (const carouselItem of carouselItems) {
                    new CarouselItem(carouselItem);
                }
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() { },

    afterLeave() { },
};
