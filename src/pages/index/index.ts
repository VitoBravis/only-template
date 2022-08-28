import { ITransitionData } from '@barba/core/dist/core/src/defs';
import { getComponents, getComponent } from '@/helpers/helpers';
import Swiper, { Keyboard, Navigation } from 'swiper';

import Spoiler from '@/components/ui/spoiler/spoiler';
import MyModal from '@/components/blocks/myModal/myModal';
import Slider from '@/components/ui/slider/slider';
import Counter from '@/components/ui/counter/counter';
import CounterCurrentValue from '@/components/blocks/counterCurrentValue/counterCurrentValue';
import SliderItem from '@/components/blocks/sliderItem/sliderItem';




export const state = {
    valueCounter: 0,
};
export const changeValueCounter = (value: number) => {
    state.valueCounter = value;
};
let modalEl = {} as  MyModal;
let spoilerEl = {} as Spoiler

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            const spoilers = getComponents('spoiler');
            if (spoilers.length) {
                for (const spoiler of spoilers) {
                    spoilerEl =new Spoiler(spoiler);
                }
            }

            const sliderItems = getComponents('sliderItem', next.container);
            if (sliderItems.length) {
                for (const item of sliderItems) {
                    new SliderItem(item);

                }
            }

            new Swiper('.swiper', {
                modules: [Navigation, Keyboard],
                allowTouchMove: false,
                slidesPerView: 1,
                keyboard: {
                    enabled: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    slideChange: function (swiper) {

                        state.valueCounter = Number(swiper.$wrapperEl.children()
                        [swiper.activeIndex]
                            .querySelector('.counter__count')
                            ?.textContent);
                    }
                },

            })

            const counterCurrentValue = getComponents('counterCurrentValue', next.container);
            if (counterCurrentValue.length) {
                for (const item of counterCurrentValue) {
                    new CounterCurrentValue(item)
                }
            }

          

            const modal = getComponent('myModal')
             modalEl =  new MyModal(modal);

            const slider = getComponent('slider')
            new Slider(slider);

            const counter = getComponents('counter');
            for (const item of counter) {
                new Counter(item);

            }

        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {
        modalEl.destroy();
        spoilerEl.destroy();
        

    },

    afterLeave() { },
};
