import { ITransitionData } from '@barba/core/dist/core/src/defs';
import { getComponents, getComponent } from '@/helpers/helpers';
import Swiper, { Navigation } from 'swiper';

import Spoiler from '@/components/ui/spoiler/spoiler';
import MyModal from '@/components/blocks/myModal/myModal';
import Slider from '@/components/ui/slider/slider';
import Counter from '@/components/ui/counter/counter';
import SliderItem from '@/components/blocks/slider-item/slider-item';
import CounterCurrentValue from '@/components/blocks/counterCurrentValue/counterCurrentValue';



export const state = {
    valueCounter: 0,
};
export const changeValueCounter = (value: number) => {
    state.valueCounter = value;
};

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


            const sliderItems = getComponents('slider-item', next.container);

            if (sliderItems.length) {
                for (const item of sliderItems) {
                    new SliderItem(item);

                }
            }



            new Swiper(".swiper", {
                allowTouchMove: false,
                modules: [Navigation],
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                on: {
                    slideChange: function (swiper) {

                        const counterCurrentValue = swiper.$wrapperEl.children()[swiper.activeIndex].querySelector('.counter__count')?.textContent;


                    }
                }


            })
            const counterCurrentValue = getComponents('counterCurrentValue', next.container);

            if(counterCurrentValue.length) {
                for(const item of counterCurrentValue){
                    new CounterCurrentValue(item)
                }
            }


            const modals = getComponents('myModal', next.container)
            if (modals.length) {

                for (const item of modals) {
                    new MyModal(item);
                }
            }

            new Slider(getComponent('slider'));



            const counter = getComponents('counter');


            for (const item of counter) {
                new Counter(item);

            }

        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() { },
};
